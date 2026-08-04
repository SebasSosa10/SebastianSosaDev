/** Reexporta constantes SEO para compatibilidad. Preferir `seo.config.ts`. */
export {
  SITE_SEO,
  DEFAULT_SEO_PAGE_KEY,
  getPageSeo,
  getOgLocale,
} from './seo.config';
export type { SeoPageKey as SeoSectionId, PageSeoConfig, SiteSeoConfig } from './seo.model';
export { GEO_SEO, GEO_SEO_KEYWORDS_ES, GEO_SEO_KEYWORDS_EN, PERSON_NAME_KEYWORDS, PERSON_ALTERNATE_NAMES, SKILL_SEO_KEYWORDS_ES, SKILL_SEO_KEYWORDS_EN } from './geo-seo.config';

export const SITE_URL = 'https://sebastiansosadev.com';
export const SITE_NAME = 'Sebastian Sosa';
export const SITE_FULL_NAME = 'Joan Sebastian Sosa Bedoya';
export const SITE_BRAND = 'Astra Dev';
export const DEFAULT_OG_IMAGE = '/joan-sebastian.png';
export const SEO_AUTHOR = 'Joan Sebastian Sosa Bedoya';
export const SEO_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
