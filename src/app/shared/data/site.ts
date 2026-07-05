export interface NavItem {
  label: string;
  labelEn: string;
  /** id del elemento en la home; coincide con los `id` de las secciones */
  sectionId: string;
  /** URL limpia para SEO y enlaces del menú */
  path: string;
}

/** Rutas públicas de cada sección (sin hash) */
export const SECTION_PATHS = {
  inicio: '/',
  'sobre-mi': '/sobre-mi',
  experiencia: '/experiencia',
  proyectos: '/proyectos',
  contacto: '/contacto',
  servicios: '/servicios',
} as const;

export function pathForSection(sectionId: string): string {
  return SECTION_PATHS[sectionId as keyof typeof SECTION_PATHS] ?? '/';
}

/** Resuelve el id de sección a partir de la ruta del navegador */
export function sectionForPath(pathname: string): string | null {
  const slug = pathname.replace(/^\/+|\/+$/g, '');
  if (!slug) {
    return 'inicio';
  }
  if (slug === 'servicios') {
    return 'experiencia';
  }
  if (slug in SECTION_PATHS) {
    return slug;
  }
  return null;
}

export const site = {
  /** Nombre corto (menú, titulares, hero) */
  name: 'Sebastian Sosa',
  /** Nombre completo (alt de la foto, metadatos) */
  fullName: 'Joan Sebastian Sosa Bedoya',
  /** Retrato del hero — `public/joan-sebastian-sosa-bedoya.png` */
  heroPhoto: '/joan-sebastian-sosa-bedoya.png',
  /** Ilustración en la sección Sobre mí — `public/SebastianSosa.webp` */
  aboutPhoto: '/SebastianSosa.webp',
  /** Foto pequeña en el header — `public/sebastian-header.webp` */
  headerAvatar: '/sebastian-header.webp',
  /** Texto del badge bajo la foto del hero */
  heroAvailability: 'DISPONIBLE',
  title: 'Ingeniero de software',
  tagline:
    'Desarrollo aplicaciones web modernas y escalables que impulsan resultados y mejoran la experiencia del usuario.',
  email: 'joansebastiansosa10@gmail.com',
  /** Formato visible; `phoneTel` para enlaces tel: */
  phone: '+57 3017247201',
  phoneTel: '+573017247201',
  location: 'Armenia, Quindío · Colombia',
  /** Enlaces directos para iconos del hero */
  links: {
    github: 'https://github.com/SebasSosa10',
    linkedin: 'https://www.linkedin.com/in/sebastiansosa10/',
  },
  /** CV en `public/` — descarga desde el hero */
  resume: {
    path: '/cv-joan-sebastian-sosa-bedoya.pdf',
    downloadName: 'CV Joan Sebastian Sosa Bedoya.pdf',
  },
  social: [
    { label: 'GitHub', href: 'https://github.com/SebasSosa10' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sebastiansosa10/',
    },
  ] as const,
  /** Enlaces del menú: solo mueven la vista dentro del home */
  nav: [
    { label: 'Inicio', labelEn: 'Home', sectionId: 'inicio', path: '/' },
    {
      label: 'Sobre mí',
      labelEn: 'About',
      sectionId: 'sobre-mi',
      path: '/sobre-mi',
    },
    {
      label: 'Experiencia',
      labelEn: 'Experience',
      sectionId: 'experiencia',
      path: '/experiencia',
    },
    {
      label: 'Proyectos',
      labelEn: 'Projects',
      sectionId: 'proyectos',
      path: '/proyectos',
    },
    {
      label: 'Contacto',
      labelEn: 'Contact',
      sectionId: 'contacto',
      path: '/contacto',
    },
  ] satisfies NavItem[],
};
