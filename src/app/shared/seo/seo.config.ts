import type { AppLocale } from '../i18n/messages';
import {
  GEO_SEO_KEYWORDS_EN,
  GEO_SEO_KEYWORDS_ES,
  PERSON_NAME_KEYWORDS,
  SKILL_SEO_KEYWORDS_EN,
  SKILL_SEO_KEYWORDS_ES,
} from './geo-seo.config';
import type { PageSeoConfig, SeoPageKey, SiteSeoConfig } from './seo.model';

/** Configuración SEO global — Ingeniero de Software / Astra Dev. */
export const SITE_SEO: SiteSeoConfig = {
  brandName: 'Sebastián Sosa',
  fullName: 'Joan Sebastian Sosa Bedoya',
  organizationName: 'Astra Dev',
  titleSeparator: ' | ',
  robots:
    'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  author: 'Joan Sebastian Sosa Bedoya',
  themeColor: '#0a0a0a',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  siteName: 'Sebastian Sosa',
  baseUrl: 'https://sebastiansosadev.com',
  defaultImage: '/joan-sebastian-sosa-bedoya.png',
  locale: 'es_CO',
  localeByLang: {
    es: 'es_CO',
    en: 'en_US',
  },
  twitterCard: 'summary_large_image',
  ogType: 'website',
};

export const DEFAULT_SEO_PAGE_KEY: SeoPageKey = 'inicio';

const page = (
  partial: Pick<PageSeoConfig, 'title' | 'description' | 'keywords'> &
    Pick<Partial<PageSeoConfig>, 'image'>,
): PageSeoConfig => ({
  ...partial,
  robots: SITE_SEO.robots,
  author: SITE_SEO.author,
  themeColor: SITE_SEO.themeColor,
  viewport: SITE_SEO.viewport,
});

const SEO_PAGES_ES: Record<SeoPageKey, PageSeoConfig> = {
  inicio: page({
    title:
      'Joan Sebastian Sosa Bedoya | Ingeniero de Software Colombia · Remoto USA y Europa',
    description:
      'Joan Sebastian Sosa Bedoya (Sebastian Sosa) — Ingeniero de Software y Desarrollador Full Stack en Colombia. Python, IA, aplicaciones web, APIs, Angular, Java, DevOps y CI/CD. Disponible remoto para empresas en Colombia, Estados Unidos y Europa.',
    keywords: `${PERSON_NAME_KEYWORDS}, ${GEO_SEO_KEYWORDS_ES}, ${GEO_SEO_KEYWORDS_EN}, ${SKILL_SEO_KEYWORDS_ES}, ${SKILL_SEO_KEYWORDS_EN}, Astra Dev`,
    image: '/joan-sebastian-sosa-bedoya.png',
  }),
  'sobre-mi': page({
    title:
      'Sobre mí | Joan Sebastian Sosa Bedoya — Ingeniero de Software Remoto',
    description:
      'Joan Sebastian Sosa Bedoya (Sebastian Sosa / Joan Sebastian): Ingeniero de Software Full Stack en Armenia, Colombia. Especializado en Python, IA, desarrollo web, APIs, Angular, Java, DevOps y CI/CD para clientes locales e internacionales (USA y Europa).',
    keywords: `${PERSON_NAME_KEYWORDS}, ${GEO_SEO_KEYWORDS_ES}, ${SKILL_SEO_KEYWORDS_ES}, remote software engineer, Astra Dev`,
    image: '/SebastianSosa.webp',
  }),
  experiencia: page({
    title:
      'Experiencia | Joan Sebastian Sosa Bedoya — Full Stack · DevOps · Python',
    description:
      'Experiencia de Joan Sebastian Sosa Bedoya (Sebastian Sosa) en EDEQ, Konex y Astra Dev: Java, Spring Boot, Python, FastAPI, Angular, IA, DevOps, CI/CD con GitHub y software empresarial para Colombia y remoto.',
    keywords: `${PERSON_NAME_KEYWORDS}, ${GEO_SEO_KEYWORDS_ES}, ${SKILL_SEO_KEYWORDS_ES}, Spring Boot, GitHub Actions`,
    image: '/joan-sebastian-sosa-bedoya.png',
  }),
  servicios: page({
    title:
      'Servicios | Desarrollo Web, Python, IA, DevOps y CI/CD — Sebastian Sosa',
    description:
      'Servicios de Joan Sebastian Sosa Bedoya: desarrollo de aplicaciones web, APIs, Python, Angular, Java, inteligencia artificial (bots/LMS), DevOps, CI/CD y software a medida para empresas en Colombia, USA y Europa (remoto).',
    keywords: `${PERSON_NAME_KEYWORDS}, ${SKILL_SEO_KEYWORDS_ES}, ${SKILL_SEO_KEYWORDS_EN}, ${GEO_SEO_KEYWORDS_ES}, ${GEO_SEO_KEYWORDS_EN}`,
    image: '/joan-sebastian-sosa-bedoya.png',
  }),
  proyectos: page({
    title:
      'Portafolio | Joan Sebastian Sosa Bedoya — Web, Python, IA y APIs',
    description:
      'Proyectos de Joan Sebastian Sosa Bedoya (Sebastian Sosa): sitios web, Angular, Python/NLP, ERP, APIs Spring Boot, DevOps y aplicaciones web para clientes en Colombia e internacionales.',
    keywords: `${PERSON_NAME_KEYWORDS}, ${SKILL_SEO_KEYWORDS_ES}, portafolio software, proyectos Angular, NLP, ERP`,
    image: '/projects/dr-cristian-valencia-hero.png',
  }),
  contacto: page({
    title:
      'Contacto | Contratar Ingeniero de Software Remoto — Sebastian Sosa',
    description:
      'Contacta a Joan Sebastian Sosa Bedoya (Sebastian Sosa) para contratar un Ingeniero de Software remoto: Python, IA, desarrollo web, APIs, DevOps y CI/CD. Colombia, Estados Unidos y Europa.',
    keywords: `${PERSON_NAME_KEYWORDS}, contratar ingeniero de software, hire software engineer, ${GEO_SEO_KEYWORDS_EN}, ${SKILL_SEO_KEYWORDS_ES}`,
    image: '/joan-sebastian-sosa-bedoya.png',
  }),
};

const SEO_PAGES_EN: Record<SeoPageKey, PageSeoConfig> = {
  inicio: page({
    title:
      'Joan Sebastian Sosa Bedoya | Software Engineer Colombia · Remote USA & Europe',
    description:
      'Joan Sebastian Sosa Bedoya (Sebastian Sosa) — Software Engineer and Full Stack Developer in Colombia. Python, AI, web applications, APIs, Angular, Java, DevOps, and CI/CD. Available remotely for companies in Colombia, the United States, and Europe.',
    keywords: `${PERSON_NAME_KEYWORDS}, ${GEO_SEO_KEYWORDS_EN}, ${GEO_SEO_KEYWORDS_ES}, ${SKILL_SEO_KEYWORDS_EN}, ${SKILL_SEO_KEYWORDS_ES}, Astra Dev`,
    image: '/joan-sebastian-sosa-bedoya.png',
  }),
  'sobre-mi': page({
    title:
      'About | Joan Sebastian Sosa Bedoya — Remote Software Engineer',
    description:
      'Joan Sebastian Sosa Bedoya (Sebastian Sosa / Joan Sebastian): Full Stack Software Engineer in Armenia, Colombia. Focused on Python, AI, web development, APIs, Angular, Java, DevOps, and CI/CD for local and international clients (USA and Europe).',
    keywords: `${PERSON_NAME_KEYWORDS}, ${GEO_SEO_KEYWORDS_EN}, ${SKILL_SEO_KEYWORDS_EN}, remote software engineer, Astra Dev`,
    image: '/SebastianSosa.webp',
  }),
  experiencia: page({
    title:
      'Experience | Joan Sebastian Sosa Bedoya — Full Stack · DevOps · Python',
    description:
      'Experience of Joan Sebastian Sosa Bedoya (Sebastian Sosa) at EDEQ, Konex, and Astra Dev: Java, Spring Boot, Python, FastAPI, Angular, AI, DevOps, GitHub CI/CD, and enterprise software for Colombia and remote teams.',
    keywords: `${PERSON_NAME_KEYWORDS}, ${GEO_SEO_KEYWORDS_EN}, ${SKILL_SEO_KEYWORDS_EN}, Spring Boot, GitHub Actions`,
    image: '/joan-sebastian-sosa-bedoya.png',
  }),
  servicios: page({
    title:
      'Services | Web Apps, Python, AI, DevOps & CI/CD — Sebastian Sosa',
    description:
      'Services by Joan Sebastian Sosa Bedoya: web application development, APIs, Python, Angular, Java, artificial intelligence (bots/LMS), DevOps, CI/CD, and custom software for companies in Colombia, the USA, and Europe (remote).',
    keywords: `${PERSON_NAME_KEYWORDS}, ${SKILL_SEO_KEYWORDS_EN}, ${SKILL_SEO_KEYWORDS_ES}, ${GEO_SEO_KEYWORDS_EN}, ${GEO_SEO_KEYWORDS_ES}`,
    image: '/joan-sebastian-sosa-bedoya.png',
  }),
  proyectos: page({
    title:
      'Portfolio | Joan Sebastian Sosa Bedoya — Web, Python, AI & APIs',
    description:
      'Projects by Joan Sebastian Sosa Bedoya (Sebastian Sosa): websites, Angular, Python/NLP, ERP, Spring Boot APIs, DevOps, and web applications for Colombia and international clients.',
    keywords: `${PERSON_NAME_KEYWORDS}, ${SKILL_SEO_KEYWORDS_EN}, software portfolio, Angular projects, NLP, ERP`,
    image: '/projects/dr-cristian-valencia-hero.png',
  }),
  contacto: page({
    title:
      'Contact | Hire a Remote Software Engineer — Sebastian Sosa',
    description:
      'Contact Joan Sebastian Sosa Bedoya (Sebastian Sosa) to hire a remote Software Engineer: Python, AI, web development, APIs, DevOps, and CI/CD. Colombia, United States, and Europe.',
    keywords: `${PERSON_NAME_KEYWORDS}, hire software engineer, remote software engineer, ${GEO_SEO_KEYWORDS_EN}, ${SKILL_SEO_KEYWORDS_EN}`,
    image: '/joan-sebastian-sosa-bedoya.png',
  }),
};

export const SEO_PAGES: Record<AppLocale, Record<SeoPageKey, PageSeoConfig>> = {
  es: SEO_PAGES_ES,
  en: SEO_PAGES_EN,
};

export function getOgLocale(locale: AppLocale): string {
  return SITE_SEO.localeByLang[locale] ?? SITE_SEO.locale;
}

export function getPageSeo(
  key: SeoPageKey,
  locale: AppLocale,
): PageSeoConfig {
  return SEO_PAGES[locale][key] ?? SEO_PAGES.es[DEFAULT_SEO_PAGE_KEY];
}
