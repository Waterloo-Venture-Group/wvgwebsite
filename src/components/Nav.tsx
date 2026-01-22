"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#story", label: "Story" },
  { href: "#what-we-do", label: "What we do" },
  { href: "#events", label: "Events" },
  { href: "#socials", label: "Socials" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <span className="font-grotesk text-xl font-bold tracking-tight">WVG</span>
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-wvg-green to-wvg-teal group-hover:w-full transition-all duration-300" />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-wider text-white/60 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#get-involved" className="btn-secondary text-xs">
              <span>Get involved</span>
            </a>
            <a href="#contact" className="btn-primary text-xs">
              <span>Partner with us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-[1px] bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[1px] bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[1px] bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Divider line */}
        <div className="h-[1px] bg-white/10" />
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-mono text-sm uppercase tracking-wider text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <a
              href="#get-involved"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-secondary text-xs w-full justify-center"
            >
              <span>Get involved</span>
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary text-xs w-full justify-center"
            >
              <span>Partner with us</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
