import type { AppLocale } from '../i18n/messages';
import { SITE_SEO } from './seo.config';
import type { SeoPageKey } from './seo.model';

export interface ImageSeoMeta {
  path: string;
  alt: Record<AppLocale, string>;
  title: Record<AppLocale, string>;
}

export function absoluteAssetUrl(path: string): string {
  const origin = SITE_SEO.baseUrl.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${origin}${normalized}`;
}

export function imageSeoForLocale(
  meta: ImageSeoMeta,
  locale: AppLocale,
): { src: string; alt: string; title: string; url: string } {
  return {
    src: meta.path,
    alt: meta.alt[locale],
    title: meta.title[locale],
    url: absoluteAssetUrl(meta.path),
  };
}

/** Catálogo de imágenes indexables (Google Images + OG + Schema). */
export const IMAGE_SEO = {
  portrait: {
    path: '/joan-sebastian.png',
    alt: {
      es: 'Joan Sebastian Sosa Bedoya — portafolio Ingeniero de Software en Armenia, Quindío, Colombia: Full Stack, Python, IA, DevOps y CI/CD',
      en: 'Joan Sebastian Sosa Bedoya — Software Engineer portfolio in Armenia, Quindío, Colombia: Full Stack, Python, AI, DevOps and CI/CD',
    },
    title: {
      es: 'Joan Sebastian Sosa Bedoya | Ingeniero de Software Colombia · Portafolio',
      en: 'Joan Sebastian Sosa Bedoya | Software Engineer Colombia · Portfolio',
    },
  },
  about: {
    path: '/SebastianSosa.webp',
    alt: {
      es: 'Sebastián Sosa — ilustración profesional Ingeniero de Software',
      en: 'Sebastian Sosa — professional Software Engineer illustration',
    },
    title: {
      es: 'Sobre mí — Sebastián Sosa | Ingeniero de Software',
      en: 'About — Sebastian Sosa | Software Engineer',
    },
  },
  headerAvatar: {
    path: '/sebastian-header.webp',
    alt: {
      es: 'Avatar Sebastián Sosa — Ingeniero de Software',
      en: 'Sebastian Sosa avatar — Software Engineer',
    },
    title: {
      es: 'Sebastián Sosa',
      en: 'Sebastian Sosa',
    },
  },
  projectDrCristian: {
    path: '/projects/dr-cristian-valencia-hero.png',
    alt: {
      es: 'Dr. Cristian Valencia — showcase del sitio web odontológico con mockups desktop y móvil',
      en: 'Dr. Cristian Valencia — dental website showcase with desktop and mobile mockups',
    },
    title: {
      es: 'Proyecto: sitio web Dr. Cristian Valencia — Armenia, Quindío',
      en: 'Project: Dr. Cristian Valencia website — Armenia, Quindío',
    },
  },
  projectTul: {
    path: '/projects/Tul.jpg',
    alt: {
      es: 'Prototipo TUL — dashboard de seguimiento de pedidos',
      en: 'TUL prototype — order tracking dashboard',
    },
    title: {
      es: 'Proyecto: Prototipo Seguimiento de Pedidos TUL',
      en: 'Project: TUL Order Tracking Prototype',
    },
  },
  projectMiniGpt: {
    path: '/projects/mini-gpt-sentiment-nlp.png',
    alt: {
      es: 'Mini-GPT Sentiment Analysis — pipeline NLP y métricas',
      en: 'Mini-GPT Sentiment Analysis — NLP pipeline and metrics',
    },
    title: {
      es: 'Proyecto: Mini-GPT Sentiment Analysis',
      en: 'Project: Mini-GPT Sentiment Analysis',
    },
  },
  projectSegurapp: {
    path: '/projects/segurapp-hero.png',
    alt: {
      es: 'SegurApp — app móvil de seguridad ciudadana',
      en: 'SegurApp — citizen safety mobile app',
    },
    title: {
      es: 'Proyecto: SegurApp',
      en: 'Project: SegurApp',
    },
  },
  projectGoldenEgg: {
    path: '/projects/golden-egg-erp-hero.png',
    alt: {
      es: 'Golden Egg — sistema ERP lite',
      en: 'Golden Egg — lite ERP system',
    },
    title: {
      es: 'Proyecto: Golden Egg ERP',
      en: 'Project: Golden Egg ERP',
    },
  },
  projectAgenda: {
    path: '/projects/agenda-contactos-hero.png',
    alt: {
      es: 'Agenda de Contactos — aplicación de escritorio',
      en: 'Contact Agenda — desktop application',
    },
    title: {
      es: 'Proyecto: Agenda de Contactos',
      en: 'Project: Contact Agenda',
    },
  },
  projectBlog: {
    path: '/projects/blog-platform-hero.png',
    alt: {
      es: 'Plataforma de Blogs — API REST Spring Boot',
      en: 'Blog platform — Spring Boot REST API',
    },
    title: {
      es: 'Proyecto: Plataforma de Blogs',
      en: 'Project: Blog Platform',
    },
  },
} as const satisfies Record<string, ImageSeoMeta>;

export type ImageSeoKey = keyof typeof IMAGE_SEO;

/** Imagen primaria por página (OG + Schema WebPage alineados). */
export const PAGE_PRIMARY_IMAGE: Record<SeoPageKey, ImageSeoKey> = {
  inicio: 'portrait',
  'sobre-mi': 'about',
  experiencia: 'portrait',
  servicios: 'portrait',
  proyectos: 'projectDrCristian',
  contacto: 'portrait',
};

/** Imágenes del portafolio para Image Sitemap. */
export const SITEMAP_PROJECT_IMAGES: ImageSeoKey[] = [
  'projectDrCristian',
  'projectTul',
  'projectMiniGpt',
  'projectSegurapp',
  'projectGoldenEgg',
  'projectAgenda',
  'projectBlog',
];
