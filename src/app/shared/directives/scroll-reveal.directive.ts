import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  DestroyRef,
  Directive,
  ElementRef,
  HostBinding,
  NgZone,
  PLATFORM_ID,
  inject,
  input,
  signal,
} from '@angular/core';

const DEFAULT_ROOT_MARGIN = '0px 0px -6% 0px';
const DEFAULT_THRESHOLD = 0.12;

/**
 * Revela el elemento con fade + slide al entrar en el viewport
 * y lo oculta al salir (scroll hacia abajo o hacia arriba).
 * Respeta `prefers-reduced-motion`.
 */
@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements AfterViewInit {
  readonly scrollRevealDelay = input(0);

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);

  private readonly visible = signal(false);

  @HostBinding('class.scroll-reveal-visible')
  get isVisible(): boolean {
    return this.visible();
  }

  @HostBinding('style.--scroll-reveal-delay')
  get delayStyle(): string {
    return `${this.scrollRevealDelay()}ms`;
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.visible.set(true);
      return;
    }

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.visible.set(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }
        this.ngZone.run(() => {
          this.visible.set(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: DEFAULT_ROOT_MARGIN,
        threshold: DEFAULT_THRESHOLD,
      },
    );

    observer.observe(this.el.nativeElement);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}

/**
 * Revela los hijos directos en cascada al entrar en el viewport
 * y los oculta al salir (scroll en ambas direcciones).
 */
@Directive({
  selector: '[appScrollRevealGroup]',
  standalone: true,
})
export class ScrollRevealGroupDirective implements AfterViewInit {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly destroyRef = inject(DestroyRef);
  private readonly ngZone = inject(NgZone);

  private readonly visible = signal(false);

  @HostBinding('class.scroll-reveal-group-visible')
  get isVisible(): boolean {
    return this.visible();
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.visible.set(true);
      return;
    }

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.visible.set(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }
        this.ngZone.run(() => {
          this.visible.set(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: DEFAULT_ROOT_MARGIN,
        threshold: DEFAULT_THRESHOLD,
      },
    );

    observer.observe(this.el.nativeElement);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
