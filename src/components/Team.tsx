import Image from "next/image";

const leadership = [
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

const communicationsGrowth = [
  {
    name: "Daiva Saplys",
    role: "External Communications",
    linkedin: "https://www.linkedin.com/in/daivasaplys/",
    image: "/photos/team/Daiva-Headshot.jpg",
  },
  {
    name: "Paige Griffiths",
    role: "External Communications",
    linkedin: "https://www.linkedin.com/in/paige-griffiths-b889432a4/",
    image: "/photos/team/Paige-Headshot.jpg",
  },
  {
    name: "Alyanna Fuentes",
    role: "Growth Marketing",
    linkedin: "https://www.linkedin.com/in/alyanna-f/",
    image: "/photos/team/Alyanna-Headshot.jpg",
  },
  {
    name: "Rasana Yogarajan",
    role: "Growth Marketing",
    linkedin: "https://www.linkedin.com/in/rasanayogarajan/",
    image: "/photos/team/Rasana-Headshot.jpg",
  },
  {
    name: "Rudra Jassal",
    role: "Ecosystem Partnerships",
    linkedin: "https://www.linkedin.com/in/rudrajassal/",
    image: "/photos/team/Headshot-Rudra.jpg",
  },
  {
    name: "Hur Abbas Merchant",
    role: "Ecosystem Partnerships",
    linkedin: "https://www.linkedin.com/in/hurabbas-merchant/",
    image: "/photos/team/Headshot-Hur.jpg",
  },
  {
    name: "Yash Panchal",
    role: "Ecosystem Partnerships",
    linkedin: "https://www.linkedin.com/in/yash-panchal-80a422333/",
    image: "/photos/team/Headshot-Yash.jpg",
  },
  {
    name: "Ammar",
    role: "Ecosystem Partnerships",
    linkedin: "https://www.linkedin.com/in/ammar-adam/",
    image: "/photos/team/Ammar-Headshot-New.jpg",
  },
];

const ventureStrategy = [
  {
    name: "Michael Zhang",
    role: "Venture Strategy",
    linkedin: "https://www.linkedin.com/in/michael-zhang-921ab0274/",
    image: "/photos/team/Michael-Headshot.jpg",
  },
  {
    name: "Srinikesh Singarapu",
    role: "Venture Strategy",
    linkedin: "https://www.linkedin.com/in/srinikesh-singarapu/",
    image: "/photos/team/Srini-Headshot.jpg",
  },
  {
    name: "Ilyas Mohamed",
    role: "Venture Strategy",
    linkedin: "https://www.linkedin.com/in/ilyasemohamed/",
    image: "/photos/team/Ilyas-Headshot.jpg",
  },
  {
    name: "Nathan Bridgemohan",
    role: "Venture Strategy",
    linkedin: "https://www.linkedin.com/in/nathan-bridgemohan/",
    image: "/photos/team/Nathan-Headshot.jpg",
  },
  {
    name: "Felix Yan",
    role: "Venture Strategy",
    linkedin: "https://www.linkedin.com/in/felixyan-zq/",
    image: "/photos/team/Felix-Headshot.jpg",
  },
  {
    name: "Yasmin Lee",
    role: "Venture Strategy",
    linkedin: "https://www.linkedin.com/in/yasmin--lee/",
    image: "/photos/team/Yasmin-Headshot.jpg",
  },
  {
    name: "Jester Yang",
    role: "Venture Strategy",
    linkedin: "https://www.linkedin.com/in/jester-yang/",
    image: "/photos/team/Headshot-Jester.png",
  },
  {
    name: "Ishir Lakhani",
    role: "Venture Strategy",
    linkedin: "https://www.linkedin.com/in/ishirl/",
    image: "/photos/team/Ishir-Headshot.jpg",
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

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12 relative">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">08</span>
          <div className="w-12 h-[1px] bg-white/20" />
          <h2 className="font-editorial text-5xl lg:text-6xl relative z-10">Leadership</h2>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-20">
          {leadership.map((member, index) => (
            <div key={index} className="group relative">
              {/* Purple and blue fading glow behind cards */}
              <div className="absolute inset-0 -z-10 opacity-40">
                <div 
                  className="absolute inset-0 rounded-full blur-3xl"
                  style={{
                    background: `radial-gradient(circle, 
                      rgba(227, 133, 236, 0.3) 0%,
                      rgba(0, 74, 173, 0.2) 50%,
                      transparent 100%)`,
                    animation: 'auraGlow 4s ease-in-out infinite',
                  }}
                />
              </div>
              
              <div className="white-frame p-6 lg:p-8 h-full transition-all duration-300 group-hover:border-wvg-teal/50 relative z-10">
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

        {/* Communications & Growth Team */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-wvg-green/50" />
            <h3 className="font-editorial text-3xl lg:text-4xl">Communications & Growth</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-6">
            {communicationsGrowth.map((member, index) => (
              <div key={index} className="group">
                <div className="white-frame p-4 lg:p-5 h-full transition-all duration-300 group-hover:border-wvg-green/50">
                  <div className="relative aspect-square mb-4 overflow-hidden white-frame">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-grotesk text-sm lg:text-base font-semibold mb-1">
                      {member.name}
                    </h4>
                    <p className="font-mono text-[10px] text-white/60 mb-3 leading-relaxed">
                      {member.role}
                    </p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-wvg-green hover:text-white transition-colors"
                    >
                      <span>LinkedIn</span>
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Venture Strategy Team */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-wvg-blue/50" />
            <h3 className="font-editorial text-3xl lg:text-4xl">Venture Strategy</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-6">
            {ventureStrategy.map((member, index) => (
              <div key={index} className="group">
                <div className="white-frame p-4 lg:p-5 h-full transition-all duration-300 group-hover:border-wvg-blue/50">
                  <div className="relative aspect-square mb-4 overflow-hidden white-frame">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-grotesk text-sm lg:text-base font-semibold mb-1">
                      {member.name}
                    </h4>
                    <p className="font-mono text-[10px] text-white/60 mb-3 leading-relaxed">
                      {member.role}
                    </p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-wvg-blue hover:text-white transition-colors"
                    >
                      <span>LinkedIn</span>
                      <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
