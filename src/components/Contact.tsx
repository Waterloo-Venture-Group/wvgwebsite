"use client";

import { useEffect, useState } from "react";
import { intentFromHash, isContactHash, type Intent } from "@/lib/contact-intent";

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
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    const applyIntentFromHash = () => {
      const hash = window.location.hash;
      const intent = intentFromHash(hash);

      if (intent) {
        setFormData((prev) => ({ ...prev, intent }));
      }

      if (isContactHash(hash)) {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }
    };

    applyIntentFromHash();
    window.addEventListener("hashchange", applyIntentFromHash);
    return () => window.removeEventListener("hashchange", applyIntentFromHash);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        organization: "",
        intent: "partner",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(
        "Failed to send message. Try again or email us at waterloovg@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
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
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <div className="border-l-2 border-wvg-teal/50 pl-6 mb-8">
              <h2 className="font-editorial text-5xl lg:text-6xl">Contact</h2>
            </div>

            <p className="font-grotesk text-xl text-white/80">
              Let&apos;s build something worth following up on.
            </p>
          </div>

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
                  We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="white-frame p-8 lg:p-10 space-y-6">
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

                {submitError && (
                  <p className="font-mono text-sm text-red-400" role="alert">
                    {submitError}
                  </p>
                )}

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
