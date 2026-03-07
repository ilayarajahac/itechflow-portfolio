export const projects = [
  {
    id: 1,
    title: "ATHENAS SAP System",
    category: "Enterprise ERP Platform",
    description: "Full-stack enterprise ERP platform with 95,000+ lines of production code. Multi-tenant system with AI/ML integration, real-time processing, and mobile apps.",
    longDescription: "Enterprise-grade ERP system built from scratch in 2 months. Features include multi-tenant architecture, AI-powered HR with face recognition, GST-compliant finance module, ML demand forecasting, real-time dashboards, and React Native mobile apps. Currently live in production on Hostinger VPS serving multiple companies.",
    technologies: [
      "Django 5.2.6",
      "React",
      "React Native",
      "PostgreSQL",
      "Redis",
      "Celery",
      "TensorFlow 2.17",
      "OpenCV",
      "Nginx",
      "JWT Auth"
    ],
    features: [
      "Multi-tenant architecture with company data isolation",
      "AI-powered face recognition attendance (99.5% accuracy)",
      "GST-compliant finance module with automated tax calculations",
      "ML-based demand forecasting for inventory",
      "Real-time dashboards with WebSocket + Redis",
      "React Native mobile apps (iOS & Android)",
      "Role-based access control (RBAC)",
      "Automated background tasks with Celery",
      "150+ normalized database tables",
      "RESTful API with <200ms response time"
    ],
    metrics: {
      codeLines: "95,000+",
      developmentTime: "2 months",
      responseTime: "<200ms",
      concurrentUsers: "1,000+",
      accuracy: "99.5%",
      testCoverage: "85%+"
    },
    architecture: [
      "Microservices-ready monolith",
      "Nginx load balancer",
      "Django WSGI/ASGI deployment",
      "PostgreSQL with connection pooling",
      "Redis caching & session store",
      "Celery task queue",
      "Horizontal scaling ready"
    ],
    status: "Live in Production",
    link: "Private",
    image: null,
    year: "2024"
  },
  {
    id: 2,
    title: "AgencyFlow",
    category: "Enterprise Business Management Platform",
    description: "Production-ready enterprise platform for distribution & logistics agencies. Features PWA capabilities, real-time WebSocket updates, offline-first architecture, and bulletproof financial integrity.",
    longDescription: "Comprehensive business management platform with 10+ modules achieving 10/10 production readiness. Built with Django Channels for real-time features, React PWA for offline collections, and immutable ledger for financial integrity. Includes staff management, vehicle tracking, attendance with salary processing, e-way bill management, and real-time collections with automatic reconciliation.",
    technologies: [
      "Django 5.0.8",
      "Django REST Framework",
      "Django Channels 4.0",
      "React 18.2",
      "TypeScript 5.2",
      "Vite 5.0",
      "PostgreSQL",
      "Redis",
      "Celery 5.3.4",
      "WebSockets",
      "PWA",
      "IndexedDB",
      "TailwindCSS",
      "Zustand",
      "React Query"
    ],
    features: [
      "Progressive Web App with offline-first architecture",
      "Real-time WebSocket notifications (10,000+ concurrent connections)",
      "Immutable financial ledger with 100% data integrity",
      "Automated daily reconciliation with conflict resolution",
      "Staff management with encrypted sensitive data",
      "Attendance tracking with automatic salary calculation",
      "Vehicle & fuel tracking with analytics",
      "E-way bill management with bulk Excel upload",
      "Collections PWA with denomination entry",
      "Real-time sync with retry logic and conflict logging"
    ],
    metrics: {
      modules: "10+",
      apiResponse: "<100ms",
      wsLatency: "<50ms",
      concurrentUsers: "10,000+",
      uptime: "99.9%",
      dataIntegrity: "100%"
    },
    architecture: [
      "Django Channels + WebSockets",
      "Daphne ASGI + Gunicorn WSGI",
      "PostgreSQL with 15+ strategic indexes",
      "Redis for caching & task queue",
      "Celery Beat for scheduled tasks",
      "Service workers for offline PWA",
      "IndexedDB for offline storage"
    ],
    status: "Production Ready",
    link: "https://github.com/ilayarajahac/agency",
    image: null,
    year: "2024"
  },
  {
    id: 3,
    title: "Stock Market Expert App",
    category: "Stock Market Analysis Platform",
    description: "Comprehensive stock analysis platform with team collaboration, buddy system, and RAG (Red-Amber-Green) indicators. Features admin panel for team management, stock assignments, and real-time analysis tracking.",
    longDescription: "Full-stack stock market analysis platform enabling admins to manage teams, assign stocks, and facilitate collaborative analysis. Features include automated email notifications, buddy comparison system, RAG status indicators for buy opportunities, profile management with camera capture, and real-time stock tracking. Built with FastAPI backend and React TypeScript frontend with 100+ NSE stocks pre-loaded.",
    technologies: [
      "FastAPI",
      "React 18",
      "TypeScript",
      "PostgreSQL",
      "SQLAlchemy",
      "Pydantic",
      "JWT Auth",
      "Zustand",
      "Axios",
      "TailwindCSS",
      "Gmail SMTP",
      "Alembic",
      "Bcrypt"
    ],
    features: [
      "httpOnly cookie authentication with XSS protection",
      "Admin panel for team & stock management",
      "Automated email delivery of credentials via Gmail SMTP",
      "Buddy system for collaborative stock analysis",
      "RAG (Red-Amber-Green) status indicators (0-3%, 3-11%, 12-99.9%)",
      "Editable analysis fields (Best Buy Price, TradingView URL)",
      "Real-time stock price updates with animations",
      "Profile photo upload with live camera capture",
      "Smart stock filtering (prevents buddy conflicts)",
      "100+ NSE stocks with featured stocks system"
    ],
    metrics: {
      stocks: "100+",
      users: "Unlimited",
      updates: "Real-time",
      featured: "10 max",
      poolSize: "10+20",
      security: "httpOnly"
    },
    architecture: [
      "FastAPI async operations",
      "PostgreSQL with connection pooling",
      "SQLAlchemy ORM with lazy loading",
      "JWT with refresh tokens",
      "Zustand state management",
      "Alembic database migrations",
      "RESTful API design"
    ],
    status: "Production Ready",
    link: "Private",
    image: null,
    year: "2024"
  },
  {
    id: 4,
    title: "Industrial Equipment Monitoring System",
    category: "Real-time Industrial IoT Platform",
    description: "Real-time equipment checklist and monitoring system for 30+ industrial companies. Features dual dashboards for field technicians and executives with live WebSocket updates and visual building layouts.",
    longDescription: "Comprehensive industrial monitoring platform with real-time synchronization between field technicians and management. Features include daily equipment inspections, automated meter reading calculations, interactive building layouts with clickable equipment hotspots, multi-shift support, and role-based dashboards. Built with FastAPI backend and React TypeScript frontend with WebSocket for instant updates.",
    technologies: [
      "FastAPI",
      "React",
      "TypeScript",
      "Ant Design",
      "WebSocket",
      "SQLAlchemy",
      "SQLite/PostgreSQL",
      "JWT Auth",
      "Python",
      "SVG Graphics"
    ],
    features: [
      "Real-time WebSocket updates between technicians and managers",
      "Daily operation dashboard for equipment inspections",
      "Executive dashboard for real-time monitoring",
      "Interactive building layout with clickable equipment hotspots",
      "Automated electricity meter reading calculations (9:00 AM logic)",
      "Equipment checklists for pumps and chillers",
      "Multi-shift tracking and coordination",
      "Role-based access control (Technician/Manager)",
      "90% API call reduction via WebSocket optimization",
      "Responsive design for industrial tablets"
    ],
    metrics: {
      companies: "30+",
      apiEndpoints: "10+",
      optimization: "90%",
      realTime: "WebSocket",
      roles: "2",
      deployment: "Global"
    },
    architecture: [
      "RESTful API with FastAPI",
      "WebSocket bidirectional communication",
      "SQLAlchemy ORM",
      "JWT authentication",
      "SVG-based visual layouts",
      "PostgreSQL production-ready",
      "Multi-tenant architecture"
    ],
    status: "Production-Ready Demo",
    link: "Private",
    image: null,
    year: "2024"
  },
  {
    id: 5,
    title: "AI Video Call Assistant",
    category: "Real-time Communication Platform (Hackathon Project)",
    description: "Real-time video calling application with live speech-to-text transcription. Features WebRTC peer-to-peer communication, continuous voice recognition, and cross-device compatibility for accessibility and collaboration.",
    longDescription: "Innovative video calling platform built for a school hackathon project. Combines WebRTC video communication with real-time speech-to-text transcription using Web Speech API. Features include room-based connections, SSL-secured local network communication, continuous speech recognition with auto-restart, and cross-platform compatibility. Solves browser inconsistencies with manual MediaStream construction and implements smart signaling to prevent connection conflicts.",
    technologies: [
      "React",
      "TypeScript",
      "WebRTC",
      "FastAPI",
      "WebSocket",
      "Web Speech API",
      "SSL/HTTPS",
      "Python"
    ],
    features: [
      "WebRTC peer-to-peer video communication",
      "Live speech-to-text transcription in real-time",
      "Room-based 1-to-1 connections",
      "SSL-secured local network communication",
      "Continuous speech recognition with auto-restart",
      "Manual MediaStream construction for reliability",
      "Chrome autoplay policy compliance",
      "Cross-platform (Linux, Windows, mobile browsers)",
      "Targeted WebRTC signaling (no broadcast)",
      "Real-time transcription display and transmission"
    ],
    metrics: {
      connection: "1-to-1",
      transcription: "Real-time",
      platforms: "Cross-OS",
      security: "SSL/HTTPS",
      recognition: "Continuous",
      type: "Hackathon"
    },
    architecture: [
      "WebRTC peer-to-peer architecture",
      "WebSocket signaling server",
      "FastAPI backend with room management",
      "Web Speech API integration",
      "Self-signed SSL certificates",
      "Manual MediaStream construction",
      "Auto-restart speech recognition"
    ],
    status: "Hackathon Demo",
    link: "Private",
    image: null,
    year: "2024"
  }
];
