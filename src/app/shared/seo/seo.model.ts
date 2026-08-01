import type { AppLocale } from '../i18n/messages';

export type SeoPageKey =
  | 'inicio'
  | 'sobre-mi'
  | 'experiencia'
  | 'proyectos'
  | 'contacto'
  | 'servicios';

export interface PageSeoConfig {
  /** Document title completo (ya incluye marca / ubicación). */
  title: string;
  description: string;
  keywords: string;
  robots: string;
  author: string;
  themeColor: string;
  viewport: string;
  /** Imagen OG/Twitter/Schema (ruta relativa o absoluta). */
  image?: string;
}

export interface SiteSeoConfig {
  brandName: string;
  fullName: string;
  organizationName: string;
  titleSeparator: string;
  robots: string;
  author: string;
  themeColor: string;
  viewport: string;
  siteName: string;
  baseUrl: string;
  defaultImage: string;
  locale: string;
  localeByLang: Record<AppLocale, string>;
  twitterCard: string;
  ogType: string;
}
