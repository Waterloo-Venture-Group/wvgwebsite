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
    <section id="team" className="py-20 lg:py-28 relative">
      {/* Section divider */}
      <div className="section-divider mb-20" />

      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-wvg-purple/10 via-wvg-blue/5 to-transparent blur-[150px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">07</span>
          <div className="w-12 h-[1px] bg-white/20" />
          <h2 className="font-editorial text-5xl lg:text-6xl">Leadership</h2>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="white-frame p-6 lg:p-8 h-full transition-all duration-300 group-hover:border-wvg-teal/50">
                {/* Image */}
                <div className="relative aspect-square mb-6 overflow-hidden white-frame">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={{ filter: 'grayscale(60%) contrast(1.1)' }}
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
