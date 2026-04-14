import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hire Me — Full Stack Developer & AI Agent Builder",
  description: "Hire Ilayaraja for full-stack development, Tamil AI agents, WhatsApp bots, and scalable backend systems for businesses across India.",
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const skills = [
  {
    category: "AI Agents",
    icon: "🤖",
    highlight: true,
    items: ["Tamil AI Receptionist", "WhatsApp AI Bot", "LangChain Agents", "Sarvam AI Integration", "Lead Generation AI"],
  },
  {
    category: "Backend",
    icon: "🏗️",
    highlight: false,
    items: ["Django & FastAPI", "PostgreSQL & Redis", "WebSocket & Celery", "REST API Design", "Supabase"],
  },
  {
    category: "Frontend",
    icon: "🌐",
    highlight: false,
    items: ["React & Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "PWA Development"],
  },
  {
    category: "Integrations",
    icon: "⚡",
    highlight: false,
    items: ["Twilio Voice & SMS", "WhatsApp Business API", "n8n Automation", "Gmail SMTP", "Webhook Handlers"],
  },
  {
    category: "Deployment",
    icon: "🚀",
    highlight: false,
    items: ["VPS & Nginx", "Docker", "Vercel & Netlify", "SSL Configuration", "CI/CD Pipelines"],
  },
  {
    category: "Database",
    icon: "🗄️",
    highlight: false,
    items: ["PostgreSQL Design", "Redis Caching", "Supabase", "Query Optimization", "Database Migrations"],
  },
];

export default function HireMe() {
  return (
    <main className="min-h-screen pt-24 px-4 pb-16">
      <div className="max-w-5xl mx-auto">

        {/* Hero Banner */}
        <div className="relative mb-16 p-8 md:p-12 rounded-2xl border border-[#06b6d4]/30 bg-gradient-to-br from-[#06b6d4]/10 via-[#0b0f19] to-[#3b82f6]/10 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#06b6d4]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#3b82f6]/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-green-400 font-medium">Available for hire</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I&apos;m{" "}
                <span className="gradient-text">Ilayaraja</span>
              </h1>
              <p className="text-lg text-gray-300 mb-2 font-medium">
                Full Stack Developer &amp; AI Agent Builder
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                I build Tamil AI agents, WhatsApp bots, and scalable backend
                systems for businesses across India. From a 24/7 Tamil voice
                receptionist to enterprise ERP platforms — I deliver
                production-ready solutions.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919080849708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/30"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:contact@itechflow.co.in"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#06b6d4] text-[#06b6d4] font-semibold hover:bg-[#06b6d4] hover:text-white transition-all hover:scale-105"
                >
                  Send Email
                </a>
              </div>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "7", label: "Production Projects", icon: "🚀" },
                { value: "3+", label: "Years Experience", icon: "⏳" },
                { value: "2", label: "AI Agents Live", icon: "🤖" },
                { value: "Tamil", label: "AI Specialist", icon: "🗣️" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl border border-gray-700/60 bg-[#0b0f19]/80 text-center"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold text-[#06b6d4]">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <h2 className="text-2xl font-bold mb-6 text-center">
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className={`p-6 rounded-xl border transition-all
                ${skill.highlight
                  ? "border-[#06b6d4]/50 bg-[#06b6d4]/5"
                  : "border-gray-800 bg-[#0b0f19]/50 hover:border-gray-700"
                }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{skill.icon}</span>
                <h3 className={`font-semibold ${skill.highlight ? "text-[#06b6d4]" : "text-white"}`}>
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="text-[#06b6d4] text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Work Preferences */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="p-8 border border-gray-800 rounded-xl bg-[#0b0f19]/50">
            <h2 className="text-xl font-bold mb-5">What I Offer</h2>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "Tamil AI Receptionist & WhatsApp Bots",
                "Full-stack development (Django, FastAPI, React, Next.js)",
                "LangChain & Sarvam AI integration",
                "Backend architecture & API design",
                "Database optimization & Supabase",
                "VPS deployment & DevOps",
                "n8n automation workflows",
                "Code review & consulting",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#06b6d4] mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 border border-gray-800 rounded-xl bg-[#0b0f19]/50">
            <h2 className="text-xl font-bold mb-5">Work Preferences</h2>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                { icon: "📍", text: "Remote work (India & worldwide)" },
                { icon: "⏰", text: "Flexible hours, fast turnaround" },
                { icon: "💼", text: "Project-based or long-term contracts" },
                { icon: "🤝", text: "Direct communication via WhatsApp" },
                { icon: "📊", text: "Regular progress updates" },
                { icon: "🚀", text: "Production-ready deliverables" },
                { icon: "🗣️", text: "Tamil & English communication" },
                { icon: "🇮🇳", text: "India-focused AI (Tamil, Hindi)" },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2">
                  <span>{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Card */}
        <div className="text-center p-10 border border-[#06b6d4]/40 rounded-2xl bg-gradient-to-br from-[#06b6d4]/10 to-transparent">
          <h3 className="text-2xl font-bold mb-3">Ready to Start?</h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Reach me on WhatsApp for the fastest response, or send an email for
            detailed project proposals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919080849708"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/30"
              style={{ backgroundColor: "#25D366" }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              +91 9080849708
            </a>
            <a
              href="mailto:contact@itechflow.co.in"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#06b6d4] text-white rounded-lg hover:bg-[#0891b2] transition-all font-semibold text-lg hover:shadow-lg hover:shadow-[#06b6d4]/30 hover:scale-105"
            >
              contact@itechflow.co.in
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-600">
            Response within 1 hour during business hours · India Standard Time
          </p>
        </div>
      </div>
    </main>
  );
}
