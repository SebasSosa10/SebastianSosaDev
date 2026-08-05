export type AppLocale = 'es' | 'en';

/** Cada bloque aparece en el modal al pulsar la experiencia. */
export type ExperienceDetail = {
  description: string;
  technologies: readonly string[];
  outcome?: string;
};

/** Mes 1–12; usado para colocar el punto en la línea de tiempo horizontal. */
export type ExperienceTimelineBounds = {
  year: number;
  month: number;
};

/** Logos opcionales: `public/experience-logos/` → `/experience-logos/archivo.webp`. */
export type ExperienceEntry = {
  logoSrc?: string;
  period: string;
  title: string;
  company: string;
  summary: string;
  details: readonly ExperienceDetail[];
  timelineFrom: ExperienceTimelineBounds;
  timelineTo?: ExperienceTimelineBounds;
  /** Si true, el tramo llega hasta la fecha actual en el layout */
  timelineOngoing?: boolean;
};

export type AboutDeliveryCard = {
  tag: string;
  title: string;
  intro: string;
  bullets: readonly string[];
};

export type FeaturedProjectSection = {
  heading: string;
  bullets: readonly string[];
};

export type FeaturedProject = {
  title: string;
  subtitle: string;
  /** Etiqueta superior en tarjeta y modal (tipo o alcance del proyecto). */
  category: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  /** title de imagen para SEO / Google Images */
  imageTitle?: string;
  /** OG image del proyecto (por defecto imageSrc) */
  ogImage?: string;
  /** Enlace al repositorio (opcional) */
  repoUrl?: string;
  /** Enlace a demo en producción (opcional) */
  demoUrl?: string;
  stack: readonly string[];
  sections: readonly FeaturedProjectSection[];
};

export type Messages = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    sections: {
      'sobre-mi': {
        title: string;
        description: string;
        ogTitle: string;
        ogDescription: string;
      };
      experiencia: {
        title: string;
        description: string;
        ogTitle: string;
        ogDescription: string;
      };
      proyectos: {
        title: string;
        description: string;
        ogTitle: string;
        ogDescription: string;
      };
      contacto: {
        title: string;
        description: string;
        ogTitle: string;
        ogDescription: string;
      };
      servicios: {
        title: string;
        description: string;
        ogTitle: string;
        ogDescription: string;
      };
    };
  };
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
    viewProjects: string;
    viewProjectsAria: string;
    contactMe: string;
    contactMeAria: string;
    githubAria: string;
    linkedinAria: string;
    downloadCv: string;
  };
  sections: {
    experienceHeading: string;
    projectsHeading: string;
    projectsStackHeading: string;
    /** Etiqueta de accesibilidad al pulsar una tarjeta de proyecto */
    projectModalHint: string;
    /** Texto auxiliar bajo el resumen en la tarjeta */
    projectsCardTapHint: string;
    projectsViewGithub: string;
    projectsViewGithubAria: string;
    projectsViewDemo: string;
    projectsViewDemoAria: string;
    projectsGridAria: string;
    projectsCarouselPrev: string;
    projectsCarouselNext: string;
    projectsCarouselGoTo: string;
    contactHeading: string;
    contactIntro: readonly string[];
    contactOpenMailAria: string;
    contactOpenPhoneAria: string;
    contactCopyEmail: string;
    contactCopyEmailDone: string;
    contactFormNameLabel: string;
    contactFormEmailLabel: string;
    contactFormSubjectLabel: string;
    contactFormMessageLabel: string;
    contactFormSubmit: string;
    contactFormSuccess: string;
    contactFormError: string;
    techHeading: string;
    techIntro: string;
    techMarqueeAria: string;
    aboutHeading: string;
    aboutLead: readonly string[];
    aboutDeliveryHeading: string;
    aboutDeliveryEyebrow: string;
    aboutDeliveryIntro: string;
    aboutDeliveryAreas: string;
    experienceModalClose: string;
    experienceModalTech: string;
    experienceModalImpact: string;
    experienceModalHint: string;
    experienceTimelinePresent: string;
    experienceTimelinePresentLabel: string;
    experienceScrollHint: string;
    projectsCarouselSwipeHint: string;
  };
  aboutDeliveryCards: readonly AboutDeliveryCard[];
  experienceEntries: readonly ExperienceEntry[];
  featuredProjects: readonly FeaturedProject[];
  footer: {
    blurb: string;
    navHeading: string;
    socialHeading: string;
    navAria: string;
  };
  roleTitles: readonly string[];
  roleTitle: string;
};

function es(): Messages {
  return {
    meta: {
      title: 'Sebastián Sosa | Ingeniero de Software en Armenia, Quindío',
      description:
        'Ingeniero de Software especializado en desarrollo web, aplicaciones empresariales, APIs, Angular, Java, Python y soluciones tecnológicas. Desarrollo software para empresas en Armenia, Quindío, Colombia y clientes internacionales.',
      ogTitle: 'Sebastián Sosa | Ingeniero de Software en Armenia, Quindío',
      ogDescription:
        'Ingeniero de Software y Full Stack Developer en Armenia, Quindío. Desarrollo web, APIs, Angular, Java, Python y software a medida para Colombia y clientes internacionales.',
      sections: {
        'sobre-mi': {
          title:
            'Sobre mí | Sebastián Sosa — Ingeniero de Software en Armenia',
          description:
            'Conoce a Sebastián Sosa, Ingeniero de Software y Desarrollador Full Stack en Armenia, Quindío. Especializado en Angular, Java, Python, APIs, software empresarial y soluciones para clientes locales e internacionales.',
          ogTitle: 'Sobre mí — Sebastián Sosa | Ingeniero de Software',
          ogDescription:
            'Trayectoria y enfoque técnico de un Ingeniero de Software en Armenia, Quindío, Colombia — Full Stack, APIs y software a medida.',
        },
        experiencia: {
          title:
            'Experiencia | Sebastián Sosa — Desarrollador Full Stack Colombia',
          description:
            'Experiencia laboral de Sebastián Sosa en EDEQ Grupo EPM, Konex y Astra Dev: Java, Spring Boot, Python, FastAPI, Angular, DevOps, CI/CD con GitHub y software empresarial.',
          ogTitle: 'Experiencia — Sebastián Sosa | Software Engineer',
          ogDescription:
            'Roles e impacto como Desarrollador Full Stack e Ingeniero de Software en Colombia y remoto.',
        },
        proyectos: {
          title:
            'Portafolio | Sebastián Sosa — Proyectos de Software Colombia',
          description:
            'Portafolio de proyectos de Sebastián Sosa: sitios web profesionales, Angular, Mini-GPT NLP, ERP, APIs REST con Java Spring Boot, Python y desarrollo de aplicaciones web.',
          ogTitle: 'Proyectos — Sebastián Sosa | Full Stack Developer',
          ogDescription:
            'Proyectos reales de desarrollo web, APIs, Angular, Java, Python e inteligencia artificial aplicada.',
        },
        contacto: {
          title:
            'Contacto | Sebastián Sosa — Ingeniero de Software Armenia',
          description:
            'Contacta a Sebastián Sosa, Ingeniero de Software en Armenia, Quindío, Colombia. Disponible para desarrollo de software a medida, aplicaciones web, APIs y proyectos freelance o remotos.',
          ogTitle: 'Contacto — Sebastián Sosa | Software Developer Colombia',
          ogDescription:
            'Escríbeme para desarrollo web, software empresarial, APIs e integraciones. Armenia, Colombia y remoto internacional.',
        },
        servicios: {
          title:
            'Servicios | Sebastián Sosa — Desarrollo de Software a Medida',
          description:
            'Servicios de desarrollo de software en Armenia y Colombia: aplicaciones web, APIs, Angular, Java, Python, LMS, bots con IA, DevOps, CI/CD y software empresarial para clientes locales e internacionales.',
          ogTitle: 'Servicios — Sebastián Sosa | Full Stack Developer Colombia',
          ogDescription:
            'Desarrollo de aplicaciones web, APIs, software empresarial, automatización e integraciones IA para empresas.',
        },
      },
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
        'Desarrollo soluciones de software para negocios nacionales e internacionales. Disponible para proyectos remotos con empresas y clientes.',
      availability: 'DISPONIBLE',
      photoAlt: 'Retrato de {name}',
      viewProjects: 'Ver proyectos',
      viewProjectsAria: 'Ir a la sección de proyectos destacados',
      contactMe: 'Contáctame',
      contactMeAria: 'Ir a la sección de contacto',
      githubAria: 'Perfil de GitHub (se abre en una pestaña nueva)',
      linkedinAria: 'Perfil de LinkedIn (se abre en una pestaña nueva)',
      downloadCv: 'Descargar hoja de vida',
    },
    sections: {
      experienceHeading: 'Experiencia laboral',
      projectsHeading: 'Proyectos destacados',
      projectsStackHeading: 'Stack principal',
      projectModalHint: 'Abrir detalles del proyecto en una ventana emergente',
      projectsCardTapHint: 'Pulsa para ver el detalle completo',
      projectsViewGithub: 'Ver en GitHub',
      projectsViewGithubAria: 'Ver código de {title} en GitHub (se abre en una pestaña nueva)',
      projectsViewDemo: 'Ver sitio',
      projectsViewDemoAria: 'Abrir el sitio web de {title} (se abre en una pestaña nueva)',
      projectsGridAria: 'Carrusel de proyectos destacados',
      projectsCarouselPrev: 'Ver proyectos anteriores',
      projectsCarouselNext: 'Ver proyectos siguientes',
      projectsCarouselGoTo: 'Ir al proyecto',
      contactHeading: '¿Tienes una idea, un proyecto o un reto por resolver?',
      contactIntro: [
        'Me interesa construir soluciones bien pensadas, escalables y enfocadas en generar impacto real. Trabajo de forma remota con clientes en Colombia, Latinoamérica, Norteamérica y Europa.',
        'Disfruto trabajar en productos donde la tecnología, la experiencia y la operación se conectan para resolver problemas de verdad. Desde plataformas empresariales hasta automatización de procesos y sistemas listos para producción.',
        'Si buscas un Ingeniero de Software o Full Stack Developer remoto con visión técnica, enfoque en calidad y capacidad para convertir necesidades complejas en soluciones claras y mantenibles, estaré encantado de conversar.',
      ],
      contactOpenMailAria: 'Abrir cliente de correo para escribir a esta dirección',
      contactOpenPhoneAria: 'Llamar o escribir al número de celular',
      contactCopyEmail: 'Copiar correo',
      contactCopyEmailDone: '¡Copiado!',
      contactFormNameLabel: 'Nombre completo',
      contactFormEmailLabel: 'Email',
      contactFormSubjectLabel: 'Asunto',
      contactFormMessageLabel: 'Mensaje',
      contactFormSubmit: 'Enviar mensaje',
      contactFormSuccess: '¡Mensaje enviado! Te responderé pronto.',
      contactFormError: 'Hubo un error, intenta de nuevo.',
      techHeading: 'Tecnologías con las que trabajo',
      techIntro: 'Herramientas modernas para soluciones modernas',
      techMarqueeAria: 'Lista de tecnologías y herramientas',
      aboutHeading: 'Sobre mí',
      aboutLead: [
        'Ingeniero de Software & Full Stack Developer especializado en el desarrollo de soluciones web escalables, modernas y orientadas a producción.',
        'Cuento con experiencia construyendo plataformas empresariales con Python, FastAPI, Java, Spring Boot, Angular y React, trabajando bajo arquitecturas de microservicios, integración de sistemas corporativos y despliegues automatizados con Docker, Kubernetes y pipelines CI/CD.',
        'Mi enfoque combina arquitectura de software, rendimiento y experiencia de usuario para desarrollar aplicaciones mantenibles, seguras y preparadas para crecer. He participado en proyectos enfocados en automatización de procesos, integración de plataformas empresariales, APIs de alto rendimiento y optimización operativa en entornos reales.',
        'Disfruto transformar necesidades complejas en soluciones técnicas claras, eficientes y alineadas con objetivos de negocio. Desarrollo soluciones de software para negocios nacionales e internacionales.',
      ],
      aboutDeliveryHeading: 'Construyendo software pensado para producción',
      aboutDeliveryEyebrow: 'Stack de servicios',
      aboutDeliveryIntro:
        'Seis áreas de desarrollo de software, aplicaciones web, APIs y soluciones cloud para convertir necesidades de negocio en sistemas escalables — para clientes locales e internacionales, también en modalidad remota.',
      aboutDeliveryAreas: '6 áreas',
      experienceModalClose: 'Cerrar',
      experienceModalTech: 'Tecnologías',
      experienceModalImpact: 'Resultado',
      experienceModalHint: 'Ver detalles, tecnologías y resultados',
      experienceTimelinePresent: 'Hoy',
      experienceTimelinePresentLabel: 'Actualidad',
      experienceScrollHint:
        'Desliza horizontalmente para ver toda la experiencia',
      projectsCarouselSwipeHint: 'Desliza para ver más proyectos',
    },
    aboutDeliveryCards: [
      {
        tag: 'FRONTEND',
        title: 'Frontend Development',
        intro:
          'Interfaces modernas con Angular y TypeScript, claras, funcionales y alineadas al negocio.',
        bullets: [
          'Experiencias multi-dispositivo y Web Applications',
          'Diseño coherente con usuarios y procesos reales',
          'Integración estable con APIs y servicios',
          'UI preparada para crecer en producción',
        ],
      },
      {
        tag: 'API · BACKEND',
        title: 'API & Backend Development',
        intro:
          'APIs REST y backends seguros con Python, Java y arquitecturas mantenibles.',
        bullets: [
          'API Development claro y escalable',
          'Control de acceso y seguridad por roles',
          'Modelado de datos orientado al dominio',
          'Integración con sistemas empresariales',
        ],
      },
      {
        tag: 'FULL STACK',
        title: 'Full Stack Development',
        intro:
          'Desarrollo integral frontend + backend para productos listos para producción.',
        bullets: [
          'Custom Software Development de punta a punta',
          'Angular, Python, Java y TypeScript',
          'Entrega continua con calidad y pruebas',
          'Soluciones alineadas a objetivos de negocio',
        ],
      },
      {
        tag: 'ENTERPRISE',
        title: 'Enterprise Software',
        intro:
          'Software empresarial y transformación digital con arquitectura sólida.',
        bullets: [
          'Arquitectura limpia y mantenible',
          'Buenas prácticas y código desacoplado',
          'Testing, revisión y estándares sólidos',
          'Despliegues reproducibles y CI/CD',
        ],
      },
      {
        tag: 'AI · ML',
        title: 'Inteligencia artificial aplicada',
        intro:
          'IA integrada al negocio: LMS, bots y automatizaciones que generan valor real.',
        bullets: [
          'Creación de LMS con capacidades de IA',
          'Integración de bots y asistentes al negocio',
          'Automatización inteligente de procesos y atención',
          'Casos de uso concretos con resultados medibles',
        ],
      },
      {
        tag: 'CLOUD',
        title: 'Cloud Solutions',
        intro:
          'Infraestructura cloud-ready, DevOps y operación preparada para escalar.',
        bullets: [
          'Contenedores y orquestación con Docker/Kubernetes',
          'Sistemas preparados para alta demanda',
          'Integración ordenada con servicios externos',
          'Observabilidad, monitoreo y rendimiento',
        ],
      },
    ],
    experienceEntries: [
      {
        logoSrc: '/experience-logos/logo_edeq.webp',
        period: 'nov. 2025 — actualidad',
        title: 'Desarrollador de software',
        company: 'EDEQ Grupo EPM',
        timelineFrom: { year: 2025, month: 11 },
        timelineOngoing: true,
        summary:
          'Portal web integral para la Subgerencia de Distribución: centralización de procesos, integración de sistemas y optimización de la operación de más de 10 equipos. Armenia, Quindío · presencial · jornada completa.',
        details: [
          {
            description:
              'Backend con Python y FastAPI bajo arquitectura de microservicios escalable.',
            technologies: ['Python', 'FastAPI'],
          },
          {
            description:
              'Despliegue en Docker y orquestación con Kubernetes para alta disponibilidad.',
            technologies: ['Docker', 'Kubernetes'],
          },
          {
            description:
              'Frontend con Angular: interfaces modernas, dinámicas y centradas en la experiencia de usuario.',
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
          },
          {
            description:
              'PQRS con inteligencia artificial para automatizar respuestas y mejorar tiempos de atención.',
            technologies: ['Python', 'IA'],
          },
          {
            description:
              'Integración de sistemas empresariales (MAXIMO, SAC, SP7) mediante APIs.',
            technologies: ['REST', 'Integración empresarial'],
          },
          {
            description:
              'Módulos contables para la gestión financiera de la subgerencia.',
            technologies: [],
          },
          {
            description:
              'Dashboards interactivos para visualización de datos en tiempo real.',
            technologies: [],
          },
          {
            description:
              'Trabajo bajo Scrum y control de versiones con Git.',
            technologies: ['Scrum', 'Git'],
          },
        ],
      },
      {
        logoSrc: '/experience-logos/Konex.svg',
        period: 'oct. 2025 — dic. 2025',
        title: 'Full Stack Developer',
        company: 'Konex Innovation',
        timelineFrom: { year: 2025, month: 10 },
        timelineTo: { year: 2025, month: 12 },
        summary:
          'Plataforma web de apuestas: rendimiento, seguridad y escalabilidad, con UX fluida. Armenia, Quindío · remoto · profesional independiente.',
        details: [
          {
            description:
              'Backend con Java y Spring Boot: APIs REST seguras y eficientes.',
            technologies: ['Java', 'Spring Boot', 'REST'],
          },
          {
            description:
              'Frontend con Angular: interfaces dinámicas, responsivas y centradas en el usuario.',
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
          },
          {
            description:
              'Lógica de negocio para apuestas, validación de transacciones, control de usuarios e integración de bases de datos.',
            technologies: ['SQL'],
          },
          {
            description:
              'Corrección de bugs críticos, optimización de tiempos de respuesta, autenticación y control de acceso.',
            technologies: [],
          },
          {
            description:
              'Scrum, Azure DevOps (tareas e incidencias) y Git para trabajo colaborativo.',
            technologies: ['Scrum', 'Azure DevOps', 'Git'],
          },
        ],
      },
      {
        logoSrc: '/experience-logos/logo_edeq.webp',
        period: 'abr. 2025 — oct. 2025',
        title: 'Practicante universitario',
        company: 'EDEQ Grupo EPM · Prácticas',
        timelineFrom: { year: 2025, month: 4 },
        timelineTo: { year: 2025, month: 10 },
        summary:
          'Aplicación interna de PQR con Python y FastAPI, arquitectura basada en servicios y control de acceso por roles; automatización y trazabilidad.',
        details: [
          {
            description:
              'APIs REST eficientes y seguras para el flujo de peticiones, quejas y reclamos.',
            technologies: ['Python', 'FastAPI', 'REST'],
            outcome: 'Reducción del 35% en tiempos de respuesta.',
          },
          {
            description:
              'Automatización con Selenium y Pandas para tareas operativas manuales.',
            technologies: ['Selenium', 'Pandas'],
            outcome:
              'Más de 20 horas semanales eliminadas, con ~95% de precisión.',
          },
          {
            description:
              'Optimización de la gestión y trazabilidad de datos del equipo.',
            technologies: ['Python', 'FastAPI'],
            outcome: 'Aumento de productividad en torno a un 40%.',
          },
          {
            description:
              'PEP8, tipado y pruebas unitarias para reducir defectos en producción.',
            technologies: ['PEP8', 'Typing', 'Testing'],
            outcome: 'Disminución del 25% de errores en producción.',
          },
          {
            description:
              'Scrum y Git para entregas iterativas y documentadas.',
            technologies: ['Scrum', 'Git'],
          },
        ],
      },
      {
        logoSrc: '/experience-logos/astra-dev.png',
        period: 'ago. 2024 — actualidad',
        title: 'Fundador y desarrollador Full Stack',
        company: 'Astra Dev',
        timelineFrom: { year: 2024, month: 8 },
        timelineOngoing: true,
        summary:
          'Mi empresa de desarrollo de software: sitios web, APIs, LMS, bots con IA, DevOps, despliegues con GitHub, servidores, CI/CD y soluciones a medida para negocios y profesionales.',
        details: [
          {
            description:
              'Sitio web del Dr. Cristian Valencia para potenciar su visibilidad nacional e internacional y facilitar que pacientes lo encuentren y contacten (ES/EN, SEO, WhatsApp).',
            technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'i18n', 'SEO'],
            outcome:
              'Presencia digital en producción: https://drcristianvalencia.com',
          },
          {
            description:
              'Integración de bots y asistentes con IA para atención, automatización y soporte en negocios y empresas.',
            technologies: ['Python', 'IA', 'APIs', 'WhatsApp · Chatbots'],
          },
          {
            description:
              'Creación e integración de LMS y plataformas de aprendizaje con capacidades de IA para empresas y equipos.',
            technologies: ['LMS', 'IA', 'Angular', 'APIs REST'],
          },
          {
            description:
              'Back-end con Java (Spring Boot) y Python (FastAPI): APIs REST, autenticación JWT e integración con PostgreSQL y MySQL.',
            technologies: [
              'Java',
              'Spring Boot',
              'Python',
              'FastAPI',
              'JWT',
              'PostgreSQL',
              'MySQL',
            ],
          },
          {
            description:
              'Servidores, contenedores y pipelines CI/CD para desplegar y operar sistemas en producción con estabilidad.',
            technologies: ['Docker', 'CI/CD', 'Git', 'Linux', 'Cloud'],
          },
          {
            description:
              'DevOps e integración continua: automatización de builds, tests y despliegues con GitHub (Actions, entornos y flujos de release).',
            technologies: [
              'DevOps',
              'GitHub',
              'GitHub Actions',
              'CI/CD',
              'Docker',
            ],
          },
          {
            description:
              'Optimización de consultas SQL, Clean Code y arquitectura modular en sistemas existentes.',
            technologies: ['SQL', 'Clean Code', 'Git'],
          },
        ],
      },
      {
        logoSrc: '/experience-logos/becall.webp',
        period: 'jul. 2022 — ene. 2023',
        title: 'Técnico de sistemas',
        company: 'Be Call Group',
        timelineFrom: { year: 2022, month: 7 },
        timelineTo: { year: 2023, month: 1 },
        summary:
          'Diseño, desarrollo y mantenimiento de aplicaciones internas para optimizar gestión técnica y experiencia de usuario. Prácticas · presencial.',
        details: [
          {
            description:
              'Aplicaciones de escritorio y backend con alto volumen diario de registros sin errores críticos.',
            technologies: [],
          },
          {
            description:
              'Arquitectura escalable y optimización de recursos.',
            technologies: [],
            outcome:
              'Mejora de alrededor del 30% en eficiencia del sistema.',
          },
          {
            description:
              'Mayor usabilidad de herramientas internas con HTML, CSS y JavaScript.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
          },
          {
            description:
              'Scrum y Git para continuidad del ecosistema tecnológico.',
            technologies: ['Scrum', 'Git'],
            outcome:
              'Contribución a alta disponibilidad (~99,9%) del ecosistema.',
          },
          {
            description:
              'Soporte y documentación de entornos técnicos para continuidad operativa entre equipos.',
            technologies: [],
          },
        ],
      },
    ],
    featuredProjects: [
      {
        title: 'Dr. Cristian Valencia',
        subtitle: 'Presencia digital · Nacional e internacional',
        category: 'Sitio web',
        summary:
          'Sitio web pensado para potenciar la visibilidad del Dr. Cristian Valencia a nivel nacional e internacional, y facilitar que pacientes de Colombia y del exterior lo encuentren y contacten con facilidad. Odontología estética en Armenia, Quindío, con servicios claros, i18n ES/EN, SEO y agenda directa por WhatsApp.',
        imageSrc: '/projects/dr-cristian-valencia-hero.png',
        imageAlt:
          'Dr. Cristian Valencia — showcase del sitio con mockups desktop y móvil, SEO, WhatsApp y multilenguaje',
        imageTitle:
          'Dr. Cristian Valencia — Sitio web odontológico Armenia Quindío',
        ogImage: '/projects/dr-cristian-valencia-hero.png',
        demoUrl: 'https://drcristianvalencia.com',
        stack: [
          'Angular 19',
          'TypeScript',
          'Tailwind CSS',
          'i18n',
          'SEO',
        ],
        sections: [
          {
            heading: 'Objetivo del proyecto',
            bullets: [
              'Mejorar la visibilidad del odontólogo frente a audiencias nacionales e internacionales.',
              'Facilitar que pacientes nuevos lo descubran, confíen y lleguen a él.',
              'Transmitir una marca profesional clara: criterio, detalle y resultados naturales.',
            ],
          },
          {
            heading: 'Funcionalidades desarrolladas',
            bullets: [
              'Landing multipágina: inicio, sobre mí, servicios y contacto.',
              'Detalle de servicios: odontología general, rehabilitación estética, urgencias e Invisalign.',
              'Experiencia bilingüe ES/EN para pacientes locales y del exterior.',
              'CTA de agenda y botón flotante de WhatsApp para contacto inmediato.',
              'Carrusel de testimonios y mapa de la sede en Armenia.',
            ],
          },
          {
            heading: 'Alcance y descubrimiento',
            bullets: [
              'SEO con metadatos, Open Graph, JSON-LD, sitemap y robots.',
              'Diseño responsive orientado a conversión y confianza.',
              'Soporte a turismo odontológico: pacientes de toda Colombia y del exterior.',
            ],
          },
        ],
      },
      {
        title: 'Prototipo de Seguimiento de Pedidos TUL',
        subtitle: 'Prototipo Front-End · Logística',
        category: 'Prototipo front-end',
        summary:
          'Prototipo front-end de seguimiento de pedidos inspirado en la operación logística de TUL, orientado a validar experiencias de navegación y monitoreo desde distintos perfiles operativos. En fase de prototipado funcional con interfaces, rutas dinámicas y datos mock locales, sin backend ni autenticación real.',
        imageSrc: '/projects/Tul.jpg',
        imageAlt:
          'Prototipo TUL — dashboard de pedidos activos, detalle con historial, paneles por rol y vistas móviles',
        repoUrl: 'https://github.com/JilmarV/redisenio-seguimiento-pedidos-tul',
        stack: [
          'React 18',
          'Vite',
          'TypeScript',
          'Tailwind CSS',
          'React Router',
          'Radix UI',
          'Recharts',
          'Material UI Icons',
        ],
        sections: [
          {
            heading: 'Funcionalidades desarrolladas',
            bullets: [
              'Selección de roles de acceso.',
              'Dashboard principal para cliente ferretería.',
              'Seguimiento visual del estado de pedidos.',
              'Historial y trazabilidad detallada.',
              'Alertas de retraso y estados operativos.',
              'Panel de vendedor para pedidos despachados.',
              'Panel de atención al cliente para soporte y búsqueda.',
              'Dashboard logístico con filtros y visualización operativa.',
              'Navegación dinámica entre rutas y vistas.',
            ],
          },
          {
            heading: 'Perfiles operativos simulados',
            bullets: [
              'Cliente ferretería.',
              'Vendedor.',
              'Atención al cliente.',
              'Logística.',
            ],
          },
          {
            heading: 'Aprendizajes clave',
            bullets: [
              'Arquitectura front-end con componentes reutilizables.',
              'Diseño de interfaces modernas orientadas a operaciones logísticas.',
              'Simulación de flujos reales de seguimiento y monitoreo de pedidos.',
            ],
          },
        ],
      },
      {
        title: 'Mini-GPT Sentiment Analysis',
        subtitle: 'Análisis de sentimientos · Transformer',
        category: 'Machine Learning · NLP',
        summary:
          'Mini-GPT en PyTorch para clasificar reseñas de comida como positivas o negativas mediante tokenización, embeddings, atención causal y bloques Transformer decoder inspirados en arquitecturas GPT. Proyecto académico de NLP con entrenamiento y evaluación sobre el dataset BD Food Review (Kaggle).',
        imageSrc: '/projects/mini-gpt-sentiment-nlp.png',
        imageAlt:
          'Mini-GPT — pipeline NLP, arquitectura Transformer, métricas de evaluación y matriz de confusión',
        repoUrl: 'https://github.com/SebasSosa10/mini-gpt-analisis-sentimientos',
        stack: [
          'Python',
          'PyTorch',
          'pandas',
          'NumPy',
          'scikit-learn',
          'matplotlib',
          'pytest',
        ],
        sections: [
          {
            heading: 'Características principales',
            bullets: [
              'Tokenización y construcción de vocabulario.',
              'Embeddings de tokens y posiciones.',
              'Multi-Head Self-Attention con atención causal.',
              'Arquitectura Transformer Decoder.',
              'Clasificación supervisada de sentimiento.',
              'Entrenamiento y evaluación en PyTorch.',
            ],
          },
          {
            heading: 'Resultados obtenidos',
            bullets: [
              'Accuracy: 90.68%.',
              'Macro F1: 90.03%.',
              'Weighted F1: 90.66%.',
              '26 pruebas automatizadas con pytest.',
            ],
          },
          {
            heading: 'Arquitectura del modelo',
            bullets: [
              'Mini-GPT didáctico con 2 capas, 4 cabezas y ~2,5M parámetros.',
              'Vocabulario de 16.612 tokens; contexto máximo de 128.',
              'Clasificación binaria positive/negative sobre reseñas de comida.',
              'Predicción de frases nuevas desde consola o modo interactivo.',
            ],
          },
        ],
      },
      {
        title: 'SegurApp',
        subtitle: 'Plataforma de Seguridad Ciudadana',
        category: 'App móvil',
        summary:
          'Aplicación móvil con Kotlin y Jetpack Compose (Android Studio), orientada a seguridad ciudadana y bienestar comunitario: reportar riesgos y emergencias en tiempo real, ver alertas cercanas y colaborar con la comunidad.',
        imageSrc: '/projects/segurapp-hero.png',
        imageAlt:
          'SegurApp — mockups con mapa de reportes, inicio de sesión, categorías y notificaciones',
        repoUrl: 'https://github.com/AxelG14/SegurApp',
        stack: [
          'Kotlin',
          'Jetpack Compose',
          'Android Studio',
          'Firebase Authentication',
          'Firebase Cloud Messaging',
          'Google Maps / Mapbox',
          'Cloudinary · AWS S3 · GCP Storage',
        ],
        sections: [],
      },
      {
        title: 'Golden Egg',
        subtitle: 'Sistema ERP Lite',
        category: 'ERP · Full Stack',
        summary:
          'ERP lite para una empresa avícola dedicada a comercializar y distribuir huevos. Centraliza inventario, ventas y facturación para digitalizar operaciones y automatizar procesos comerciales clave.',
        imageSrc: '/projects/golden-egg-erp-hero.png',
        imageAlt:
          'Golden Egg ERP — pantallas de panel, inventario, pedidos, facturas e informes',
        repoUrl: 'https://github.com/JilmarV/golden_egg',
        stack: [
          'Angular',
          'Spring Boot',
          'JWT',
          'REST API',
          'PostgreSQL',
          'PDF · Excel',
        ],
        sections: [
          {
            heading: 'Usuarios y seguridad',
            bullets: [
              'Autenticación con JWT (JSON Web Tokens).',
              'Acceso basado en roles: Administrador y Empleado.',
              'Registro, actualización y eliminación de usuarios.',
            ],
          },
          {
            heading: 'Inventarios y productos',
            bullets: [
              'Operaciones CRUD para huevos y catálogo.',
              'Inventarios con registros de entradas, salidas y pérdidas.',
              'Gestión de proveedores con contacto y vínculo a productos.',
            ],
          },
          {
            heading: 'Pedidos, facturación y pagos',
            bullets: [
              'Pedidos de ventas con seguimiento de estado.',
              'Generación de facturas y registro de pagos.',
              'Varios métodos de pago y control de fechas de vencimiento.',
            ],
          },
          {
            heading: 'Informes y monitoreo',
            bullets: [
              'Informes financieros mensuales automatizados.',
              'Exportación a PDF y Excel.',
              'Informes de ventas, inventarios, proveedores y clientes.',
            ],
          },
        ],
      },
      {
        title: 'Agenda de Contactos',
        subtitle: 'Aplicación de escritorio · Agenda Digital',
        category: 'App de escritorio',
        summary:
          'Aplicación de escritorio en Python con SQLite y Tkinter para gestionar contactos personales, organizarlos por categorías y marcar favoritos; interfaz clara y flujos para búsqueda y filtrado.',
        imageSrc: '/projects/agenda-contactos-hero.png',
        imageAlt:
          'Agenda de Contactos — inicio de sesión, lista de contactos, formulario de alta, búsqueda y categorías',
        repoUrl: 'https://github.com/SebasSosa10/Agenda_de_Contactos',
        stack: ['Python', 'Tkinter', 'SQLite', 'Git'],
        sections: [
          {
            heading: 'Registro y autenticación',
            bullets: [
              'Registro de usuarios con validación de datos.',
              'Inicio de sesión con autenticación básica segura.',
            ],
          },
          {
            heading: 'Gestión de contactos',
            bullets: [
              'Alta, búsqueda, eliminación y edición de contactos.',
              'Filtros por nombre, número y favoritos.',
            ],
          },
          {
            heading: 'Almacenamiento',
            bullets: [
              'SQLite como almacenamiento persistente para contactos y usuarios.',
            ],
          },
          {
            heading: 'Uso',
            bullets: [
              'Ejecutar Main.py para abrir la pantalla de inicio de sesión.',
              'Registrarse o iniciar sesión con una cuenta existente.',
              'Agregar contactos y organizarlos en la agenda.',
              'Usar filtros para localizar contactos con rapidez.',
            ],
          },
        ],
      },
      {
        title: 'Plataforma de Blogs',
        subtitle: 'API REST con Spring Boot',
        category: 'Backend · API REST',
        summary:
          'Backend de una plataforma de blogs en Spring Boot: gestión de usuarios y publicaciones, interacción entre autores y un modelo de roles (ADMIN / AUTHOR) para administrar el contenido con claridad y control de acceso.',
        imageSrc: '/projects/blog-platform-hero.png',
        imageAlt:
          'Diagrama técnico: arquitectura Spring Boot, JWT, endpoints REST y modelo de datos del blog',
        repoUrl: 'https://github.com/SebasSosa10/Plataforma_de_Blogs',
        stack: [
          'Java',
          'Spring Boot',
          'Spring Security',
          'JWT',
          'Spring Data JPA',
          'Hibernate',
          'MySQL · PostgreSQL',
          'Maven',
        ],
        sections: [
          {
            heading: 'Usuarios y seguridad',
            bullets: [
              'Registro e inicio de sesión con JWT.',
              'Roles ADMIN (usuarios y contenido) y AUTHOR (crear y administrar sus publicaciones).',
              'Perfiles de usuario editables.',
            ],
          },
          {
            heading: 'Publicaciones y administración',
            bullets: [
              'CRUD de publicaciones con categorías y etiquetas; publicar o despublicar.',
              'Panel de administración para usuarios, publicaciones y comentarios.',
            ],
          },
          {
            heading: 'Interacción y búsqueda',
            bullets: [
              'Comentarios con moderación por administradores.',
              'Reacciones «me gusta» y «no me gusta».',
              'Búsqueda y filtros por autor, categoría, fecha y popularidad.',
            ],
          },
        ],
      },
    ],
    footer: {
      blurb:
        'Ingeniero de Software en Armenia, Quindío, Colombia. Construyo software a medida, aplicaciones web y APIs para negocios nacionales e internacionales — disponible para proyectos remotos en Latinoamérica, Norteamérica y Europa.',
      navHeading: 'Navegación',
      socialHeading: 'Redes',
      navAria: 'Enlaces a secciones del portafolio',
    },
    roleTitles: [
      'Ingeniero de software',
      'Desarrollador Full Stack',
      'Remote Software Engineer',
    ],
    roleTitle: 'Ingeniero de software',
  };
}

function en(): Messages {
  return {
    meta: {
      title: 'Sebastian Sosa | Software Engineer in Armenia, Quindío',
      description:
        'Software Engineer specialized in web development, enterprise applications, APIs, Angular, Java, Python, and technology solutions. Building software for companies in Armenia, Quindío, Colombia, and international clients.',
      ogTitle: 'Sebastian Sosa | Software Engineer in Armenia, Quindío',
      ogDescription:
        'Software Engineer and Full Stack Developer in Armenia, Quindío. Web apps, APIs, Angular, Java, Python, and custom software for Colombia and international clients.',
      sections: {
        'sobre-mi': {
          title: 'About | Sebastian Sosa — Software Engineer in Armenia',
          description:
            'Meet Sebastian Sosa, Software Engineer and Full Stack Developer in Armenia, Quindío. Specialized in Angular, Java, Python, APIs, enterprise software, and solutions for local and international clients.',
          ogTitle: 'About — Sebastian Sosa | Software Engineer',
          ogDescription:
            'Background and technical focus of a Software Engineer in Armenia, Quindío, Colombia — Full Stack, APIs, and custom software.',
        },
        experiencia: {
          title:
            'Experience | Sebastian Sosa — Full Stack Developer Colombia',
          description:
            'Work experience of Sebastian Sosa at EDEQ Grupo EPM, Konex, and Astra Dev: Java, Spring Boot, Python, FastAPI, Angular, DevOps, GitHub CI/CD, and enterprise software.',
          ogTitle: 'Experience — Sebastian Sosa | Software Engineer',
          ogDescription:
            'Roles and impact as a Full Stack Developer and Software Engineer in Colombia and remote.',
        },
        proyectos: {
          title: 'Portfolio | Sebastian Sosa — Software Projects Colombia',
          description:
            'Featured projects by Sebastian Sosa: professional websites, Angular, Mini-GPT NLP, ERP, Java Spring Boot REST APIs, Python, and web application development.',
          ogTitle: 'Projects — Sebastian Sosa | Full Stack Developer',
          ogDescription:
            'Real-world projects in web development, APIs, Angular, Java, Python, and applied AI.',
        },
        contacto: {
          title: 'Contact | Sebastian Sosa — Software Engineer Armenia',
          description:
            'Contact Sebastian Sosa, Software Engineer in Armenia, Quindío, Colombia. Available for custom software, web apps, APIs, and freelance or remote projects.',
          ogTitle: 'Contact — Sebastian Sosa | Software Developer Colombia',
          ogDescription:
            'Reach out for web development, enterprise software, APIs, and integrations. Armenia, Colombia, and international remote.',
        },
        servicios: {
          title: 'Services | Sebastian Sosa — Custom Software Development',
          description:
            'Software development services in Armenia and Colombia: web apps, APIs, Angular, Java, Python, LMS, AI bots, DevOps, CI/CD, and enterprise software for local and international clients.',
          ogTitle: 'Services — Sebastian Sosa | Full Stack Developer Colombia',
          ogDescription:
            'Web application development, APIs, enterprise software, automation, and AI integrations for businesses.',
        },
      },
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
        'I build software solutions for national and international businesses. Available for remote projects with companies and clients.',
      availability: 'AVAILABLE',
      photoAlt: 'Portrait of {name}',
      viewProjects: 'View projects',
      viewProjectsAria: 'Go to the featured projects section',
      contactMe: 'Contact me',
      contactMeAria: 'Go to the contact section',
      githubAria: 'GitHub profile (opens in a new tab)',
      linkedinAria: 'LinkedIn profile (opens in a new tab)',
      downloadCv: 'Download resume',
    },
    sections: {
      experienceHeading: 'Work experience',
      projectsHeading: 'Featured projects',
      projectsStackHeading: 'Core stack',
      projectModalHint: 'Open full project details in a dialog',
      projectsCardTapHint: 'Click for full details',
      projectsViewGithub: 'View on GitHub',
      projectsViewGithubAria: 'View {title} source code on GitHub (opens in a new tab)',
      projectsViewDemo: 'Visit site',
      projectsViewDemoAria: 'Open the website for {title} (opens in a new tab)',
      projectsGridAria: 'Featured projects carousel',
      projectsCarouselPrev: 'Show previous projects',
      projectsCarouselNext: 'Show next projects',
      projectsCarouselGoTo: 'Go to project',
      contactHeading: 'Have an idea, a project, or a challenge to solve?',
      contactIntro: [
        'I am interested in building well-thought-out, scalable solutions focused on generating real impact. I work remotely with clients in Colombia, Latin America, North America and Europe.',
        'I enjoy working on products where technology, experience, and operations connect to solve real problems—from enterprise platforms to process automation and production-ready systems.',
        'If you are looking for a remote Software Engineer or Full Stack Developer with technical vision, a focus on quality, and the ability to turn complex needs into clear, maintainable solutions, I would be happy to talk.',
      ],
      contactOpenMailAria: 'Open your email app to write to this address',
      contactOpenPhoneAria: 'Call or message this mobile number',
      contactCopyEmail: 'Copy email',
      contactCopyEmailDone: 'Copied!',
      contactFormNameLabel: 'Full name',
      contactFormEmailLabel: 'Email',
      contactFormSubjectLabel: 'Subject',
      contactFormMessageLabel: 'Message',
      contactFormSubmit: 'Send message',
      contactFormSuccess: 'Message sent! I will get back to you soon.',
      contactFormError: 'Something went wrong. Please try again.',
      techHeading: 'Technologies I Work With',
      techIntro: 'Modern tools for modern solutions',
      techMarqueeAria: 'Technologies and tools list',
      aboutHeading: 'About me',
      aboutLead: [
        'Software Engineer & Full Stack Developer specialized in building scalable, modern, production-oriented web solutions.',
        'I have experience building enterprise platforms with Python, FastAPI, Java, Spring Boot, Angular, and React, working with microservices architectures, corporate system integration, and automated deployments with Docker, Kubernetes, and CI/CD pipelines.',
        'My approach combines software architecture, performance, and user experience to develop maintainable, secure applications built to grow. I have contributed to projects focused on process automation, enterprise platform integration, high-performance APIs, and operational optimization in real-world environments.',
        'I enjoy turning complex needs into clear, efficient technical solutions aligned with business goals. I develop software solutions for national and international businesses.',
      ],
      aboutDeliveryHeading: 'Building software built for production',
      aboutDeliveryEyebrow: 'Service stack',
      aboutDeliveryIntro:
        'Six areas of software development, web applications, APIs and cloud solutions—turning business needs into scalable systems for local and international clients, including remote engagements.',
      aboutDeliveryAreas: '6 areas',
      experienceModalClose: 'Close',
      experienceModalTech: 'Technologies',
      experienceModalImpact: 'Outcome',
      experienceModalHint: 'View details, technologies, and results',
      experienceTimelinePresent: 'Now',
      experienceTimelinePresentLabel: 'Present',
      experienceScrollHint:
        'Swipe horizontally to see the full timeline',
      projectsCarouselSwipeHint: 'Swipe to see more projects',
    },
    aboutDeliveryCards: [
      {
        tag: 'FRONTEND',
        title: 'Frontend Development',
        intro:
          'Modern Angular and TypeScript interfaces that are clear, functional, and business-aligned.',
        bullets: [
          'Multi-device experiences and web applications',
          'Design coherent with users and real-world processes',
          'Stable integration with APIs and services',
          'UI ready to grow in production',
        ],
      },
      {
        tag: 'API · BACKEND',
        title: 'API & Backend Development',
        intro:
          'Secure REST APIs and backends with Python, Java, and maintainable architecture.',
        bullets: [
          'Clear, scalable API development',
          'Role-based access control and security',
          'Domain-oriented data modeling',
          'Integration with enterprise systems',
        ],
      },
      {
        tag: 'FULL STACK',
        title: 'Full Stack Development',
        intro:
          'End-to-end frontend + backend delivery for production-ready products.',
        bullets: [
          'Custom software development from idea to release',
          'Angular, Python, Java and TypeScript',
          'Continuous delivery with quality and testing',
          'Solutions aligned with business goals',
        ],
      },
      {
        tag: 'ENTERPRISE',
        title: 'Enterprise Software',
        intro:
          'Enterprise software and digital transformation with solid architecture.',
        bullets: [
          'Clean, maintainable architecture',
          'Best practices and decoupled code',
          'Testing, review, and solid standards',
          'Reproducible deployments and CI/CD',
        ],
      },
      {
        tag: 'AI · ML',
        title: 'Applied artificial intelligence',
        intro:
          'AI integrated into the business: LMS platforms, bots, and automations that deliver real value.',
        bullets: [
          'Building LMS platforms with AI capabilities',
          'Integrating bots and assistants into business workflows',
          'Intelligent automation for processes and support',
          'Concrete use cases with measurable outcomes',
        ],
      },
      {
        tag: 'CLOUD',
        title: 'Cloud Solutions',
        intro:
          'Cloud-ready infrastructure, DevOps, and operations prepared to scale.',
        bullets: [
          'Containers and orchestration with Docker/Kubernetes',
          'Systems prepared for high demand',
          'Orderly integration with external services',
          'Observability, monitoring, and performance',
        ],
      },
    ],
    experienceEntries: [
      {
        logoSrc: '/experience-logos/logo_edeq.webp',
        period: 'Nov 2025 — present',
        title: 'Software developer',
        company: 'EDEQ Grupo EPM',
        timelineFrom: { year: 2025, month: 11 },
        timelineOngoing: true,
        summary:
          'End-to-end web portal for the Distribution sub-management: process centralization, enterprise system integration, and operations for 10+ teams. Armenia, Quindío · on-site · full-time.',
        details: [
          {
            description:
              'Python and FastAPI backend with a scalable microservices architecture.',
            technologies: ['Python', 'FastAPI'],
          },
          {
            description:
              'Containerized services with Docker and Kubernetes orchestration for high availability.',
            technologies: ['Docker', 'Kubernetes'],
          },
          {
            description:
              'Angular frontend: modern, dynamic UIs focused on user experience.',
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
          },
          {
            description:
              'PQRS flows with AI to automate responses and shorten handling times.',
            technologies: ['Python', 'AI'],
          },
          {
            description:
              'Integration with enterprise systems (MAXIMO, SAC, SP7) via APIs.',
            technologies: ['REST', 'Enterprise integration'],
          },
          {
            description:
              'Accounting modules for the sub-management’s financial operations.',
            technologies: [],
          },
          {
            description:
              'Interactive dashboards for near real-time data visualization.',
            technologies: [],
          },
          {
            description:
              'Scrum and Git for delivery and version control.',
            technologies: ['Scrum', 'Git'],
          },
        ],
      },
      {
        logoSrc: '/experience-logos/Konex.svg',
        period: 'Oct 2025 — Dec 2025',
        title: 'Full Stack Developer',
        company: 'Konex Innovation',
        timelineFrom: { year: 2025, month: 10 },
        timelineTo: { year: 2025, month: 12 },
        summary:
          'Betting web platform focused on performance, security, and scale with a smooth UX. Armenia, Quindío · remote · independent contractor.',
        details: [
          {
            description:
              'Java and Spring Boot backend with secure, efficient REST APIs.',
            technologies: ['Java', 'Spring Boot', 'REST'],
          },
          {
            description:
              'Angular frontend: dynamic, responsive, user-centered interfaces.',
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
          },
          {
            description:
              'Business logic for betting, transaction validation, user controls, and database integration.',
            technologies: ['SQL'],
          },
          {
            description:
              'Critical bug fixes, faster response times, authentication, and access control.',
            technologies: [],
          },
          {
            description:
              'Scrum, Azure DevOps for work items and incidents, and Git for collaboration.',
            technologies: ['Scrum', 'Azure DevOps', 'Git'],
          },
        ],
      },
      {
        logoSrc: '/experience-logos/logo_edeq.webp',
        period: 'Apr 2025 — Oct 2025',
        title: 'University intern',
        company: 'EDEQ Grupo EPM · Internship',
        timelineFrom: { year: 2025, month: 4 },
        timelineTo: { year: 2025, month: 10 },
        summary:
          'Internal PQR app with Python and FastAPI, service-based architecture and role-based access; automation and traceability.',
        details: [
          {
            description:
              'Efficient, secure REST APIs for petitions, complaints, and claims.',
            technologies: ['Python', 'FastAPI', 'REST'],
            outcome: '35% faster response times.',
          },
          {
            description:
              'Automation with Selenium and Pandas for manual operational work.',
            technologies: ['Selenium', 'Pandas'],
            outcome:
              '20+ hours per week removed with ~95% accuracy.',
          },
          {
            description:
              'Better data handling and traceability for the team.',
            technologies: ['Python', 'FastAPI'],
            outcome: 'Roughly 40% productivity gain.',
          },
          {
            description:
              'PEP8, typing, and unit tests to reduce production defects.',
            technologies: ['PEP8', 'Typing', 'Testing'],
            outcome: '25% fewer production errors.',
          },
          {
            description:
              'Scrum and Git for iterative, documented releases.',
            technologies: ['Scrum', 'Git'],
          },
        ],
      },
      {
        logoSrc: '/experience-logos/astra-dev.png',
        period: 'Aug 2024 — present',
        title: 'Founder & Full Stack developer',
        company: 'Astra Dev',
        timelineFrom: { year: 2024, month: 8 },
        timelineOngoing: true,
        summary:
          'My software company: websites, APIs, LMS platforms, AI bots, DevOps, GitHub-based deployments, servers, CI/CD, and custom solutions for businesses and professionals.',
        details: [
          {
            description:
              'Dr. Cristian Valencia website to boost national and international visibility and make it easy for patients to find and reach him (ES/EN, SEO, WhatsApp).',
            technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'i18n', 'SEO'],
            outcome:
              'Live digital presence: https://drcristianvalencia.com',
          },
          {
            description:
              'AI bot and assistant integrations for customer support, automation, and business workflows.',
            technologies: ['Python', 'AI', 'APIs', 'WhatsApp · Chatbots'],
          },
          {
            description:
              'Building and integrating LMS platforms with AI capabilities for companies and teams.',
            technologies: ['LMS', 'AI', 'Angular', 'REST APIs'],
          },
          {
            description:
              'Back-end with Java (Spring Boot) and Python (FastAPI): REST APIs, JWT auth, and PostgreSQL/MySQL integration.',
            technologies: [
              'Java',
              'Spring Boot',
              'Python',
              'FastAPI',
              'JWT',
              'PostgreSQL',
              'MySQL',
            ],
          },
          {
            description:
              'Servers, containers, and CI/CD pipelines to deploy and operate production systems reliably.',
            technologies: ['Docker', 'CI/CD', 'Git', 'Linux', 'Cloud'],
          },
          {
            description:
              'DevOps and continuous integration: automated builds, tests, and deployments with GitHub (Actions, environments, and release workflows).',
            technologies: [
              'DevOps',
              'GitHub',
              'GitHub Actions',
              'CI/CD',
              'Docker',
            ],
          },
          {
            description:
              'SQL tuning, Clean Code, and modular architecture on existing systems.',
            technologies: ['SQL', 'Clean Code', 'Git'],
          },
        ],
      },
      {
        logoSrc: '/experience-logos/becall.webp',
        period: 'Jul 2022 — Jan 2023',
        title: 'Systems technician',
        company: 'Be Call Group',
        timelineFrom: { year: 2022, month: 7 },
        timelineTo: { year: 2023, month: 1 },
        summary:
          'Design, development, and maintenance of internal apps to improve technical operations and UX. Internship · on-site.',
        details: [
          {
            description:
              'Desktop and backend apps handling large daily record volumes without critical failures.',
            technologies: [],
          },
          {
            description:
              'Scalable architecture and resource optimization.',
            technologies: [],
            outcome: 'About 30% better system efficiency.',
          },
          {
            description:
              'Improved internal tool usability with HTML, CSS, and JavaScript.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
          },
          {
            description:
              'Scrum and Git to keep the technology ecosystem running.',
            technologies: ['Scrum', 'Git'],
            outcome:
              'Contributed to ~99.9% ecosystem availability.',
          },
          {
            description:
              'Technical environment support and documentation for operational continuity across teams.',
            technologies: [],
          },
        ],
      },
    ],
    featuredProjects: [
      {
        title: 'Dr. Cristian Valencia',
        subtitle: 'Digital presence · National & international',
        category: 'Website',
        summary:
          'Website built to strengthen Dr. Cristian Valencia’s visibility nationally and internationally, and to make it easy for patients in Colombia and abroad to find and reach him. Aesthetic dentistry in Armenia, Quindío, with clear services, ES/EN i18n, SEO, and direct WhatsApp booking.',
        imageSrc: '/projects/dr-cristian-valencia-hero.png',
        imageAlt:
          'Dr. Cristian Valencia — site showcase with desktop and mobile mockups, SEO, WhatsApp, and multilingual support',
        imageTitle:
          'Dr. Cristian Valencia — Dental website Armenia Quindío',
        ogImage: '/projects/dr-cristian-valencia-hero.png',
        demoUrl: 'https://drcristianvalencia.com',
        stack: [
          'Angular 19',
          'TypeScript',
          'Tailwind CSS',
          'i18n',
          'SEO',
        ],
        sections: [
          {
            heading: 'Project goal',
            bullets: [
              'Improve the dentist’s visibility for national and international audiences.',
              'Help new patients discover him, build trust, and get in touch easily.',
              'Present a clear professional brand: judgment, detail, and natural results.',
            ],
          },
          {
            heading: 'Features built',
            bullets: [
              'Multi-page landing: home, about, services, and contact.',
              'Service detail pages: general dentistry, aesthetic rehab, emergencies, and Invisalign.',
              'Bilingual ES/EN experience for local and international patients.',
              'Booking CTAs and floating WhatsApp button for immediate contact.',
              'Testimonials carousel and map of the Armenia clinic.',
            ],
          },
          {
            heading: 'Reach & discoverability',
            bullets: [
              'SEO with metadata, Open Graph, JSON-LD, sitemap, and robots.',
              'Responsive design focused on conversion and trust.',
              'Support for dental tourism: patients from across Colombia and abroad.',
            ],
          },
        ],
      },
      {
        title: 'TUL Order Tracking Prototype',
        subtitle: 'Front-End prototype · Logistics',
        category: 'Front-end prototype',
        summary:
          'Front-end order tracking prototype inspired by TUL’s logistics operations, built to validate navigation and monitoring experiences across operational roles. Functional prototyping phase with UI modules, dynamic routing, and local mock data—no backend or real authentication.',
        imageSrc: '/projects/Tul.jpg',
        imageAlt:
          'TUL prototype — active orders dashboard, order detail with history, role panels, and mobile views',
        repoUrl: 'https://github.com/JilmarV/redisenio-seguimiento-pedidos-tul',
        stack: [
          'React 18',
          'Vite',
          'TypeScript',
          'Tailwind CSS',
          'React Router',
          'Radix UI',
          'Recharts',
          'Material UI Icons',
        ],
        sections: [
          {
            heading: 'Features built',
            bullets: [
              'Role-based entry selection.',
              'Main dashboard for hardware store customers.',
              'Visual order status tracking.',
              'Detailed history and traceability.',
              'Delay alerts and operational statuses.',
              'Seller panel for dispatched orders.',
              'Customer support panel with search.',
              'Logistics dashboard with filters and operational views.',
              'Dynamic navigation across routes and views.',
            ],
          },
          {
            heading: 'Simulated operational roles',
            bullets: [
              'Hardware store customer.',
              'Seller.',
              'Customer support.',
              'Logistics.',
            ],
          },
          {
            heading: 'Key takeaways',
            bullets: [
              'Front-end architecture with reusable components.',
              'Modern UI design for logistics operations.',
              'Simulation of real-world order tracking and monitoring flows.',
            ],
          },
        ],
      },
      {
        title: 'Mini-GPT Sentiment Analysis',
        subtitle: 'Sentiment analysis · Transformer',
        category: 'Machine Learning · NLP',
        summary:
          'PyTorch Mini-GPT that classifies food reviews as positive or negative using tokenization, embeddings, causal attention, and GPT-inspired Transformer decoder blocks. Academic NLP project trained and evaluated on the BD Food Review dataset (Kaggle).',
        imageSrc: '/projects/mini-gpt-sentiment-nlp.png',
        imageAlt:
          'Mini-GPT — NLP pipeline, Transformer architecture, evaluation metrics, and confusion matrix',
        repoUrl: 'https://github.com/SebasSosa10/mini-gpt-analisis-sentimientos',
        stack: [
          'Python',
          'PyTorch',
          'pandas',
          'NumPy',
          'scikit-learn',
          'matplotlib',
          'pytest',
        ],
        sections: [
          {
            heading: 'Key features',
            bullets: [
              'Tokenization and vocabulary building.',
              'Token and positional embeddings.',
              'Multi-Head Self-Attention with causal masking.',
              'Transformer Decoder architecture.',
              'Supervised sentiment classification.',
              'PyTorch training and evaluation pipeline.',
            ],
          },
          {
            heading: 'Results',
            bullets: [
              'Accuracy: 90.68%.',
              'Macro F1: 90.03%.',
              'Weighted F1: 90.66%.',
              '26 automated tests with pytest.',
            ],
          },
          {
            heading: 'Model architecture',
            bullets: [
              'Educational Mini-GPT with 2 layers, 4 heads, and ~2.5M parameters.',
              '16,612-token vocabulary; 128-token max context.',
              'Binary positive/negative classification on food reviews.',
              'Inference for new sentences via CLI or interactive mode.',
            ],
          },
        ],
      },
      {
        title: 'SegurApp',
        subtitle: 'Citizen Safety Platform',
        category: 'Mobile app',
        summary:
          'Mobile app with Kotlin and Jetpack Compose (Android Studio), focused on citizen safety and community wellbeing: report risks and emergencies in real time, see nearby alerts, and collaborate with the community.',
        imageSrc: '/projects/segurapp-hero.png',
        imageAlt:
          'SegurApp mockups showing map, login, incident categories, and notifications',
        repoUrl: 'https://github.com/AxelG14/SegurApp',
        stack: [
          'Kotlin',
          'Jetpack Compose',
          'Android Studio',
          'Firebase Authentication',
          'Firebase Cloud Messaging',
          'Google Maps / Mapbox',
          'Cloudinary · AWS S3 · GCP Storage',
        ],
        sections: [],
      },
      {
        title: 'Golden Egg',
        subtitle: 'Lite ERP system',
        category: 'ERP · Full Stack',
        summary:
          'A lightweight ERP for a poultry business focused on marketing and distributing eggs. It centralizes inventory, sales, and billing to digitize ops and automate core commercial workflows.',
        imageSrc: '/projects/golden-egg-erp-hero.png',
        imageAlt:
          'Golden Egg ERP — dashboard, inventory, orders, invoicing, and reports',
        repoUrl: 'https://github.com/JilmarV/golden_egg',
        stack: [
          'Angular',
          'Spring Boot',
          'JWT',
          'REST API',
          'PostgreSQL',
          'PDF · Excel',
        ],
        sections: [
          {
            heading: 'Users & security',
            bullets: [
              'Authentication with JWT (JSON Web Tokens).',
              'Role-based access: Administrator and Employee.',
              'User registration, updates, and removal.',
            ],
          },
          {
            heading: 'Inventory & products',
            bullets: [
              'Full CRUD for eggs and catalog items.',
              'Stock tracking with inbound, outbound, and loss entries.',
              'Supplier management with contact data and linked products.',
            ],
          },
          {
            heading: 'Orders, billing & payments',
            bullets: [
              'Sales orders with status tracking.',
              'Invoice generation and payment recording.',
              'Multiple payment methods and due dates.',
            ],
          },
          {
            heading: 'Reports & monitoring',
            bullets: [
              'Automated monthly financial reports.',
              'Export to PDF and Excel.',
              'Reports on sales, inventory, suppliers, and customers.',
            ],
          },
        ],
      },
      {
        title: 'Contact Agenda',
        subtitle: 'Desktop app · Digital agenda',
        category: 'Desktop app',
        summary:
          'A desktop Python app with SQLite and Tkinter to manage personal contacts, group them into categories, and mark favorites—with a straightforward UI plus search and filter flows.',
        imageSrc: '/projects/agenda-contactos-hero.png',
        imageAlt:
          'Contact agenda app — login, contact list, add form, search, and categories',
        repoUrl: 'https://github.com/SebasSosa10/Agenda_de_Contactos',
        stack: ['Python', 'Tkinter', 'SQLite', 'Git'],
        sections: [
          {
            heading: 'Sign-up & authentication',
            bullets: [
              'User registration with data validation.',
              'Secure login with basic authentication.',
            ],
          },
          {
            heading: 'Contact management',
            bullets: [
              'Create, search, delete, and update contacts.',
              'Filters by name, phone number, and favorites.',
            ],
          },
          {
            heading: 'Persistence',
            bullets: [
              'SQLite backend for persistent contacts and users.',
            ],
          },
          {
            heading: 'Getting started',
            bullets: [
              'Run Main.py to open the sign-in screen.',
              'Register a new account or sign in.',
              'Add contacts and keep them organized in the agenda.',
              'Use filters to find contacts quickly.',
            ],
          },
        ],
      },
      {
        title: 'Blog platform',
        subtitle: 'REST API with Spring Boot',
        category: 'Backend · REST API',
        summary:
          'Spring Boot backend for blogs: manage users and posts, author interactions, and ADMIN / AUTHOR roles—keeping content workflows secure and predictable.',
        imageSrc: '/projects/blog-platform-hero.png',
        imageAlt:
          'Technical overview: Spring Boot layers, JWT flow, REST endpoints, and domain model',
        repoUrl: 'https://github.com/SebasSosa10/Plataforma_de_Blogs',
        stack: [
          'Java',
          'Spring Boot',
          'Spring Security',
          'JWT',
          'Spring Data JPA',
          'Hibernate',
          'MySQL · PostgreSQL',
          'Maven',
        ],
        sections: [
          {
            heading: 'Users & security',
            bullets: [
              'Sign-up and login with JWT.',
              'ADMIN manages users and content; AUTHOR owns their posts.',
              'Editable user profiles.',
            ],
          },
          {
            heading: 'Posts & administration',
            bullets: [
              'Full CRUD with categories and tags; publish/unpublish workflows.',
              'Management panel for users, posts, and comments.',
            ],
          },
          {
            heading: 'Engagement & search',
            bullets: [
              'Comments moderated by admins.',
              'Like/dislike reactions.',
              'Search and filters by author, category, date, and popularity.',
            ],
          },
        ],
      },
    ],
    footer: {
      blurb:
        'Software Engineer based in Armenia, Quindío, Colombia. I build custom software, web applications and APIs for national and international businesses — available for remote projects across Latin America, North America and Europe.',
      navHeading: 'Navigate',
      socialHeading: 'Social',
      navAria: 'Portfolio section links',
    },
    roleTitles: [
      'Software Engineer',
      'Full Stack Developer',
      'Remote Software Engineer',
    ],
    roleTitle: 'Software Engineer',
  };
}

const byLang: Record<AppLocale, Messages> = {
  es: es(),
  en: en(),
};

/** Acceso por ruta con puntos, p. ej. `sections.experienceHeading` */
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
