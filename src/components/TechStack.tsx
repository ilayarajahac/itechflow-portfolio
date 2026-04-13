"use client";

import { motion } from "framer-motion";

const technologies = [
  // AI / ML
  { id: "sarvam", name: "Sarvam AI", category: "AI/ML", accent: true },
  { id: "langchain", name: "LangChain", category: "AI/ML", accent: true },
  { id: "pgvector", name: "pgvector", category: "AI/ML", accent: false },
  { id: "tensorflow", name: "TensorFlow", category: "AI/ML", accent: false },
  // Integration
  { id: "twilio", name: "Twilio", category: "Integration", accent: true },
  { id: "whatsapp", name: "WhatsApp API", category: "Integration", accent: true },
  { id: "n8n", name: "n8n", category: "Automation", accent: true },
  // Backend
  { id: "django", name: "Django", category: "Backend", accent: false },
  { id: "fastapi", name: "FastAPI", category: "Backend", accent: false },
  { id: "python", name: "Python", category: "Language", accent: false },
  // Frontend
  { id: "nextjs", name: "Next.js", category: "Frontend", accent: false },
  { id: "react", name: "React", category: "Frontend", accent: false },
  { id: "typescript", name: "TypeScript", category: "Language", accent: false },
  // Database / Infra
  { id: "postgres", name: "PostgreSQL", category: "Database", accent: false },
  { id: "supabase", name: "Supabase", category: "Database", accent: false },
  { id: "redis", name: "Redis", category: "Database", accent: false },
  { id: "nginx", name: "Nginx", category: "DevOps", accent: false },
  { id: "vps", name: "VPS", category: "Infrastructure", accent: false },
];

const categoryColors: Record<string, string> = {
  "AI/ML": "text-purple-400 bg-purple-500/10 border-purple-500/30",
  Integration: "text-green-400 bg-green-500/10 border-green-500/30",
  Automation: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
  Backend: "text-blue-400 bg-blue-500/10 border-blue-500/30",
  Frontend: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  Language: "text-orange-400 bg-orange-500/10 border-orange-500/30",
  Database: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  DevOps: "text-red-400 bg-red-500/10 border-red-500/30",
  Infrastructure: "text-gray-400 bg-gray-500/10 border-gray-500/30",
};

export default function TechStack() {
  return (
    <section className="py-20 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tech <span className="gradient-text">Stack</span>
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Modern technologies powering Tamil AI agents, scalable systems, and production deployments
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              className={`p-4 border rounded-xl transition-all group cursor-default
                ${tech.accent
                  ? "border-[#06b6d4]/50 bg-[#06b6d4]/5 hover:border-[#06b6d4] hover:bg-[#06b6d4]/10"
                  : "border-gray-800 bg-[#0b0f19]/50 hover:border-[#06b6d4]/50 hover:bg-[#0b0f19]"
                }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.06, y: -3 }}
            >
              <div
                className={`text-sm font-semibold mb-1.5 transition-colors
                  ${tech.accent ? "text-[#06b6d4]" : "group-hover:text-[#06b6d4]"}`}
              >
                {tech.name}
              </div>
              <span
                className={`inline-block text-xs px-2 py-0.5 rounded-full border font-medium
                  ${categoryColors[tech.category] ?? "text-gray-400 bg-gray-800 border-gray-700"}`}
              >
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
