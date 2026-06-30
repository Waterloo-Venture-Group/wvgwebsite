"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { navLinks, sectionIds } from "@/lib/nav";

const HERO_SCROLL_THRESHOLD = 120;

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const updateNavState = () => {
      setIsScrolled(window.scrollY > 20);

      if (window.scrollY < HERO_SCROLL_THRESHOLD) {
        setActiveSection("");
        return;
      }

      let currentSection = "";
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const { top } = element.getBoundingClientRect();
        if (top <= HERO_SCROLL_THRESHOLD) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    updateNavState();
    window.addEventListener("scroll", updateNavState, { passive: true });
    window.addEventListener("hashchange", updateNavState);
    return () => {
      window.removeEventListener("scroll", updateNavState);
      window.removeEventListener("hashchange", updateNavState);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/photos/WVG-Logo-Dark-PFP.png"
                alt="Waterloo Venture Group"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
                priority
              />
              <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-wvg-green to-wvg-teal group-hover:w-full transition-all duration-300" />
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-xs uppercase tracking-wider transition-colors duration-200 ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

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

        <div className="h-[1px] bg-white/10" />
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-mono text-sm uppercase tracking-wider transition-colors ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
