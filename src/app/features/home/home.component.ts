import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  PLATFORM_ID,
  computed,
  inject,
} from '@angular/core';
import { site } from '../../shared/data/site';
import { messagesFor } from '../../shared/i18n/messages';
import { I18nPipe } from '../../shared/pipes/i18n.pipe';
import { LocaleService } from '../../shared/services/locale.service';
import { ScrollNavService } from '../../shared/services/scroll-nav.service';

@Component({
  selector: 'app-home',
  imports: [I18nPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  private readonly scrollNav = inject(ScrollNavService);
  private readonly platformId = inject(PLATFORM_ID);
  readonly locale = inject(LocaleService);

  readonly site = site;

  /** Primera línea del h1 — depende del idioma */
  readonly heroHeadingLine1Chars = computed(() => {
    const line = messagesFor(this.locale.lang()).hero.line1;
    return [...line].map((char, index) => ({ char, delayIndex: index }));
  });

  readonly heroHeadingLine2Chars = computed(() => {
    const offset = messagesFor(this.locale.lang()).hero.line1.length;
    return [...site.name].map((char, index) => ({
      char,
      delayIndex: offset + index,
    }));
  });

  readonly portfolioIdeas = computed(
    () => messagesFor(this.locale.lang()).portfolioIdeas,
  );

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const id = globalThis.location?.hash?.replace(/^#/, '') ?? '';
    if (!id) {
      return;
    }
    queueMicrotask(() => {
      if (id === 'inicio' || document.getElementById(id)) {
        this.scrollNav.goToSection(id);
      }
    });
  }

  goTo(event: Event, sectionId: string): void {
    this.scrollNav.handleClick(event, sectionId);
  }
}
