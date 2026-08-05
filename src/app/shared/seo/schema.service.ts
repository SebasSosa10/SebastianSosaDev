import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { site } from '../data/site';
import type { AppLocale } from '../i18n/messages';
import { GEO_SEO, PERSON_ALTERNATE_NAMES, SERVICE_TYPES } from './geo-seo.config';
import {
  absoluteAssetUrl,
  IMAGE_SEO,
  PAGE_PRIMARY_IMAGE,
  type ImageSeoKey,
} from './image-seo.config';
import { getPageSeo, SITE_SEO } from './seo.config';
import type { SeoPageKey } from './seo.model';

const JSON_LD_SCRIPT_ID = 'app-structured-data';

type JsonLdNode = Record<string, unknown>;

@Injectable({ providedIn: 'root' })
export class SchemaService {
  private readonly document = inject(DOCUMENT);

  applyForPage(
    sectionId: SeoPageKey,
    canonicalPath: string,
    locale: AppLocale,
  ): void {
    const url = this.toAbsoluteUrl(canonicalPath);
    const graph = this.buildGraph(sectionId, url, locale);
    this.upsertJsonLd({
      '@context': 'https://schema.org',
      '@graph': graph,
    });
  }

  private buildGraph(
    sectionId: SeoPageKey,
    pageUrl: string,
    locale: AppLocale,
  ): JsonLdNode[] {
    const page = getPageSeo(sectionId, locale);
    const personId = `${SITE_SEO.baseUrl}/#person`;
    const orgId = `${SITE_SEO.baseUrl}/#organization`;
    const websiteId = `${SITE_SEO.baseUrl}/#website`;
    const serviceId = `${SITE_SEO.baseUrl}/#professionalservice`;
    const portrait = this.toImageObject('portrait', locale);
    const primaryKey = PAGE_PRIMARY_IMAGE[sectionId];
    const primaryImage = this.toImageObject(primaryKey, locale);

    const person: JsonLdNode = {
      '@type': 'Person',
      '@id': personId,
      name: SITE_SEO.fullName,
      alternateName: [...PERSON_ALTERNATE_NAMES],
      url: `${SITE_SEO.baseUrl}/`,
      image: portrait,
      jobTitle:
        locale === 'en'
          ? 'Software Engineer · Full Stack Developer · Remote'
          : 'Ingeniero de Software · Full Stack Developer · Remoto',
      description:
        locale === 'en'
          ? 'Software Engineer based in Armenia, Quindío, Colombia. Available remotely as Remote Software Engineer, Freelance Software Developer, Full Stack Developer and Software Consultant for clients in Colombia, Latin America, North America, Europe and worldwide.'
          : 'Ingeniero de Software con base en Armenia, Quindío, Colombia. Disponible de forma remota como Remote Software Engineer, Freelance Software Developer, Full Stack Developer y Software Consultant para clientes en Colombia, Latinoamérica, Norteamérica, Europa y el resto del mundo.',
      email: site.email,
      telephone: site.phoneTel,
      address: {
        '@type': 'PostalAddress',
        addressLocality: GEO_SEO.soleLocation.city,
        addressRegion: GEO_SEO.soleLocation.region,
        addressCountry: GEO_SEO.soleLocation.countryCode,
      },
      homeLocation: {
        '@type': 'Place',
        name: `${GEO_SEO.soleLocation.city}, ${GEO_SEO.soleLocation.region}, ${GEO_SEO.soleLocation.country}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: GEO_SEO.soleLocation.city,
          addressRegion: GEO_SEO.soleLocation.region,
          addressCountry: GEO_SEO.soleLocation.countryCode,
        },
      },
      worksFor: { '@id': orgId },
      knowsAbout: [
        'Software Engineering',
        'Software Development',
        'Custom Software Development',
        'Full Stack Development',
        'Frontend Development',
        'Backend Development',
        'Web Development',
        'Web Applications',
        'API Development',
        'Cloud Solutions',
        'Enterprise Software',
        'Angular',
        'Python',
        'Java',
        'TypeScript',
        'Remote Software Development',
        'Software Consulting',
      ],
      sameAs: [site.links.github, site.links.linkedin],
    };

    const organization: JsonLdNode = {
      '@type': 'Organization',
      '@id': orgId,
      name: SITE_SEO.organizationName,
      url: `${SITE_SEO.baseUrl}/`,
      logo: {
        '@type': 'ImageObject',
        url: absoluteAssetUrl('/icon-512x512.png'),
        contentUrl: absoluteAssetUrl('/icon-512x512.png'),
        width: 512,
        height: 512,
      },
      image: portrait,
      founder: { '@id': personId },
      employee: { '@id': personId },
      address: {
        '@type': 'PostalAddress',
        addressLocality: GEO_SEO.soleLocation.city,
        addressRegion: GEO_SEO.soleLocation.region,
        addressCountry: GEO_SEO.soleLocation.countryCode,
      },
      areaServed: [...GEO_SEO.areaServed],
      availableLanguage: [...GEO_SEO.availableLanguage],
      sameAs: [site.links.github, site.links.linkedin],
    };

    const professionalService: JsonLdNode = {
      '@type': 'ProfessionalService',
      '@id': serviceId,
      name:
        locale === 'en'
          ? 'Remote custom software development — Astra Dev'
          : 'Desarrollo de software a medida remoto — Astra Dev',
      description:
        locale === 'en'
          ? 'Remote software development services for businesses in Colombia, Latin America, North America, Europe and worldwide. Based in Armenia, Quindío, Colombia.'
          : 'Servicios remotos de desarrollo de software para empresas en Colombia, Latinoamérica, Norteamérica, Europa y el resto del mundo. Con base en Armenia, Quindío, Colombia.',
      url: this.toAbsoluteUrl('/servicios'),
      image: primaryImage,
      provider: { '@id': personId },
      brand: { '@id': orgId },
      areaServed: [...GEO_SEO.areaServed],
      serviceType: [...SERVICE_TYPES],
      availableLanguage: [...GEO_SEO.availableLanguage],
    };

    const graph: JsonLdNode[] = [person, organization, professionalService];

    if (sectionId === 'inicio') {
      graph.push({
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${SITE_SEO.baseUrl}/`,
        name:
          locale === 'en'
            ? `${SITE_SEO.fullName} — Software Engineer Portfolio`
            : `${SITE_SEO.fullName} — Portafolio Ingeniero de Software`,
        alternateName: [...PERSON_ALTERNATE_NAMES],
        description: getPageSeo('inicio', locale).description,
        inLanguage: ['es', 'en'],
        publisher: { '@id': orgId },
        author: { '@id': personId },
        image: portrait,
      });
    }

    if (sectionId === 'tecnologias') {
      const techs =
        locale === 'en'
          ? [
              'Angular',
              'TypeScript',
              'Python',
              'FastAPI',
              'Java',
              'Spring Boot',
              'React',
              'Docker',
              'AWS',
              'CI/CD',
              'GitHub Actions',
              'Artificial Intelligence',
            ]
          : [
              'Angular',
              'TypeScript',
              'Python',
              'FastAPI',
              'Java',
              'Spring Boot',
              'React',
              'Docker',
              'AWS',
              'CI/CD',
              'GitHub Actions',
              'Inteligencia Artificial',
            ];
      graph.push({
        '@type': 'ItemList',
        '@id': `${pageUrl}#tech-stack`,
        name:
          locale === 'en'
            ? 'Technologies I work with'
            : 'Tecnologías con las que trabajo',
        itemListElement: techs.map((name, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name,
        })),
      });
    }

    if (sectionId === 'servicios') {
      const services =
        locale === 'en'
          ? [
              {
                name: 'Custom Software Development',
                description:
                  'Tailored software solutions for national and international businesses.',
              },
              {
                name: 'Web Application Development',
                description:
                  'Modern, scalable web applications for product and operations teams.',
              },
              {
                name: 'Full Stack Development',
                description:
                  'End-to-end Angular, Python, Java and API development.',
              },
              {
                name: 'Frontend Development',
                description:
                  'Angular and modern UI experiences focused on usability and performance.',
              },
              {
                name: 'Backend & API Development',
                description:
                  'Secure REST APIs, integrations and enterprise backends.',
              },
              {
                name: 'Cloud Solutions & Enterprise Software',
                description:
                  'Cloud-ready architecture, DevOps, CI/CD and production systems.',
              },
            ]
          : [
              {
                name: 'Software a medida',
                description:
                  'Soluciones de software personalizadas para negocios nacionales e internacionales.',
              },
              {
                name: 'Desarrollo de aplicaciones web',
                description:
                  'Aplicaciones web modernas y escalables para producto y operación.',
              },
              {
                name: 'Desarrollo Full Stack',
                description:
                  'Desarrollo integral con Angular, Python, Java y APIs.',
              },
              {
                name: 'Desarrollo Frontend',
                description:
                  'Experiencias Angular y UI modernas enfocadas en usabilidad y rendimiento.',
              },
              {
                name: 'Desarrollo Backend y APIs',
                description:
                  'APIs REST seguras, integraciones y backends empresariales.',
              },
              {
                name: 'Cloud Solutions y software empresarial',
                description:
                  'Arquitectura cloud-ready, DevOps, CI/CD y sistemas en producción.',
              },
            ];
      services.forEach((service, index) => {
        graph.push({
          '@type': 'Service',
          '@id': `${SITE_SEO.baseUrl}/servicios#service-${index + 1}`,
          name: service.name,
          description: service.description,
          provider: { '@id': personId },
          areaServed: [...GEO_SEO.areaServed],
          availableLanguage: [...GEO_SEO.availableLanguage],
          serviceType: SERVICE_TYPES[index] ?? 'Software Development',
        });
      });
    }

    graph.push({
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.title,
      description: page.description,
      isPartOf: { '@id': websiteId },
      about: { '@id': personId },
      primaryImageOfPage: primaryImage,
      inLanguage: locale === 'en' ? 'en' : 'es',
    });

    if (sectionId === 'proyectos') {
      const projectKeys: ImageSeoKey[] = [
        'projectDrCristian',
        'projectTul',
        'projectMiniGpt',
        'projectSegurapp',
        'projectGoldenEgg',
        'projectAgenda',
        'projectBlog',
      ];
      graph.push({
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#portfolio`,
        name:
          locale === 'en'
            ? 'Featured software projects portfolio'
            : 'Portafolio de proyectos de software',
        url: pageUrl,
        about: { '@id': personId },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: projectKeys.map((key, index) => {
            const img = IMAGE_SEO[key];
            return {
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'CreativeWork',
                name: img.title[locale],
                description: img.alt[locale],
                image: absoluteAssetUrl(img.path),
                url: pageUrl,
              },
            };
          }),
        },
      });
    }

    const crumbs = this.breadcrumbs(sectionId, locale);
    if (crumbs.length > 1) {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.item,
        })),
      });
    }

    return graph;
  }

  private toImageObject(key: ImageSeoKey, locale: AppLocale): JsonLdNode {
    const meta = IMAGE_SEO[key];
    const url = absoluteAssetUrl(meta.path);
    return {
      '@type': 'ImageObject',
      contentUrl: url,
      url,
      name: meta.title[locale],
      caption: meta.alt[locale],
      inLanguage: locale === 'en' ? 'en' : 'es',
    };
  }

  private breadcrumbs(
    sectionId: SeoPageKey,
    locale: AppLocale,
  ): { name: string; item: string }[] {
    const home = {
      name: locale === 'en' ? 'Home' : 'Inicio',
      item: `${SITE_SEO.baseUrl}/`,
    };
    if (sectionId === 'inicio') {
      return [home];
    }
    const labels: Record<
      Exclude<SeoPageKey, 'inicio'>,
      { es: string; en: string }
    > = {
      'sobre-mi': { es: 'Sobre mí', en: 'About' },
      experiencia: { es: 'Experiencia', en: 'Experience' },
      tecnologias: { es: 'Tecnologías', en: 'Technologies' },
      servicios: { es: 'Servicios', en: 'Services' },
      proyectos: { es: 'Proyectos', en: 'Projects' },
      contacto: { es: 'Contacto', en: 'Contact' },
    };
    const label = labels[sectionId];
    const path = sectionId === 'sobre-mi' ? '/sobre-mi' : `/${sectionId}`;
    return [
      home,
      {
        name: locale === 'en' ? label.en : label.es,
        item: this.toAbsoluteUrl(path),
      },
    ];
  }

  private toAbsoluteUrl(pathOrUrl: string): string {
    if (/^https?:\/\//i.test(pathOrUrl)) {
      return pathOrUrl;
    }
    const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
    const origin = SITE_SEO.baseUrl.replace(/\/+$/, '');
    return path === '/' ? `${origin}/` : `${origin}${path}`;
  }

  private upsertJsonLd(data: JsonLdNode): void {
    const head = this.document.head;
    if (!head) {
      return;
    }
    let script = head.querySelector<HTMLScriptElement>(
      `#${JSON_LD_SCRIPT_ID}`,
    );
    if (!script) {
      script = this.document.createElement('script');
      script.id = JSON_LD_SCRIPT_ID;
      script.type = 'application/ld+json';
      head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }
}
