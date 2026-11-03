import { ServiceOffering } from '@/types';

export const servicesData: ServiceOffering[] = [
  {
    slug: 'web-development',
    title: 'Custom Web Application Engineering',
    shortTitle: 'Web Development',
    tagline: 'High-performance, SEO-optimized web applications engineered for speed, conversions, and scale.',
    summary:
      'We design and build modern Single-Page and Multi-Page web applications using Next.js, React, and TypeScript. From enterprise SaaS portals to high-converting web applications, we combine server-side rendering with edge caching for instant load times.',
    problem:
      'Legacy websites and slow monolithic frameworks cause elevated bounce rates, terrible Core Web Vitals, poor SEO rankings, and brittle codebases that resist iterative feature releases.',
    solution:
      'Our team builds on modern Next.js App Router architecture with Tailwind CSS and TypeScript. We deliver sub-second Time-to-First-Byte (TTFB), mathematical accessibility, clean component design systems, and seamless API integrations.',
    capabilities: [
      'Full-Stack Next.js / React Web Applications',
      'Enterprise SaaS Dashboards & Admin Portals',
      'High-Conversion E-Commerce Platforms',
      'Progressive Web Apps (PWAs) with Offline Caching',
      'Headless CMS Architectures (Sanity, Strapi, Contentful)',
      'Real-Time WebSocket & Server-Sent Event Dashboards',
    ],
    techStack: [
      'Next.js (App Router)',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'REST & GraphQL APIs',
      'Vercel Edge',
    ],
    deliverables: [
      'Production-ready, strictly typed source code repository',
      'Reusable, tokenized Tailwind component design system',
      'Full Lighthouse 90+ audit report and Core Web Vitals optimization',
      'Automated CI/CD deployment pipeline configuration',
      'Developer handoff documentation & architectural diagrams',
    ],
    iconName: 'Globe',
  },
  {
    slug: 'mobile-apps',
    title: 'Cross-Platform Mobile App Development',
    shortTitle: 'Mobile Apps',
    tagline: 'Fluid, 60fps native mobile experiences for iOS and Android built with unified efficiency.',
    summary:
      'We engineer cross-platform mobile applications using React Native and Flutter, providing smooth native performance, hardware integrations, and offline capabilities without the expense of maintaining dual platform codebases.',
    problem:
      'Maintaining separate Swift (iOS) and Kotlin (Android) codebases doubles development expenses, delays market releases, and creates persistent feature discrepancies between devices.',
    solution:
      'We utilize modern React Native and Flutter workflows with shared business logic and native device bridges. You receive pixel-perfect interfaces, fluid native gestures, and streamlined App Store and Google Play submissions.',
    capabilities: [
      'Cross-Platform iOS & Android Apps from One Codebase',
      'Native Device Hardware Integration (Camera, GPS, Biometrics)',
      'Push Notifications & Background Task Processing',
      'Offline-First Data Storage with SQLite / WatermelonDB',
      'Secure In-App Purchases & Payment Gateway Integration',
      'App Store Optimization (ASO) & Release Management',
    ],
    techStack: [
      'React Native',
      'Expo',
      'Flutter / Dart',
      'TypeScript',
      'SQLite',
      'Firebase / Supabase',
      'Native iOS/Android SDKs',
    ],
    deliverables: [
      'Compiled production binaries for Apple App Store & Google Play',
      'Clean cross-platform TypeScript/Dart repository',
      'Automated release and over-the-air (OTA) update pipeline',
      'App store asset pack and compliance documentation',
    ],
    iconName: 'Smartphone',
  },
  {
    slug: 'backend-microservices',
    title: 'Distributed Backend & Microservices Architecture',
    shortTitle: 'Backend & Microservices',
    tagline: 'Fault-tolerant, high-throughput APIs and distributed systems built to never fail under load.',
    summary:
      'We architect scalable, event-driven backends and REST/GraphQL microservices using Java Spring Boot, Python, and Node.js. Built for data integrity, low latency, and zero single points of failure.',
    problem:
      'Monolithic legacy backends frequently buckle under unexpected traffic spikes, suffer from database locks, expose security vulnerabilities, and slow down development teams with tightly coupled code.',
    solution:
      'We decouple business domains into clean, isolated microservices connected via asynchronous messaging queues and optimized relational/NoSQL datastores with sub-millisecond query execution.',
    capabilities: [
      'High-Throughput RESTful & GraphQL API Engineering',
      'Enterprise Java Spring Boot & Python Microservices',
      'Asynchronous Event Streaming with Kafka & RabbitMQ',
      'Relational Database Modeling & Query Optimization (PostgreSQL)',
      'Distributed Caching & Session Stores (Redis)',
      'Zero-Trust Security, OAuth2, JWT & Role-Based Access Control',
    ],
    techStack: [
      'Java Spring Boot',
      'Python FastAPI / Django',
      'Node.js / Express',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Kafka / RabbitMQ',
    ],
    deliverables: [
      'Fully documented OpenAPI / Swagger specification',
      'Containerized Docker microservice images',
      'Automated database migration scripts with zero-downtime execution',
      'End-to-end integration and load testing suites',
    ],
    iconName: 'Server',
  },
  {
    slug: 'ai-genai-solutions',
    title: 'Applied AI & Generative AI Solutions',
    shortTitle: 'AI & GenAI Solutions',
    tagline: 'Custom Large Language Models, RAG pipelines, and intelligent automation built for business value.',
    summary:
      'We bring cutting-edge Generative AI directly into your business processes. From Retrieval-Augmented Generation (RAG) over proprietary datasets to autonomous task agents and predictive machine learning models.',
    problem:
      'Off-the-shelf AI models lack domain context, hallucinate responses, risk proprietary data leaks, and fail to integrate cleanly with existing enterprise workflows.',
    solution:
      'We engineer domain-bounded AI solutions with enterprise privacy guardrails. We implement semantic vector search, fine-tune models on your proprietary datasets, and construct deterministic verification layers.',
    capabilities: [
      'Retrieval-Augmented Generation (RAG) with Vector Databases',
      'Fine-Tuning Open Source LLMs (Llama, Mistral, Gemma)',
      'Autonomous Task Agents & Multi-Step Reasoning Pipelines',
      'Intelligent Document Processing (IDP) & Semantic Extraction',
      'Predictive Analytics & Real-Time Classification Pipelines',
      'Enterprise LLM Guardrails & Hallucination Mitigation',
    ],
    techStack: [
      'Python',
      'LangChain & LlamaIndex',
      'OpenAI & Gemini APIs',
      'Hugging Face Transformers',
      'Pinecone / pgvector / Qdrant',
      'PyTorch',
      'FastAPI',
    ],
    deliverables: [
      'Production-ready AI inference APIs with streaming responses',
      'Indexed vector database pipeline with automated document ingestion',
      'Model evaluation benchmarks and accuracy metrics',
      'Enterprise data privacy and safety guardrail configuration',
    ],
    iconName: 'Bot',
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud Infrastructure & Automated DevOps',
    shortTitle: 'Cloud & DevOps',
    tagline: 'Automated CI/CD pipelines, container orchestration, and cloud architecture optimized for cost.',
    summary:
      'We build reliable, automated cloud environments using Infrastructure as Code (IaC), Docker containerization, Kubernetes orchestration, and continuous integration workflows on AWS, GCP, and modern edge platforms.',
    problem:
      'Manual server setups, missing staging environments, and opaque deployments lead to costly downtime, security vulnerabilities, and bloated cloud invoices.',
    solution:
      'We codify your infrastructure using Terraform, set up automated zero-downtime GitHub Actions deployment pipelines, and configure comprehensive health telemetry with instant alerts.',
    capabilities: [
      'Automated CI/CD Pipelines (GitHub Actions, GitLab CI)',
      'Docker Containerization & Kubernetes (EKS, GKE) Orchestration',
      'Infrastructure as Code (IaC) via Terraform & Pulumi',
      'Cloud Cost Optimization & Serverless Architectures',
      'Automated Zero-Downtime Blue/Green Deployments',
      '24/7 Observability, Logging & Telemetry (Prometheus, Grafana)',
    ],
    techStack: [
      'Docker',
      'Kubernetes',
      'AWS (ECS, Lambda, RDS, S3)',
      'Google Cloud Platform',
      'GitHub Actions',
      'Terraform',
      'Linux / Bash',
    ],
    deliverables: [
      'Modular Terraform infrastructure templates',
      'End-to-end automated CI/CD deployment pipelines',
      'Monitoring dashboards and automated PagerDuty/Slack alerting rules',
      'Security audit report with IAM least-privilege configurations',
    ],
    iconName: 'Cloud',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design Systems & Product Strategy',
    shortTitle: 'UI/UX Design',
    tagline: 'Human-centered interfaces, intuitive design systems, and prototypes engineered for conversion.',
    summary:
      'We craft clean, accessible, and mathematically balanced user interfaces backed by user research. From interactive wireframes to tokenized design systems in Figma, we ensure seamless handoff to frontend engineers.',
    problem:
      'Cluttered interfaces, inconsistent UI components, and unintuitive navigation confuse users, spike drop-off rates, and drag down user retention.',
    solution:
      'We apply rigorous design thinking to simplify complex user workflows. Every screen is designed with visual hierarchy, WCAG 2.1 AA accessibility, and developer-ready design tokens in Figma.',
    capabilities: [
      'User Research, Persona Modeling & User Journey Mapping',
      'Wireframing & Interactive High-Fidelity Figma Prototyping',
      'Modular Design Systems with Reusable Tokenized Components',
      'Mobile-First Responsive Layouts & Tablet Breakpoints',
      'Usability Testing & Conversion Rate Optimization (CRO)',
      'WCAG 2.1 AA Accessibility Audits & Contrast Verification',
    ],
    techStack: [
      'Figma',
      'FigJam',
      'Tokens Studio',
      'Tailwind CSS Tokens',
      'Adobe Creative Cloud',
      'Storybook',
    ],
    deliverables: [
      'Complete Figma master design file with autolayout components',
      'Interactive click-through prototype for client user testing',
      'Tokenized design specification sheet for developer implementation',
      'Production-ready SVG and WebP iconography and graphic assets',
    ],
    iconName: 'Palette',
  },
];

