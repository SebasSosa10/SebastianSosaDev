import type { AppLocale } from '../i18n/messages';

/**
 * SEO geo para Ingeniero de Software en Armenia, Quindío.
 * Base local + alcance nacional e internacional (remoto / freelance).
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
    {
      '@type': 'Country' as const,
      name: 'Colombia',
    },
    {
      '@type': 'Place' as const,
      name: 'Worldwide',
    },
  ],
} as const;

export const GEO_SEO_KEYWORDS_ES =
  'Ingeniero de Software Armenia, Ingeniero de Software Quindío, Ingeniero de Software Colombia, Desarrollador Web Armenia, Desarrollador Web Colombia, Software Engineer Colombia, Software Developer Colombia, Full Stack Developer Colombia, Freelancer Software Developer, Software a medida Colombia';

export const GEO_SEO_KEYWORDS_EN =
  'Software Engineer Armenia, Software Engineer Colombia, Software Engineer Remote, Software Developer Colombia, Web Developer Colombia, Full Stack Developer Colombia, Freelance Software Developer, Custom Software Colombia';

export function geoLocationLabel(locale: AppLocale): string {
  return locale === 'en'
    ? 'Armenia, Quindío, Colombia'
    : 'Armenia, Quindío, Colombia';
}
