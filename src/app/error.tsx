"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen pt-24 px-4 flex items-center justify-center">
      <div className="max-w-md w-full text-center">
        <div className="text-6xl mb-6">⚠️</div>
        <h1 className="text-3xl font-bold mb-4">
          Something went <span className="gradient-text">wrong</span>
        </h1>
        <p className="text-gray-400 mb-8">
          An unexpected error occurred. Please try again or contact us on WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-[#06b6d4] text-white rounded-lg hover:bg-[#0891b2] transition-all font-semibold"
          >
            Try Again
          </button>
          <a
            href="https://wa.me/919080849708"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all"
            style={{ backgroundColor: "#25D366" }}
          >
            Contact on WhatsApp
          </a>
          <Link
            href="/"
            className="px-6 py-3 border border-gray-700 rounded-lg hover:border-[#06b6d4] transition-all font-semibold"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
