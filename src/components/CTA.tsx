"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06b6d4]/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#06b6d4]/8 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#06b6d4]/40 bg-[#06b6d4]/10 text-[#06b6d4] text-sm font-medium mb-6"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          Open to New Projects
        </motion.div>

        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to Build Something{" "}
          <span className="gradient-text">Exceptional</span>?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Need a Tamil AI agent, WhatsApp bot, or scalable backend system?
          Let&apos;s discuss your project and deliver results that matter.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* WhatsApp — primary */}
          <a
            href="https://wa.me/919080849708"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/30"
            style={{ backgroundColor: "#25D366" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>

          <Link
            href="/hire-me"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#06b6d4] text-white rounded-lg hover:bg-[#0891b2] transition-all text-lg font-semibold hover:shadow-lg hover:shadow-[#06b6d4]/30 hover:scale-105"
          >
            Hire Me Now
          </Link>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 rounded-lg hover:border-[#06b6d4] hover:text-[#06b6d4] transition-all text-lg font-semibold"
          >
            Send Email
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="flex items-center gap-1.5">
            <span className="text-green-400">✓</span> Quick Response
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-green-400">✓</span> Tamil AI Specialist
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-green-400">✓</span> Production-Ready Delivery
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-green-400">✓</span> Based in India
          </span>
        </motion.div>
      </div>
    </section>
  );
}
