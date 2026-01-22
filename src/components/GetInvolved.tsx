import Image from "next/image";

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-20 lg:py-28 relative">
      {/* Section divider */}
      <div className="section-divider mb-20" />

      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-wvg-teal/10 to-transparent blur-[120px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] white-frame overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-bl from-wvg-teal/20 via-transparent to-wvg-blue/10 z-10" />
              
              <Image
                src="/photos/IMG_0580 (1).jpeg"
                alt="WVG student community"
                fill
                className="object-cover img-editorial"
              />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-wvg-teal/40 z-20" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-wvg-blue/40 z-20" />
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-6 -right-6 bg-black p-6 white-frame">
              <span className="font-editorial text-4xl text-wvg-teal">23+</span>
              <p className="font-mono text-[10px] uppercase tracking-wider text-white/60 mt-1">
                Students matched
              </p>
            </div>

            {/* Decorative frame */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-white/5 -z-10" />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            {/* Section header */}
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">06</span>
              <div className="w-12 h-[1px] bg-white/20" />
            </div>
            
            <h2 className="font-editorial text-5xl lg:text-6xl mb-8">Get involved</h2>

            <div className="font-mono text-sm text-white/70 leading-relaxed space-y-6">
              <p className="font-grotesk text-xl text-white/80">
                WVG is for students who want to build, not wait.
              </p>

              <div className="py-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-wvg-teal mb-4">
                  Opportunities include
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-wvg-teal mt-2 shrink-0" />
                    <span>Hands-on startup experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-wvg-teal mt-2 shrink-0" />
                    <span>Venture exposure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-wvg-teal mt-2 shrink-0" />
                    <span>Co-op and new-grad roles in early-stage teams</span>
                  </li>
                </ul>
              </div>

              <p className="text-white/60 border-l border-wvg-teal/50 pl-6">
                You don't need a perfect resume.<br />
                You need to show up ready to do the work.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a href="#contact" className="btn-primary">
                <span>Join the talent network</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
