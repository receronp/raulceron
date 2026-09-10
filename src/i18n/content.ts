/**
 * All site copy, both locales.
 *
 * Grounding rule: every service and project below describes work that exists
 * in the sibling repositories under ~/projects. Clients are anonymised on
 * purpose — several of those repos hold production credentials or commercial
 * documents under confidentiality. Do not add a client name here without
 * written permission, and do not invent metrics, dates or headcounts.
 *
 * Experience, education, credentials and the countries list come from the CV
 * and the LinkedIn profile instead; see CLAUDE.md.
 */

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

/**
 * Employers, schools and certifying bodies from the CV and LinkedIn profile.
 * These are employment and education history, not clients, so naming them is
 * fine; freelance clients stay anonymous (see the grounding rule above).
 *
 * `h` is the rendered height in px and `aspect` the logo's width/height, so
 * each <img> reserves its exact box. Heights are tuned by eye for equal
 * visual weight: wide wordmarks sit shorter, solid square marks smaller.
 *
 * Sources: Simple Icons (CC0) for TCS, AWS, Google Cloud, Linux Foundation;
 * upv.es for UPV; xpertal.com for Xpertal; Wikimedia Commons for the rest.
 */
export const orgs = {
  self: { name: 'Raúl Cerón', logo: '', aspect: 1, h: 28 },
  tcs: { name: 'Tata Consultancy Services', logo: '/logos/tcs.svg', aspect: 1.595, h: 20 },
  xpertal: { name: 'Xpertal Global Services', logo: '/logos/xpertal.png', aspect: 1.994, h: 34 },
  porsche: { name: 'Porsche Engineering', logo: '/logos/porsche.svg', aspect: 15, h: 10 },
  yazaki: { name: 'Yazaki North America', logo: '/logos/yazaki.svg', aspect: 6.386, h: 14 },
  upv: { name: 'Universitat Politècnica de València', logo: '/logos/upv.svg', aspect: 3.154, h: 36 },
  tec: { name: 'Tecnológico de Monterrey', logo: '/logos/tec.svg', aspect: 1, h: 36 },
  rub: { name: 'Ruhr-Universität Bochum', logo: '/logos/rub.svg', aspect: 1, h: 30 },
  waterloo: { name: 'University of Waterloo', logo: '/logos/waterloo.svg', aspect: 4.689, h: 26 },
  linuxfoundation: { name: 'The Linux Foundation', logo: '/logos/linuxfoundation.svg', aspect: 1, h: 20 },
  aws: { name: 'Amazon Web Services', logo: '/logos/aws.svg', aspect: 1.672, h: 18 },
  googlecloud: { name: 'Google Cloud', logo: '/logos/googlecloud.svg', aspect: 1.247, h: 20 },
} as const;
export type OrgKey = keyof typeof orgs;

export const content = {
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Raúl Cerón — Backend engineering and digital consulting',
      description:
        'Freelance backend engineer and CKA-certified cloud architect in Zaragoza. ERP and Odoo development, headless commerce, API integrations, PostgreSQL and vector search, Kubernetes and cloud architecture on OCI, AWS and GCP.',
    },
    nav: {
      services: 'Services',
      work: 'Work',
      experience: 'Experience',
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
      note: 'Based in Zaragoza. Certified Kubernetes Administrator. Working with clients in Spain, Mexico and the United States.',
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
            'Infrastructure as code across OCI, AWS and GCP: containerised workloads on Kubernetes, CI/CD pipelines, per-tenant storage and key management, network and policy gates, and the boring reliability work that decides whether a system survives its second year.',
          tags: ['Kubernetes', 'OpenTofu', 'OCI', 'AWS', 'GCP', 'Docker'],
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
    experience: {
      eyebrow: 'Experience',
      title: 'Where the experience comes from',
      lede:
        'Automotive R&D, enterprise cloud engineering and now an independent practice, across four countries.',
      rolesLabel: 'Employment',
      roles: [
        {
          org: 'self',
          role: 'Independent backend engineer',
          company: 'Freelance',
          place: 'Zaragoza, Spain',
          dates: 'Oct 2025 – present',
          body:
            'End-to-end backend systems for clients in North America and Europe, including LLM and agentic workflows that automate business processes. The projects above come from this period.',
          tags: ['Python', 'PostgreSQL', 'LLM agents', 'OpenTofu'],
        },
        {
          org: 'tcs',
          role: 'Assistant Systems Engineer',
          company: 'Tata Consultancy Services',
          place: 'Monterrey, Mexico',
          dates: 'Apr 2022 – Jul 2024',
          body:
            'CI/CD pipelines with GitHub Actions, Docker and Artifactory for microservices on Google Cloud; Kubernetes deployments, services and ingress on GKE; a Data Catalog and BigQuery backend for tracking machine-learning models; JWT security middleware for a Node.js backend behind Google Endpoints.',
          tags: ['GKE', 'Kubernetes', 'GitHub Actions', 'BigQuery', 'Node.js'],
        },
        {
          org: 'xpertal',
          role: 'Digital Transformation Intern',
          company: 'Xpertal Global Services',
          place: 'Monterrey, Mexico · remote',
          dates: 'Jan – Apr 2022',
          body:
            'Designed and built the backend of an internal reservation system in Java, with Spring Boot and Hibernate over MySQL, and coached interns on their first placement in version control, information security and task management.',
          tags: ['Java', 'Spring Boot', 'Hibernate', 'MySQL'],
        },
        {
          org: 'porsche',
          role: 'Intern, Testing Connectivity',
          company: 'Porsche Engineering',
          place: 'Mönsheim, Germany',
          dates: 'Apr – Jul 2021',
          body:
            'Redesigned the heartbeat verification service for remote devices that lose connectivity, and extended a REST client to carry MQTT status reports and trigger device updates within the continuous-integration system.',
          tags: ['Python', 'MQTT', 'REST', 'CI'],
        },
        {
          org: 'yazaki',
          role: 'R&D working student',
          company: 'Yazaki North America',
          place: 'Monterrey, Mexico',
          dates: 'Aug – Dec 2019',
          body:
            'Worked on a digital instrument cluster for a vehicle: V-model documentation with UML and test procedures, DC-DC converter schematics in Mentor Xpedition, and CAN signals routed to a Qt display.',
          tags: ['CAN bus', 'Qt', 'UML', 'V-model'],
        },
      ],
      educationLabel: 'Education',
      education: [
        {
          org: 'upv',
          degree: 'MSc Computer and Network Engineering',
          place: 'Valencia, Spain',
          dates: '2024 – 2025',
          note: 'Scholarship holder, Ibero-American Postgraduate University Association (AUIP)',
        },
        {
          org: 'tec',
          degree: 'BSc Digital Systems and Robotics Engineering',
          place: 'Monterrey, Mexico',
          dates: '2017 – 2022',
          note: 'Focus on automotive embedded technology',
        },
        {
          org: 'rub',
          degree: 'Computer Engineering, study abroad',
          place: 'Bochum, Germany',
          dates: '2020 – 2021',
          note: '',
        },
        {
          org: 'waterloo',
          degree: 'Mechatronics Engineering, first year',
          place: 'Waterloo, Canada',
          dates: '2016 – 2017',
          note: '',
        },
      ],
    },
    credentials: {
      eyebrow: 'Skills & credentials',
      title: 'What I work with',
      lede:
        'Grouped by where it gets used. Levels are honest: Go is working knowledge, not a speciality.',
      skills: [
        { group: 'Programming', items: ['Python', 'Node.js', 'Java', 'SQL', 'Bash', 'C++', 'Go (basic)'] },
        { group: 'Backend', items: ['FastAPI', 'Spring Boot', 'Hibernate', 'SQLAlchemy', 'Strapi', 'Odoo', 'REST', 'GraphQL', 'JWT auth'] },
        { group: 'Cloud & DevOps', items: ['Kubernetes', 'GKE', 'Docker', 'GitHub Actions', 'Artifactory', 'Google Cloud', 'AWS', 'OCI', 'OpenTofu', 'Linux'] },
        { group: 'Data & AI', items: ['PostgreSQL', 'pgvector', 'MySQL', 'BigQuery', 'NoSQL', 'Embeddings', 'RAG', 'Agentic workflows', 'Recommender systems'] },
        { group: 'Embedded & IoT', items: ['MQTT', 'CAN bus', 'Qt', 'ROS', 'Device connectivity'] },
        { group: 'Front end', items: ['React', 'Nuxt', 'Expo'] },
      ],
      certsLabel: 'Certifications',
      certs: [
        { org: 'linuxfoundation', name: 'Certified Kubernetes Administrator (CKA)', status: 'Active until Mar 2027', active: true },
        { org: 'aws', name: 'AWS Certified Solutions Architect – Associate', status: 'Earned Dec 2022', active: false },
        { org: 'googlecloud', name: 'Google Cloud Professional Cloud Developer', status: 'Earned Dec 2022', active: false },
        { org: 'googlecloud', name: 'Google Cloud Associate Cloud Engineer', status: 'Earned Nov 2022', active: false },
      ],
      languagesLabel: 'Languages',
      languages: [
        { name: 'Spanish', level: 'Native' },
        { name: 'English', level: 'Fluent · schooled in Canada, TOEFL iBT 109' },
        { name: 'German', level: 'B1 · Goethe-Zertifikat' },
        { name: 'French', level: 'A2 · DELF' },
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
        'I am a backend engineer working independently from Zaragoza, with clients across Spain, Mexico and the United States. Most of my work is with established businesses that have a system doing something important and need it extended, replaced or connected to something else.',
        'That means I spend more time on data models, integration boundaries and deployment than on greenfield product design. When a project does need a front end — an admin panel, a storefront, a mobile app — assisted tooling lets me take it there myself rather than handing off half a system.',
        'Before going independent I spent over two years at Tata Consultancy Services running CI/CD pipelines and Kubernetes workloads on Google Cloud. Before that came an engineering degree focused on automotive embedded technology, with internships in automotive R&D and at Porsche Engineering.',
      ],
      placesLabel: 'Where I have studied and worked',
      places: [
        {
          country: 'Canada',
          years: '2013 – 2017',
          body: 'Secondary school in Ontario, then a first year of Mechatronics Engineering at the University of Waterloo.',
        },
        {
          country: 'Mexico',
          years: '2017 – 2024',
          body: 'Engineering degree at Tec de Monterrey, then R&D, internship and full-time roles at Yazaki, Xpertal and Tata Consultancy Services.',
        },
        {
          country: 'Germany',
          years: '2020 – 2021',
          body: 'Computer Engineering at Ruhr-Universität Bochum and an internship at Porsche Engineering.',
        },
        {
          country: 'Spain',
          years: '2024 – present',
          body: 'MSc at the Universitat Politècnica de València as an AUIP scholar, then an independent practice in Zaragoza, based at Impact Hub.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Tell me what you are building',
      body:
        'A short description of the system and the problem is enough to start. I reply to everything within two working days.',
      cta: 'hola@raulceron.es',
      availability: 'Available for new projects',
      billing: 'Invoicing in Spain, Mexico and the United States',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },

  es: {
    htmlLang: 'es',
    meta: {
      title: 'Raúl Cerón — Desarrollo backend y consultoría digital',
      description:
        'Ingeniero backend freelance y arquitecto cloud con certificación CKA en Zaragoza. Desarrollo de módulos Odoo y ERP, comercio headless, integración de APIs, PostgreSQL y búsqueda vectorial, Kubernetes y arquitectura cloud en OCI, AWS y GCP.',
    },
    nav: {
      services: 'Servicios',
      work: 'Proyectos',
      experience: 'Trayectoria',
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
      note: 'Con base en Zaragoza. Administrador de Kubernetes certificado (CKA). Trabajo con clientes en España, México y Estados Unidos.',
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
            'Infraestructura como código en OCI, AWS y GCP: cargas en contenedores sobre Kubernetes, pipelines de CI/CD, almacenamiento y gestión de claves por cliente, controles de red y políticas, y el trabajo aburrido de fiabilidad que decide si un sistema sobrevive a su segundo año.',
          tags: ['Kubernetes', 'OpenTofu', 'OCI', 'AWS', 'GCP', 'Docker'],
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
    experience: {
      eyebrow: 'Trayectoria',
      title: 'De dónde viene la experiencia',
      lede:
        'I+D en automoción, ingeniería cloud en una gran consultora y ahora una práctica independiente, en cuatro países.',
      rolesLabel: 'Experiencia profesional',
      roles: [
        {
          org: 'self',
          role: 'Ingeniero backend independiente',
          company: 'Autónomo',
          place: 'Zaragoza, España',
          dates: 'oct. 2025 – actualidad',
          body:
            'Sistemas backend de principio a fin para clientes de Norteamérica y Europa, incluidos flujos con LLM y agentes que automatizan procesos de negocio. Los proyectos de arriba son de esta etapa.',
          tags: ['Python', 'PostgreSQL', 'Agentes LLM', 'OpenTofu'],
        },
        {
          org: 'tcs',
          role: 'Assistant Systems Engineer',
          company: 'Tata Consultancy Services',
          place: 'Monterrey, México',
          dates: 'abr. 2022 – jul. 2024',
          body:
            'Pipelines de CI/CD con GitHub Actions, Docker y Artifactory para microservicios en Google Cloud; despliegues, servicios e ingress de Kubernetes en GKE; un backend sobre Data Catalog y BigQuery para el seguimiento de modelos de machine learning, y middleware de seguridad JWT para un backend Node.js detrás de Google Endpoints.',
          tags: ['GKE', 'Kubernetes', 'GitHub Actions', 'BigQuery', 'Node.js'],
        },
        {
          org: 'xpertal',
          role: 'Becario de Transformación Digital',
          company: 'Xpertal Global Services',
          place: 'Monterrey, México · en remoto',
          dates: 'ene. – abr. 2022',
          body:
            'Diseño y desarrollo del backend de un sistema interno de reservas en Java, con Spring Boot e Hibernate sobre MySQL, y acompañamiento a becarios en su primera experiencia en control de versiones, seguridad de la información y gestión de tareas.',
          tags: ['Java', 'Spring Boot', 'Hibernate', 'MySQL'],
        },
        {
          org: 'porsche',
          role: 'Becario en pruebas de conectividad',
          company: 'Porsche Engineering',
          place: 'Mönsheim, Alemania',
          dates: 'abr. – jul. 2021',
          body:
            'Rediseño del servicio de verificación de heartbeat para dispositivos remotos que pierden conectividad, y ampliación de un cliente REST para transportar por MQTT los informes de estado y lanzar actualizaciones de dispositivos dentro del sistema de integración continua.',
          tags: ['Python', 'MQTT', 'REST', 'CI'],
        },
        {
          org: 'yazaki',
          role: 'Estudiante en prácticas de I+D',
          company: 'Yazaki North America',
          place: 'Monterrey, México',
          dates: 'ago. – dic. 2019',
          body:
            'Trabajo sobre el cuadro de instrumentos digital de un vehículo: documentación en modelo V con diagramas UML y procedimientos de prueba, esquemáticos de un convertidor DC-DC en Mentor Xpedition y señales CAN llevadas a una pantalla en Qt.',
          tags: ['Bus CAN', 'Qt', 'UML', 'Modelo V'],
        },
      ],
      educationLabel: 'Formación',
      education: [
        {
          org: 'upv',
          degree: 'Máster en Ingeniería de Computadores y Redes',
          place: 'Valencia, España',
          dates: '2024 – 2025',
          note: 'Becario de la Asociación Universitaria Iberoamericana de Postgrado (AUIP)',
        },
        {
          org: 'tec',
          degree: 'Ingeniería en Sistemas Digitales y Robótica',
          place: 'Monterrey, México',
          dates: '2017 – 2022',
          note: 'Especialización en tecnología embebida para automoción',
        },
        {
          org: 'rub',
          degree: 'Ingeniería de Computadores, estancia internacional',
          place: 'Bochum, Alemania',
          dates: '2020 – 2021',
          note: '',
        },
        {
          org: 'waterloo',
          degree: 'Ingeniería Mecatrónica, primer curso',
          place: 'Waterloo, Canadá',
          dates: '2016 – 2017',
          note: '',
        },
      ],
    },
    credentials: {
      eyebrow: 'Competencias y certificaciones',
      title: 'Con qué trabajo',
      lede:
        'Agrupado según dónde se usa. Los niveles son reales: Go es conocimiento práctico, no una especialidad.',
      skills: [
        { group: 'Programación', items: ['Python', 'Node.js', 'Java', 'SQL', 'Bash', 'C++', 'Go (básico)'] },
        { group: 'Backend', items: ['FastAPI', 'Spring Boot', 'Hibernate', 'SQLAlchemy', 'Strapi', 'Odoo', 'REST', 'GraphQL', 'Autenticación JWT'] },
        { group: 'Cloud y DevOps', items: ['Kubernetes', 'GKE', 'Docker', 'GitHub Actions', 'Artifactory', 'Google Cloud', 'AWS', 'OCI', 'OpenTofu', 'Linux'] },
        { group: 'Datos e IA', items: ['PostgreSQL', 'pgvector', 'MySQL', 'BigQuery', 'NoSQL', 'Embeddings', 'RAG', 'Flujos agénticos', 'Sistemas de recomendación'] },
        { group: 'Embebido e IoT', items: ['MQTT', 'Bus CAN', 'Qt', 'ROS', 'Conectividad de dispositivos'] },
        { group: 'Front end', items: ['React', 'Nuxt', 'Expo'] },
      ],
      certsLabel: 'Certificaciones',
      certs: [
        { org: 'linuxfoundation', name: 'Certified Kubernetes Administrator (CKA)', status: 'Vigente hasta mar. 2027', active: true },
        { org: 'aws', name: 'AWS Certified Solutions Architect – Associate', status: 'Obtenida en dic. 2022', active: false },
        { org: 'googlecloud', name: 'Google Cloud Professional Cloud Developer', status: 'Obtenida en dic. 2022', active: false },
        { org: 'googlecloud', name: 'Google Cloud Associate Cloud Engineer', status: 'Obtenida en nov. 2022', active: false },
      ],
      languagesLabel: 'Idiomas',
      languages: [
        { name: 'Español', level: 'Nativo' },
        { name: 'Inglés', level: 'Fluido · escolarizado en Canadá, TOEFL iBT 109' },
        { name: 'Alemán', level: 'B1 · Goethe-Zertifikat' },
        { name: 'Francés', level: 'A2 · DELF' },
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
        'Soy ingeniero backend y trabajo de forma independiente desde Zaragoza, con clientes en España, México y Estados Unidos. La mayor parte de mi trabajo es con empresas ya establecidas que tienen un sistema haciendo algo importante y necesitan ampliarlo, sustituirlo o conectarlo con otra cosa.',
        'Eso significa que dedico más tiempo a modelos de datos, límites de integración y despliegue que al diseño de producto desde cero. Cuando un proyecto necesita front —un panel de administración, una tienda, una app móvil—, las herramientas asistidas me permiten llevarlo yo mismo en lugar de entregar medio sistema.',
        'Antes de establecerme por mi cuenta pasé más de dos años en Tata Consultancy Services gestionando pipelines de CI/CD y cargas de Kubernetes en Google Cloud. Antes de eso, una ingeniería centrada en tecnología embebida para automoción, con prácticas en I+D de automoción y en Porsche Engineering.',
      ],
      placesLabel: 'Dónde he estudiado y trabajado',
      places: [
        {
          country: 'Canadá',
          years: '2013 – 2017',
          body: 'Bachillerato en Ontario y un primer curso de Ingeniería Mecatrónica en la University of Waterloo.',
        },
        {
          country: 'México',
          years: '2017 – 2024',
          body: 'Ingeniería en el Tec de Monterrey, seguida de prácticas y puestos en Yazaki, Xpertal y Tata Consultancy Services.',
        },
        {
          country: 'Alemania',
          years: '2020 – 2021',
          body: 'Ingeniería de Computadores en la Ruhr-Universität Bochum y prácticas en Porsche Engineering.',
        },
        {
          country: 'España',
          years: '2024 – actualidad',
          body: 'Máster en la Universitat Politècnica de València como becario AUIP y, después, práctica independiente en Zaragoza, con base en Impact Hub.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Cuéntame qué estás construyendo',
      body:
        'Con una descripción breve del sistema y del problema es suficiente para empezar. Respondo a todo en un plazo de dos días laborables.',
      cta: 'hola@raulceron.es',
      availability: 'Disponible para nuevos proyectos',
      billing: 'Facturación en España, México y Estados Unidos',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
  },
} as const;

export type SiteContent = (typeof content)['en'];
