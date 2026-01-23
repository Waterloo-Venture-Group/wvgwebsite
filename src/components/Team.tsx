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

      {/* Moving crane drawing - 300% larger, technical blueprint style */}
      <div className="absolute top-0 right-0 w-full h-96 pointer-events-none overflow-hidden">
        <svg 
          className="absolute top-0 right-0 h-96 w-auto animate-slide-in"
          viewBox="0 0 400 300"
          style={{ animation: 'slideInCrane 2s ease-out forwards' }}
        >
          <g stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Lattice Tower (Mast) - Right side */}
            {/* Vertical lattice structure */}
            <line x1="350" y1="280" x2="350" y2="100" />
            <line x1="340" y1="280" x2="340" y2="100" />
            <line x1="360" y1="280" x2="360" y2="100" />
            
            {/* Horizontal lattice braces */}
            <line x1="340" y1="260" x2="360" y2="260" />
            <line x1="340" y1="240" x2="360" y2="240" />
            <line x1="340" y1="220" x2="360" y2="220" />
            <line x1="340" y1="200" x2="360" y2="200" />
            <line x1="340" y1="180" x2="360" y2="180" />
            <line x1="340" y1="160" x2="360" y2="160" />
            <line x1="340" y1="140" x2="360" y2="140" />
            <line x1="340" y1="120" x2="360" y2="120" />
            
            {/* Diagonal lattice braces */}
            <line x1="340" y1="260" x2="360" y2="240" />
            <line x1="360" y1="260" x2="340" y2="240" />
            <line x1="340" y1="220" x2="360" y2="200" />
            <line x1="360" y1="220" x2="340" y2="200" />
            <line x1="340" y1="180" x2="360" y2="160" />
            <line x1="360" y1="180" x2="340" y2="160" />
            <line x1="340" y1="140" x2="360" y2="120" />
            <line x1="360" y1="140" x2="340" y2="120" />
            
            {/* Slewing Unit - Top of tower */}
            <rect x="335" y="95" width="30" height="15" rx="2" />
            <line x1="350" y1="95" x2="350" y2="85" />
            
            {/* Small mast on slewing unit */}
            <line x1="350" y1="85" x2="350" y2="70" />
            <circle cx="350" cy="70" r="3" />
            
            {/* Main Jib (Working Arm) - Extending left and up */}
            {/* Jib lattice structure */}
            <line x1="350" y1="100" x2="200" y2="50" />
            <line x1="345" y1="98" x2="195" y2="48" />
            <line x1="355" y1="98" x2="205" y2="48" />
            
            {/* Jib horizontal braces */}
            <line x1="320" y1="95" x2="220" y2="52" />
            <line x1="300" y1="90" x2="230" y2="51" />
            <line x1="280" y1="85" x2="240" y2="50" />
            <line x1="260" y1="80" x2="250" y2="49" />
            
            {/* Jib diagonal braces */}
            <line x1="345" y1="98" x2="320" y2="95" />
            <line x1="320" y1="95" x2="300" y2="90" />
            <line x1="300" y1="90" x2="280" y2="85" />
            <line x1="280" y1="85" x2="260" y2="80" />
            <line x1="260" y1="80" x2="240" y2="50" />
            
            {/* Trolley on jib */}
            <rect x="195" y="45" width="12" height="8" rx="1" />
            <line x1="201" y1="53" x2="201" y2="70" />
            
            {/* Hoist cable and hook */}
            <line x1="201" y1="70" x2="201" y2="120" />
            <ellipse cx="201" cy="125" rx="4" ry="6" />
            <path d="M 201 131 L 199 135 L 201 137 L 203 135 Z" />
            
            {/* Counter-Jib (Right side) */}
            <line x1="350" y1="100" x2="380" y2="105" />
            <line x1="345" y1="98" x2="375" y2="103" />
            <line x1="355" y1="98" x2="385" y2="103" />
            <line x1="375" y1="103" x2="385" y2="103" />
            
            {/* Counterweights */}
            <rect x="378" y="102" width="10" height="8" rx="1" />
            
            {/* Support cables from mast top to jib ends */}
            <line x1="350" y1="70" x2="200" y2="50" />
            <line x1="350" y1="70" x2="380" y2="105" />
          </g>
        </svg>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 relative">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">08</span>
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
