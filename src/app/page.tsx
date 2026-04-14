"use client";

import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { value: "7", label: "Production Projects" },
    { value: "3+", label: "Years Exp" },
    { value: "2", label: "AI Agents Live" },
    { value: "Tamil", label: "AI Ready" },
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-4 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        {/* Floating particles — only render on client */}
        {mounted &&
          [...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#06b6d4] rounded-full"
              style={{
                left: `${(i * 7.3 + 5) % 100}%`,
                top: `${(i * 13.7 + 10) % 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                delay: (i % 5) * 0.4,
              }}
            />
          ))}

        {/* Animated glow orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#06b6d4]/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3b82f6]/15 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          {/* Left side — Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#06b6d4]/40 bg-[#06b6d4]/10 text-[#06b6d4] text-sm font-medium mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              Available for New Projects
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Full Stack Developer
              <br />
              <span className="gradient-text">&amp; AI Agent Builder</span>
            </motion.h1>

            {/* Typewriter line */}
            <motion.div
              className="text-xl md:text-2xl text-gray-400 mb-3 h-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {mounted && (
                <TypeAnimation
                  sequence={[
                    "Building Tamil AI Agents 🤖",
                    2000,
                    "Scalable Backend Systems ⚙️",
                    2000,
                    "WhatsApp Automation Bots 📲",
                    2000,
                    "Production-Ready APIs 🚀",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-[#06b6d4]"
                />
              )}
            </motion.div>

            <motion.p
              className="text-base md:text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Building Tamil AI Solutions &amp; Scalable Systems
              <br className="hidden sm:block" />
              for Businesses across India
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="https://wa.me/919080849708"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/40"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
              <a
                href="/hire-me"
                className="px-6 py-3 bg-[#06b6d4] text-white rounded-lg font-semibold hover:bg-[#0891b2] transition-all hover:shadow-lg hover:shadow-[#06b6d4]/40 hover:scale-105"
              >
                Hire Me
              </a>
              <a
                href="/projects"
                className="px-6 py-3 border border-gray-700 rounded-lg font-semibold hover:border-[#06b6d4] transition-all hover:shadow-lg hover:shadow-[#06b6d4]/20 hover:scale-105"
              >
                View Projects
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center lg:text-left p-3 rounded-lg border border-gray-800/60 bg-[#0b0f19]/60 hover:border-[#06b6d4]/40 transition-colors"
                >
                  <div className="text-2xl font-bold text-[#06b6d4] mb-0.5">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side — Professional Animated Terminal */}
          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Outer glow */}
            <div className="absolute inset-0 bg-[#06b6d4]/10 rounded-3xl blur-3xl" />

            {/* Terminal window */}
            <div className="relative w-full max-w-lg rounded-2xl border border-gray-700/60 bg-[#0d1117] shadow-2xl shadow-black/60 overflow-hidden">
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-[#161b22]">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 text-xs text-gray-500 font-mono">itechflow — ai_agent.py</span>
              </div>

              {/* Terminal content */}
              <div className="p-5 font-mono text-sm space-y-1">
                <TerminalLine delay={0.5} color="text-[#06b6d4]">$ python ai_agent.py</TerminalLine>
                <TerminalLine delay={0.9} color="text-green-400">✓ Tamil AI Receptionist initialized</TerminalLine>
                <TerminalLine delay={1.3} color="text-gray-400">  → Sarvam AI connected</TerminalLine>
                <TerminalLine delay={1.7} color="text-gray-400">  → Twilio WhatsApp ready</TerminalLine>
                <TerminalLine delay={2.1} color="text-gray-400">  → Supabase DB connected</TerminalLine>
                <TerminalLine delay={2.5} color="text-yellow-400">📞 Incoming call from +91-98765-XXXXX</TerminalLine>
                <TerminalLine delay={3.0} color="text-[#06b6d4]">🎙️ STT: &quot;வணக்கம், உங்கள் சேவை என்ன?&quot;</TerminalLine>
                <TerminalLine delay={3.5} color="text-green-400">🤖 AI: &quot;நமஸ்தே! நான் உங்களுக்கு உதவலாம்...&quot;</TerminalLine>
                <TerminalLine delay={4.0} color="text-gray-400">  → Lead captured: Name, Budget, Service</TerminalLine>
                <TerminalLine delay={4.5} color="text-yellow-400">📲 WhatsApp alert sent to owner ✓</TerminalLine>
                <TerminalLine delay={5.0} color="text-green-400">✓ Lead saved to Supabase ✓</TerminalLine>
                <BlinkingCursor delay={5.5} />
              </div>
            </div>

            {/* Floating tech badges */}
            <FloatingBadge delay={0.8} className="top-4 -right-4" color="bg-purple-500/20 border-purple-500/40 text-purple-300">
              Sarvam AI
            </FloatingBadge>
            <FloatingBadge delay={1.2} className="-bottom-2 -right-6" color="bg-green-500/20 border-green-500/40 text-green-300">
              WhatsApp API
            </FloatingBadge>
            <FloatingBadge delay={1.6} className="-top-4 left-12" color="bg-blue-500/20 border-blue-500/40 text-blue-300">
              FastAPI
            </FloatingBadge>
            <FloatingBadge delay={2.0} className="bottom-8 -left-2" color="bg-[#06b6d4]/20 border-[#06b6d4]/40 text-[#06b6d4]">
              Tamil AI
            </FloatingBadge>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-[#06b6d4] rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      <TechStack />
      <Services />
      <FeaturedProjects />
      <CTA />
    </main>
  );
}

/* ── Helper sub-components ── */

function TerminalLine({
  children,
  delay,
  color,
}: {
  children: React.ReactNode;
  delay: number;
  color: string;
}) {
  return (
    <motion.div
      className={color}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
}

function BlinkingCursor({ delay }: { delay: number }) {
  return (
    <motion.div
      className="flex items-center gap-1 text-[#06b6d4]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      <span>$</span>
      <motion.span
        className="w-2 h-4 bg-[#06b6d4] rounded-sm"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </motion.div>
  );
}

function FloatingBadge({
  children,
  delay,
  className,
  color,
}: {
  children: React.ReactNode;
  delay: number;
  className: string;
  color: string;
}) {
  return (
    <motion.div
      className={`absolute px-3 py-1.5 rounded-full border text-xs font-semibold font-mono ${color} ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { delay, duration: 0.4 },
        scale: { delay, duration: 0.4 },
        y: { delay: delay + 0.4, duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {children}
    </motion.div>
  );
}
