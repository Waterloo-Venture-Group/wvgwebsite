export default function Story() {
  return (
    <section id="story" className="py-16 lg:py-20 relative">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-wvg-green/5 to-transparent blur-[100px]" />
      </div>

      {/* Subtle notebook grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px)
        `,
        backgroundSize: '25px 25px',
        backgroundPosition: '0 0'
      }} />

      {/* Subtle visual element on right side */}
      <div className="absolute top-1/4 right-0 w-[300px] h-[400px] pointer-events-none opacity-[0.03]">
        <svg viewBox="0 0 300 400" className="w-full h-full">
          <g stroke="white" strokeWidth="1" fill="none" strokeLinecap="round">
            {/* Abstract architectural lines */}
            <line x1="50" y1="50" x2="250" y2="100" />
            <line x1="100" y1="150" x2="200" y2="200" />
            <line x1="150" y1="250" x2="250" y2="300" />
            <line x1="80" y1="300" x2="180" y2="350" />
            {/* Grid overlay pattern */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="300" height="400" fill="url(#grid)" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">01</span>
          <div className="w-12 h-[1px] bg-white/20" />
          <h2 className="font-editorial text-5xl lg:text-6xl">The story</h2>
        </div>

        {/* Wall section - full width */}
        <div className="mb-16">
          {/* Vertical layout */}
          <div className="space-y-8">
            {/* Main statement - single line, full width */}
            <p className="font-editorial text-3xl lg:text-4xl text-white leading-tight">
              At some point, everyone hits the same wall.
            </p>
            
            {/* Editorial blocks */}
            <div className="space-y-4 font-mono text-sm text-white/70 leading-relaxed pt-2">
              <div className="editorial-block">
                <p className="break-words">
                  Founders stall between "this could be something" and "this is real."
                </p>
              </div>
              <div className="editorial-block">
                <p className="break-words">
                  Students know they're capable, but don't know how to get a real shot.
                </p>
              </div>
              <div className="editorial-block">
                <p className="break-words">
                  Funds want signal — early looks at talent and portfolio companies.
                </p>
              </div>
            </div>
            
            {/* Thesis - new aesthetic, not a box */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-wvg-teal/50" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-wvg-teal">Thesis</span>
              </div>
              <p className="font-grotesk text-xl lg:text-2xl text-white/90 leading-relaxed pl-11">
                If you curate the room well enough, the right things happen.
              </p>
            </div>
          </div>
        </div>

        {/* And so we founded WVG section - full width, bold */}
        <div className="w-full">
          <div className="font-mono text-base lg:text-lg text-white/80 leading-relaxed space-y-6">
            <p className="font-editorial text-3xl lg:text-4xl text-white mb-6">
              And so we founded WVG.
            </p>
            <p className="text-white/90">
              A student-led pro-bono venture consultancy and talent community.
            </p>
            <p className="text-white/90">
              We've helped startups reach YC, partnered with top VCs across North America, 
              and helped unlock <span className="text-wvg-green font-semibold">$2.8M+</span> in funding — but that's just the visible part.
            </p>

            <div className="py-8">
              <p className="font-grotesk text-xl text-white/90 mb-4">The real wins look quieter:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-wvg-teal mt-2 shrink-0" />
                  <span>a founder finding their first real hire</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-wvg-teal mt-2 shrink-0" />
                  <span>a student getting pulled into a startup because someone trusted them</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-wvg-teal mt-2 shrink-0" />
                  <span>a fund meeting a company months before a round opens</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <a href="#" className="btn-secondary">
              <span>Read our story</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
