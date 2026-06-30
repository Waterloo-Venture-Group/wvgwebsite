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
    role: "Managing Director",
    linkedin: "https://www.linkedin.com/in/callieesweet/",
    image: "/photos/leadership/calliesweet.jpeg",
  },
  {
    name: "Demir Eren",
    role: "Managing Director",
    linkedin: "https://www.linkedin.com/in/demireren/",
    image: "/photos/leadership/demireren.jpeg",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-16 lg:py-20 relative overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="border-l-2 border-wvg-teal/50 pl-6 mb-12 relative">
          <h2 className="font-editorial text-5xl lg:text-6xl relative z-10">Team</h2>
          <p className="font-mono text-xs uppercase tracking-widest text-white/50 mt-3 relative z-10">
            Leadership
          </p>
        </div>

        {/* Leadership - matching card style, no overlap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((member, index) => (
            <a
              key={index}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:border-wvg-teal/50 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 320px"
                  quality={80}
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5"
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)",
                  }}
                >
                  <h3 className="font-grotesk text-lg font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="font-mono text-[10px] text-white/70 mb-3 leading-relaxed">
                    {member.role}
                  </p>
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-wvg-teal group-hover:text-white transition-colors">
                    LinkedIn
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
