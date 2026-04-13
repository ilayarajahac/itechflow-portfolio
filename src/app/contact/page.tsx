"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    toast.success("Opening your email client...");
    setFormData({ name: "", email: "", message: "" });
    setLoading(false);

    setTimeout(() => {
      window.location.href = `mailto:contact@itechflow.co.in?subject=${subject}&body=${body}`;
    }, 300);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen pt-24 px-4 pb-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have a project in mind? Reach me directly on WhatsApp or send an email.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left — Quick Contact */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* WhatsApp Card — primary */}
            <a
              href="https://wa.me/919080849708"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 border border-[#25D366]/40 rounded-xl bg-[#25D366]/5 hover:bg-[#25D366]/10 hover:border-[#25D366] transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <WhatsAppIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white mb-0.5">Chat on WhatsApp</div>
                <div className="text-[#25D366] text-sm">+91 9080849708</div>
                <div className="text-gray-500 text-xs mt-1">Fastest response • Usually replies in minutes</div>
              </div>
              <svg className="w-5 h-5 text-gray-500 ml-auto group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Email Card */}
            <a
              href="mailto:contact@itechflow.co.in"
              className="flex items-center gap-4 p-6 border border-gray-800 rounded-xl bg-[#0b0f19]/50 hover:border-[#06b6d4] hover:bg-[#06b6d4]/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-[#06b6d4]/20 border border-[#06b6d4]/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-[#06b6d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-white mb-0.5">Send Email</div>
                <div className="text-[#06b6d4] text-sm">contact@itechflow.co.in</div>
                <div className="text-gray-500 text-xs mt-1">Detailed inquiries &amp; proposals</div>
              </div>
              <svg className="w-5 h-5 text-gray-500 ml-auto group-hover:text-[#06b6d4] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Info panel */}
            <div className="p-6 border border-gray-800 rounded-xl bg-[#0b0f19]/50">
              <h3 className="font-semibold mb-4 text-white">What I can help with</h3>
              <ul className="space-y-2.5 text-sm text-gray-400">
                {[
                  "🤖 Tamil AI Receptionist / WhatsApp Bot",
                  "⚡ Full-Stack Web Application",
                  "🏗️ Backend API Development",
                  "⚙️ Automation & n8n Workflows",
                  "🚀 VPS Setup & Deployment",
                  "🧠 AI Integration & LangChain",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 border border-gray-800 rounded-xl bg-[#0b0f19]/50">
              <h2 className="text-xl font-semibold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0e17] border border-gray-700 rounded-lg focus:border-[#06b6d4] focus:outline-none focus:ring-1 focus:ring-[#06b6d4]/30 transition-colors text-white placeholder-gray-600"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0e17] border border-gray-700 rounded-lg focus:border-[#06b6d4] focus:outline-none focus:ring-1 focus:ring-[#06b6d4]/30 transition-colors text-white placeholder-gray-600"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0e17] border border-gray-700 rounded-lg focus:border-[#06b6d4] focus:outline-none focus:ring-1 focus:ring-[#06b6d4]/30 transition-colors resize-none text-white placeholder-gray-600"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-4 bg-[#06b6d4] text-white rounded-lg hover:bg-[#0891b2] transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#06b6d4]/30"
                >
                  {loading ? "Sending..." : "Send Message →"}
                </button>

                <p className="text-center text-xs text-gray-600">
                  Or reach me instantly on{" "}
                  <a
                    href="https://wa.me/919080849708"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] hover:underline"
                  >
                    WhatsApp
                  </a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
