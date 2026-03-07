"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  // Show only first 3 projects as featured
  const featuredProjects = projects.slice(0, 3);

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
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real-world solutions that delivered measurable results
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 border border-gray-800 rounded-lg hover:border-[#06b6d4] transition-all hover:shadow-lg hover:shadow-[#06b6d4]/10 group"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                bounce: 0.4,
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#06b6d4] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs border border-gray-700 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href="/projects"
                className="text-[#06b6d4] hover:text-[#0891b2] transition-colors text-sm font-medium"
              >
                View Details →
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="/projects"
            className="inline-block px-6 py-3 border border-[#06b6d4] text-[#06b6d4] rounded-lg hover:bg-[#06b6d4] hover:text-white transition-all"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
