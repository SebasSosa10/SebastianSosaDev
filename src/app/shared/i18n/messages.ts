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
  repoUrl: string;
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
      title:
        'Joan Sebastian Sosa Bedoya — Ingeniero de Software | Desarrollador Full Stack | Armenia Quindío Colombia',
      description:
        'Joan Sebastian Sosa Bedoya — Ingeniero de software y Desarrollador Full Stack en Armenia, Quindío, Colombia. Portafolio profesional con experiencia en Java, Spring Boot, Python, FastAPI, Angular, Docker y Kubernetes.',
      ogTitle:
        'Joan Sebastian Sosa Bedoya — Ingeniero de Software | Desarrollador Full Stack',
      ogDescription:
        'Portafolio de Sebastian Sosa: desarrollo web escalable con Java, Python, Angular y cloud. Armenia, Quindío, Colombia.',
      sections: {
        'sobre-mi': {
          title: 'Sobre mí | Joan Sebastian Sosa Bedoya — Ingeniero de Software',
          description:
            'Conoce a Joan Sebastian Sosa Bedoya, Ingeniero de software y Desarrollador Full Stack en Armenia, Quindío. Especializado en arquitectura hexagonal, microservicios y soluciones en producción.',
          ogTitle: 'Sobre mí — Sebastian Sosa | Ingeniero de Software Full Stack',
          ogDescription:
            'Trayectoria, enfoque técnico y áreas de servicio de Joan Sebastian Sosa Bedoya, desarrollador de software en Colombia.',
        },
        experiencia: {
          title: 'Experiencia laboral | Sebastian Sosa — Desarrollador Full Stack',
          description:
            'Experiencia profesional de Joan Sebastian Sosa en EDEQ Grupo EPM, Konex, Astra Dev y más. Java, Spring Boot, Python, FastAPI, Angular y despliegues con Docker y Kubernetes.',
          ogTitle: 'Experiencia — Joan Sebastian Sosa Bedoya',
          ogDescription:
            'Roles, logros e impacto medible en empresas de Colombia como desarrollador backend y full stack.',
        },
        proyectos: {
          title: 'Proyectos destacados | Sebastian Sosa — Portafolio Full Stack',
          description:
            'Proyectos de Joan Sebastian Sosa Bedoya: portafolio Angular SSR, Mini-GPT NLP, ERP Golden Egg, APIs REST con Spring Boot y más. Código en GitHub y demos en vivo.',
          ogTitle: 'Proyectos — Sebastian Sosa | Desarrollador Full Stack',
          ogDescription:
            'Portafolio de proyectos reales con stack moderno: Angular, Python, Java, React y machine learning.',
        },
        contacto: {
          title: 'Contacto | Joan Sebastian Sosa Bedoya — Desarrollador en Armenia',
          description:
            'Contacta a Joan Sebastian Sosa Bedoya, Ingeniero de software en Armenia, Quindío, Colombia. Disponible para proyectos remotos, híbridos y freelance.',
          ogTitle: 'Contacto — Sebastian Sosa | Ingeniero de Software',
          ogDescription:
            'Escríbeme para colaborar en productos web escalables, integraciones y desarrollo backend o full stack.',
        },
        servicios: {
          title: 'Servicios de desarrollo | Sebastian Sosa — Full Stack Colombia',
          description:
            'Servicios de desarrollo de software de Joan Sebastian Sosa: backends con Java y Python, frontends Angular, microservicios, CI/CD y despliegue en cloud.',
          ogTitle: 'Servicios — Joan Sebastian Sosa | Desarrollador Full Stack',
          ogDescription:
            'Backend, frontend, integraciones y arquitectura de software para empresas en Colombia y remoto.',
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
        'Desarrollo aplicaciones web modernas y escalables que impulsan resultados y mejoran la experiencia del usuario.',
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
      projectsViewDemo: 'Ver demo',
      projectsViewDemoAria: 'Abrir demo en vivo de {title} (se abre en una pestaña nueva)',
      projectsGridAria: 'Carrusel de proyectos destacados',
      projectsCarouselPrev: 'Ver proyectos anteriores',
      projectsCarouselNext: 'Ver proyectos siguientes',
      projectsCarouselGoTo: 'Ir al proyecto',
      contactHeading: '¿Tienes una idea, un proyecto o un reto por resolver?',
      contactIntro: [
        'Me interesa construir soluciones bien pensadas, escalables y enfocadas en generar impacto real.',
        'Disfruto trabajar en productos donde la tecnología, la experiencia y la operación se conectan para resolver problemas de verdad. Desde plataformas empresariales hasta automatización de procesos y sistemas listos para producción.',
        'Si buscas sumar a alguien con visión técnica, enfoque en calidad y capacidad para convertir necesidades complejas en soluciones claras y mantenibles, estaré encantado de conversar.',
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
        'Disfruto transformar necesidades complejas en soluciones técnicas claras, eficientes y alineadas con objetivos de negocio.',
      ],
      aboutDeliveryHeading: 'Construyendo software pensado para producción',
      aboutDeliveryEyebrow: 'Stack de servicios',
      aboutDeliveryIntro:
        'Seis áreas donde convierto necesidades de negocio en soluciones escalables, mantenibles y listas para operar en entornos reales.',
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
        tag: 'UX · UI',
        title: 'Experiencia e interfaces',
        intro:
          'Interfaces claras, funcionales y alineadas al negocio.',
        bullets: [
          'Experiencias modernas y multi-dispositivo',
          'Diseño coherente con usuarios y procesos reales',
          'Integración estable con APIs y servicios',
          'Interfaces preparadas para crecer',
        ],
      },
      {
        tag: 'API · DATA',
        title: 'Servicios e integración',
        intro:
          'APIs y estructuras de datos diseñadas para ser seguras, predecibles y mantenibles.',
        bullets: [
          'APIs REST claras y escalables',
          'Control de acceso y seguridad por roles',
          'Modelado de datos orientado al dominio',
          'Integración con sistemas empresariales',
        ],
      },
      {
        tag: 'ANALYTICS',
        title: 'Automatización y análisis',
        intro:
          'Procesos medibles, automatizados y orientados a eficiencia operativa.',
        bullets: [
          'Automatización de tareas repetitivas',
          'Validación y tratamiento de datos',
          'Indicadores y trazabilidad operativa',
          'Procesos auditables y optimizables',
        ],
      },
      {
        tag: 'ENGINEERING',
        title: 'Ingeniería de software',
        intro:
          'Arquitectura y desarrollo enfocados en calidad y escalabilidad.',
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
          'IA integrada donde realmente aporta valor al negocio.',
        bullets: [
          'Automatización inteligente de procesos',
          'Integración de capacidades IA en plataformas reales',
          'Resultados medibles y casos de uso concretos',
          'Gestión segura de datos y permisos',
        ],
      },
      {
        tag: 'PROD · SCALE',
        title: 'Producción y escalabilidad',
        intro:
          'Infraestructura y operación preparadas para crecer con estabilidad.',
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
        title: 'Desarrollador back-end (freelance)',
        company: 'Profesional independiente · Astra Dev',
        timelineFrom: { year: 2024, month: 8 },
        timelineOngoing: true,
        summary:
          'Soluciones a medida en remoto: APIs REST, bases de datos, JWT, Docker y mejora de rendimiento con Clean Code y diseño modular.',
        details: [
          {
            description:
              'Back-end con Java (Spring Boot) y Python (FastAPI): APIs REST e integración con PostgreSQL y MySQL.',
            technologies: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'REST'],
          },
          {
            description:
              'Autenticación con JWT y despliegue en contenedores Docker.',
            technologies: ['JWT', 'Docker'],
          },
          {
            description:
              'Optimización de consultas SQL y principios de Clean Code en sistemas existentes.',
            technologies: ['PostgreSQL', 'MySQL', 'SQL'],
          },
          {
            description:
              'Metodologías ágiles y control de versiones con Git.',
            technologies: ['Git'],
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
        'Construyendo soluciones digitales modernas, escalables y preparadas para producción. Mi enfoque combina ingeniería de software, experiencia de usuario y arquitectura mantenible para desarrollar productos funcionales, eficientes y alineados con necesidades reales de negocio.',
      navHeading: 'Navegación',
      socialHeading: 'Redes',
      navAria: 'Enlaces a secciones del portafolio',
    },
    roleTitles: [
      'Ingeniero de software',
      'Desarrollador Full Stack',
    ],
    roleTitle: 'Ingeniero de software',
  };
}

function en(): Messages {
  return {
    meta: {
      title:
        'Joan Sebastian Sosa Bedoya — Software Engineer | Full Stack Developer | Armenia Quindío Colombia',
      description:
        'Joan Sebastian Sosa Bedoya — Software Engineer and Full Stack Developer in Armenia, Quindío, Colombia. Professional portfolio with Java, Spring Boot, Python, FastAPI, Angular, Docker, and Kubernetes.',
      ogTitle:
        'Joan Sebastian Sosa Bedoya — Software Engineer | Full Stack Developer',
      ogDescription:
        'Sebastian Sosa portfolio: scalable web development with Java, Python, Angular, and cloud. Armenia, Quindío, Colombia.',
      sections: {
        'sobre-mi': {
          title: 'About me | Joan Sebastian Sosa Bedoya — Software Engineer',
          description:
            'Meet Joan Sebastian Sosa Bedoya, Software Engineer and Full Stack Developer in Armenia, Quindío. Specialized in hexagonal architecture, microservices, and production-ready solutions.',
          ogTitle: 'About — Sebastian Sosa | Full Stack Software Engineer',
          ogDescription:
            'Background, technical focus, and service areas of Joan Sebastian Sosa Bedoya, software developer in Colombia.',
        },
        experiencia: {
          title: 'Work experience | Sebastian Sosa — Full Stack Developer',
          description:
            'Professional experience of Joan Sebastian Sosa at EDEQ Grupo EPM, Konex, Astra Dev, and more. Java, Spring Boot, Python, FastAPI, Angular, Docker, and Kubernetes deployments.',
          ogTitle: 'Experience — Joan Sebastian Sosa Bedoya',
          ogDescription:
            'Roles, achievements, and measurable impact at companies in Colombia as a backend and full stack developer.',
        },
        proyectos: {
          title: 'Featured projects | Sebastian Sosa — Full Stack Portfolio',
          description:
            'Projects by Joan Sebastian Sosa Bedoya: Angular SSR portfolio, Mini-GPT NLP, Golden Egg ERP, Spring Boot REST APIs, and more. Code on GitHub and live demos.',
          ogTitle: 'Projects — Sebastian Sosa | Full Stack Developer',
          ogDescription:
            'Real-world project portfolio with modern stack: Angular, Python, Java, React, and machine learning.',
        },
        contacto: {
          title: 'Contact | Joan Sebastian Sosa Bedoya — Developer in Armenia',
          description:
            'Contact Joan Sebastian Sosa Bedoya, Software Engineer in Armenia, Quindío, Colombia. Available for remote, hybrid, and freelance projects.',
          ogTitle: 'Contact — Sebastian Sosa | Software Engineer',
          ogDescription:
            'Reach out to collaborate on scalable web products, integrations, and backend or full stack development.',
        },
        servicios: {
          title: 'Development services | Sebastian Sosa — Full Stack Colombia',
          description:
            'Software development services by Joan Sebastian Sosa: Java and Python backends, Angular frontends, microservices, CI/CD, and cloud deployment.',
          ogTitle: 'Services — Joan Sebastian Sosa | Full Stack Developer',
          ogDescription:
            'Backend, frontend, integrations, and software architecture for companies in Colombia and remote.',
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
        'I build modern, scalable web applications that drive results and improve user experience.',
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
      projectsViewDemo: 'View demo',
      projectsViewDemoAria: 'Open live demo of {title} (opens in a new tab)',
      projectsGridAria: 'Featured projects carousel',
      projectsCarouselPrev: 'Show previous projects',
      projectsCarouselNext: 'Show next projects',
      projectsCarouselGoTo: 'Go to project',
      contactHeading: 'Have an idea, a project, or a challenge to solve?',
      contactIntro: [
        'I am interested in building well-thought-out, scalable solutions focused on generating real impact.',
        'I enjoy working on products where technology, experience, and operations connect to solve real problems—from enterprise platforms to process automation and production-ready systems.',
        'If you are looking for someone with technical vision, a focus on quality, and the ability to turn complex needs into clear, maintainable solutions, I would be happy to talk.',
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
        'I enjoy turning complex needs into clear, efficient technical solutions aligned with business goals.',
      ],
      aboutDeliveryHeading: 'Building software built for production',
      aboutDeliveryEyebrow: 'Service stack',
      aboutDeliveryIntro:
        'Six areas where I turn business needs into scalable, maintainable solutions ready to operate in real environments.',
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
        tag: 'UX · UI',
        title: 'Experience & interfaces',
        intro:
          'Clear, functional interfaces aligned with the business.',
        bullets: [
          'Modern, multi-device experiences',
          'Design coherent with users and real-world processes',
          'Stable integration with APIs and services',
          'Interfaces built to grow',
        ],
      },
      {
        tag: 'API · DATA',
        title: 'Services & integration',
        intro:
          'APIs and data structures designed to be secure, predictable, and maintainable.',
        bullets: [
          'Clear, scalable REST APIs',
          'Role-based access control and security',
          'Domain-oriented data modeling',
          'Integration with enterprise systems',
        ],
      },
      {
        tag: 'ANALYTICS',
        title: 'Automation & analysis',
        intro:
          'Measurable, automated processes focused on operational efficiency.',
        bullets: [
          'Automation of repetitive tasks',
          'Data validation and processing',
          'Operational indicators and traceability',
          'Auditable, optimizable processes',
        ],
      },
      {
        tag: 'ENGINEERING',
        title: 'Software engineering',
        intro:
          'Architecture and development focused on quality and scalability.',
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
          'AI integrated where it truly adds business value.',
        bullets: [
          'Intelligent process automation',
          'AI capabilities integrated into real platforms',
          'Measurable outcomes and concrete use cases',
          'Secure data and permission management',
        ],
      },
      {
        tag: 'PROD · SCALE',
        title: 'Production & scalability',
        intro:
          'Infrastructure and operations ready to grow with stability.',
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
        title: 'Back-end developer (freelance)',
        company: 'Independent professional · Astra Dev',
        timelineFrom: { year: 2024, month: 8 },
        timelineOngoing: true,
        summary:
          'Remote custom solutions: REST APIs, databases, JWT, Docker, and performance work with Clean Code and modular design.',
        details: [
          {
            description:
              'Back-end with Java (Spring Boot) and Python (FastAPI): REST APIs plus PostgreSQL and MySQL integration.',
            technologies: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'REST'],
          },
          {
            description:
              'JWT authentication and Docker-based deployments.',
            technologies: ['JWT', 'Docker'],
          },
          {
            description:
              'SQL query tuning, Clean Code, and modular design on existing systems.',
            technologies: ['PostgreSQL', 'MySQL', 'SQL'],
          },
          {
            description:
              'Agile practices and Git for version control.',
            technologies: ['Git'],
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
        'Building modern, scalable, production-ready digital solutions. My approach combines software engineering, user experience, and maintainable architecture to deliver functional, efficient products aligned with real business needs.',
      navHeading: 'Navigate',
      socialHeading: 'Social',
      navAria: 'Portfolio section links',
    },
    roleTitles: [
      'Software Engineer',
      'Full Stack Developer',
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
