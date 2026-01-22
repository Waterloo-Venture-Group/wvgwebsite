export default function Story() {
  return (
    <section id="story" className="py-32 lg:py-40 relative">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-wvg-green/5 to-transparent blur-[100px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">01</span>
          <div className="w-12 h-[1px] bg-white/20" />
          <h2 className="font-editorial text-5xl lg:text-6xl">The story</h2>
        </div>

        {/* Editorial content grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Main narrative column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Opening statement */}
            <p className="font-grotesk text-2xl lg:text-3xl text-white/90 leading-snug">
              At some point, everyone hits the same wall.
            </p>

            {/* Editorial blocks */}
            <div className="space-y-6 font-mono text-sm text-white/50 leading-relaxed">
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

            <div className="h-[1px] bg-white/10 my-10" />

            <div className="font-mono text-sm text-white/50 leading-relaxed space-y-6">
              <p>So we started paying attention to where things actually move.</p>
              
              <p className="text-white/70 font-grotesk text-lg">
                Dinner tables.<br />
                Whiteboards.<br />
                Side conversations that turn into texts the next morning.
              </p>
            </div>
          </div>

          {/* Side column */}
          <div className="lg:col-span-5 lg:pt-24">
            {/* Framed statement */}
            <div className="white-frame p-8 lg:p-10 relative">
              <div className="absolute -top-3 left-6 bg-black px-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-wvg-teal">Thesis</span>
              </div>
              <p className="font-grotesk text-xl lg:text-2xl leading-relaxed">
                If you curate the room well enough, the right things happen.
              </p>
            </div>
          </div>
        </div>

        {/* Expanded narrative */}
        <div className="mt-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 lg:col-start-3">
            <div className="font-mono text-sm text-white/50 leading-relaxed space-y-6">
              <p>
                Waterloo Venture Group is a student-led pro-bono venture consultancy, 
                talent network, and community built around a simple thesis:
              </p>

              <p className="text-white/80">
                We've helped startups reach YC, partnered with top VCs across North America, 
                and helped unlock <span className="text-wvg-green">$2.8M+</span> in funding — but that's just the visible part.
              </p>

              <div className="py-8">
                <p className="font-grotesk text-lg text-white/70 mb-4">The real wins look quieter:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-wvg-teal mt-2 shrink-0" />
                    <span>a founder finding their first real hire</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-wvg-teal mt-2 shrink-0" />
                    <span>a student getting pulled into a startup because someone trusted them</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-wvg-teal mt-2 shrink-0" />
                    <span>a fund meeting a company months before a round opens</span>
                  </li>
                </ul>
              </div>

              <p className="text-white/70 border-l border-white/20 pl-6 py-2">
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
      </div>
    </section>
  );
}
