import type { AppLocale } from '../i18n/messages';

/**
 * Ubicación física única: Armenia, Quindío, Colombia.
 * Alcance de servicio: remoto a Colombia, LatAm, Norteamérica, Europa y Worldwide.
 * No inventar oficinas ni sedes en otros países.
 */
export const GEO_SEO = {
  soleLocation: {
    city: 'Armenia',
    region: 'Quindío',
    country: 'Colombia',
    countryCode: 'CO',
  },
  /** Schema.org availableLanguage (nombres legibles). */
  availableLanguage: ['Spanish', 'English'] as const,
  /**
   * Regiones donde se ofrecen servicios remotos (no son sedes físicas).
   */
  areaServed: [
    { '@type': 'Country' as const, name: 'Colombia' },
    { '@type': 'Place' as const, name: 'Latin America' },
    { '@type': 'Place' as const, name: 'North America' },
    { '@type': 'Place' as const, name: 'Europe' },
    { '@type': 'Place' as const, name: 'Worldwide' },
  ],
} as const;

/** Tipos de servicio para Schema.org (búsquedas internacionales). */
export const SERVICE_TYPES = [
  'Software Development',
  'Custom Software Development',
  'Web Development',
  'Full Stack Development',
  'Frontend Development',
  'Backend Development',
  'API Development',
  'Angular Development',
  'Java Development',
  'Python Development',
  'Cloud Solutions',
  'Enterprise Software',
  'Web Applications',
  'Remote Software Development',
  'Software Consulting',
] as const;

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

/** SEO local Colombia / Quindío / Armenia (búsquedas objetivo). */
export const GEO_SEO_KEYWORDS_ES =
  'Ingeniero de Software Armenia, Ingeniero de Software Armenia Quindío, Ingeniero de Software Colombia, Desarrollador de Software Armenia, Desarrollador de Software Quindío, Desarrollador Web Armenia, Desarrollador Full Stack Colombia, Desarrollo de Software Armenia, Desarrollo Web Colombia, Software a medida Colombia, Aplicaciones Web Colombia, Soluciones empresariales Colombia, Programador Armenia, Ingeniero de Software freelance Colombia, Latinoamérica, remoto internacional';

/** SEO internacional EN + remoto. */
export const GEO_SEO_KEYWORDS_EN =
  'Software Engineer Colombia, Full Stack Developer Colombia, Angular Developer Colombia, Frontend Developer Colombia, Backend Developer, Software Developer Colombia, Software Engineer Remote, Remote Software Engineer, Web Developer, Full Stack Developer, Angular Developer, Software Engineer, Software Consultant, Hire Software Engineer Latin America, Freelance Software Developer, Remote Developer North America, Remote Developer Europe';

export const SKILL_SEO_KEYWORDS_ES =
  'Ingeniero de Software, Desarrollador de Software, Desarrollador Web, Full Stack, Software Empresarial, Aplicaciones Web, Desarrollo Web, Desarrollo de APIs, Transformación Digital, Software a Medida, Desarrollador Python, Desarrollador Angular, Desarrollador Java, Desarrollador Frontend, Desarrollador Backend, Inteligencia Artificial, DevOps, CI/CD, Cloud, TypeScript, FastAPI, Spring Boot';

export const SKILL_SEO_KEYWORDS_EN =
  'Software Engineer, Software Developer, Full Stack Developer, Angular Developer, Frontend Developer, Backend Developer, Java Developer, Python Developer, Remote Software Engineer, Web Developer, Software Consultant, Enterprise Software, Custom Software, Web Applications, API Development, Cloud Solutions, DevOps, CI/CD, TypeScript, FastAPI, Spring Boot';

export function geoLocationLabel(locale: AppLocale): string {
  return locale === 'en'
    ? 'Based in Armenia, Quindío, Colombia · Available for remote projects worldwide'
    : 'Con base en Armenia, Quindío, Colombia · Disponible para proyectos remotos internacionales';
}
