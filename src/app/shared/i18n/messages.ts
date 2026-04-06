export type AppLocale = 'es' | 'en';

export type PortfolioIdea = { title: string; body: string };

export type AboutDeliveryCard = {
  title: string;
  intro: string;
  bullets: readonly string[];
};

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
    readingProgressAria: string;
  };
  hero: {
    line1: string;
    tagline: string;
    availability: string;
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
    aboutHeading: string;
    aboutLead: string;
    aboutDeliveryHeading: string;
  };
  aboutDeliveryCards: readonly AboutDeliveryCard[];
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
      readingProgressAria: 'Progreso de lectura de la página',
    },
    hero: {
      line1: 'Hola, soy',
      tagline:
        'Desarrollo aplicaciones web modernas y escalables que impulsan resultados y mejoran la experiencia del usuario.',
      availability: 'DISPONIBLE',
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
      aboutHeading: 'Sobre mí',
      aboutLead:
        'Soy desarrollador de software y me centro en soluciones escalables, eficientes y pensadas para producción: sistemas mantenibles, claros y con margen para crecer. Abordo cada reto de punta a punta—entender el contexto, integrar lo necesario, decidir con criterio y dejar entregas que se sostienen en el tiempo.',
      aboutDeliveryHeading: 'Lo que entrego',
    },
    aboutDeliveryCards: [
      {
        title: 'Experiencia de uso e integración',
        intro:
          'Pantallas y recorridos que explican el sistema en lugar de pelear con él: claridad primero, rendimiento alineado al negocio.',
        bullets: [
          'Diseño de interfaces coherentes con el dominio y las personas que las usan',
          'Experiencias que funcionan bien en distintos dispositivos y contextos',
          'Conexión estable con servicios y datos reales, sin quedarse en prototipos eternos',
          'Soluciones pensadas para evolucionar sin volver a empezar cada vez',
        ],
      },
      {
        title: 'Servicios, datos e integración entre sistemas',
        intro:
          'Acuerdos claros entre equipos y piezas: lo que expongo al exterior es predecible, seguro y fácil de consumir.',
        bullets: [
          'Contratos de servicio estables y comprensibles para quien integra',
          'Acceso por roles, mínimo privilegio y buenas prácticas de exposición',
          'Modelado y persistencia alineados al problema de negocio',
          'Documentación que reduce idas y vueltas y acelera adopción',
        ],
      },
      {
        title: 'Análisis y automatización',
        intro:
          'Pasar de “lo hago a mano” a “lo mido y lo repito bien”: menos error humano, más señal para decidir.',
        bullets: [
          'Tratamiento y validación de información para que sea confiable',
          'Automatización de lo repetitivo para liberar tiempo de valor',
          'Indicadores ligados a objetivos, no a vanidad',
          'Procesos más visibles, auditables y fáciles de mejorar',
        ],
      },
      {
        title: 'Ingeniería de software',
        intro:
          'Estructura y disciplina técnica para que el producto crezca sin derrumbarse: lo que construyo está pensado para equipos, no solo para hoy.',
        bullets: [
          'Organización del código en capas y límites que se entienden meses después',
          'Pruebas, revisión y convenciones que reducen regresiones',
          'Entornos y despliegues repetibles entre desarrollo y producción',
          'Entregas en ciclos cortos con foco en valor y aprendizaje',
        ],
      },
      {
        title: 'Inteligencia artificial con sentido',
        intro:
          'IA donde aporta de verdad: asistencia y automatización que encajan en el flujo, sin sustituir el criterio ni la responsabilidad.',
        bullets: [
          'Capacidades inteligentes integradas en tareas concretas del negocio',
          'Opciones que escalan el coste solo cuando hace falta, sin sobre-arquitectura',
          'Resultados medibles y un dueño claro del caso de uso',
          'Datos, contexto y permisos tratados con cuidado desde el diseño',
        ],
      },
      {
        title: 'Soluciones listas para producción y escala',
        intro:
          'Lo que entrego está pensado para uso real: carga, continuidad y equipos que operan el sistema día a día.',
        bullets: [
          'Infraestructura y piezas de rendimiento cuando el contexto lo exige',
          'Crecimiento de usuarios, tráfico y datos con cabeza fría y plan',
          'Integración ordenada con otros sistemas o clientes externos',
          'Visibilidad operativa: qué pasa, cuándo y cómo mejorarlo',
        ],
      },
    ],
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
      readingProgressAria: 'Page reading progress',
    },
    hero: {
      line1: "Hello, I'm",
      tagline:
        'I build modern, scalable web applications that drive results and improve user experience.',
      availability: 'AVAILABLE',
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
      aboutHeading: 'About me',
      aboutLead:
        "I'm a software developer focused on scalable, efficient solutions built for production—systems that stay maintainable, clear, and ready to grow. I tackle each challenge end to end: understand the context, integrate what's needed, decide with sound judgment, and ship work that holds up over time.",
      aboutDeliveryHeading: 'What I deliver',
    },
    aboutDeliveryCards: [
      {
        title: 'User experience & integration',
        intro:
          'Screens and flows that explain the system instead of fighting it—clarity first, performance aligned with the business.',
        bullets: [
          'Coherent UI design tied to the domain and the people using it',
          'Experiences that work well across devices and contexts',
          'Reliable connections to real services and data—not endless prototypes',
          'Solutions meant to evolve without starting from scratch each time',
        ],
      },
      {
        title: 'Services, data & system integration',
        intro:
          'Clear agreements between teams and components: what you expose is predictable, safe, and easy to consume.',
        bullets: [
          'Stable, understandable service contracts for integrators',
          'Role-based access, least privilege, and sensible exposure practices',
          'Modeling and persistence aligned to the business problem',
          'Documentation that cuts back-and-forth and speeds adoption',
        ],
      },
      {
        title: 'Analysis & automation',
        intro:
          'From “I do it by hand” to “I measure and repeat it well”: less human error, more signal to decide.',
        bullets: [
          'Treating and validating information so it can be trusted',
          'Automating the repetitive to free time for higher-value work',
          'Indicators tied to goals—not vanity metrics',
          'Processes that are easier to see, audit, and improve',
        ],
      },
      {
        title: 'Software engineering',
        intro:
          'Structure and technical discipline so the product can grow without collapsing—what I build is meant for teams, not just for today.',
        bullets: [
          'Code organized in layers and boundaries that still make sense months later',
          'Tests, review, and conventions that reduce regressions',
          'Repeatable environments and deployments from dev to production',
          'Short delivery cycles focused on value and learning',
        ],
      },
      {
        title: 'Artificial intelligence with purpose',
        intro:
          'AI where it truly helps—assistance and automation that fit the flow, without replacing judgment or accountability.',
        bullets: [
          'Intelligent capabilities embedded in concrete business tasks',
          'Options where cost scales only when needed—without over-architecting',
          'Measurable outcomes and a clear owner for each use case',
          'Data, context, and permissions handled carefully by design',
        ],
      },
      {
        title: 'Production-ready, scalable solutions',
        intro:
          'What I ship is meant for real use: load, continuity, and teams operating the system every day.',
        bullets: [
          'Infrastructure and performance pieces when the context calls for it',
          'Growing users, traffic, and data with a cool head and a plan',
          'Orderly integration with other systems or external clients',
          'Operational visibility: what happens, when, and how to improve it',
        ],
      },
    ],
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
