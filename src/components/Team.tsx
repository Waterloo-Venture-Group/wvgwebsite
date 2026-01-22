import Image from "next/image";

const teamMembers = [
  {
    name: "Jay Mistry",
    role: "Co-founder & Managing Director",
    linkedin: "https://www.linkedin.com/in/jaymistry2004/",
    image: "/photos/leadership/jaymistry.jpeg",
  },
  {
    name: "Suraj Sivaraja",
    role: "Co-founder & Managing Director",
    linkedin: "https://www.linkedin.com/in/surajsivaraja/",
    image: "/photos/leadership/suraj.jpeg",
  },
  {
    name: "Callie Sweet",
    role: "Director, Communications & Growth",
    linkedin: "https://www.linkedin.com/in/callieesweet/",
    image: "/photos/leadership/calliesweet.jpeg",
  },
  {
    name: "Demir Eren",
    role: "Director, Venture Strategy",
    linkedin: "https://www.linkedin.com/in/demireren/",
    image: "/photos/leadership/demireren.jpeg",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider mb-16" />

      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-wvg-purple/10 via-wvg-blue/5 to-transparent blur-[150px]" />
      </div>

      {/* Subtle grid paper background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px'
      }} />

      {/* Moving crane drawing - 300% larger */}
      <div className="absolute top-0 right-0 w-full h-96 pointer-events-none overflow-hidden">
        <svg 
          className="absolute top-0 right-0 h-72 w-auto animate-slide-in"
          viewBox="0 0 200 100"
          style={{ animation: 'slideInCrane 2s ease-out forwards' }}
        >
          <g stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Crane base */}
            <line x1="180" y1="80" x2="180" y2="60" />
            <line x1="170" y1="70" x2="190" y2="70" />
            {/* Crane arm */}
            <line x1="180" y1="60" x2="120" y2="30" />
            <line x1="120" y1="30" x2="80" y2="20" />
            {/* Hook/line */}
            <line x1="80" y1="20" x2="75" y2="40" />
            <circle cx="75" cy="40" r="2" />
            {/* Support lines */}
            <line x1="160" y1="50" x2="130" y2="35" />
            <line x1="140" y1="55" x2="110" y2="32" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 relative">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">07</span>
          <div className="w-12 h-[1px] bg-white/20" />
          <h2 className="font-editorial text-5xl lg:text-6xl relative z-10">Leadership</h2>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="white-frame p-6 lg:p-8 h-full transition-all duration-300 group-hover:border-wvg-teal/50">
                {/* Image with moving aura glow */}
                <div className="relative aspect-square mb-6 overflow-hidden white-frame">
                  {/* Moving aura glow */}
                  <div className="absolute inset-0 -z-10 opacity-30">
                    <div 
                      className="absolute inset-0 rounded-full blur-2xl animate-pulse-aura"
                      style={{
                        background: `radial-gradient(circle, 
                          rgba(18, 179, 120, 0.4) 0%,
                          rgba(17, 193, 188, 0.3) 25%,
                          rgba(0, 74, 173, 0.2) 50%,
                          rgba(227, 133, 236, 0.3) 75%,
                          transparent 100%)`,
                        animation: 'auraGlow 4s ease-in-out infinite',
                      }}
                    />
                  </div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover relative z-10"
                    style={{ transform: 'scale(1.1)' }}
                  />
                </div>

                {/* Info */}
                <div>
                  <h3 className="font-grotesk text-lg lg:text-xl font-semibold mb-2">
                    {member.name}
                  </h3>
                  <p className="font-mono text-xs text-white/60 mb-4 leading-relaxed">
                    {member.role}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-wvg-teal hover:text-white transition-colors"
                  >
                    <span>LinkedIn</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
