export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-20 lg:py-28 relative">
      {/* Section divider */}
      <div className="section-divider mb-20" />

      {/* Background gradient and subtle grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-wvg-green/5 via-wvg-teal/5 via-wvg-blue/5 to-wvg-purple/5" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-wvg-blue/10 to-transparent blur-[120px]" />
        {/* Subtle notebook grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">02</span>
          <div className="w-12 h-[1px] bg-white/20" />
          <h2 className="font-editorial text-5xl lg:text-6xl">What we do</h2>
        </div>

        {/* Intro copy */}
        <div className="max-w-3xl mb-16">
          <div className="font-mono text-sm text-white/70 leading-relaxed space-y-4">
            <p>We don't "run programs."</p>
            <p>We don't host filler events.</p>
            <p>We don't send people home with tote bags and nothing to follow up on.</p>
            <p className="text-white/80 pt-4 font-grotesk text-lg">
              We do three things, very intentionally.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {/* Pillar 1: For Founders */}
          <div className="group relative">
            <div className="white-frame p-8 lg:p-10 h-full transition-all duration-300 group-hover:border-wvg-green/50">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-wvg-green via-wvg-teal to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Label */}
              <div className="mb-6">
                <h3 className="font-grotesk text-2xl lg:text-3xl font-bold text-wvg-green">
                  For Founders
                </h3>
              </div>

              {/* Content */}
              <div className="font-mono text-sm text-white/70 leading-relaxed space-y-4 mb-8">
                <p>
                  We help you find investors, co-founders and early operators – and get 
                  your story tight enough that when the moment comes, you're ready.
                </p>
                <p>
                  Sometimes that looks like pitch work. Sometimes it's go-to-market clarity. 
                  Often it's just getting you in front of the right person sooner than 
                  you would have on your own.
                </p>
              </div>

              {/* CTA */}
              <a href="#build-with-us" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-wvg-green hover:text-white transition-colors group/link">
                <span>Start building with us</span>
                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Pillar 2: For Students */}
          <div className="group relative">
            <div className="white-frame p-8 lg:p-10 h-full transition-all duration-300 group-hover:border-wvg-teal/50">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-wvg-teal via-wvg-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Label */}
              <div className="mb-6">
                <h3 className="font-grotesk text-2xl lg:text-3xl font-bold text-wvg-teal">
                  For Students
                </h3>
              </div>

              {/* Content */}
              <div className="font-mono text-sm text-white/70 leading-relaxed space-y-4 mb-8">
                <p>
                  We'll put you in rooms where people are building, not posturing. We help you 
                  get real work – co-ops, new-grad roles and early startup experience.
                </p>
                <p>
                  You don't need to be loud.
                </p>
                <p>
                  You need to be useful, curious, and present.
                </p>
              </div>

              {/* CTA */}
              <a href="#get-involved" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-wvg-teal hover:text-white transition-colors group/link">
                <span>Get involved</span>
                <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Pillar 3: For Funds */}
          <div className="group relative">
            <div className="white-frame p-8 lg:p-10 h-full transition-all duration-300 group-hover:border-wvg-purple/50">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-wvg-purple via-wvg-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Label */}
              <div className="mb-6">
                <h3 className="font-grotesk text-2xl lg:text-3xl font-bold text-wvg-purple">
                  For Funds & Partners
                </h3>
              </div>

              {/* Content */}
              <div className="font-mono text-sm text-white/70 leading-relaxed space-y-4 mb-8">
                <p>
                  We help you meet high-signal talent and future portfolio companies early.
                </p>
                <p>
                  Everyone else meets them after the polish.
                </p>
                <p>
                  We introduce you when it's still messy, honest, and high-signal.
                </p>
                <p className="text-white/80 font-grotesk">
                  Let's understand what ROI means for you.
                </p>
              </div>

              {/* CTA */}
              <a href="#contact" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-wvg-purple hover:text-white transition-colors group/link">
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
