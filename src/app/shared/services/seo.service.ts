import { DOCUMENT } from '@angular/common';
import {
  Injectable,
  effect,
  inject,
  signal,
  untracked,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { pathForSection } from '../data/site';
import type { AppLocale } from '../i18n/messages';
import {
  absoluteAssetUrl,
  IMAGE_SEO,
  PAGE_PRIMARY_IMAGE,
} from '../seo/image-seo.config';
import {
  DEFAULT_SEO_PAGE_KEY,
  getOgLocale,
  getPageSeo,
  SITE_SEO,
} from '../seo/seo.config';
import type { SeoPageKey } from '../seo/seo.model';
import { SchemaService } from '../seo/schema.service';
import { SEARCH_CONSOLE } from '../seo/search-console.config';

export type { SeoPageKey as SeoSectionId } from '../seo/seo.model';

/**
 * SEO central (mismo enfoque que Dr. Cristian Valencia):
 * Title / Meta / Canonical / hreflang / OG / Twitter / Schema.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);
  private readonly schema = inject(SchemaService);

  private readonly activeKey = signal<SeoPageKey>(DEFAULT_SEO_PAGE_KEY);
  private readonly activeUrl = signal('/');
  private readonly activeLocale = signal<AppLocale>('es');

  constructor() {
    effect(() => {
      const locale = this.activeLocale();
      const key = this.activeKey();
      const url = this.activeUrl();
      untracked(() => this.writeAll(key, url, locale));
    });
  }

  currentSectionId(): SeoPageKey {
    return this.activeKey();
  }

  /** API usada por Home / Locale. */
  apply(locale: AppLocale, sectionId?: string, canonicalPath?: string): void {
    this.activeLocale.set(locale);
    this.applyPage(
      (sectionId as SeoPageKey) || this.activeKey(),
      canonicalPath ?? pathForSection(sectionId || this.activeKey()),
    );
  }

  /**
   * Registra página activa. El `effect` reescribe head al navegar o cambiar idioma.
   */
  applyPage(key: SeoPageKey | null | undefined, routerUrl = '/'): void {
    this.activeKey.set(this.normalizeKey(key));
    this.activeUrl.set(routerUrl || '/');
  }

  private writeAll(key: SeoPageKey, routerUrl: string, locale: AppLocale): void {
    const page = getPageSeo(key, locale);
    const path = this.normalizePath(routerUrl);
    const canonical = this.toAbsoluteUrl(path);
    const imageKey = PAGE_PRIMARY_IMAGE[key];
    const imageMeta = IMAGE_SEO[imageKey];
    const image =
      page.image != null
        ? this.toAbsoluteUrl(page.image)
        : absoluteAssetUrl(imageMeta.path);
    const imageAlt = imageMeta.alt[locale];
    const ogLocale = getOgLocale(locale);
    const ogLocaleAlt = getOgLocale(locale === 'en' ? 'es' : 'en');

    this.title.setTitle(page.title);

    this.setNamedMeta('description', page.description);
    this.setNamedMeta('keywords', page.keywords);
    this.setNamedMeta('author', page.author);
    this.setNamedMeta('robots', page.robots);
    this.setNamedMeta('theme-color', page.themeColor);

    this.setPropertyMeta('og:title', page.title);
    this.setPropertyMeta('og:description', page.description);
    this.setPropertyMeta('og:url', canonical);
    this.setPropertyMeta('og:type', SITE_SEO.ogType);
    this.setPropertyMeta('og:site_name', SITE_SEO.siteName);
    this.setPropertyMeta('og:locale', ogLocale);
    this.setPropertyMeta('og:locale:alternate', ogLocaleAlt);
    this.setPropertyMeta('og:image', image);
    this.setPropertyMeta('og:image:alt', imageAlt);

    this.setNamedMeta('twitter:card', SITE_SEO.twitterCard);
    this.setNamedMeta('twitter:title', page.title);
    this.setNamedMeta('twitter:description', page.description);
    this.setNamedMeta('twitter:image', image);
    this.setNamedMeta('twitter:url', canonical);

    this.updateCanonical(canonical);
    this.updateHreflang(path);
    this.schema.applyForPage(key, path, locale);
    this.ensureSearchConsoleMeta();
  }

  private normalizeKey(key: SeoPageKey | null | undefined): SeoPageKey {
    if (
      key === 'sobre-mi' ||
      key === 'experiencia' ||
      key === 'proyectos' ||
      key === 'contacto' ||
      key === 'servicios'
    ) {
      return key;
    }
    return 'inicio';
  }

  private updateCanonical(href: string): void {
    const head = this.document.head;
    if (!head) {
      return;
    }
    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  private updateHreflang(path: string): void {
    const head = this.document.head;
    if (!head) {
      return;
    }
    head
      .querySelectorAll('link[data-seo-hreflang="true"]')
      .forEach((node) => node.remove());

    const esUrl = this.toAbsoluteUrl(path);
    const enUrl = this.withLangQuery(esUrl, 'en');
    this.appendHreflang('es', esUrl);
    this.appendHreflang('en', enUrl);
    this.appendHreflang('x-default', esUrl);
  }

  private appendHreflang(lang: string, href: string): void {
    const link = this.document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', lang);
    link.setAttribute('href', href);
    link.setAttribute('data-seo-hreflang', 'true');
    this.document.head.appendChild(link);
  }

  private withLangQuery(url: string, lang: 'en' | 'es'): string {
    try {
      const u = new URL(url);
      if (lang === 'es') {
        u.searchParams.delete('lang');
      } else {
        u.searchParams.set('lang', lang);
      }
      return u.toString();
    } catch {
      return url;
    }
  }

  private ensureSearchConsoleMeta(): void {
    if (SEARCH_CONSOLE.googleSiteVerification) {
      this.setNamedMeta(
        'google-site-verification',
        SEARCH_CONSOLE.googleSiteVerification,
      );
    }
    if (SEARCH_CONSOLE.bingSiteVerification) {
      this.setNamedMeta(
        'msvalidate.01',
        SEARCH_CONSOLE.bingSiteVerification,
      );
    }
  }

  private normalizePath(routerUrl: string): string {
    const raw = (routerUrl || '/')
      .split('?')[0]
      .split('#')[0]
      .trim()
      .replace(/\/{2,}/g, '/');
    if (!raw || raw === '/') {
      return '/';
    }
    const withSlash = raw.startsWith('/') ? raw : `/${raw}`;
    return withSlash.length > 1 ? withSlash.replace(/\/+$/, '') : withSlash;
  }

  private toAbsoluteUrl(pathOrUrl: string): string {
    if (/^https?:\/\//i.test(pathOrUrl)) {
      return pathOrUrl;
    }
    const path = this.normalizePath(pathOrUrl);
    const origin = SITE_SEO.baseUrl.replace(/\/+$/, '');
    return path === '/' ? `${origin}/` : `${origin}${path}`;
  }

  private setNamedMeta(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }

  private setPropertyMeta(property: string, content: string): void {
    this.meta.updateTag({ property, content });
  }
}
