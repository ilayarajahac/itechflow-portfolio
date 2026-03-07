"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Development",
      description: "End-to-end application development with modern frameworks. From responsive frontends to robust backend APIs.",
      icon: "⚡",
    },
    {
      title: "AI Integration",
      description: "Integrate AI capabilities using pgvector, embeddings, and semantic search into your existing systems.",
      icon: "🤖",
    },
    {
      title: "Backend Architecture",
      description: "Scalable Django & FastAPI backends with PostgreSQL. Built for performance and growth.",
      icon: "🏗️",
    },
    {
      title: "Automation Systems",
      description: "Custom automation solutions that save time and reduce manual work for startups and industries.",
      icon: "⚙️",
    },
    {
      title: "VPS Deployment",
      description: "Production-ready deployment with Nginx, SSL, and optimized server configurations.",
      icon: "🚀",
    },
    {
      title: "Database Design",
      description: "Efficient PostgreSQL schema design, optimization, and vector search implementation.",
      icon: "💾",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#0a0e17]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
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
          Solutions that drive real business value for startups and growing industries
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 border border-gray-800 rounded-lg hover:border-[#06b6d4] transition-all hover:shadow-lg hover:shadow-[#06b6d4]/10 group bg-[#0b0f19]/50 backdrop-blur-sm"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateX: 45 }}
              whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
              }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#06b6d4] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
