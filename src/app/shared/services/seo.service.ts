import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { pathForSection } from '../data/site';
import { message, type AppLocale } from '../i18n/messages';

const SITE_URL = 'https://sebastiansosa-dev.netlify.app';

export type SeoSectionId =
  | 'inicio'
  | 'sobre-mi'
  | 'experiencia'
  | 'proyectos'
  | 'contacto'
  | 'servicios';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly sectionId = signal<SeoSectionId>('inicio');

  currentSectionId(): SeoSectionId {
    return this.sectionId();
  }

  setSection(sectionId: string): void {
    const normalized = this.normalizeSection(sectionId);
    this.sectionId.set(normalized);
  }

  apply(locale: AppLocale, sectionId?: string): void {
    if (sectionId) {
      this.setSection(sectionId);
    }

    const active = this.sectionId();
    const metaSection = this.metaSectionKey(active);
    const path = pathForSection(active === 'inicio' ? 'inicio' : active);
    const canonical = `${SITE_URL}${path === '/' ? '/' : path}`;

    const pageTitle = metaSection
      ? message(locale, `meta.sections.${metaSection}.title`)
      : message(locale, 'meta.title');
    const description = metaSection
      ? message(locale, `meta.sections.${metaSection}.description`)
      : message(locale, 'meta.description');
    const ogTitle = metaSection
      ? message(locale, `meta.sections.${metaSection}.ogTitle`)
      : message(locale, 'meta.ogTitle');
    const ogDescription = metaSection
      ? message(locale, `meta.sections.${metaSection}.ogDescription`)
      : message(locale, 'meta.ogDescription');

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: ogTitle });
    this.meta.updateTag({ property: 'og:description', content: ogDescription });
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.meta.updateTag({
      property: 'og:locale',
      content: locale === 'en' ? 'en_US' : 'es_CO',
    });
    this.updateCanonical(canonical);
  }

  private normalizeSection(sectionId: string): SeoSectionId {
    if (
      sectionId === 'sobre-mi' ||
      sectionId === 'experiencia' ||
      sectionId === 'proyectos' ||
      sectionId === 'contacto' ||
      sectionId === 'servicios'
    ) {
      return sectionId;
    }
    return 'inicio';
  }

  private metaSectionKey(
    sectionId: SeoSectionId,
  ): 'sobre-mi' | 'experiencia' | 'proyectos' | 'contacto' | 'servicios' | null {
    if (sectionId === 'inicio') {
      return null;
    }
    if (sectionId === 'servicios') {
      return 'servicios';
    }
    return sectionId;
  }

  private updateCanonical(href: string): void {
    const head = this.document.head;
    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }
    link.setAttribute('href', href);
  }
}
