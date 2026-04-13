import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights — iTechFlow",
  description:
    "Articles, tutorials, and insights on Tamil AI, full-stack development, and building scalable systems for Indian businesses.",
};

const upcomingTopics = [
  {
    icon: "🤖",
    title: "Building a Tamil AI Receptionist with Sarvam AI",
    tag: "AI Agent",
    tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
  },
  {
    icon: "📲",
    title: "WhatsApp Bot with Twilio + FastAPI — Complete Guide",
    tag: "Tutorial",
    tagColor: "text-green-400 bg-green-500/10 border-green-500/30",
  },
  {
    icon: "🏗️",
    title: "Scaling Django for 10,000+ Concurrent WebSocket Users",
    tag: "Backend",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/30",
  },
  {
    icon: "⚙️",
    title: "n8n Automation Workflows for Indian Small Businesses",
    tag: "Automation",
    tagColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/30",
  },
  {
    icon: "🚀",
    title: "VPS Deployment: Nginx + Django + PostgreSQL in 30 Minutes",
    tag: "DevOps",
    tagColor: "text-red-400 bg-red-500/10 border-red-500/30",
  },
];

export default function Insights() {
  return (
    <main className="min-h-screen pt-24 px-4 pb-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Insights &amp; <span className="gradient-text">Articles</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Deep dives into Tamil AI, full-stack development, and building
            production systems.
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="relative mb-12 p-8 rounded-2xl border border-[#06b6d4]/30 bg-gradient-to-br from-[#06b6d4]/10 to-transparent text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#06b6d4]/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="text-5xl mb-4">✍️</div>
            <h2 className="text-2xl font-bold mb-3">Blog Coming Soon</h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              I&apos;m writing in-depth articles about building Tamil AI agents,
              scalable systems, and automation for Indian businesses. Subscribe to
              get notified.
            </p>
            <a
              href="https://wa.me/919080849708?text=Hi!%20I%27d%20like%20to%20be%20notified%20when%20iTechFlow%20blog%20launches."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all hover:opacity-90 hover:shadow-lg hover:shadow-[#25D366]/30"
              style={{ backgroundColor: "#25D366" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Notify me on WhatsApp
            </a>
          </div>
        </div>

        {/* Upcoming Articles */}
        <h2 className="text-xl font-semibold mb-5 text-gray-300">
          Upcoming Articles
        </h2>
        <div className="space-y-4 mb-12">
          {upcomingTopics.map((topic) => (
            <div
              key={topic.title}
              className="flex items-center gap-4 p-5 border border-gray-800 rounded-xl bg-[#0b0f19]/50 hover:border-gray-700 transition-colors"
            >
              <span className="text-2xl flex-shrink-0">{topic.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-200 text-sm">{topic.title}</p>
              </div>
              <span
                className={`flex-shrink-0 px-2.5 py-1 text-xs rounded-full border font-medium ${topic.tagColor}`}
              >
                {topic.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Back link */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#06b6d4] hover:text-[#0891b2] transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
