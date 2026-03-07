"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-[#06b6d4]/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          Ready to Build Something <span className="gradient-text">Exceptional</span>?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's discuss your project and create scalable solutions that drive real business growth.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/hire-me"
            className="px-8 py-4 bg-[#06b6d4] text-white rounded-lg hover:bg-[#0891b2] transition-all text-lg font-semibold hover:shadow-lg hover:shadow-[#06b6d4]/30"
          >
            Hire Me Now
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border border-gray-700 rounded-lg hover:border-[#06b6d4] transition-all text-lg font-semibold"
          >
            Schedule a Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
