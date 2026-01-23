export default function EventList() {
  return (
    <section className="py-12 lg:py-16 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/60 mb-3">
            Upcoming
          </p>
          <h3 className="font-editorial text-3xl lg:text-4xl">Events</h3>
        </div>

        {/* Big CTA Link to Luma */}
        <a 
          href="https://luma.com/user/wvg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative block"
        >
          <div className="relative white-frame p-12 lg:p-20 overflow-hidden transition-all duration-500 group-hover:border-wvg-teal/50">
            {/* Gradient background on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-wvg-teal/10 via-wvg-blue/5 to-wvg-purple/10" />
            
            {/* Animated gradient border on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(17, 193, 188, 0.4), rgba(0, 74, 173, 0.4), rgba(227, 133, 236, 0.4))',
                  padding: '1px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="flex-1">
                  <p className="font-mono text-xs uppercase tracking-widest text-wvg-teal mb-4">
                    Get first access
                  </p>
                  <h2 className="font-editorial text-4xl lg:text-5xl xl:text-6xl text-white mb-4 leading-tight">
                    Be the first to know about our upcoming events.
                  </h2>
                  <p className="font-mono text-sm text-white/70 max-w-2xl">
                    Join our community on Luma to get exclusive early access to dinners, summits, workshops, and rooms we're building.
                  </p>
                </div>
                
                {/* Arrow icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border border-white/20 group-hover:border-wvg-teal/50 flex items-center justify-center transition-all duration-500 group-hover:bg-wvg-teal/10">
                    <svg 
                      className="w-8 h-8 lg:w-10 lg:h-10 text-white/60 group-hover:text-wvg-teal transition-all duration-500 group-hover:translate-x-2" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-wvg-teal/20 to-transparent blur-2xl" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
