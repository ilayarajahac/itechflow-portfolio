"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0b0f19]/80 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button - LEFT SIDE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white order-first"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo - CENTER on mobile, LEFT on desktop */}
          <Link href="/" className="text-2xl font-bold md:order-first">
            <span className="gradient-text">iTechFlow</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-[#06b6d4] transition-colors">
              Home
            </Link>
            <Link href="/solutions" className="hover:text-[#06b6d4] transition-colors">
              Solutions
            </Link>
            <Link href="/projects" className="hover:text-[#06b6d4] transition-colors">
              Projects
            </Link>
            <Link href="/insights" className="hover:text-[#06b6d4] transition-colors">
              Insights
            </Link>
            <Link href="/hire-me" className="px-4 py-2 bg-[#06b6d4] rounded-lg hover:bg-[#0891b2] transition-colors">
              Hire Me
            </Link>
          </div>

          {/* Empty div for spacing on mobile */}
          <div className="md:hidden w-6"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0b0f19] border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block hover:text-[#06b6d4] transition-colors" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/solutions" className="block hover:text-[#06b6d4] transition-colors" onClick={() => setIsOpen(false)}>
              Solutions
            </Link>
            <Link href="/projects" className="block hover:text-[#06b6d4] transition-colors" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="/insights" className="block hover:text-[#06b6d4] transition-colors" onClick={() => setIsOpen(false)}>
              Insights
            </Link>
            <Link href="/hire-me" className="block px-4 py-2 bg-[#06b6d4] rounded-lg text-center hover:bg-[#0891b2] transition-colors" onClick={() => setIsOpen(false)}>
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
