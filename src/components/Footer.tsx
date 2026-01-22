export default function Footer() {
  return (
    <footer className="py-20 relative">
      {/* Top border with gradient */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mb-20" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Brand statement */}
          <div className="lg:col-span-6">
            <div className="font-editorial text-2xl lg:text-3xl text-white/80 leading-relaxed mb-8">
              <p>Built in the Maple Valley.</p>
              <p>Still here. Still building.</p>
              <p className="text-white">Still believing the right room changes everything.</p>
            </div>

            {/* Logo */}
            <div className="inline-block">
              <span className="font-grotesk text-3xl font-bold tracking-tight">WVG</span>
              <div className="h-[2px] w-full bg-gradient-to-r from-wvg-green via-wvg-teal to-wvg-blue mt-2" />
            </div>
          </div>

          {/* Right: Links */}
          <div className="lg:col-span-6 lg:col-start-8">
            <div className="grid grid-cols-2 gap-8">
              {/* Navigation */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-4">
                  Navigate
                </p>
                <ul className="space-y-3">
                  {[
                    { href: "#story", label: "Story" },
                    { href: "#what-we-do", label: "What we do" },
                    { href: "#events", label: "Events" },
                    { href: "#contact", label: "Contact" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="font-mono text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-4">
                  Connect
                </p>
                <ul className="space-y-3">
                  {[
                    { href: "https://instagram.com/waterlooventuregroup", label: "Instagram" },
                    { href: "https://x.com/waterloovg", label: "X" },
                    { href: "https://linkedin.com/company/waterloo-venture-group", label: "LinkedIn" },
                    { href: "https://lu.ma/wvg", label: "Luma" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-white/50 hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <p className="font-mono text-xs text-white/30">
            © {new Date().getFullYear()} Waterloo Venture Group. All rights reserved.
          </p>
          <p className="font-mono text-xs text-white/30">
            Waterloo, Ontario, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
