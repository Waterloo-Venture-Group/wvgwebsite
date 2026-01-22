export default function Story() {
  return (
    <section id="story" className="py-16 lg:py-20 relative">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-wvg-green/5 to-transparent blur-[100px]" />
      </div>

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
          <p className="font-grotesk text-3xl lg:text-4xl text-white/90 leading-snug mb-8">
            At some point, everyone hits the same wall.
          </p>

          {/* Editorial blocks */}
          <div className="space-y-6 font-mono text-sm text-white/70 leading-relaxed">
            <div className="editorial-block">
              <p>
                Founders stall between "this could be something" and "this is real."
              </p>
            </div>
            <div className="editorial-block">
              <p>
                Students know they're capable, but don't know how to get a real shot.
              </p>
            </div>
            <div className="editorial-block">
              <p>
                Funds want signal — early looks at talent, founders, and future portfolio 
                companies before they're obvious.
              </p>
            </div>
          </div>
        </div>

        {/* Thesis bubble - same size, underneath */}
        <div className="mb-20">
          <div className="white-frame p-8 lg:p-10 relative max-w-2xl">
            <div className="absolute -top-3 left-6 bg-black px-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-wvg-teal">Thesis</span>
            </div>
            <p className="font-grotesk text-2xl lg:text-3xl leading-relaxed">
              If you curate the room well enough, the right things happen.
            </p>
          </div>
        </div>

        {/* Where things move section with icons */}
        <div className="mb-20 space-y-8">
          <div className="flex items-start gap-4">
            <div className="mt-1 shrink-0">
              <svg className="w-6 h-6 text-wvg-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="font-grotesk text-xl lg:text-2xl text-white/90 leading-relaxed">
              So we started paying attention to where things actually move.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 shrink-0">
              <svg className="w-5 h-5 text-wvg-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <p className="font-editorial text-lg lg:text-xl text-white/80">
              Dinner tables.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 shrink-0">
              <svg className="w-5 h-5 text-wvg-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="font-editorial text-lg lg:text-xl text-white/80">
              Whiteboards.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="mt-1 shrink-0">
              <svg className="w-5 h-5 text-wvg-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <p className="font-editorial text-lg lg:text-xl text-white/80">
              Side conversations that turn into texts the next morning.
            </p>
          </div>
        </div>

        {/* And so we founded WVG section - full width, bold */}
        <div className="w-full">
          <h3 className="font-editorial text-3xl lg:text-4xl text-white mb-8">
            And so we founded WVG.
          </h3>

          <div className="font-mono text-base lg:text-lg text-white/80 leading-relaxed space-y-6">
            <p className="font-grotesk text-xl lg:text-2xl text-white/90">
              Waterloo Venture Group is a student-led pro-bono venture consultancy, 
              talent network, and community built around a simple thesis:
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

            <p className="text-white/90 border-l-2 border-wvg-teal/50 pl-6 py-2 font-grotesk text-lg">
              Those moments don't scale.<br />
              But they compound.
            </p>
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
