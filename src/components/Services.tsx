"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "ai-agent",
    title: "AI Agent Development",
    description:
      "Custom AI agents for your business. Tamil voice receptionist, WhatsApp bots, lead generation agents, and automation workflows built with Sarvam AI & LangChain.",
    icon: "🤖",
    highlight: true,
    badge: "New",
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description:
      "End-to-end application development with modern frameworks. From responsive frontends to robust backend APIs.",
    icon: "⚡",
    highlight: false,
    badge: null,
  },
  {
    id: "website",
    title: "Website Development",
    description:
      "Professional, responsive websites with Next.js and React. Fast, SEO-optimized, and deployed globally on Vercel.",
    icon: "🌐",
    highlight: false,
    badge: null,
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description:
      "Integrate AI capabilities using pgvector, embeddings, LangChain, and semantic search into your existing systems.",
    icon: "🧠",
    highlight: false,
    badge: null,
  },
  {
    id: "backend",
    title: "Backend Architecture",
    description:
      "Scalable Django & FastAPI backends with PostgreSQL. Built for performance and growth.",
    icon: "🏗️",
    highlight: false,
    badge: null,
  },
  {
    id: "automation",
    title: "Automation Systems",
    description:
      "Custom automation solutions with n8n, Celery, and webhooks that save time and reduce manual work.",
    icon: "⚙️",
    highlight: false,
    badge: null,
  },
  {
    id: "deployment",
    title: "VPS Deployment",
    description:
      "Production-ready deployment with Nginx, SSL, Docker, and optimized server configurations.",
    icon: "🚀",
    highlight: false,
    badge: null,
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#0a0e17]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What I <span className="gradient-text">Build</span>
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From Tamil AI agents to enterprise systems — solutions that drive real business value
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`relative p-6 border rounded-xl transition-all group backdrop-blur-sm
                ${
                  service.highlight
                    ? "border-[#06b6d4]/60 bg-gradient-to-br from-[#06b6d4]/10 to-[#3b82f6]/5 shadow-lg shadow-[#06b6d4]/10"
                    : "border-gray-800 bg-[#0b0f19]/50 hover:border-[#06b6d4] hover:shadow-lg hover:shadow-[#06b6d4]/10"
                }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              {/* Badge */}
              {service.badge && (
                <span className="absolute top-4 right-4 px-2 py-0.5 text-xs font-bold rounded-full bg-[#06b6d4] text-white">
                  {service.badge}
                </span>
              )}

              <div className="text-4xl mb-4">{service.icon}</div>
              <h3
                className={`text-xl font-semibold mb-3 transition-colors
                ${service.highlight ? "text-[#06b6d4]" : "group-hover:text-[#06b6d4]"}`}
              >
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
