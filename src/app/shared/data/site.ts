export interface NavItem {
  label: string;
  /** id del elemento en la home; coincide con los `id` de las secciones */
  sectionId: string;
}

export const site = {
  name: 'Sebastián Sosa',
  title: 'Ingeniero de software',
  tagline:
    'Construyo productos web claros, mantenibles y centrados en la experiencia del usuario.',
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
    { label: 'Inicio', sectionId: 'inicio' },
    { label: 'Qué mostrar', sectionId: 'que-mostrar' },
    { label: 'Proyectos', sectionId: 'proyectos' },
    { label: 'Contacto', sectionId: 'contacto' },
  ] satisfies NavItem[],
};
