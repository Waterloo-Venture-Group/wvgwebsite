import Image from "next/image";

const LUMA_URL = "https://lu.ma/user/wvg";

const events = [
  {
    src: "/photos/IMG_4016.JPG",
    title: "Talent Room with Theory Ventures",
    date: "Winter 2026",
    location: "Waterloo, ON",
    category: "upcoming" as const,
    url: LUMA_URL,
  },
  {
    src: "/photos/IMG_4090.jpg",
    title: "Off The Record: Exclusive Recruitment Dinner",
    date: "Winter 2026",
    location: "Waterloo, ON",
    category: "upcoming" as const,
    url: LUMA_URL,
  },
  {
    src: "/photos/IMG_4002.JPG",
    title: "CTO Panel: How Startups Hire",
    date: "Winter 2026",
    location: "Waterloo, ON",
    category: "upcoming" as const,
    url: LUMA_URL,
  },
  {
    src: "/photos/IMG_9744.JPG",
    title: "Waterloo Tech Week: Whiteboard Stories with Northwood Family Office",
    date: "Fall 2025",
    location: "Waterloo, ON",
    category: "past" as const,
  },
  {
    src: "/photos/IMG_9816.JPG",
    title: "Student Workshop: Building a Vertical AI Venture",
    date: "Spring 2025",
    location: "Waterloo, ON",
    category: "past" as const,
  },
];

const upcomingEvents = events.filter((e) => e.category === "upcoming");
const pastEvents = events.filter((e) => e.category === "past");

export default function Events() {
  return (
    <section id="events" className="py-16 lg:py-20 relative">
      {/* Section divider */}
      <div className="section-divider mb-16" />

      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-t from-wvg-purple/10 via-wvg-blue/5 to-transparent blur-[150px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="border-l-2 border-wvg-teal/50 pl-6 mb-4">
              <h2 className="font-editorial text-5xl lg:text-6xl">Rooms we built</h2>
            </div>
            <p className="font-mono text-sm text-white/70 max-w-lg">
              WVG curates high-signal rooms where founders, investors, and students 
              meet before outcomes are obvious.
            </p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            <span>Let's build one for you - see how</span>
          </a>
        </div>

        {/* Upcoming events */}
        <div className="mb-20">
          <p className="font-mono text-[10px] uppercase tracking-widest text-wvg-teal mb-6">Upcoming events</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <a
                key={index}
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-[4/3] white-frame overflow-hidden card-hover">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none gradient-border" />
                  <Image
                    src={event.src}
                    alt={event.title}
                    fill
                    className="object-cover"
                    style={{ filter: 'grayscale(100%) contrast(1.1)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="font-editorial text-2xl mb-2">{event.title}</h3>
                    <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-wider text-white/70 mb-4">
                      <span>{event.date}</span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span>{event.location}</span>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-wvg-teal group-hover:underline">
                      Register →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Past events */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-6">Past events</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[4/3] white-frame overflow-hidden card-hover">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none gradient-border" />
                  <Image
                    src={event.src}
                    alt={event.title}
                    fill
                    className="object-cover"
                    style={{ filter: 'grayscale(100%) contrast(1.1)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="font-editorial text-2xl mb-2">{event.title}</h3>
                    <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-wider text-white/70">
                      <span>{event.date}</span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Luma CTA - keep the "follow for updates" prompt */}
        <div className="mt-16">
          <a 
            href={LUMA_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="relative white-frame p-8 lg:p-12 overflow-hidden transition-all duration-500 group-hover:border-wvg-teal/50">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-wvg-teal/10 via-wvg-blue/5 to-wvg-purple/10" />
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-wvg-teal mb-2">Get first access</p>
                  <p className="font-mono text-sm text-white/80">
                    Follow us on Luma for exclusive early access to dinners, summits, workshops, and rooms we're building.
                  </p>
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-wvg-teal group-hover:underline shrink-0">
                  Follow on Luma →
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
