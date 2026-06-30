import Image from "next/image";
import Link from "next/link";

const LUMA_URL = "https://lu.ma/user/wvg";

const standoutEvents = [
  {
    partner: "Northside Ventures",
    title: "Hiring Social",
    src: "/photos/events/northside_event.JPG",
    url: "https://luma.com/psehtf33",
  },
  {
    partner: "Golden Ventures",
    title: "Founder Dinner",
    src: "/photos/events/golden_dinner.jpg",
    url: "https://www.linkedin.com/posts/waterlooventuregroup_venture-waterlooecosystem-maplevalley-activity-7397122381510516736-kaNT?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbpAHcB9rmKqOK-zySHcZYW5zFoq3CTYWU",
  },
  {
    partner: "Theory Ventures",
    title: "Talent Room",
    src: "/photos/events/theoryventures_talentroom.JPG",
    url: "https://www.linkedin.com/posts/waterlooventuregroup_maplevalley-waterloo-tech-activity-7421336000599060480-HApl?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbpAHcB9rmKqOK-zySHcZYW5zFoq3CTYWU",
  },
  {
    partner: "Ripple Ventures",
    title: "Co-Working for Founders",
    src: "/photos/events/comms_team.JPG",
    url: "https://www.linkedin.com/posts/waterlooventuregroup_waterlootechweek-venturecapital-tech-activity-7370671027644702721-HW-u?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbpAHcB9rmKqOK-zySHcZYW5zFoq3CTYWU",
  },
] as const;

function StandoutCard({
  event,
}: {
  event: (typeof standoutEvents)[number];
}) {
  return (
    <a
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 px-4 py-3 sm:px-5 sm:py-4 transition-colors hover:bg-white/[0.03]"
    >
      <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-md border border-white/10">
        <Image
          src={event.src}
          alt={`${event.title} with ${event.partner}`}
          fill
          className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-300"
          sizes="80px"
        />
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-mono text-[10px] uppercase tracking-widest text-white/45 mb-1">
          {event.partner}
        </p>
        <p className="font-grotesk text-sm sm:text-base text-white/90 truncate group-hover:text-white transition-colors">
          {event.title}
        </p>
      </div>

      <span className="font-mono text-[10px] uppercase tracking-wider text-white/30 group-hover:text-wvg-teal transition-colors shrink-0">
        →
      </span>
    </a>
  );
}

export default function Events() {
  return (
    <section id="events" className="py-12 lg:py-16 relative">
      <div className="section-divider mb-12" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-t from-wvg-purple/10 via-wvg-blue/5 to-transparent blur-[150px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div>
            <div className="border-l-2 border-wvg-teal/50 pl-6 mb-3">
              <h2 className="font-editorial text-5xl lg:text-6xl">Rooms we built</h2>
            </div>
            <p className="font-mono text-sm text-white/70 max-w-lg">
              A few standout rooms where founders, investors, and students met
              before the outcome was obvious.
            </p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            <span>Let&apos;s build one for you</span>
          </a>
        </div>

        <div className="white-frame divide-y divide-white/10 overflow-hidden">
          {standoutEvents.map((event) => (
            <StandoutCard key={event.title} event={event} />
          ))}
        </div>

        <p className="mt-6 font-mono text-xs text-white/45">
          For what&apos;s next,{" "}
          <Link
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-wvg-teal hover:text-white transition-colors"
          >
            follow us on Luma →
          </Link>
        </p>
      </div>
    </section>
  );
}
