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
  period: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  stack: readonly string[];
  sections: readonly FeaturedProjectSection[];
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
    experienceHeading: string;
    projectsHeading: string;
    projectsStackHeading: string;
    /** Etiqueta de accesibilidad al pulsar una tarjeta de proyecto */
    projectModalHint: string;
    /** Texto auxiliar bajo el resumen en la tarjeta */
    projectsCardTapHint: string;
    projectsGridAria: string;
    projectsCarouselPrev: string;
    projectsCarouselNext: string;
    projectsCarouselGoTo: string;
    contactHeading: string;
    contactIntro: string;
    contactOpenMailAria: string;
    contactCopyEmail: string;
    contactCopyEmailDone: string;
    techHeading: string;
    techIntro: string;
    techMarqueeAria: string;
    aboutHeading: string;
    aboutLead: string;
    aboutDeliveryHeading: string;
    experienceModalClose: string;
    experienceModalTech: string;
    experienceModalImpact: string;
    experienceModalHint: string;
    experienceTimelinePresent: string;
    experienceTimelinePresentLabel: string;
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
      experienceHeading: 'Experiencia laboral',
      projectsHeading: 'Proyectos destacados',
      projectsStackHeading: 'Stack principal',
      projectModalHint: 'Abrir detalles del proyecto en una ventana emergente',
      projectsCardTapHint: 'Pulsa para ver el detalle completo',
      projectsGridAria: 'Carrusel de proyectos destacados',
      projectsCarouselPrev: 'Ver proyectos anteriores',
      projectsCarouselNext: 'Ver proyectos siguientes',
      projectsCarouselGoTo: 'Ir al proyecto',
      contactHeading: 'Hablemos',
      contactIntro:
        '¿Quieres lanzar algo, sumar refuerzos al equipo o aún no sabes ni cómo llamarlo? Da igual el tamaño del reto: si hay que hacerlo bien, hablemos. Escríbeme y te respondo en cuanto pueda.',
      contactOpenMailAria: 'Abrir cliente de correo para escribir a esta dirección',
      contactCopyEmail: 'Copiar correo',
      contactCopyEmailDone: '¡Copiado!',
      techHeading: 'Tecnologías con las que trabajo',
      techIntro: 'Herramientas modernas para soluciones modernas',
      techMarqueeAria: 'Lista de tecnologías y herramientas',
      aboutHeading: 'Sobre mí',
      aboutLead:
        'Soy desarrollador de software y me centro en soluciones escalables, eficientes y pensadas para producción: sistemas mantenibles, claros y con margen para crecer. Abordo cada reto de punta a punta—entender el contexto, integrar lo necesario, decidir con criterio y dejar entregas que se sostienen en el tiempo.',
      aboutDeliveryHeading: 'Lo que entrego',
      experienceModalClose: 'Cerrar',
      experienceModalTech: 'Tecnologías',
      experienceModalImpact: 'Resultado',
      experienceModalHint: 'Ver detalles, tecnologías y resultados',
      experienceTimelinePresent: 'Hoy',
      experienceTimelinePresentLabel: 'Actualidad',
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
        title: 'Clínica Odontológica Dr. Cristian Valencia',
        subtitle: 'Sitio web corporativo · Profesional independiente',
        period: 'Profesional independiente · 2025',
        summary:
          'Diseño y desarrollo web corporativo para un odontólogo especializado en estética dental. Una presencia digital moderna y profesional que transmite confianza, muestra los servicios y facilita la reserva de citas vía WhatsApp.',
        imageSrc: '/projects/dr-cristian-valencia-hero.png',
        imageAlt:
          'Sitio web de la Clínica Odontológica Dr. Cristian Valencia — secciones de inicio, servicios, testimonios y contacto en versión escritorio y móvil',
        stack: [
          'React',
          'Next.js',
          'Tailwind CSS',
          'JavaScript',
          'Netlify',
        ],
        sections: [
          {
            heading: 'Diseño y experiencia',
            bullets: [
              'Diseño UI/UX completo: moderno, minimalista y alineado con un sector salud que necesita transmitir confianza.',
              'Navegación intuitiva, pensada para pacientes que llegan buscando servicios y agendar una cita.',
              'Identidad visual coherente: tipografía, paleta y espaciado tratados para legibilidad y limpieza.',
            ],
          },
          {
            heading: 'Frontend y responsive',
            bullets: [
              'Desarrollo frontend con React y Tailwind CSS, optimizado para dispositivos móviles.',
              'Sitio totalmente responsive, probado en distintos tamaños y orientaciones de pantalla.',
              'Despliegue en Netlify con flujo de integración continua.',
            ],
          },
          {
            heading: 'Bilingüe e integraciones',
            bullets: [
              'Versión bilingüe español/inglés para alcanzar pacientes locales y extranjeros.',
              'Agendamiento de citas integrado con WhatsApp para abrir la conversación directamente con la clínica.',
              'Integración con redes sociales para reforzar la presencia digital.',
            ],
          },
          {
            heading: 'Captación y conversión',
            bullets: [
              'Secciones de servicios, testimonios y contacto orientadas a generar confianza.',
              'CTAs estratégicos pensados para convertir visitantes en pacientes.',
              'SEO básico aplicado para mejorar el posicionamiento en búsquedas locales.',
            ],
          },
        ],
      },
      {
        title: 'SegurApp',
        subtitle: 'Plataforma de Seguridad Ciudadana',
        period: 'feb. 2025 — actualidad',
        summary:
          'Aplicación móvil con Kotlin y Jetpack Compose (Android Studio), orientada a seguridad ciudadana y bienestar comunitario: reportar riesgos y emergencias en tiempo real, ver alertas cercanas y colaborar con la comunidad.',
        imageSrc: '/projects/segurapp-hero.png',
        imageAlt:
          'SegurApp — mockups con mapa de reportes, inicio de sesión, categorías y notificaciones',
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
        period: 'feb. 2025 — actualidad',
        summary:
          'ERP lite para una empresa avícola dedicada a comercializar y distribuir huevos. Centraliza inventario, ventas y facturación para digitalizar operaciones y automatizar procesos comerciales clave.',
        imageSrc: '/projects/golden-egg-erp-hero.png',
        imageAlt:
          'Golden Egg ERP — pantallas de panel, inventario, pedidos, facturas e informes',
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
        period: 'Proyecto de escritorio · Python',
        summary:
          'Aplicación de escritorio en Python con SQLite y Tkinter para gestionar contactos personales, organizarlos por categorías y marcar favoritos; interfaz clara y flujos para búsqueda y filtrado.',
        imageSrc: '/projects/agenda-contactos-hero.png',
        imageAlt:
          'Agenda de Contactos — inicio de sesión, lista de contactos, formulario de alta, búsqueda y categorías',
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
        period: 'Backend · Java 17+',
        summary:
          'Backend de una plataforma de blogs en Spring Boot: gestión de usuarios y publicaciones, interacción entre autores y un modelo de roles (ADMIN / AUTHOR) para administrar el contenido con claridad y control de acceso.',
        imageSrc: '/projects/blog-platform-hero.png',
        imageAlt:
          'Diagrama técnico: arquitectura Spring Boot, JWT, endpoints REST y modelo de datos del blog',
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
        'Desarrollador de software. Contacto por correo y redes sociales; enlaces actualizados en esta página.',
      navHeading: 'Navegación',
      socialHeading: 'Redes',
      navAria: 'Enlaces a secciones del portafolio',
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
      experienceHeading: 'Work experience',
      projectsHeading: 'Featured projects',
      projectsStackHeading: 'Core stack',
      projectModalHint: 'Open full project details in a dialog',
      projectsCardTapHint: 'Click for full details',
      projectsGridAria: 'Featured projects carousel',
      projectsCarouselPrev: 'Show previous projects',
      projectsCarouselNext: 'Show next projects',
      projectsCarouselGoTo: 'Go to project',
      contactHeading: "Let's talk",
      contactIntro:
        'Shipping something new, need an extra pair of hands, or still figuring out what to call it? Whatever it is—if it needs doing right, let’s talk. Email me and I’ll get back as soon as I can.',
      contactOpenMailAria: 'Open your email app to write to this address',
      contactCopyEmail: 'Copy email',
      contactCopyEmailDone: 'Copied!',
      techHeading: 'Technologies I Work With',
      techIntro: 'Modern tools for modern solutions',
      techMarqueeAria: 'Technologies and tools list',
      aboutHeading: 'About me',
      aboutLead:
        "I'm a software developer focused on scalable, efficient solutions built for production—systems that stay maintainable, clear, and ready to grow. I tackle each challenge end to end: understand the context, integrate what's needed, decide with sound judgment, and ship work that holds up over time.",
      aboutDeliveryHeading: 'What I deliver',
      experienceModalClose: 'Close',
      experienceModalTech: 'Technologies',
      experienceModalImpact: 'Outcome',
      experienceModalHint: 'View details, technologies, and results',
      experienceTimelinePresent: 'Now',
      experienceTimelinePresentLabel: 'Present',
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
        title: 'Dr. Cristian Valencia Dental Clinic',
        subtitle: 'Corporate website · Freelance project',
        period: 'Freelance · 2025',
        summary:
          'Design and development of a corporate website for a dentist specialized in cosmetic dentistry. A modern, professional digital presence that builds trust, showcases services, and streamlines appointment booking through WhatsApp.',
        imageSrc: '/projects/dr-cristian-valencia-hero.png',
        imageAlt:
          'Dr. Cristian Valencia Dental Clinic website — home, services, testimonials, and contact sections shown on desktop and mobile',
        stack: [
          'React',
          'Next.js',
          'Tailwind CSS',
          'JavaScript',
          'Netlify',
        ],
        sections: [
          {
            heading: 'Design & experience',
            bullets: [
              'Full UI/UX design—modern and minimalist—aligned with a healthcare brand that needs to project trust.',
              'Intuitive navigation focused on patients who arrive looking for services and to book an appointment.',
              'Cohesive visual identity: typography, palette, and spacing tuned for clarity and a clean feel.',
            ],
          },
          {
            heading: 'Frontend & responsive',
            bullets: [
              'Frontend built with React and Tailwind CSS, optimized for mobile devices.',
              'Fully responsive layout, tested across multiple screen sizes and orientations.',
              'Deployed on Netlify with a continuous integration workflow.',
            ],
          },
          {
            heading: 'Bilingual & integrations',
            bullets: [
              'Bilingual Spanish/English to reach both local and international patients.',
              'Appointment booking integrated with WhatsApp for instant conversations with the clinic.',
              'Social media integrations to reinforce the digital presence.',
            ],
          },
          {
            heading: 'Acquisition & conversion',
            bullets: [
              'Services, testimonials, and contact sections crafted to build trust.',
              'Strategic CTAs designed to turn visitors into patients.',
              'Basic SEO applied to improve visibility in local searches.',
            ],
          },
        ],
      },
      {
        title: 'SegurApp',
        subtitle: 'Citizen Safety Platform',
        period: 'Feb 2025 — present',
        summary:
          'Mobile app with Kotlin and Jetpack Compose (Android Studio), focused on citizen safety and community wellbeing: report risks and emergencies in real time, see nearby alerts, and collaborate with the community.',
        imageSrc: '/projects/segurapp-hero.png',
        imageAlt:
          'SegurApp mockups showing map, login, incident categories, and notifications',
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
        period: 'Feb 2025 — present',
        summary:
          'A lightweight ERP for a poultry business focused on marketing and distributing eggs. It centralizes inventory, sales, and billing to digitize ops and automate core commercial workflows.',
        imageSrc: '/projects/golden-egg-erp-hero.png',
        imageAlt:
          'Golden Egg ERP — dashboard, inventory, orders, invoicing, and reports',
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
        period: 'Desktop project · Python',
        summary:
          'A desktop Python app with SQLite and Tkinter to manage personal contacts, group them into categories, and mark favorites—with a straightforward UI plus search and filter flows.',
        imageSrc: '/projects/agenda-contactos-hero.png',
        imageAlt:
          'Contact agenda app — login, contact list, add form, search, and categories',
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
        period: 'Backend · Java 17+',
        summary:
          'Spring Boot backend for blogs: manage users and posts, author interactions, and ADMIN / AUTHOR roles—keeping content workflows secure and predictable.',
        imageSrc: '/projects/blog-platform-hero.png',
        imageAlt:
          'Technical overview: Spring Boot layers, JWT flow, REST endpoints, and domain model',
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
        'Software developer. Reach me by email or social—links on this site are kept up to date.',
      navHeading: 'Navigate',
      socialHeading: 'Social',
      navAria: 'Portfolio section links',
    },
    roleTitle: 'Software developer',
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
