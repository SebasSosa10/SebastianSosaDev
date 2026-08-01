import type { AppLocale } from '../i18n/messages';

/**
 * Base local: Armenia, Quindío, Colombia.
 * Alcance: Colombia + remoto USA / Europa / mundial.
 */
export const GEO_SEO = {
  soleLocation: {
    city: 'Armenia',
    region: 'Quindío',
    country: 'Colombia',
    countryCode: 'CO',
  },
  availableLanguage: ['es', 'en'] as const,
  areaServed: [
    {
      '@type': 'City' as const,
      name: 'Armenia',
      containedInPlace: {
        '@type': 'AdministrativeArea' as const,
        name: 'Quindío',
        containedInPlace: {
          '@type': 'Country' as const,
          name: 'Colombia',
        },
      },
    },
    { '@type': 'Country' as const, name: 'Colombia' },
    { '@type': 'Country' as const, name: 'United States' },
    { '@type': 'Country' as const, name: 'United Kingdom' },
    { '@type': 'Country' as const, name: 'Spain' },
    { '@type': 'Country' as const, name: 'Germany' },
    { '@type': 'Country' as const, name: 'Netherlands' },
    { '@type': 'AdministrativeArea' as const, name: 'European Union' },
    { '@type': 'Place' as const, name: 'Worldwide' },
  ],
} as const;

/** Variantes de nombre para búsquedas de marca personal. */
export const PERSON_NAME_KEYWORDS =
  'Joan Sebastian Sosa Bedoya, Joan Sebastian Sosa, Joan Sebastian, Sebastian Sosa, Sebastián Sosa, Joan Sosa, Sosa Bedoya, sebastiansosadev';

export const PERSON_ALTERNATE_NAMES = [
  'Sebastian Sosa',
  'Sebastián Sosa',
  'Joan Sebastian',
  'Joan Sebastian Sosa',
  'Joan Sebastian Sosa Bedoya',
  'Joan Sosa',
  'Sosa Bedoya',
  'sebastiansosadev',
] as const;

/** Local + nacional Colombia. */
export const GEO_SEO_KEYWORDS_ES =
  'Ingeniero de Software Colombia, Ingeniero de Software Armenia, Ingeniero de Software Quindío, Desarrollador de Software Colombia, Desarrollador Web Colombia, Desarrollador Web Armenia, Full Stack Colombia, Freelance Colombia';

/** Internacional EN: USA, Europa, remoto. */
export const GEO_SEO_KEYWORDS_EN =
  'Software Engineer Colombia, Software Engineer Remote, Software Engineer USA, Software Engineer United States, Software Engineer Europe, Remote Software Engineer, Hire Software Engineer Latin America, Full Stack Developer Remote, Freelance Software Developer USA, Freelance Software Developer Europe';

/** Skills / servicios para aparecer en búsquedas técnicas. */
export const SKILL_SEO_KEYWORDS_ES =
  'Desarrollador Python, Desarrollador Web, Desarrollador Angular, Desarrollador Java, Desarrollo de aplicaciones web, Desarrollo de APIs, Inteligencia Artificial, IA aplicada, bots con IA, LMS, DevOps, CI/CD, GitHub Actions, Docker, FastAPI, Spring Boot, TypeScript, Software a medida, Automatización, Cloud';

export const SKILL_SEO_KEYWORDS_EN =
  'Python Developer, Web Developer, Angular Developer, Java Developer, Web Application Development, API Development, Artificial Intelligence, Applied AI, AI bots, AI integrations, LMS, DevOps Engineer, CI/CD, GitHub Actions, Docker, FastAPI, Spring Boot, TypeScript, Custom Software, Automation, Cloud';

export function geoLocationLabel(locale: AppLocale): string {
  return locale === 'en'
    ? 'Armenia, Quindío, Colombia · Remote worldwide'
    : 'Armenia, Quindío, Colombia · Remoto internacional';
}
