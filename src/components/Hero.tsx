import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-wvg-blue/20 via-wvg-purple/10 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-wvg-green/10 via-wvg-teal/5 to-transparent blur-[100px]" />
      </div>

      {/* Grid lines overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        {/* Full-width gradient overlay for title */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-0 right-0 h-[300px] bg-gradient-to-r from-wvg-green/15 via-wvg-teal/15 via-wvg-blue/15 to-wvg-purple/15 blur-[120px] opacity-50" />
        </div>

        <div className="relative z-10">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6 mt-6">
            <div className="w-8 h-[1px] bg-wvg-teal" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-wvg-teal">
              Student entrepreneurship community
            </span>
          </div>

          {/* Title - Full width spanning across image */}
          <div className="mb-8 lg:mb-12">
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-medium relative">
              {/* Soft blur backdrop for legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-wvg-green/10 via-wvg-teal/10 via-wvg-blue/10 to-wvg-purple/10 blur-2xl" />
              <div className="relative flex flex-wrap items-baseline gap-x-4 lg:gap-x-6 gap-y-2">
                <span className="block">WATERLOO</span>
                <span className="block gradient-text">VENTURE</span>
                <span className="block">GROUP</span>
              </div>
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Text Content */}
            <div className="flex flex-col gap-6 lg:gap-8">
              {/* Tagline */}
              <p className="font-grotesk text-xl lg:text-2xl text-white/80 leading-tight">
                Your early-stage edge —<br />
                and your way into the room.
              </p>

            {/* Body copy */}
            <div className="font-mono text-sm text-white/70 leading-relaxed max-w-lg space-y-4">
              <p>
                Waterloo Venture Group exists for one reason: the right introduction, 
                at the right moment, can change everything.
              </p>
              <p>
                We build rooms where founders meet future investors and co-founders, 
                students find new roles that ship, and funds meet talent before the rest 
                of the market catches on.
              </p>
              <p className="text-white/90">
                Built in Waterloo.<br />
                Connected far beyond it.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#build-with-us" className="btn-primary">
                <span>Build with us</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                <span>Partner with us</span>
              </a>
              <a href="#get-involved" className="btn-secondary">
                <span>Get involved</span>
              </a>
            </div>
            </div>

            {/* Right: Visual Panel - matching text height */}
            <div className="relative h-full flex items-start">
            {/* Main image frame - matching text depth */}
            <div className="relative w-full white-frame overflow-hidden" style={{ minHeight: '500px', height: '100%' }}>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-wvg-blue/20 via-transparent to-wvg-purple/15 z-10" />
              
              {/* Image - centered on people, cropped to match text depth */}
              <Image
                src="/photos/IMG_4330.JPG"
                alt="WVG Community Event at Communitech"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 40%' }}
                priority
              />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-wvg-teal/50 z-20" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-wvg-purple/50 z-20" />
            </div>

            {/* Floating metadata */}
            <div className="absolute -bottom-6 -left-6 bg-black p-5 white-frame">
              <p className="font-mono text-[10px] uppercase tracking-wider text-white/60 mb-1">Location</p>
              <p className="font-grotesk text-lg font-semibold">Waterloo, ON</p>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border border-white/10 -z-10" />
          </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned to avoid location tag */}
      <div className="absolute bottom-8 left-1/4 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
