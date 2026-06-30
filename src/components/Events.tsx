import Image from "next/image";
import Link from "next/link";

const LUMA_URL = "https://lu.ma/user/wvg";

const standoutEvents = [
  {
    index: "01",
    partner: "Northside Ventures",
    title: "Hiring Social",
    detail: "YC-backed founders and student talent in one room.",
    src: "/photos/events/northside_event.JPG",
    url: "https://luma.com/psehtf33",
    span: "lg:col-span-7 lg:row-span-2",
    aspect: "aspect-[4/3] lg:aspect-auto lg:min-h-[420px]",
  },
  {
    index: "02",
    partner: "Golden Ventures",
    title: "Founder Dinner",
    detail: "An exclusive table for early-stage founders.",
    src: "/photos/events/golden_dinner.jpg",
    url: "https://www.linkedin.com/posts/waterlooventuregroup_venture-waterlooecosystem-maplevalley-activity-7397122381510516736-kaNT?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbpAHcB9rmKqOK-zySHcZYW5zFoq3CTYWU",
    span: "lg:col-span-5",
    aspect: "aspect-[4/3]",
  },
  {
    index: "03",
    partner: "Theory Ventures",
    title: "Talent Room",
    detail: "A recruitment dinner connecting funds and operators.",
    src: "/photos/events/theoryventures_talentroom.JPG",
    url: "https://www.linkedin.com/posts/waterlooventuregroup_maplevalley-waterloo-tech-activity-7421336000599060480-HApl?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbpAHcB9rmKqOK-zySHcZYW5zFoq3CTYWU",
    span: "lg:col-span-5",
    aspect: "aspect-[4/3]",
  },
  {
    index: "04",
    partner: "Ripple Ventures",
    title: "Co-Working for Founders",
    detail: "Waterloo Tech Week room for builders still shipping.",
    src: "/photos/events/comms_team.JPG",
    url: "https://www.linkedin.com/posts/waterlooventuregroup_waterlootechweek-venturecapital-tech-activity-7370671027644702721-HW-u?utm_source=share&utm_medium=member_desktop&rcm=ACoAADbpAHcB9rmKqOK-zySHcZYW5zFoq3CTYWU",
    span: "lg:col-span-7",
    aspect: "aspect-[16/9]",
  },
] as const;

function StandoutCard({
  event,
}: {
  event: (typeof standoutEvents)[number];
}) {
  const content = (
    <>
      <Image
        src={event.src}
        alt={`${event.title} with ${event.partner}`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-wvg-teal/10 via-transparent to-wvg-purple/10" />

      <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.2em] text-white/40">
        {event.index}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
        <p className="font-mono text-[10px] uppercase tracking-widest text-wvg-teal mb-2">
          {event.partner}
        </p>
        <h3 className="font-editorial text-2xl lg:text-3xl text-white mb-2">
          {event.title}
        </h3>
        <p className="font-mono text-xs text-white/60 max-w-md">{event.detail}</p>
        <span className="inline-block mt-4 font-mono text-[10px] uppercase tracking-wider text-white/40 group-hover:text-wvg-teal transition-colors">
          View recap →
        </span>
      </div>
    </>
  );

  const className = `group relative overflow-hidden white-frame card-hover ${event.span} ${event.aspect}`;

  if (event.url) {
    return (
      <a
        href={event.url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

export default function Events() {
  return (
    <section id="events" className="py-16 lg:py-20 relative">
      <div className="section-divider mb-16" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-t from-wvg-purple/10 via-wvg-blue/5 to-transparent blur-[150px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <div className="border-l-2 border-wvg-teal/50 pl-6 mb-4">
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

        <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-6">
          Standout past events
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 auto-rows-fr">
          {standoutEvents.map((event) => (
            <StandoutCard key={event.index} event={event} />
          ))}
        </div>

        <p className="mt-10 font-mono text-xs text-white/45">
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
