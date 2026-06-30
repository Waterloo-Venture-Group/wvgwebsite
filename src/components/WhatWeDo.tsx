export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-16 lg:py-20 relative">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="border-l-2 border-wvg-teal/50 pl-6 mb-8">
          <h2 className="font-editorial text-5xl lg:text-6xl">About</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          <div id="for-founders" className="group relative scroll-mt-28">
            <div className="white-frame p-8 lg:p-10 h-full transition-all duration-300 group-hover:border-wvg-green/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-wvg-green/10 to-transparent blur-2xl opacity-50" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-wvg-green via-wvg-teal to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="mb-4 relative z-10">
                <h3 className="font-editorial text-2xl lg:text-3xl font-bold text-wvg-green">
                  For Founders
                </h3>
                <p className="font-mono text-sm text-white/70 mt-4">
                  Pitch readiness, GTM clarity, and intros when the moment hits.
                </p>
              </div>

              <ul className="font-mono text-sm text-white/70 space-y-3 mb-8 relative z-10">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-wvg-green mt-2 shrink-0" />
                  <span>Pitch and narrative refinement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-wvg-green mt-2 shrink-0" />
                  <span>Go-to-market strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-wvg-green mt-2 shrink-0" />
                  <span>Intros to co-founders, operators, and investors</span>
                </li>
              </ul>

              <a
                href="#contact-build"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-wvg-green hover:text-white transition-colors group/link relative z-10"
              >
                <span>Build with us</span>
                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div id="for-students" className="group relative scroll-mt-28">
            <div className="white-frame p-8 lg:p-10 h-full transition-all duration-300 group-hover:border-wvg-teal/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-wvg-teal/10 to-transparent blur-2xl opacity-50" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-wvg-teal via-wvg-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="mb-4 relative z-10">
                <h3 className="font-editorial text-2xl lg:text-3xl font-bold text-wvg-teal">
                  For Students
                </h3>
                <p className="font-mono text-sm text-white/70 mt-4">
                  Real rooms, real work, no perfect resume required.
                </p>
              </div>

              <ul className="font-mono text-sm text-white/70 space-y-3 mb-8 relative z-10">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-wvg-teal mt-2 shrink-0" />
                  <span>Hands-on startup experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-wvg-teal mt-2 shrink-0" />
                  <span>Invites to exclusive VC rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-wvg-teal mt-2 shrink-0" />
                  <span>Co-op + new-grad roles in early-stage teams</span>
                </li>
              </ul>

              <a
                href="#contact-involved"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-wvg-teal hover:text-white transition-colors group/link relative z-10"
              >
                <span>Get involved</span>
                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div id="for-partners" className="group relative scroll-mt-28">
            <div className="white-frame p-8 lg:p-10 h-full transition-all duration-300 group-hover:border-wvg-purple/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-wvg-purple/10 to-transparent blur-2xl opacity-50" />
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-wvg-purple via-wvg-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="mb-4 relative z-10">
                <h3 className="font-editorial text-2xl lg:text-3xl font-bold text-wvg-purple">
                  For Funds & Partners
                </h3>
                <p className="font-mono text-sm text-white/70 mt-4">
                  High-signal founders and talent before the polish sets in.
                </p>
              </div>

              <ul className="font-mono text-sm text-white/70 space-y-3 mb-8 relative z-10">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-wvg-purple mt-2 shrink-0" />
                  <span>Early intros to founders and operators</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-wvg-purple mt-2 shrink-0" />
                  <span>Curated rooms with Waterloo builders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-wvg-purple mt-2 shrink-0" />
                  <span>Access to student talent before the market</span>
                </li>
              </ul>

              <a
                href="#contact-partner"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-wvg-purple hover:text-white transition-colors group/link relative z-10"
              >
                <span>Partner with us</span>
                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
