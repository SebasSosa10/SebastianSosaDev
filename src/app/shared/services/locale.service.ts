import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Injectable,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { afterNextRender } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import type { NavItem } from '../data/site';
import { message, type AppLocale } from '../i18n/messages';

const STORAGE_KEY = 'portfolio-locale';

export type { AppLocale } from '../i18n/messages';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly lang = signal<AppLocale>('es');

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }
      const stored = localStorage.getItem(STORAGE_KEY) as AppLocale | null;
      const next: AppLocale = stored === 'en' ? 'en' : 'es';
      this.apply(next);
    });
  }

  apply(locale: AppLocale): void {
    this.lang.set(locale);
    this.title.setTitle(message(locale, 'meta.title'));
    this.meta.updateTag({
      name: 'description',
      content: message(locale, 'meta.description'),
    });
    this.meta.updateTag({
      property: 'og:title',
      content: message(locale, 'meta.ogTitle'),
    });
    this.meta.updateTag({
      property: 'og:description',
      content: message(locale, 'meta.ogDescription'),
    });
    this.meta.updateTag({
      property: 'og:locale',
      content: locale === 'en' ? 'en_US' : 'es_CO',
    });
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.document.documentElement.lang = locale === 'en' ? 'en' : 'es';
    localStorage.setItem(STORAGE_KEY, locale);
  }

  /** Texto traducido por clave con puntos, p. ej. `hero.tagline` */
  t(key: string, params?: Record<string, string>): string {
    let out = message(this.lang(), key);
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        out = out.replaceAll(`{${k}}`, v);
      }
    }
    return out;
  }

  setEnglish(): void {
    this.apply('en');
  }

  setSpanish(): void {
    this.apply('es');
  }

  navLabel(item: NavItem): string {
    return this.lang() === 'en' ? item.labelEn : item.label;
  }
}
