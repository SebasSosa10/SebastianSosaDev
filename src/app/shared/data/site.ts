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
  /** Retrato del hero — `public/Joan Sebastian Sosa Bedoya.png` */
  heroPhoto: '/Joan%20Sebastian%20Sosa%20Bedoya.png',
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
  location: 'Colombia',
  /** Enlaces directos para iconos del hero */
  links: {
    github: 'https://github.com/SebasSosa10',
    linkedin: 'https://www.linkedin.com/in/sebastiansosa10/',
  },
  /** CV en `public/` — descarga desde el hero */
  resume: {
    path: '/C.V%20Joan%20Sebastian%20Sosa%20Bedoya.pdf',
    downloadName: 'C.V Joan Sebastian Sosa Bedoya.pdf',
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
    { label: 'Inicio', labelEn: 'Home', sectionId: 'inicio' },
    { label: 'Sobre mí', labelEn: 'About', sectionId: 'sobre-mi' },
    {
      label: 'Experiencia',
      labelEn: 'Experience',
      sectionId: 'experiencia',
    },
    { label: 'Proyectos', labelEn: 'Projects', sectionId: 'proyectos' },
    { label: 'Contacto', labelEn: 'Contact', sectionId: 'contacto' },
  ] satisfies NavItem[],
};
