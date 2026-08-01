import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { site } from '../data/site';
import type { AppLocale } from '../i18n/messages';
import { GEO_SEO, PERSON_ALTERNATE_NAMES } from './geo-seo.config';
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
          ? 'Software Engineer · Full Stack Developer · Python · AI · DevOps'
          : 'Ingeniero de Software · Full Stack · Python · IA · DevOps',
      description: page.description,
      email: site.email,
      telephone: site.phoneTel,
      address: {
        '@type': 'PostalAddress',
        addressLocality: GEO_SEO.soleLocation.city,
        addressRegion: GEO_SEO.soleLocation.region,
        addressCountry: GEO_SEO.soleLocation.countryCode,
      },
      worksFor: { '@id': orgId },
      knowsAbout: [
        'Software Engineering',
        'Full Stack Development',
        'Python',
        'Artificial Intelligence',
        'AI integrations',
        'Web Application Development',
        'Angular',
        'Java',
        'Spring Boot',
        'FastAPI',
        'TypeScript',
        'REST APIs',
        'DevOps',
        'CI/CD',
        'GitHub Actions',
        'Docker',
        'LMS',
        'Chatbots',
        'Enterprise Software',
        'Remote Software Development',
      ],
      sameAs: [site.links.github, site.links.linkedin],
    };

    const organization: JsonLdNode = {
      '@type': 'Organization',
      '@id': orgId,
      name: SITE_SEO.organizationName,
      url: `${SITE_SEO.baseUrl}/`,
      logo: this.toImageObject('about', locale),
      image: portrait,
      founder: { '@id': personId },
      employee: { '@id': personId },
      address: {
        '@type': 'PostalAddress',
        addressLocality: GEO_SEO.soleLocation.city,
        addressRegion: GEO_SEO.soleLocation.region,
        addressCountry: GEO_SEO.soleLocation.countryCode,
      },
      areaServed: GEO_SEO.areaServed,
      availableLanguage: [...GEO_SEO.availableLanguage],
      sameAs: [site.links.github, site.links.linkedin],
    };

    const professionalService: JsonLdNode = {
      '@type': 'ProfessionalService',
      '@id': serviceId,
      name:
        locale === 'en'
          ? 'Custom software development — Astra Dev'
          : 'Desarrollo de software a medida — Astra Dev',
      url: this.toAbsoluteUrl('/servicios'),
      image: primaryImage,
      provider: { '@id': personId },
      brand: { '@id': orgId },
      areaServed: GEO_SEO.areaServed,
      serviceType: [
        'Software Engineering',
        'Web Development',
        'Web Application Development',
        'API Development',
        'Python Development',
        'Artificial Intelligence',
        'AI Bot Integrations',
        'LMS Platforms',
        'DevOps',
        'CI/CD',
        'Full Stack Development',
        'Enterprise Software',
        'Remote Software Development',
      ],
      availableLanguage: ['Spanish', 'English'],
    };

    const graph: JsonLdNode[] = [person, organization, professionalService];

    if (sectionId === 'inicio') {
      graph.push({
        '@type': 'WebSite',
        '@id': websiteId,
        url: `${SITE_SEO.baseUrl}/`,
        name:
          locale === 'en'
            ? `${SITE_SEO.siteName} — Software Engineer Portfolio`
            : `${SITE_SEO.siteName} — Portafolio Ingeniero de Software`,
        description: getPageSeo('inicio', locale).description,
        inLanguage: locale === 'en' ? 'en' : 'es',
        publisher: { '@id': orgId },
        author: { '@id': personId },
        image: portrait,
      });
    }

    if (sectionId === 'servicios') {
      const services =
        locale === 'en'
          ? [
              'Web application development',
              'REST API development',
              'Enterprise software',
              'LMS platforms with AI',
              'Business chatbot integrations',
              'DevOps and CI/CD with GitHub',
            ]
          : [
              'Desarrollo de aplicaciones web',
              'Desarrollo de APIs REST',
              'Software empresarial',
              'LMS con capacidades de IA',
              'Integración de bots al negocio',
              'DevOps y CI/CD con GitHub',
            ];
      services.forEach((name, index) => {
        graph.push({
          '@type': 'Service',
          '@id': `${SITE_SEO.baseUrl}/servicios#service-${index + 1}`,
          name,
          provider: { '@id': personId },
          areaServed: GEO_SEO.areaServed,
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
