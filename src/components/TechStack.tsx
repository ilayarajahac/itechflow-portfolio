"use client";

import { motion } from "framer-motion";

export default function TechStack() {
  const technologies = [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Django", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "pgvector", category: "AI/ML" },
    { name: "Nginx", category: "DevOps" },
    { name: "VPS", category: "Infrastructure" },
  ];

  return (
    <section className="py-20 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tech <span className="gradient-text">Stack</span>
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Modern technologies for building scalable, high-performance systems
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="p-6 border border-gray-800 rounded-lg hover:border-[#06b6d4] transition-all hover:shadow-lg hover:shadow-[#06b6d4]/20 group"
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-lg font-semibold mb-1 group-hover:text-[#06b6d4] transition-colors">
                {tech.name}
              </div>
              <div className="text-sm text-gray-500">{tech.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
