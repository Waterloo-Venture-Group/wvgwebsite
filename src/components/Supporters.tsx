import Image from "next/image";

const supporters = [
  {
    name: "Opennote",
    description: "$1.2M raise (YC) + pitch deck support",
    logo: "/photos/supporters/opennote.png",
    url: "https://www.opennote.com/",
  },
  {
    name: "Golden Ventures",
    description: "Fireside Chat + Toronto Tech Week",
    logo: "/photos/supporters/goldenventures.png",
    url: "https://www.golden.ventures/",
  },
  {
    name: "Ripple Ventures",
    description: "Waterloo Tech Week Co-founder Matching",
    logo: "/photos/supporters/rippleventures.png",
    url: "https://www.rippleventures.com/",
  },
  {
    name: "Theory Ventures",
    description: "Recruitment Dinner & 150+ attendee Fireside",
    logo: "/photos/supporters/theoryventures.svg",
    url: "https://theoryvc.com/",
  },
  {
    name: "Northwood Family Office",
    description: "Waterloo Tech Week Fireside Chat",
    logo: "/photos/supporters/northwood.png",
    url: "https://www.northwoodfamilyoffice.com/",
  },
  {
    name: "Polarity Labs",
    description: "Pitch and raise support",
    logo: "/photos/supporters/polarity.png",
    url: "https://www.polarity.cc/",
  },
];

export default function Supporters() {
  return (
    <section className="py-12 lg:py-16 relative">
      {/* Section divider */}
      <div className="section-divider mb-12" />

      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-wvg-blue/5 via-wvg-purple/5 to-transparent blur-[120px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">04</span>
          <div className="w-12 h-[1px] bg-white/20" />
          <h2 className="font-editorial text-4xl lg:text-5xl">Partners we've supported</h2>
        </div>

        {/* Supporters grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {supporters.map((supporter, index) => (
            <a
              key={index}
              href={supporter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              {/* Card container */}
              <div className="relative p-8 lg:p-10 white-frame transition-all duration-500 group-hover:border-wvg-blue/50 group-hover:border-wvg-purple/50 cursor-pointer">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-sm">
                  <div 
                    className="absolute inset-0 rounded-sm"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(227, 133, 236, 0.4))',
                      padding: '1px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                </div>

                {/* Liquid glass overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-sm">
                  {/* Glass reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent" />
                  <div 
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20"
                    style={{
                      animation: 'shimmer 3s ease-in-out infinite',
                    }}
                  />
                  {/* Blue-purple glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-wvg-blue/20 via-wvg-purple/20 to-transparent blur-xl" />
                </div>

                {/* Logo */}
                <div className="relative z-10 mb-6 h-16 flex items-center justify-center">
                  <div className="relative w-full h-full transition-all duration-500 group-hover:scale-105">
                    <Image
                      src={supporter.logo}
                      alt={supporter.name}
                      fill
                      className="object-contain"
                      style={{
                        filter: 'brightness(0) invert(1)',
                        opacity: 0.9,
                        transition: 'all 0.5s ease',
                      }}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="relative z-10">
                  <h3 className="font-grotesk text-lg font-semibold mb-2 group-hover:text-wvg-blue transition-colors">
                    {supporter.name}
                  </h3>
                  <p className="font-mono text-xs text-white/60 leading-relaxed">
                    {supporter.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
