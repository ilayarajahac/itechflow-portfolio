import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions — iTechFlow",
  description:
    "Custom AI agents, full-stack development, and scalable backend solutions for startups and businesses across India.",
};

const solutions = [
  {
    title: "Tamil AI Agents",
    icon: "🤖",
    description:
      "24/7 Tamil voice receptionist, WhatsApp chatbots, and lead generation agents. Built with Sarvam AI for native Tamil understanding.",
    items: [
      "Tamil AI Receptionist (voice + WhatsApp)",
      "WhatsApp Business Bot",
      "Lead capture & CRM integration",
      "Real-time owner notifications",
      "Supabase data storage",
    ],
    highlight: true,
    cta: "Build an AI Agent",
    ctaHref: "https://wa.me/919080849708?text=Hi!%20I%27d%20like%20to%20build%20a%20Tamil%20AI%20agent.",
    ctaExternal: true,
  },
  {
    title: "For Startups",
    icon: "🚀",
    description:
      "MVP development, scalable architecture, and rapid deployment to get your product to market fast.",
    items: [
      "Full-stack web applications",
      "REST API development",
      "Database design & optimization",
      "Cloud / VPS deployment",
      "Authentication & payments",
    ],
    highlight: false,
    cta: "Discuss Your MVP",
    ctaHref: "/contact",
    ctaExternal: false,
  },
  {
    title: "For Industries",
    icon: "🏭",
    description:
      "Automation systems, AI integration, and custom tools to optimize operations and reduce costs.",
    items: [
      "Process automation with n8n",
      "AI-powered search & chatbots",
      "Real-time dashboards",
      "IoT & equipment monitoring",
      "Legacy system modernization",
    ],
    highlight: false,
    cta: "Get a Custom Solution",
    ctaHref: "/contact",
    ctaExternal: false,
  },
  {
    title: "Enterprise ERP",
    icon: "🏗️",
    description:
      "Production-grade ERP platforms with multi-tenancy, real-time sync, mobile apps, and compliance modules.",
    items: [
      "Multi-tenant architecture",
      "Django / FastAPI backends",
      "React / React Native frontend",
      "GST-compliant finance modules",
      "WebSocket real-time updates",
    ],
    highlight: false,
    cta: "Plan Your ERP",
    ctaHref: "/contact",
    ctaExternal: false,
  },
];

export default function Solutions() {
  return (
    <main className="min-h-screen pt-24 px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Solutions</span> I Provide
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            From Tamil AI agents to enterprise platforms — custom solutions
            tailored for Indian businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className={`p-8 rounded-xl border transition-all
                ${solution.highlight
                  ? "border-[#06b6d4]/50 bg-gradient-to-br from-[#06b6d4]/10 to-transparent"
                  : "border-gray-800 bg-[#0b0f19]/50 hover:border-gray-700"
                }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{solution.icon}</span>
                <h2 className={`text-2xl font-bold ${solution.highlight ? "text-[#06b6d4]" : ""}`}>
                  {solution.title}
                </h2>
              </div>
              <p className="text-gray-400 mb-5 leading-relaxed">{solution.description}</p>
              <ul className="space-y-2 text-gray-400 text-sm mb-6">
                {solution.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-[#06b6d4] flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              {solution.ctaExternal ? (
                <a
                  href={solution.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-semibold transition-all hover:opacity-90 text-sm"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {solution.cta}
                </a>
              ) : (
                <Link
                  href={solution.ctaHref}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#06b6d4] text-[#06b6d4] rounded-lg hover:bg-[#06b6d4] hover:text-white transition-all font-semibold text-sm"
                >
                  {solution.cta} →
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 border border-[#06b6d4]/30 rounded-2xl bg-[#06b6d4]/5">
          <h3 className="text-xl font-bold mb-3">Not sure which solution fits?</h3>
          <p className="text-gray-400 mb-6">
            Chat with me on WhatsApp and I&apos;ll help you figure out the best approach.
          </p>
          <a
            href="https://wa.me/919080849708"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/30"
            style={{ backgroundColor: "#25D366" }}
          >
            Chat on WhatsApp →
          </a>
        </div>
      </div>
    </main>
  );
}
