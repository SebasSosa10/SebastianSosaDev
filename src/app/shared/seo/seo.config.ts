import type { AppLocale } from '../i18n/messages';
import {
  GEO_SEO_KEYWORDS_EN,
  GEO_SEO_KEYWORDS_ES,
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
    title: 'Sebastián Sosa | Ingeniero de Software en Armenia, Quindío',
    description:
      'Ingeniero de Software especializado en desarrollo web, aplicaciones empresariales, APIs, Angular, Java, Python y soluciones tecnológicas. Desarrollo software para empresas en Armenia, Quindío, Colombia y clientes internacionales.',
    keywords: `${GEO_SEO_KEYWORDS_ES}, Desarrollador Angular, Desarrollador Java, Desarrollador Python, Desarrollo de APIs, Software Empresarial, Angular, Java, Spring Boot, Python, FastAPI, Docker, CI/CD, Astra Dev`,
    image: '/joan-sebastian-sosa-bedoya.png',
  }),
  'sobre-mi': page({
    title: 'Sobre mí | Sebastián Sosa — Ingeniero de Software en Armenia',
    description:
      'Conoce a Sebastián Sosa, Ingeniero de Software y Desarrollador Full Stack en Armenia, Quindío. Especializado en Angular, Java, Python, APIs, software empresarial y soluciones para clientes locales e internacionales.',
    keywords: `Sobre mí Ingeniero de Software, ${GEO_SEO_KEYWORDS_ES}, Full Stack Developer, arquitectura de software, Astra Dev`,
    image: '/SebastianSosa.webp',
  }),
  experiencia: page({
    title: 'Experiencia | Sebastián Sosa — Desarrollador Full Stack Colombia',
    description:
      'Experiencia laboral de Sebastián Sosa en EDEQ Grupo EPM, Konex y Astra Dev: Java, Spring Boot, Python, FastAPI, Angular, DevOps, CI/CD con GitHub y software empresarial.',
    keywords: `experiencia Ingeniero de Software, ${GEO_SEO_KEYWORDS_ES}, Spring Boot, FastAPI, DevOps, GitHub Actions, CI/CD`,
    image: '/joan-sebastian-sosa-bedoya.png',
  }),
  servicios: page({
    title: 'Servicios | Sebastián Sosa — Desarrollo de Software a Medida',
    description:
      'Servicios de desarrollo de software en Armenia y Colombia: aplicaciones web, APIs, Angular, Java, Python, LMS, bots con IA, DevOps, CI/CD y software empresarial para clientes locales e internacionales.',
    keywords: `servicios desarrollo de software, software a medida, ${GEO_SEO_KEYWORDS_ES}, LMS, bots IA, DevOps, aplicaciones web, APIs`,
    image: '/joan-sebastian-sosa-bedoya.png',
  }),
  proyectos: page({
    title: 'Portafolio | Sebastián Sosa — Proyectos de Software Colombia',
    description:
      'Portafolio de proyectos de Sebastián Sosa: sitios web profesionales, Angular, Mini-GPT NLP, ERP, APIs REST con Java Spring Boot, Python y desarrollo de aplicaciones web.',
    keywords: `portafolio software, proyectos Angular, ${GEO_SEO_KEYWORDS_ES}, Spring Boot, Python, NLP, ERP, sitios web`,
    image: '/projects/dr-cristian-valencia-hero.png',
  }),
  contacto: page({
    title: 'Contacto | Sebastián Sosa — Ingeniero de Software Armenia',
    description:
      'Contacta a Sebastián Sosa, Ingeniero de Software en Armenia, Quindío, Colombia. Disponible para desarrollo de software a medida, aplicaciones web, APIs y proyectos freelance o remotos.',
    keywords: `contacto Ingeniero de Software Armenia, ${GEO_SEO_KEYWORDS_ES}, freelance software developer, remote software engineer`,
    image: '/joan-sebastian-sosa-bedoya.png',
  }),
};

const SEO_PAGES_EN: Record<SeoPageKey, PageSeoConfig> = {
  inicio: page({
    title: 'Sebastian Sosa | Software Engineer in Armenia, Quindío',
    description:
      'Software Engineer specialized in web development, enterprise applications, APIs, Angular, Java, Python, and technology solutions. Building software for companies in Armenia, Quindío, Colombia, and international clients.',
    keywords: `${GEO_SEO_KEYWORDS_EN}, Angular Developer, Java Developer, Python Developer, API Development, Enterprise Software, Spring Boot, FastAPI, Docker, CI/CD, Astra Dev`,
    image: '/joan-sebastian-sosa-bedoya.png',
  }),
  'sobre-mi': page({
    title: 'About | Sebastian Sosa — Software Engineer in Armenia',
    description:
      'Meet Sebastian Sosa, Software Engineer and Full Stack Developer in Armenia, Quindío. Specialized in Angular, Java, Python, APIs, enterprise software, and solutions for local and international clients.',
    keywords: `About Software Engineer, ${GEO_SEO_KEYWORDS_EN}, Full Stack Developer, software architecture, Astra Dev`,
    image: '/SebastianSosa.webp',
  }),
  experiencia: page({
    title: 'Experience | Sebastian Sosa — Full Stack Developer Colombia',
    description:
      'Work experience of Sebastian Sosa at EDEQ Grupo EPM, Konex, and Astra Dev: Java, Spring Boot, Python, FastAPI, Angular, DevOps, GitHub CI/CD, and enterprise software.',
    keywords: `Software Engineer experience, ${GEO_SEO_KEYWORDS_EN}, Spring Boot, FastAPI, DevOps, GitHub Actions, CI/CD`,
    image: '/joan-sebastian-sosa-bedoya.png',
  }),
  servicios: page({
    title: 'Services | Sebastian Sosa — Custom Software Development',
    description:
      'Software development services in Armenia and Colombia: web apps, APIs, Angular, Java, Python, LMS, AI bots, DevOps, CI/CD, and enterprise software for local and international clients.',
    keywords: `custom software services, ${GEO_SEO_KEYWORDS_EN}, LMS, AI bots, DevOps, web applications, APIs`,
    image: '/joan-sebastian-sosa-bedoya.png',
  }),
  proyectos: page({
    title: 'Portfolio | Sebastian Sosa — Software Projects Colombia',
    description:
      'Featured projects by Sebastian Sosa: professional websites, Angular, Mini-GPT NLP, ERP, Java Spring Boot REST APIs, Python, and web application development.',
    keywords: `software portfolio, Angular projects, ${GEO_SEO_KEYWORDS_EN}, Spring Boot, Python, NLP, ERP, websites`,
    image: '/projects/dr-cristian-valencia-hero.png',
  }),
  contacto: page({
    title: 'Contact | Sebastian Sosa — Software Engineer Armenia',
    description:
      'Contact Sebastian Sosa, Software Engineer in Armenia, Quindío, Colombia. Available for custom software, web apps, APIs, and freelance or remote projects.',
    keywords: `contact Software Engineer Armenia, ${GEO_SEO_KEYWORDS_EN}, freelance software developer, remote software engineer`,
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
