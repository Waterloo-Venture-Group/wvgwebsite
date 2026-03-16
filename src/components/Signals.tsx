import MagicBentoPartners from "./MagicBento";

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
    description: "Pitch development and raise support",
    logo: "/photos/supporters/polarity.png",
    url: "https://www.polarity.cc/",
  },
  {
    name: "Northside Ventures",
    description: "YC Hiring Social pre-Socratica",
    logo: "/photos/supporters/northside_logo.png",
    url: "https://www.northside.ventures/",
    whiteLogo: true,
  },
  {
    name: "Project Atlas",
    description: "Socratica Symposium Kickoff Party",
    logo: "/photos/supporters/atlas_logo.png",
    url: "https://www.atlascap.io/",
    whiteLogo: true,
  },
  {
    name: "Upfront Ventures",
    description: "Waterloo Builders Night pre-Socratica",
    logo: "/photos/supporters/upfront_logo.png",
    url: "https://upfront.com/",
    whiteLogo: true,
  },
];

export default function Signals() {
  const metrics = [
    { value: "$4M+", label: "Funding unlocked" },
    { value: "YC", label: "Cohort acceptance" },
    { value: "1300+", label: "Active members" },
    { value: "30+", label: "Students hired by startups" },
    { value: "2025", label: "Celebrating one year" },
  ];

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider mb-12" />

      {/* Background - smooth blend from WhatWeDo (green/teal) into blue/purple, no hard cutoff */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(18, 179, 120, 0.07) 0%, rgba(17, 193, 188, 0.06) 20%, rgba(0, 74, 173, 0.07) 45%, rgba(0, 74, 173, 0.05) 70%, rgba(227, 133, 236, 0.04) 90%, rgba(18, 179, 120, 0.02) 100%)",
        }}
      />
      
      {/* Background gradient blobs - larger blur for softer edges */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-wvg-blue/8 via-wvg-purple/5 to-transparent blur-[180px]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-wvg-green/5 to-transparent blur-[150px]" />
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px)`,
          backgroundSize: '120px 100%'
        }} />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="border-l-2 border-wvg-teal/50 pl-6 mb-12">
          <h2 className="font-editorial text-4xl lg:text-5xl">Signals</h2>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-[1px] bg-white/10 mb-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-black p-8 lg:p-10 group hover:bg-white/[0.02] transition-colors duration-300"
            >
              <div className="font-editorial text-3xl lg:text-4xl xl:text-5xl mb-3 group-hover:gradient-text transition-all duration-500">
                {metric.value}
              </div>
              <p className="font-mono text-[10px] lg:text-xs uppercase tracking-wider text-white/60">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Partners subtitle and grid */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-white/60 mb-4">
            Partners we've supported
          </p>

          <MagicBentoPartners
            supporters={supporters}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            clickEffect={true}
            spotlightRadius={400}
            particleCount={12}
            glowColor="227, 133, 236"
          />
        </div>

        {/* Accent line */}
        <div className="mt-8 h-[1px] bg-gradient-to-r from-wvg-green via-wvg-teal to-wvg-purple opacity-50" />
      </div>
    </section>
  );
}
