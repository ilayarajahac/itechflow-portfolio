"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      // For now, just show success and open email client
      const subject = encodeURIComponent(`Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      window.location.href = `mailto:contact@itechflow.co.in?subject=${subject}&body=${body}`;
      
      toast.success("Opening your email client...");
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <main className="min-h-screen pt-24 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Get in <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-gray-400 text-lg mb-12 text-center">
          Have a project in mind? Let's discuss how I can help.
        </p>

        <div className="p-8 border border-gray-800 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0b0f19] border border-gray-800 rounded-lg focus:border-[#06b6d4] focus:outline-none transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0b0f19] border border-gray-800 rounded-lg focus:border-[#06b6d4] focus:outline-none transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Details</label>
              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0b0f19] border border-gray-800 rounded-lg focus:border-[#06b6d4] focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-4 bg-[#06b6d4] text-white rounded-lg hover:bg-[#0891b2] transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 mb-2">Or email directly:</p>
            <a href="mailto:contact@itechflow.co.in" className="text-[#06b6d4] hover:underline text-lg">
              contact@itechflow.co.in
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
