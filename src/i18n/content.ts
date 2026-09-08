/**
 * All site copy, both locales.
 *
 * Grounding rule: every service and project below describes work that exists
 * in the sibling repositories under ~/projects. Clients are anonymised on
 * purpose — several of those repos hold production credentials or commercial
 * documents under confidentiality. Do not add a client name here without
 * written permission, and do not invent metrics, dates or headcounts.
 */

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const content = {
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Raúl Cerón — Backend engineering and digital consulting',
      description:
        'Freelance backend engineer in Madrid. ERP and Odoo development, headless commerce, API integrations, PostgreSQL and vector search, cloud architecture on OCI, AWS and GCP.',
    },
    nav: {
      services: 'Services',
      work: 'Work',
      approach: 'Approach',
      contact: 'Contact',
      langLabel: 'Español',
      langHref: '/es/',
    },
    hero: {
      eyebrow: 'Digital development & consulting',
      title: 'Backend engineering, delivered end to end.',
      lede:
        'I design and build the systems businesses actually run on — ERP customisation, commerce platforms, integrations and data infrastructure — and carry them through to the web and mobile apps people use every day.',
      note: 'Based in Madrid. Working with clients in Spain, Mexico and the United States.',
      cta: 'Start a conversation',
      ctaSecondary: 'See what I do',
    },
    services: {
      eyebrow: 'Services',
      title: 'What I build',
      lede:
        'Six areas that come up again and again. Most projects combine three or four of them.',
      items: [
        {
          n: '01',
          title: 'ERP & Odoo development',
          body:
            'Custom Odoo modules, migrations off legacy in-house ERPs, and the sales, purchasing, helpdesk and reporting flows a business runs on. Delivered through a feature → dev → main release flow with client UAT before anything reaches production.',
          tags: ['Odoo 18', 'Python', 'XML-RPC', 'PostgreSQL'],
        },
        {
          n: '02',
          title: 'Headless commerce',
          body:
            'Strapi-backed APIs with Nuxt storefronts, and customisation of existing WooCommerce estates. Catalogue import tooling, variant and attribute logic, shipping rules by postal code, and payment gateway integration.',
          tags: ['Strapi', 'Nuxt', 'WooCommerce', 'Payment gateways'],
        },
        {
          n: '03',
          title: 'APIs & integrations',
          body:
            'REST and GraphQL services, webhook pipelines, and the unglamorous connective work between systems that were never designed to talk to each other — payment providers, logistics, public data sources, legacy ERPs over XML-RPC.',
          tags: ['REST', 'GraphQL', 'Webhooks', 'XML-RPC'],
        },
        {
          n: '04',
          title: 'Databases & search',
          body:
            'Schema design, multi-tenant isolation enforced with row-level security at the database rather than in application code, migrations with reconciliation, and semantic search built on pgvector embeddings alongside your relational data.',
          tags: ['PostgreSQL', 'pgvector', 'RLS', 'NoSQL'],
        },
        {
          n: '05',
          title: 'Cloud architecture',
          body:
            'Infrastructure as code across OCI, AWS and GCP: containerised deployments, per-tenant storage and key management, network and policy gates, and the boring reliability work that decides whether a system survives its second year.',
          tags: ['OpenTofu', 'OCI', 'AWS', 'GCP', 'Docker'],
        },
        {
          n: '06',
          title: 'AI integration',
          body:
            'Embedding pipelines, retrieval and classification wired into systems you already have — not a chatbot bolted onto the side. Including the harder question of what data is allowed near a model, and how to prove it never got there.',
          tags: ['Embeddings', 'RAG', 'LLM pipelines'],
        },
      ],
    },
    work: {
      eyebrow: 'Selected work',
      title: 'A few recent projects',
      lede:
        'Client names are withheld. The technical detail is accurate.',
      items: [
        {
          title: 'ERP migration for an industrial manufacturer',
          region: 'Mexico',
          body:
            'Replaced a legacy in-house ERP with Odoo 18, building roughly nineteen custom modules across helpdesk, sales, purchasing and market intelligence. Released through a gated branch flow with client acceptance testing at each block. Data migration ran under a strict no-exposure protocol: real records stayed quarantined outside the development environment and only synthetic fixtures were used in code.',
          stack: ['Odoo 18', 'Python', 'PostgreSQL', 'Docker', 'nginx'],
        },
        {
          title: 'Zero-knowledge board governance platform',
          region: 'In development',
          body:
            'A document platform for board directors where the server never needs plaintext. End-to-end encrypted document vault, append-only hash-chained audit log, cryptographic resolution voting, and an opt-in searchable tier using vector embeddings. Tenant isolation is enforced by the database with row-level security, not by application logic.',
          stack: ['FastAPI', 'SQLAlchemy 2', 'PostgreSQL 18 + pgvector', 'React', 'Expo', 'OpenTofu'],
        },
        {
          title: 'Headless commerce platform',
          region: 'Mexico',
          body:
            'Strapi API and Nuxt storefront for a distributor, with catalogue import tooling, shipping-zone resolution by postal code across multiple carriers, and payment gateway integration. Included the migration and clean-up of an inherited product and pricing dataset.',
          stack: ['Strapi', 'Nuxt', 'PostgreSQL', 'GCP'],
        },
        {
          title: 'Market intelligence collector',
          region: 'Mexico',
          body:
            'A standalone collector that pulls public trade and regulatory sources — news feeds, the US Federal Register, Census trade data, Banxico and FRED indicators — classifies and summarises them in Spanish with an LLM, and pushes the results into the client ERP over XML-RPC. Python standard library only, no dependencies.',
          stack: ['Python', 'LLM classification', 'XML-RPC', 'Public data APIs'],
        },
      ],
    },
    approach: {
      eyebrow: 'How I work',
      title: 'Three things that do not change',
      items: [
        {
          title: 'Backend first',
          body:
            'The data model and the security boundaries get settled before anything is drawn. Most of the expensive problems in a project are decided in the first week, in the schema.',
        },
        {
          title: 'Tests before implementation',
          body:
            'No feature without a failing test first. Small commits, gated releases, and acceptance testing with you before anything reaches production.',
        },
        {
          title: 'AI-assisted, not AI-generated',
          body:
            'My background is backend. Assisted tooling is what lets me carry a project across the whole stack — architecture through to web and mobile front ends — but everything that ships has been read and understood.',
        },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'Who you would be working with',
      body: [
        'I am a backend engineer working independently from Madrid, with clients across Spain, Mexico and the United States. Most of my work is with established businesses that have a system doing something important and need it extended, replaced or connected to something else.',
        'That means I spend more time on data models, integration boundaries and deployment than on greenfield product design. When a project does need a front end — an admin panel, a storefront, a mobile app — assisted tooling lets me take it there myself rather than handing off half a system.',
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Tell me what you are building',
      body:
        'A short description of the system and the problem is enough to start. I reply to everything within two working days.',
      cta: 'hola@raulceron.es',
      availability: 'Available for new projects',
      billing: 'Invoicing in EUR or USD · Spain, Mexico and the United States',
    },
    footer: {
      legal: 'Legal information',
      rights: 'All rights reserved.',
      identity: 'Identification details',
    },
  },

  es: {
    htmlLang: 'es',
    meta: {
      title: 'Raúl Cerón — Desarrollo backend y consultoría digital',
      description:
        'Ingeniero backend freelance en Madrid. Desarrollo de módulos Odoo y ERP, comercio headless, integración de APIs, PostgreSQL y búsqueda vectorial, arquitectura cloud en OCI, AWS y GCP.',
    },
    nav: {
      services: 'Servicios',
      work: 'Proyectos',
      approach: 'Método',
      contact: 'Contacto',
      langLabel: 'English',
      langHref: '/',
    },
    hero: {
      eyebrow: 'Desarrollo y consultoría digital',
      title: 'Ingeniería backend, de principio a fin.',
      lede:
        'Diseño y construyo los sistemas sobre los que opera una empresa — personalización de ERP, plataformas de comercio, integraciones e infraestructura de datos — y los llevo hasta las aplicaciones web y móviles que la gente usa cada día.',
      note: 'Con base en Madrid. Trabajo con clientes en España, México y Estados Unidos.',
      cta: 'Hablemos',
      ctaSecondary: 'Ver qué hago',
    },
    services: {
      eyebrow: 'Servicios',
      title: 'Qué construyo',
      lede:
        'Seis áreas que aparecen una y otra vez. La mayoría de los proyectos combinan tres o cuatro.',
      items: [
        {
          n: '01',
          title: 'Desarrollo ERP y Odoo',
          body:
            'Módulos Odoo a medida, migraciones desde ERP heredados y los flujos de ventas, compras, soporte y reporting sobre los que funciona el negocio. Con un flujo de releases feature → dev → main y validación del cliente antes de que nada llegue a producción.',
          tags: ['Odoo 18', 'Python', 'XML-RPC', 'PostgreSQL'],
        },
        {
          n: '02',
          title: 'Comercio headless',
          body:
            'APIs sobre Strapi con tiendas en Nuxt, y personalización de instalaciones WooCommerce existentes. Herramientas de importación de catálogo, lógica de variantes y atributos, reglas de envío por código postal e integración de pasarelas de pago.',
          tags: ['Strapi', 'Nuxt', 'WooCommerce', 'Pasarelas de pago'],
        },
        {
          n: '03',
          title: 'APIs e integraciones',
          body:
            'Servicios REST y GraphQL, pipelines de webhooks y el trabajo poco vistoso de conectar sistemas que nunca fueron diseñados para hablar entre sí: pasarelas de pago, logística, fuentes de datos públicas, ERP heredados por XML-RPC.',
          tags: ['REST', 'GraphQL', 'Webhooks', 'XML-RPC'],
        },
        {
          n: '04',
          title: 'Bases de datos y búsqueda',
          body:
            'Diseño de esquemas, aislamiento multi-tenant con row-level security en la propia base de datos en lugar de en el código, migraciones con reconciliación, y búsqueda semántica con embeddings en pgvector junto a los datos relacionales.',
          tags: ['PostgreSQL', 'pgvector', 'RLS', 'NoSQL'],
        },
        {
          n: '05',
          title: 'Arquitectura cloud',
          body:
            'Infraestructura como código en OCI, AWS y GCP: despliegues en contenedores, almacenamiento y gestión de claves por cliente, controles de red y políticas, y el trabajo aburrido de fiabilidad que decide si un sistema sobrevive a su segundo año.',
          tags: ['OpenTofu', 'OCI', 'AWS', 'GCP', 'Docker'],
        },
        {
          n: '06',
          title: 'Integración de IA',
          body:
            'Pipelines de embeddings, recuperación y clasificación integrados en los sistemas que ya tienes, no un chatbot pegado por fuera. Incluida la pregunta difícil: qué datos pueden acercarse a un modelo y cómo demostrar que nunca llegaron.',
          tags: ['Embeddings', 'RAG', 'Pipelines LLM'],
        },
      ],
    },
    work: {
      eyebrow: 'Proyectos',
      title: 'Algunos trabajos recientes',
      lede: 'Los nombres de los clientes se omiten. El detalle técnico es real.',
      items: [
        {
          title: 'Migración de ERP para un fabricante industrial',
          region: 'México',
          body:
            'Sustitución de un ERP propio heredado por Odoo 18, con alrededor de diecinueve módulos a medida en soporte, ventas, compras e inteligencia de mercado. Publicado mediante un flujo de ramas con validación del cliente en cada bloque. La migración de datos se ejecutó bajo un protocolo estricto de no exposición: los registros reales permanecieron en cuarentena fuera del entorno de desarrollo y en el código solo se usaron datos sintéticos.',
          stack: ['Odoo 18', 'Python', 'PostgreSQL', 'Docker', 'nginx'],
        },
        {
          title: 'Plataforma de gobierno corporativo zero-knowledge',
          region: 'En desarrollo',
          body:
            'Plataforma documental para consejos de administración en la que el servidor nunca necesita el texto en claro. Bóveda de documentos cifrada de extremo a extremo, registro de auditoría encadenado por hash y solo-añadir, votación criptográfica de resoluciones y un nivel de búsqueda opcional con embeddings vectoriales. El aislamiento entre clientes lo impone la base de datos con row-level security, no la lógica de aplicación.',
          stack: ['FastAPI', 'SQLAlchemy 2', 'PostgreSQL 18 + pgvector', 'React', 'Expo', 'OpenTofu'],
        },
        {
          title: 'Plataforma de comercio headless',
          region: 'México',
          body:
            'API en Strapi y tienda en Nuxt para un distribuidor, con herramientas de importación de catálogo, resolución de zonas de envío por código postal entre varias paqueterías e integración de pasarela de pago. Incluyó la migración y limpieza de un conjunto heredado de productos y precios.',
          stack: ['Strapi', 'Nuxt', 'PostgreSQL', 'GCP'],
        },
        {
          title: 'Recolector de inteligencia de mercado',
          region: 'México',
          body:
            'Herramienta independiente que consulta fuentes públicas de comercio y regulación — feeds de noticias, Federal Register de EE. UU., datos de comercio del Census, indicadores de Banxico y FRED —, las clasifica y resume en español con un LLM y publica los resultados en el ERP del cliente por XML-RPC. Solo librería estándar de Python, sin dependencias.',
          stack: ['Python', 'Clasificación con LLM', 'XML-RPC', 'APIs de datos públicos'],
        },
      ],
    },
    approach: {
      eyebrow: 'Método',
      title: 'Tres cosas que no cambian',
      items: [
        {
          title: 'El backend primero',
          body:
            'El modelo de datos y los límites de seguridad se deciden antes de dibujar nada. Casi todos los problemas caros de un proyecto se deciden en la primera semana, en el esquema.',
        },
        {
          title: 'Las pruebas antes que el código',
          body:
            'Ninguna funcionalidad sin una prueba que falle primero. Commits pequeños, releases con puertas de validación y pruebas de aceptación contigo antes de llegar a producción.',
        },
        {
          title: 'Asistido por IA, no generado por IA',
          body:
            'Mi base es el backend. Las herramientas asistidas son lo que me permite cubrir todo el stack — de la arquitectura al front web y móvil — pero todo lo que se publica está leído y entendido.',
        },
      ],
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Con quién trabajarías',
      body: [
        'Soy ingeniero backend y trabajo de forma independiente desde Madrid, con clientes en España, México y Estados Unidos. La mayor parte de mi trabajo es con empresas ya establecidas que tienen un sistema haciendo algo importante y necesitan ampliarlo, sustituirlo o conectarlo con otra cosa.',
        'Eso significa que dedico más tiempo a modelos de datos, límites de integración y despliegue que al diseño de producto desde cero. Cuando un proyecto necesita front —un panel de administración, una tienda, una app móvil—, las herramientas asistidas me permiten llevarlo yo mismo en lugar de entregar medio sistema.',
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Cuéntame qué estás construyendo',
      body:
        'Con una descripción breve del sistema y del problema es suficiente para empezar. Respondo a todo en un plazo de dos días laborables.',
      cta: 'hola@raulceron.es',
      availability: 'Disponible para nuevos proyectos',
      billing: 'Facturación en EUR o USD · España, México y Estados Unidos',
    },
    footer: {
      legal: 'Información legal',
      rights: 'Todos los derechos reservados.',
      identity: 'Datos identificativos',
    },
  },
} as const;

export type SiteContent = (typeof content)['en'];
