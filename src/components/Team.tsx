import Image from "next/image";
import BounceCards from "./BounceCards";

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

const associates = [
  {
    name: "Daiva Saplys",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/daivasaplys/",
    image: "/photos/team/Daiva-Headshot.jpg",
  },
  {
    name: "Paige Griffiths",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/paige-griffiths-b889432a4/",
    image: "/photos/team/Paige-Headshot.jpg",
  },
  {
    name: "Alyanna Fuentes",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/alyanna-f/",
    image: "/photos/team/Alyanna-Headshot.jpg",
  },
  {
    name: "Rasana Yogarajan",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/rasanayogarajan/",
    image: "/photos/team/Rasana-Headshot.jpg",
  },
  {
    name: "Rudra Jassal",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/rudrajassal/",
    image: "/photos/team/Headshot-Rudra.jpg",
  },
  {
    name: "Hur Abbas Merchant",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/hurabbas-merchant/",
    image: "/photos/team/Headshot-Hur.jpg",
  },
  {
    name: "Yash Panchal",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/yash-panchal-80a422333/",
    image: "/photos/team/Headshot-Yash.jpg",
  },
  {
    name: "Ammar Adam",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/ammar-adam/",
    image: "/photos/team/Ammar-Headshot-New.jpg",
  },
  {
    name: "Michael Zhang",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/michael-zhang-921ab0274/",
    image: "/photos/team/Michael-Headshot.jpg",
  },
  {
    name: "Srinikesh Singarapu",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/srinikesh-singarapu/",
    image: "/photos/team/Srini-Headshot.jpg",
  },
  {
    name: "Ilyas Mohamed",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/ilyasemohamed/",
    image: "/photos/team/Ilyas-Headshot.jpg",
  },
  {
    name: "Nathan Bridgemohan",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/nathan-bridgemohan/",
    image: "/photos/team/Nathan-Headshot.jpg",
  },
  {
    name: "Jester Yang",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/jester-yang/",
    image: "/photos/team/Headshot-Jester.png",
  },
  {
    name: "Ishir Lakhani",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/ishirl/",
    image: "/photos/team/Ishir-Headshot.jpg",
  },
  {
    name: "Jia Naidu",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/jia-naidu-598b18240/",
    image: "/photos/team/Jia-Headshot.jpg",
  },
  {
    name: "Dev Chandarana",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/dev-chandarana-x/",
    image: "/photos/team/Dev-Headshot.jpg",
  },
  {
    name: "Spencer Spiegelman",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/spencer-m-spiegelman/",
    image: "/photos/team/Spencer-Headshot.jpg",
  },
  {
    name: "Mihai Posea",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/mihaiposea/",
    image: "/photos/team/Mihai-Headshot.jpg",
  },
  {
    name: "Ellen He",
    role: "Associate",
    linkedin: "https://www.linkedin.com/in/he-ellen/",
    image: "/photos/team/Ellen-Headshot.jpeg",
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
        <div className="border-l-2 border-wvg-teal/50 pl-6 mb-12 relative">
          <h2 className="font-editorial text-5xl lg:text-6xl relative z-10">Leadership</h2>
        </div>

        {/* Leadership - matching card style, no overlap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

        {/* Associates - BounceCards layout */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-wvg-teal/50" />
            <h3 className="font-editorial text-3xl lg:text-4xl">Associates</h3>
          </div>
          <div className="overflow-x-auto overflow-y-visible pb-4 sm:overflow-visible">
            <div className="flex justify-center min-w-[1100px] sm:min-w-0">
              <BounceCards
                items={associates.map(({ name, image, linkedin }) => ({
                  name,
                  image,
                  linkedin,
                }))}
                cardSize={220}
                overlapPx={95}
                rows={2}
                animationDelay={0.3}
                animationStagger={0.04}
                easeType="elastic.out(1, 0.5)"
                enableHover
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
