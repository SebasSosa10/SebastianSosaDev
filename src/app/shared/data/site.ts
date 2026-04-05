export interface NavItem {
  label: string;
  labelEn: string;
  /** id del elemento en la home; coincide con los `id` de las secciones */
  sectionId: string;
}

export const site = {
  /** Nombre corto (menú, titulares, hero) */
  name: 'Sebastian Sosa',
  /** Nombre completo (alt de la foto, metadatos) */
  fullName: 'Joan Sebastian Sosa Bedoya',
  /** Archivo en `public/` — se sirve como /nombre.webp */
  heroPhoto: '/SebastianSosa.webp',
  /** Foto pequeña en el header — `public/sebastian-header.webp` */
  headerAvatar: '/sebastian-header.webp',
  /** Texto del badge bajo la foto del hero */
  heroAvailability: 'DISPONIBLE',
  title: 'Desarrollador de software',
  tagline:
    'Desarrollo aplicaciones web modernas y escalables que impulsan resultados y mejoran la experiencia del usuario.',
  email: 'tu-email@ejemplo.com',
  location: 'Colombia',
  social: [
    { label: 'GitHub', href: 'https://github.com/SebasSosa10' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/joansebastiansosabedoya-software-engineer/?locale=es-ES',
    },
  ] as const,
  /** Enlaces del menú: solo mueven la vista dentro del home */
  nav: [
    { label: 'Inicio', labelEn: 'Home', sectionId: 'inicio' },
    {
      label: 'Qué mostrar',
      labelEn: 'What to show',
      sectionId: 'que-mostrar',
    },
    { label: 'Proyectos', labelEn: 'Projects', sectionId: 'proyectos' },
    { label: 'Contacto', labelEn: 'Contact', sectionId: 'contacto' },
  ] satisfies NavItem[],
};
