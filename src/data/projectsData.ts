import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    slug: 'ezturn',
    title: 'EzTurn',
    subtitle: 'Smart Queue Management & Predictive Wait-Time Analytics',
    category: 'Queue Management',
    summary:
      'Real-time virtual queuing and dynamic customer dispatch platform engineered to eliminate physical waiting lines and accurately forecast service throughput.',
    challenge:
      'High-density service facilities (clinics, administrative counters, civic departments) suffered from chaotic waiting areas, unpredictable service durations, and escalating customer frustration.',
    solution:
      'Engineered a responsive dual-portal platform featuring client ticket generation with dynamic countdown estimates and an intuitive operator dashboard with real-time WebSocket state synchronization.',
    techStack: [
      'Node.js',
      'Express',
      'React',
      'WebSockets',
      'MongoDB',
      'Redis',
      'Tailwind CSS',
    ],
    deliverables: [
      'Real-time client mobile queue ticket interface',
      'Administrative queue controller with service timing overrides',
      'Predictive analytics module calculating rolling average throughput',
      'Automated SMS / WhatsApp notification integration',
    ],
    outcomes: [
      'Eliminated up to 65% of physical lobby congestion',
      'Achieved dynamic wait time accuracy within ±3 minutes',
      'Provided operations managers with actionable throughput metrics',
    ],
    featured: true,
    demoUrl: '#', // [REPLACE: EzTurn live demo URL if available]
    githubUrl: '#', // [REPLACE: EzTurn repository URL if public]
  },
  {
    slug: 'digiu',
    title: 'DigiU',
    subtitle: 'Human Digital Twins: AI-Driven Framework with Fine-Tuned LLMs',
    category: 'AI / ML',
    summary:
      'A specialized conversational AI architecture simulating domain-specific human counterparts with semantic memory persistence and fine-tuned persona models.',
    challenge:
      'Conventional customer service chatbots fail to maintain personality consistency, hallucinate domain knowledge, and reset context across prolonged conversations.',
    solution:
      'Designed a multi-tier AI framework incorporating domain-specific fine-tuned LLM weights, semantic vector stores for long-term episodic memory, and deterministic verification guardrails.',
    techStack: [
      'Python',
      'FastAPI',
      'PyTorch',
      'Hugging Face',
      'LangChain',
      'Vector Embeddings',
      'React',
    ],
    deliverables: [
      'Persona-driven conversational API endpoints',
      'Vector retrieval memory index with episodic caching',
      'Hallucination filtering and safety validation pipeline',
      'Interactive web interface for simulation evaluation',
    ],
    outcomes: [
      'Demonstrated high persona fidelity and domain recall',
      'Modular architecture adaptable for corporate training and virtual advisory',
      'Sub-200ms initial response streaming via Edge Server-Sent Events',
    ],
    featured: true,
    demoUrl: '#', // [REPLACE: DigiU live demo URL if available]
    githubUrl: '#', // [REPLACE: DigiU repository URL if public]
  },
  {
    slug: 'sharemyride',
    title: 'ShareMyRide (SMR)',
    subtitle: 'High-Performance Geolocation Peer-to-Peer Ride Coordination Platform',
    category: 'Web App',
    summary:
      'A full-stack community ride-sharing platform integrating Google Maps routing algorithms, geospatial indexing, and real-time seat reservation.',
    challenge:
      'Daily commuters needed a reliable, cost-effective method to coordinate peer rides along common transit corridors without the exorbitant commission fees of corporate ride-hailing apps.',
    solution:
      'Built a full-stack MERN platform that computes corridor overlap with Google Maps Distance Matrix and spatial MongoDB queries, instantly pairing drivers and riders with negligible route variance.',
    techStack: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Google Maps API',
      'Tailwind CSS',
      'JWT Authentication',
    ],
    deliverables: [
      'Interactive route mapping with waypoint optimization',
      'Driver ride publication and seat inventory management',
      'Rider booking requests and in-app confirmation workflow',
      'Mobile-responsive layout designed for quick coordination on the go',
    ],
    outcomes: [
      'Optimized route matching efficiency along major commuter routes',
      'Clean, intuitive UI allowing ride creation in under 60 seconds',
      'Zero commission model empowering local commuter networks',
    ],
    featured: true,
    demoUrl: '#', // [REPLACE: ShareMyRide live demo URL if available]
    githubUrl: '#', // [REPLACE: ShareMyRide repository URL if public]
  },
];

