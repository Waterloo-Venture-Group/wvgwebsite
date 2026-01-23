"use client";

import { useState } from "react";

type Intent = "partner" | "build" | "involved";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    intent: "partner" as Intent,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate with backend API
    console.log("Form submission:", formData);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-16 lg:py-20 relative">
      {/* Section divider */}
      <div className="section-divider mb-16" />

      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-wvg-purple/10 via-wvg-blue/5 to-transparent blur-[150px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Content */}
          <div>
            {/* Section header */}
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">10</span>
              <div className="w-12 h-[1px] bg-white/20" />
            </div>

            <h2 className="font-editorial text-5xl lg:text-6xl mb-8">Contact</h2>

            <p className="font-grotesk text-xl text-white/80 mb-12">
              Let's build something worth following up on.
            </p>

            {/* Email */}
            <div className="white-frame p-6 inline-block mb-12">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/60 mb-2">
                Email
              </p>
              <a
                href="mailto:waterloovg@gmail.com"
                className="font-mono text-sm hover:text-wvg-teal transition-colors"
              >
                waterloovg@gmail.com
              </a>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                Quick links
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#build-with-us" className="btn-secondary text-xs">
                  <span>Build with us</span>
                </a>
                <a href="#get-involved" className="btn-secondary text-xs">
                  <span>Get involved</span>
                </a>
                <a href="#events" className="btn-secondary text-xs">
                  <span>Partner with us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {isSubmitted ? (
              <div className="white-frame p-10 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-wvg-green/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-wvg-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-editorial text-2xl mb-4">Message sent</h3>
                <p className="font-mono text-sm text-white/70">
                  We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="white-frame p-8 lg:p-10 space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-widest text-white/60 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 font-mono text-sm focus:outline-none focus:border-wvg-teal transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-mono text-[10px] uppercase tracking-widest text-white/60 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 font-mono text-sm focus:outline-none focus:border-wvg-teal transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Organization */}
                <div>
                  <label htmlFor="organization" className="block font-mono text-[10px] uppercase tracking-widest text-white/60 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 font-mono text-sm focus:outline-none focus:border-wvg-teal transition-colors"
                    placeholder="Company or school"
                  />
                </div>

                {/* Intent */}
                <div>
                  <label htmlFor="intent" className="block font-mono text-[10px] uppercase tracking-widest text-white/60 mb-2">
                    How can we help? *
                  </label>
                  <select
                    id="intent"
                    name="intent"
                    required
                    value={formData.intent}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 font-mono text-sm focus:outline-none focus:border-wvg-teal transition-colors cursor-pointer"
                  >
                    <option value="partner" className="bg-black">Partner with us (Funds & Firms)</option>
                    <option value="build" className="bg-black">Build with us (Founders)</option>
                    <option value="involved" className="bg-black">Get involved (Students)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-mono text-[10px] uppercase tracking-widest text-white/60 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 font-mono text-sm focus:outline-none focus:border-wvg-teal transition-colors resize-none"
                    placeholder="Tell us about yourself and what you're working on..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center mt-8"
                >
                  <span>{isSubmitting ? "Sending..." : "Send message"}</span>
                  {!isSubmitting && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
