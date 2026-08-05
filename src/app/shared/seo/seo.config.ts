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
  /** Collage SEO / Google Images + OG (también en sitemap). */
  defaultImage: '/joan-sebastian.png',
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
      'Joan Sebastian Sosa Bedoya | Ingeniero de Software Remoto · Colombia',
    description:
      'Joan Sebastian Sosa Bedoya — Ingeniero de Software y Full Stack Developer en Armenia, Quindío, Colombia. Disponible para proyectos remotos con empresas en Colombia, Latinoamérica, Norteamérica y Europa. Software a medida, aplicaciones web, APIs, Angular, Python y Java.',
    keywords: `${PERSON_NAME_KEYWORDS}, ${GEO_SEO_KEYWORDS_ES}, ${GEO_SEO_KEYWORDS_EN}, ${SKILL_SEO_KEYWORDS_ES}, ${SKILL_SEO_KEYWORDS_EN}, Astra Dev`,
    image: '/joan-sebastian.png',
  }),
  'sobre-mi': page({
    title:
      'Sobre mí | Remote Software Engineer & Full Stack — Joan Sebastian Sosa',
    description:
      'Ingeniero de Software en Armenia, Quindío, Colombia. Disponible como Remote Software Engineer, Freelance Software Developer, Full Stack Developer y Software Consultant para empresas internacionales en LatAm, Norteamérica y Europa.',
    keywords: `${PERSON_NAME_KEYWORDS}, Remote Software Engineer, Freelance Software Developer, Software Consultant, ${GEO_SEO_KEYWORDS_ES}, ${SKILL_SEO_KEYWORDS_ES}, ${SKILL_SEO_KEYWORDS_EN}`,
    image: '/SebastianSosa.webp',
  }),
  experiencia: page({
    title:
      'Experiencia | Full Stack Developer Colombia — Joan Sebastian Sosa',
    description:
      'Experiencia de Joan Sebastian Sosa Bedoya en EDEQ Grupo EPM, Konex y Astra Dev: Java, Spring Boot, Python, FastAPI, Angular, DevOps y software empresarial. Base en Colombia; abierto a colaboración remota internacional.',
    keywords: `${PERSON_NAME_KEYWORDS}, ${GEO_SEO_KEYWORDS_ES}, ${SKILL_SEO_KEYWORDS_ES}, Spring Boot, GitHub Actions`,
    image: '/joan-sebastian.png',
  }),
  tecnologias: page({
    title:
      'Tecnologías | Angular, Python, Java, Cloud — Software Engineer Remoto',
    description:
      'Stack de Joan Sebastian Sosa Bedoya: Angular, TypeScript, Python, FastAPI, Java, Spring Boot, Docker, Cloud, CI/CD e IA. Full Stack Developer en Colombia disponible para equipos remotos internacionales.',
    keywords: `${PERSON_NAME_KEYWORDS}, ${SKILL_SEO_KEYWORDS_ES}, ${SKILL_SEO_KEYWORDS_EN}, Angular Developer, Frontend Developer, Backend Developer, ${GEO_SEO_KEYWORDS_EN}`,
    image: '/joan-sebastian.png',
  }),
  servicios: page({
    title:
      'Servicios | Custom Software, Web Apps & APIs — Remoto Internacional',
    description:
      'Desarrollo de software a medida, aplicaciones web, Full Stack, Frontend, Backend, APIs, Angular, Java, Python, Cloud Solutions y software empresarial. Servicios remotos desde Armenia, Colombia, para LatAm, Norteamérica y Europa.',
    keywords: `${PERSON_NAME_KEYWORDS}, Custom Software, Web Applications, Enterprise Software, Cloud Solutions, API Development, ${GEO_SEO_KEYWORDS_ES}, ${GEO_SEO_KEYWORDS_EN}, ${SKILL_SEO_KEYWORDS_ES}, ${SKILL_SEO_KEYWORDS_EN}`,
    image: '/joan-sebastian.png',
  }),
  proyectos: page({
    title:
      'Proyectos | Portafolio Full Stack — Joan Sebastian Sosa Bedoya',
    description:
      'Portafolio de proyectos de software: sitios web, Angular, Python/NLP, ERP, APIs Spring Boot, DevOps y aplicaciones web para clientes en Colombia e internacionales.',
    keywords: `${PERSON_NAME_KEYWORDS}, portafolio software Colombia, ${GEO_SEO_KEYWORDS_ES}, ${SKILL_SEO_KEYWORDS_ES}, proyectos Angular`,
    image: '/projects/dr-cristian-valencia-hero.png',
  }),
  contacto: page({
    title:
      'Contacto | Hire Remote Software Engineer — Sebastian Sosa',
    description:
      'Contacta a Joan Sebastian Sosa Bedoya, Ingeniero de Software en Armenia, Quindío, Colombia. Disponible para proyectos remotos: Full Stack, software a medida, APIs, Angular, Python y consultoría para LatAm, Norteamérica y Europa.',
    keywords: `${PERSON_NAME_KEYWORDS}, Hire Software Engineer, Remote Software Engineer, Ingeniero de Software freelance Colombia, ${GEO_SEO_KEYWORDS_ES}, ${GEO_SEO_KEYWORDS_EN}`,
    image: '/joan-sebastian.png',
  }),
};

const SEO_PAGES_EN: Record<SeoPageKey, PageSeoConfig> = {
  inicio: page({
    title:
      'Joan Sebastian Sosa Bedoya | Remote Software Engineer · Colombia',
    description:
      'Joan Sebastian Sosa Bedoya — Software Engineer and Full Stack Developer based in Armenia, Quindío, Colombia. Available for remote projects with companies in Colombia, Latin America, North America and Europe. Custom software, web apps, APIs, Angular, Python and Java.',
    keywords: `${PERSON_NAME_KEYWORDS}, ${GEO_SEO_KEYWORDS_EN}, ${GEO_SEO_KEYWORDS_ES}, ${SKILL_SEO_KEYWORDS_EN}, ${SKILL_SEO_KEYWORDS_ES}, Astra Dev`,
    image: '/joan-sebastian.png',
  }),
  'sobre-mi': page({
    title:
      'About | Remote Software Engineer & Full Stack — Joan Sebastian Sosa',
    description:
      'Software Engineer based in Armenia, Quindío, Colombia. Available as Remote Software Engineer, Freelance Software Developer, Full Stack Developer and Software Consultant for international companies across LatAm, North America and Europe.',
    keywords: `${PERSON_NAME_KEYWORDS}, Remote Software Engineer, Freelance Software Developer, Software Consultant, ${GEO_SEO_KEYWORDS_EN}, ${SKILL_SEO_KEYWORDS_EN}`,
    image: '/SebastianSosa.webp',
  }),
  experiencia: page({
    title:
      'Experience | Full Stack Developer Colombia — Joan Sebastian Sosa',
    description:
      'Work experience of Joan Sebastian Sosa Bedoya at EDEQ Grupo EPM, Konex and Astra Dev: Java, Spring Boot, Python, FastAPI, Angular, DevOps and enterprise software. Based in Colombia; open to international remote collaboration.',
    keywords: `${PERSON_NAME_KEYWORDS}, ${GEO_SEO_KEYWORDS_EN}, ${SKILL_SEO_KEYWORDS_EN}, Spring Boot, GitHub Actions`,
    image: '/joan-sebastian.png',
  }),
  tecnologias: page({
    title:
      'Technologies | Angular, Python, Java, Cloud — Remote Software Engineer',
    description:
      'Tech stack of Joan Sebastian Sosa Bedoya: Angular, TypeScript, Python, FastAPI, Java, Spring Boot, Docker, Cloud, CI/CD and AI. Full Stack Developer in Colombia available for international remote teams.',
    keywords: `${PERSON_NAME_KEYWORDS}, ${SKILL_SEO_KEYWORDS_EN}, Angular Developer, Frontend Developer, Backend Developer, ${GEO_SEO_KEYWORDS_EN}`,
    image: '/joan-sebastian.png',
  }),
  servicios: page({
    title:
      'Services | Custom Software, Web Apps & APIs — Remote Worldwide',
    description:
      'Custom software development, web applications, Full Stack, Frontend, Backend, APIs, Angular, Java, Python, Cloud Solutions and enterprise software. Remote services from Armenia, Colombia for LatAm, North America and Europe.',
    keywords: `${PERSON_NAME_KEYWORDS}, Custom Software, Web Applications, Enterprise Software, Cloud Solutions, API Development, ${GEO_SEO_KEYWORDS_EN}, ${SKILL_SEO_KEYWORDS_EN}`,
    image: '/joan-sebastian.png',
  }),
  proyectos: page({
    title:
      'Projects | Full Stack Portfolio — Joan Sebastian Sosa Bedoya',
    description:
      'Featured software projects: websites, Angular, Python/NLP, ERP, Spring Boot APIs, DevOps and web applications for Colombia and international clients.',
    keywords: `${PERSON_NAME_KEYWORDS}, software portfolio Colombia, ${GEO_SEO_KEYWORDS_EN}, ${SKILL_SEO_KEYWORDS_EN}, Angular projects`,
    image: '/projects/dr-cristian-valencia-hero.png',
  }),
  contacto: page({
    title:
      'Contact | Hire Remote Software Engineer — Sebastian Sosa',
    description:
      'Contact Joan Sebastian Sosa Bedoya, Software Engineer based in Armenia, Quindío, Colombia. Available for remote projects: Full Stack, custom software, APIs, Angular, Python and consulting for LatAm, North America and Europe.',
    keywords: `${PERSON_NAME_KEYWORDS}, Hire Software Engineer, Remote Software Engineer, freelance Software Engineer Colombia, ${GEO_SEO_KEYWORDS_EN}`,
    image: '/joan-sebastian.png',
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
