import Image from "next/image";

const LUMA_URL = "https://lu.ma/user/wvg";

const events = [
  {
    src: "/photos/events/opennote_yc.jpg",
    title: "Opennote (YC S25) Group Build Sprint",
    date: "Winter 2026",
    location: "Waterloo, ON",
    category: "upcoming" as const,
    url: "https://luma.com/0jc5qnb4",
  },
  {
    src: "/photos/events/northside_event.JPG",
    title: "Hiring Social ft. YC-Backed Founders by Northside Ventures",
    titleHighlight: "YC-Backed",
    date: "Winter 2026",
    location: "Waterloo, ON",
    category: "upcoming" as const,
    url: "https://luma.com/psehtf33",
  },
  {
    src: "/photos/events/alisonkaizer.jpeg",
    title: "Fireside Chat with Alison Kaizer from Golden Ventures",
    date: "Winter 2026",
    location: "Virtual",
    category: "past" as const,
    url: "https://www.linkedin.com/posts/waterlooventuregroup_landing-a-student-role-in-venture-startups-activity-7429415519943827456-opxV?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbpAHcB9rmKqOK-zySHcZYW5zFoq3CTYWU",
  },
  {
    src: "/photos/events/theoryventures_talentroom.JPG",
    title: "Talent Room with Theory Ventures",
    date: "Winter 2026",
    location: "Waterloo, ON",
    category: "past" as const,
    url: "https://www.linkedin.com/posts/waterlooventuregroup_maplevalley-waterloo-tech-activity-7421336000599060480-HApl?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbpAHcB9rmKqOK-zySHcZYW5zFoq3CTYWU",
  },
  {
    src: "/photos/events/exclusivedinner.jpeg",
    title: "Off The Record: Private Recruitment Dinner",
    date: "Winter 2026",
    location: "Waterloo, ON",
    category: "past" as const,
  },
  {
    src: "/photos/events/golden_dinner.jpg",
    title: "Golden Ventures Exclusive Founder Dinner",
    date: "Fall 2025",
    location: "Waterloo, ON",
    category: "past" as const,
    url: "https://www.linkedin.com/posts/waterlooventuregroup_venture-waterlooecosystem-maplevalley-activity-7397122381510516736-kaNT?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbpAHcB9rmKqOK-zySHcZYW5zFoq3CTYWU",
  },
  {
    src: "/photos/events/dsc_workshop2.JPG",
    title: "Student Workshop: Building a Vertical AI Venture",
    date: "Fall 2025",
    location: "Waterloo, ON",
    category: "past" as const,
    url: "https://www.linkedin.com/posts/waterlooventuregroup_waterlooventuregroup-founderfuel-activity-7376294491600867328-wmeG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbpAHcB9rmKqOK-zySHcZYW5zFoq3CTYWU",
  },
  {
    src: "/photos/events/northwood_whiteboard.JPG",
    title: "Waterloo Tech Week: Whiteboard Stories with Northwood Family Office",
    date: "Fall 2025",
    location: "Waterloo, ON",
    category: "past" as const,
    url: "https://www.linkedin.com/posts/douglas-barker_finding-your-path-after-graduation-isnt-activity-7365799673330094080-RdlS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbpAHcB9rmKqOK-zySHcZYW5zFoq3CTYWU",
  },
  {
    src: "/photos/events/comms_team.JPG",
    title: "Waterloo Tech Week: Ripple Ventures Co-Working for Founders",
    date: "Fall 2025",
    location: "Waterloo, ON",
    category: "past" as const,
    url: "https://www.linkedin.com/posts/waterlooventuregroup_waterlootechweek-venturecapital-tech-activity-7370671027644702721-HW-u?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbpAHcB9rmKqOK-zySHcZYW5zFoq3CTYWU",
  },
  {
    src: "/photos/events/juliabaird.jpg",
    title: "Whiteboard Stories with Julia Baird from Golden Ventures",
    date: "Summer 2025",
    location: "Virtual",
    category: "past" as const,
    url: "https://www.linkedin.com/posts/waterlooventuregroup_venture-capital-needs-more-voices-and-we-activity-7348823843630690305-vIei?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbpAHcB9rmKqOK-zySHcZYW5zFoq3CTYWU",
  },
  {
    src: "/photos/events/dsc_workshop1.JPG",
    title: "Student Workshop: Launching an AI Business",
    date: "Summer 2025",
    location: "Waterloo, ON",
    category: "past" as const,
    url: "https://www.linkedin.com/posts/waterlooventuregroup_from-idea-validation-pitch-all-in-one-activity-7335462698316451840-Mfrn?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbpAHcB9rmKqOK-zySHcZYW5zFoq3CTYWU",
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
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="font-editorial text-2xl mb-2 text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]">
                      {event.titleHighlight ? (
                        <>
                          {event.title.split(event.titleHighlight)[0]}
                          <span className="border-b-2 border-orange-400 pb-0.5 text-orange-400 [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
                            {event.titleHighlight}
                          </span>
                          {event.title.split(event.titleHighlight)[1]}
                        </>
                      ) : (
                        event.title
                      )}
                    </h3>
                    <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-wider text-white/90 mb-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
                      <span>{event.date}</span>
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                      <span>{event.location}</span>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-wvg-teal group-hover:underline [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
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
            {pastEvents.map((event, index) => {
              const card = (
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
                    {event.url && (
                      <span className="font-mono text-xs uppercase tracking-wider text-wvg-teal group-hover:underline">
                        View post →
                      </span>
                    )}
                  </div>
                </div>
              );
              return event.url ? (
                <a key={index} href={event.url} target="_blank" rel="noopener noreferrer" className="group block">
                  {card}
                </a>
              ) : (
                <div key={index} className="group">
                  {card}
                </div>
              );
            })}
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
