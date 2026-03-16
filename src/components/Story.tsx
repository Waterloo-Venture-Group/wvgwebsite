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
          </g>
        </svg>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="border-l-2 border-wvg-teal/50 pl-6 mb-12">
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
            <ul className="space-y-3 font-mono text-base lg:text-lg text-white/70 leading-relaxed pt-2">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-wvg-teal mt-2 shrink-0" />
                <span className="break-words">Founders stall between "this could be something" and "this is real."</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-wvg-teal mt-2 shrink-0" />
                <span className="break-words">Students know they're capable, but don't know how to get a real shot.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-wvg-teal mt-2 shrink-0" />
                <span className="break-words">Funds want signal — early looks at talent and portfolio companies.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* And so we founded WVG section - full width, bold */}
        <div className="w-full relative">
          {/* Purple spotlight from right */}
          <div className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-l from-wvg-purple/20 via-wvg-purple/10 to-transparent blur-[120px]" />
          </div>
          
          <div className="relative font-mono text-base lg:text-lg text-white/80 leading-relaxed space-y-6">
            <p className="font-editorial text-3xl lg:text-4xl text-white mb-6 relative z-10">
              And so we founded WVG.
            </p>
            <p className="text-white/90">
              A student-led pro-bono venture consultancy and talent community.
            </p>
            <p className="text-white/90">
              We've helped startups reach YC, partnered with top VCs across North America, 
              and helped unlock <span className="text-wvg-green font-semibold">$4M+</span> in funding — but that's just the visible part.
            </p>

            <div className="py-8">
              <p className="font-mono text-base lg:text-lg text-white/90 mb-4">The real wins look quieter:</p>
              <ul className="space-y-3 font-mono text-base lg:text-lg text-white/70 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-wvg-teal mt-2 shrink-0" />
                  <span>Founder finding their first real hire</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-wvg-teal mt-2 shrink-0" />
                  <span>Student getting pulled into a startup because someone trusted them</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-wvg-teal mt-2 shrink-0" />
                  <span>Fund meeting a company months before a round opens</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
