"use client";

import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import CTA from "@/components/CTA";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen pt-16">
      <section className="flex min-h-screen items-center justify-center px-4 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        
        {/* Floating particles - only render on client */}
        {mounted && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#06b6d4] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Animated glow orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#06b6d4]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3b82f6]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left side - Text */}
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Build <span className="gradient-text">
                <TypeAnimation
                  sequence={[
                    'Scalable Systems',
                    2000,
                    'AI Solutions',
                    2000,
                    'Backend APIs',
                    2000,
                    'Automation Tools',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
              <br />That Drive Growth
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Full-stack development, AI integration, and backend architecture for startups and growing industries.
            </motion.p>
            
            <motion.div
              className="flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="/hire-me"
                className="px-6 py-3 bg-[#06b6d4] text-white rounded-lg hover:bg-[#0891b2] transition-all hover:shadow-lg hover:shadow-[#06b6d4]/50 hover:scale-105"
              >
                Hire Me
              </a>
              <a
                href="/projects"
                className="px-6 py-3 border border-gray-700 rounded-lg hover:border-[#06b6d4] transition-all hover:shadow-lg hover:shadow-[#06b6d4]/20 hover:scale-105"
              >
                View Projects
              </a>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-[#06b6d4] mb-1">50+</div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-[#06b6d4] mb-1">5+</div>
                <div className="text-xs text-gray-400">Years Exp</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-[#06b6d4] mb-1">100%</div>
                <div className="text-xs text-gray-400">Satisfaction</div>
              </div>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-[#06b6d4]/20 rounded-full blur-3xl" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-[#06b6d4]/30 hover:border-[#06b6d4] transition-all hover:scale-105">
                <Image
                  src="/mine.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
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
