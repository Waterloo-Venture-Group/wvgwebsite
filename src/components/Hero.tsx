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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-8 lg:gap-10">
            {/* Label */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1px] bg-wvg-teal" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-wvg-teal">
                Student-led venture consultancy
              </span>
            </div>

            {/* Title */}
            <h1 className="font-editorial text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium">
              <span className="block">WATERLOO</span>
              <span className="block gradient-text">VENTURE</span>
              <span className="block">GROUP</span>
            </h1>

            {/* Tagline */}
            <p className="font-grotesk text-xl lg:text-2xl text-white/80 max-w-xl">
              Your early-stage edge — and your way into the room.
            </p>

            {/* Body copy */}
            <div className="font-mono text-sm text-white/50 leading-relaxed max-w-lg space-y-4">
              <p>
                Waterloo Venture Group exists for one reason: the right introduction, 
                at the right moment, can change everything.
              </p>
              <p>
                We build rooms where founders meet future investors and co-founders, 
                students find co-op and new-grad roles that ship, and funds meet talent 
                and companies before the rest of the market catches on.
              </p>
              <p className="text-white/70">
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

          {/* Right: Visual Panel */}
          <div className="relative">
            {/* Main image frame */}
            <div className="relative aspect-[4/5] white-frame overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-wvg-blue/30 via-transparent to-wvg-purple/20 z-10" />
              
              {/* Image */}
              <Image
                src="/photos/IMG_4330.JPG"
                alt="WVG Community Event at Communitech"
                fill
                className="object-cover img-editorial"
                priority
              />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-wvg-teal/50 z-20" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-wvg-purple/50 z-20" />
            </div>

            {/* Floating metadata */}
            <div className="absolute -bottom-6 -left-6 bg-black p-4 white-frame">
              <p className="font-mono text-[10px] uppercase tracking-wider text-white/40">Location</p>
              <p className="font-grotesk text-sm">Waterloo, ON</p>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border border-white/10 -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
