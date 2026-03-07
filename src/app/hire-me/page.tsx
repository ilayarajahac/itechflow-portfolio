import Image from "next/image";

export default function HireMe() {
  return (
    <main className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* About Section with Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <div className="absolute inset-0 bg-[#06b6d4]/20 rounded-full blur-3xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-[#06b6d4]/30">
                <Image
                  src="/mine.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Ilayaraja</span>
            </h1>
            <p className="text-gray-400 text-lg mb-4 leading-relaxed">
              I specialize in building scalable full-stack systems using Python frameworks (Django, FastAPI) and modern JavaScript frameworks (React, Next.js, TypeScript).
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              My experience includes ERP platforms, real-time WebSocket applications, PWA development, and production deployments with PostgreSQL databases, Redis caching, and Nginx reverse proxy on VPS infrastructure.
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-gray-400">
              <div>
                <p className="font-semibold text-[#06b6d4] mb-2">Backend</p>
                <p>✓ Django & FastAPI</p>
                <p>✓ PostgreSQL & Redis</p>
                <p>✓ WebSocket & Celery</p>
                <p>✓ REST API Design</p>
              </div>
              <div>
                <p className="font-semibold text-[#06b6d4] mb-2">Frontend</p>
                <p>✓ React & Next.js</p>
                <p>✓ TypeScript & JavaScript</p>
                <p>✓ Tailwind CSS</p>
                <p>✓ PWA Development</p>
              </div>
              <div>
                <p className="font-semibold text-[#06b6d4] mb-2">Deployment</p>
                <p>✓ VPS & Nginx</p>
                <p>✓ Docker</p>
                <p>✓ Vercel</p>
                <p>✓ CI/CD</p>
              </div>
              <div>
                <p className="font-semibold text-[#06b6d4] mb-2">Database</p>
                <p>✓ PostgreSQL Design</p>
                <p>✓ Redis Caching</p>
                <p>✓ Query Optimization</p>
                <p>✓ Database Migrations</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">
          Let's Work <span className="gradient-text">Together</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12 text-center max-w-2xl mx-auto">
          Available for freelance projects, consulting, and full-time opportunities
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">What I Offer</h2>
            <ul className="space-y-3 text-gray-400">
              <li>✓ Full-stack development (Django, FastAPI, React, Next.js)</li>
              <li>✓ AI integration with pgvector</li>
              <li>✓ Backend architecture & API design</li>
              <li>✓ Database optimization</li>
              <li>✓ VPS deployment & DevOps</li>
              <li>✓ Code review & consulting</li>
            </ul>
          </div>

          <div className="p-8 border border-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Work Preferences</h2>
            <ul className="space-y-3 text-gray-400">
              <li>📍 Remote work (worldwide)</li>
              <li>⏰ Flexible hours</li>
              <li>💼 Project-based or long-term</li>
              <li>🤝 Direct communication</li>
              <li>📊 Regular progress updates</li>
              <li>🚀 Fast turnaround</li>
            </ul>
          </div>
        </div>

        <div className="text-center p-8 border border-[#06b6d4] rounded-lg bg-[#06b6d4]/5">
          <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
          <p className="text-gray-400 mb-6">
            Email me at <a href="mailto:contact@itechflow.co.in" className="text-[#06b6d4] hover:underline">contact@itechflow.co.in</a>
          </p>
          <a
            href="mailto:contact@itechflow.co.in"
            className="inline-block px-8 py-4 bg-[#06b6d4] text-white rounded-lg hover:bg-[#0891b2] transition-all font-semibold"
          >
            Send Email
          </a>
        </div>
      </div>
    </main>
  );
}
