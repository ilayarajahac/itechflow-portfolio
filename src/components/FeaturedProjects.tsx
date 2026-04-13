"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  // Show first 3 projects as featured (AI agents first)
  const featuredProjects = projects.slice(0, 3);

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
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real-world AI agents and production systems delivering measurable results
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`relative p-6 border rounded-xl transition-all group
                ${project.isAIAgent
                  ? "border-[#06b6d4]/40 bg-gradient-to-br from-[#06b6d4]/5 to-transparent hover:border-[#06b6d4] hover:shadow-lg hover:shadow-[#06b6d4]/15"
                  : "border-gray-800 hover:border-[#06b6d4] hover:shadow-lg hover:shadow-[#06b6d4]/10"
                }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              {/* AI Agent Badge */}
              {project.isAIAgent && (
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-[#06b6d4]/20 text-[#06b6d4] border border-[#06b6d4]/30">
                    🤖 AI Agent
                  </span>
                  <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                    ● Live
                  </span>
                </div>
              )}

              {/* Status badge for non-AI projects */}
              {!project.isAIAgent && (
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                    {project.category}
                  </span>
                </div>
              )}

              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#06b6d4] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs border border-gray-700 rounded-full text-gray-300 bg-gray-800/50"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-2.5 py-1 text-xs border border-gray-700 rounded-full text-gray-500">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
              <Link
                href="/projects"
                className="text-[#06b6d4] hover:text-[#0891b2] transition-colors text-sm font-medium inline-flex items-center gap-1"
              >
                View Details
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#06b6d4] text-[#06b6d4] rounded-lg hover:bg-[#06b6d4] hover:text-white transition-all font-semibold hover:shadow-lg hover:shadow-[#06b6d4]/30"
          >
            View All 7 Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
