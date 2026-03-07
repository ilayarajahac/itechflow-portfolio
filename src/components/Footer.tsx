import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">iTechFlow</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Building scalable systems that drive growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/solutions" className="hover:text-[#06b6d4] transition-colors">Solutions</Link></li>
              <li><Link href="/projects" className="hover:text-[#06b6d4] transition-colors">Projects</Link></li>
              <li><Link href="/insights" className="hover:text-[#06b6d4] transition-colors">Insights</Link></li>
              <li><Link href="/hire-me" className="hover:text-[#06b6d4] transition-colors">Hire Me</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Full-Stack Development</li>
              <li>AI Integration</li>
              <li>Backend Architecture</li>
              <li>VPS Deployment</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="mailto:contact@itechflow.co.in" className="hover:text-[#06b6d4] transition-colors">contact@itechflow.co.in</a></li>
              <li><Link href="/contact" className="hover:text-[#06b6d4] transition-colors">Get in Touch</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} iTechFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
