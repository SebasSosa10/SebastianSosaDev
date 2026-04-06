import { DOCUMENT, isPlatformBrowser, NgClass } from '@angular/common';
import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  NgZone,
  PLATFORM_ID,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, merge } from 'rxjs';
import { site } from '../../data/site';
import { I18nPipe } from '../../pipes/i18n.pipe';
import { LocaleService } from '../../services/locale.service';
import { ScrollNavService } from '../../services/scroll-nav.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [NgClass, I18nPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private readonly scrollNav = inject(ScrollNavService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);
  private readonly document = inject(DOCUMENT);
  readonly theme = inject(ThemeService);
  readonly locale = inject(LocaleService);

  readonly toolbarRef = viewChild<ElementRef<HTMLElement>>('toolbar');

  readonly site = site;
  readonly menuOpen = signal(false);

  /** Altura medida de la primera fila del header (sin menú móvil) */
  readonly toolbarHeightPx = signal(60);

  /** Alto fijo de la franja de progreso (debe coincidir con el template) */
  readonly progressBarOuterPx = 8;

  /** 0–100: scroll hasta que el pie (#site-footer) quede “completado” */
  readonly scrollProgress = signal(0);
  readonly scrollProgressRounded = computed(() =>
    Math.round(this.scrollProgress()),
  );
  readonly scrollProgressWidth = computed(
    () => `${this.scrollProgress()}%`,
  );

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }
      const win = globalThis.window;
      merge(
        fromEvent(win, 'scroll', { passive: true, capture: true }),
        fromEvent(win, 'resize', { passive: true }),
      )
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => this.updateScrollProgress());

      const initLayout = (): void => {
        this.initToolbarResizeObserver();
        this.updateScrollProgress();
      };
      requestAnimationFrame(() => requestAnimationFrame(initLayout));
    });
  }

  private initToolbarResizeObserver(): void {
    const el = this.toolbarRef()?.nativeElement;
    if (!el) {
      this.ngZone.run(() => this.applyRootHeaderOffset());
      return;
    }
    const apply = (): void => {
      const h = Math.round(el.getBoundingClientRect().height);
      this.ngZone.run(() => {
        this.toolbarHeightPx.set(h);
        this.applyRootHeaderOffset();
      });
    };
    apply();
    const ro = new ResizeObserver(() => apply());
    ro.observe(el);
    this.destroyRef.onDestroy(() => ro.disconnect());
  }

  /** Espacio bajo header+barra para `main` y anclas (`scroll-padding`) */
  private applyRootHeaderOffset(): void {
    const root = this.document.documentElement;
    const total = this.toolbarHeightPx() + this.progressBarOuterPx;
    root.style.setProperty('--app-header-offset', `${total}px`);
  }

  private updateScrollProgress(): void {
    const win = globalThis.window;
    const root = win.document.documentElement;
    const scrollTop = win.scrollY ?? root.scrollTop;
    const viewport = win.innerHeight;

    const footer = win.document.getElementById('site-footer');
    let scrollEnd: number;
    if (footer) {
      const footerBottom = footer.offsetTop + footer.offsetHeight;
      scrollEnd = Math.max(0, footerBottom - viewport);
    } else {
      const body = win.document.body;
      const totalHeight = Math.max(
        root.scrollHeight,
        body.scrollHeight,
        root.offsetHeight,
        body.offsetHeight,
      );
      scrollEnd = Math.max(0, totalHeight - viewport);
    }

    const ratio = scrollEnd > 0 ? scrollTop / scrollEnd : 1;
    const pct = Math.min(100, Math.max(0, ratio * 100));
    const rounded = Math.round(pct * 100) / 100;
    this.ngZone.run(() => {
      this.scrollProgress.set(rounded);
    });
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  onNavClick(event: Event, sectionId: string): void {
    this.scrollNav.handleClick(event, sectionId);
    this.closeMenu();
  }

  onBrandClick(event: Event): void {
    event.preventDefault();
    this.scrollNav.goToSection('inicio');
    this.closeMenu();
  }

  toggleLanguage(): void {
    if (this.locale.lang() === 'es') {
      this.locale.setEnglish();
    } else {
      this.locale.setSpanish();
    }
  }
}
