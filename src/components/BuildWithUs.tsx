import Image from "next/image";

export default function BuildWithUs() {
  return (
    <section id="build-with-us" className="py-20 lg:py-28 relative">
      {/* Section divider */}
      <div className="section-divider mb-20" />

      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-wvg-green/10 to-transparent blur-[100px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            {/* Section header */}
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">05</span>
              <div className="w-12 h-[1px] bg-white/20" />
            </div>
            
            <h2 className="font-editorial text-5xl lg:text-6xl mb-8">Build with us</h2>

            <div className="font-mono text-sm text-white/70 leading-relaxed space-y-6">
              <p className="font-grotesk text-xl text-white/80">
                Startups work with WVG when they want real feedback, real connections, 
                and real momentum.
              </p>

              <div className="py-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-wvg-green mb-4">
                  Support includes
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-wvg-green mt-2 shrink-0" />
                    <span>Pitch and narrative refinement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-wvg-green mt-2 shrink-0" />
                    <span>Go-to-market clarity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-wvg-green mt-2 shrink-0" />
                    <span>Introductions to founders, operators, and investors</span>
                  </li>
                </ul>
              </div>

              {/* Proof points */}
              <div className="white-frame p-6 space-y-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-editorial text-3xl text-wvg-green">$2.8M+</span>
                    <span className="text-white/60">raised across supported startups</span>
                </div>
                <div className="h-[1px] bg-white/10" />
                <p className="text-white/60">
                  Founders who went on to build YC-backed companies.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a href="#contact" className="btn-primary">
                <span>Build with us</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="relative aspect-square white-frame overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-wvg-green/20 via-transparent to-wvg-teal/10 z-10" />
              
              <Image
                src="/photos/IMG_0576 (1) (1).jpeg"
                alt="WVG team working with founders"
                fill
                className="object-cover img-editorial"
              />

              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-20 h-20 border-r border-t border-wvg-green/40 z-20" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-l border-b border-wvg-teal/40 z-20" />
            </div>

            {/* Decorative frame */}
            <div className="absolute -top-6 -right-6 w-full h-full border border-white/5 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
