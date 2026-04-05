export type AppLocale = 'es' | 'en';

export type PortfolioIdea = { title: string; body: string };

export type Messages = {
  meta: { title: string };
  ui: {
    themeGroup: string;
    themeLight: string;
    themeDark: string;
    navMain: string;
    navMobile: string;
    langGroup: string;
    menuOpen: string;
    menuClose: string;
    labelEnglish: string;
    labelSpanish: string;
    switchToEnglish: string;
    switchToSpanish: string;
  };
  hero: {
    line1: string;
    tagline: string;
    availability: string;
    ctaProjects: string;
    ctaContact: string;
    photoAlt: string;
    githubAria: string;
    linkedinAria: string;
    downloadCv: string;
  };
  sections: {
    ideasHeading: string;
    ideasIntro: string;
    projectsHeading: string;
    projectsIntro: string;
    projectsPlaceholder1: string;
    projectsPlaceholder2: string;
    contactHeading: string;
    contactBodyBefore: string;
    contactBodyAfter: string;
    techHeading: string;
    techIntro: string;
    techMarqueeAria: string;
  };
  portfolioIdeas: readonly PortfolioIdea[];
  footer: {
    blurbBefore: string;
    blurbAfter: string;
    copyright: string;
  };
  roleTitle: string;
};

function es(): Messages {
  return {
    meta: {
      title: 'Sebastian Sosa — Desarrollador de software',
    },
    ui: {
      themeGroup: 'Tema',
      themeLight: 'Tema claro',
      themeDark: 'Tema oscuro',
      navMain: 'Principal',
      navMobile: 'Móvil',
      langGroup: 'Idioma',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
      labelEnglish: 'Inglés',
      labelSpanish: 'Español',
      switchToEnglish: 'Cambiar a inglés',
      switchToSpanish: 'Cambiar a español',
    },
    hero: {
      line1: 'Hola, soy',
      tagline:
        'Desarrollo aplicaciones web modernas y escalables que impulsan resultados y mejoran la experiencia del usuario.',
      availability: 'DISPONIBLE',
      ctaProjects: 'Ver proyectos reales',
      ctaContact: 'Hablemos',
      photoAlt: 'Retrato de {name}',
      githubAria: 'Perfil de GitHub (se abre en una pestaña nueva)',
      linkedinAria: 'Perfil de LinkedIn (se abre en una pestaña nueva)',
      downloadCv: 'Descargar hoja de vida',
    },
    sections: {
      ideasHeading: 'Qué conviene mostrar en tu portafolio',
      ideasIntro:
        'Usa esta sección como guía mientras rellenas el sitio: cada tarjeta es algo que suelen buscar reclutadores y equipos técnicos.',
      projectsHeading: 'Proyectos destacados',
      projectsIntro:
        'Aquí irán 2–4 proyectos con imagen, descripción corta y enlaces. Mientras tanto, este bloque es el contenedor listo para cuando los añadas.',
      projectsPlaceholder1:
        'Zona de proyectos — crea componentes o rutas y enlázalos desde aquí.',
      projectsPlaceholder2:
        'Tip: un card por proyecto con stack en badges, captura y botones “Código” / “Demo”.',
      contactHeading: 'Hablemos',
      contactBodyBefore: 'Sustituye el correo en',
      contactBodyAfter: 'y enlaza tus redes reales en el pie de página.',
      techHeading: 'Tecnologías con las que trabajo',
      techIntro: 'Herramientas modernas para soluciones modernas',
      techMarqueeAria: 'Lista de tecnologías y herramientas',
    },
    portfolioIdeas: [
      {
        title: 'Quién eres y qué ofreces',
        body: 'Una frase clara: rol, años o foco (backend, frontend, full stack, datos) y el tipo de problemas que resuelves.',
      },
      {
        title: 'Stack y herramientas',
        body: 'Lenguajes, frameworks, nube y prácticas (tests, CI/CD, accesibilidad). Prioriza lo que realmente usas en producción.',
      },
      {
        title: 'Proyectos con historia',
        body: 'Contexto breve, tu responsabilidad, decisiones técnicas y enlaces a repo o demo. Capturas o GIF ayudan mucho.',
      },
      {
        title: 'Resultados o aprendizajes',
        body: 'Métricas si las hay (rendimiento, usuarios, tiempo ahorrado). Si no, qué aprendiste o qué harías distinto.',
      },
      {
        title: 'Cómo trabajas',
        body: 'Código limpio, revisiones, documentación, trabajo en equipo. Sirve para que te imaginen en su día a día.',
      },
      {
        title: 'Contacto visible',
        body: 'Email, LinkedIn o formulario. Facilita que reclutadores o clientes lleguen sin fricción.',
      },
    ],
    footer: {
      blurbBefore: 'Portafolio personal — reemplaza enlaces y textos en',
      blurbAfter: '.',
      copyright: 'Hecho con Angular y Tailwind.',
    },
    roleTitle: 'Desarrollador de software',
  };
}

function en(): Messages {
  return {
    meta: {
      title: 'Sebastian Sosa — Software developer',
    },
    ui: {
      themeGroup: 'Theme',
      themeLight: 'Light theme',
      themeDark: 'Dark theme',
      navMain: 'Main',
      navMobile: 'Mobile',
      langGroup: 'Language',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      labelEnglish: 'English',
      labelSpanish: 'Spanish',
      switchToEnglish: 'Switch to English',
      switchToSpanish: 'Switch to Spanish',
    },
    hero: {
      line1: "Hello, I'm",
      tagline:
        'I build modern, scalable web applications that drive results and improve user experience.',
      availability: 'AVAILABLE',
      ctaProjects: 'View real projects',
      ctaContact: "Let's talk",
      photoAlt: 'Portrait of {name}',
      githubAria: 'GitHub profile (opens in a new tab)',
      linkedinAria: 'LinkedIn profile (opens in a new tab)',
      downloadCv: 'Download resume',
    },
    sections: {
      ideasHeading: 'What to show in your portfolio',
      ideasIntro:
        'Use this section as a guide while you fill the site: each card is something recruiters and engineering teams often look for.',
      projectsHeading: 'Featured projects',
      projectsIntro:
        'This will hold 2–4 projects with image, short description, and links. For now this block is ready for when you add them.',
      projectsPlaceholder1:
        'Project area — create components or routes and link them from here.',
      projectsPlaceholder2:
        'Tip: one card per project with stack badges, screenshot, and “Code” / “Demo” buttons.',
      contactHeading: "Let's talk",
      contactBodyBefore: 'Replace the email in',
      contactBodyAfter: 'and link your real social profiles in the footer.',
      techHeading: 'Technologies I Work With',
      techIntro: 'Modern tools for modern solutions',
      techMarqueeAria: 'Technologies and tools list',
    },
    portfolioIdeas: [
      {
        title: 'Who you are and what you offer',
        body: 'A clear line: role, years or focus (backend, frontend, full stack, data) and the problems you solve.',
      },
      {
        title: 'Stack and tools',
        body: 'Languages, frameworks, cloud, and practices (tests, CI/CD, accessibility). Prioritize what you actually use in production.',
      },
      {
        title: 'Projects with a story',
        body: 'Brief context, your responsibility, technical decisions, and links to repo or demo. Screenshots or GIFs help a lot.',
      },
      {
        title: 'Outcomes or learnings',
        body: 'Metrics if you have them (performance, users, time saved). If not, what you learned or what you would do differently.',
      },
      {
        title: 'How you work',
        body: 'Clean code, reviews, documentation, teamwork. Helps others picture you in their day to day.',
      },
      {
        title: 'Visible contact',
        body: 'Email, LinkedIn, or a form. Make it easy for recruiters or clients to reach you.',
      },
    ],
    footer: {
      blurbBefore: 'Personal portfolio — replace links and copy in',
      blurbAfter: '.',
      copyright: 'Built with Angular and Tailwind.',
    },
    roleTitle: 'Software developer',
  };
}

const byLang: Record<AppLocale, Messages> = {
  es: es(),
  en: en(),
};

/** Acceso por ruta con puntos, p. ej. `sections.ideasHeading` */
export function message(lang: AppLocale, path: string): string {
  const parts = path.split('.');
  let cur: unknown = byLang[lang];
  for (const p of parts) {
    if (cur === null || cur === undefined || typeof cur !== 'object') {
      return path;
    }
    cur = (cur as Record<string, unknown>)[p];
  }
  return typeof cur === 'string' ? cur : path;
}

export function messagesFor(lang: AppLocale): Messages {
  return byLang[lang];
}
