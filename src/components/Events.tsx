import StandoutRooms from "./StandoutRooms";

const LUMA_URL = "https://lu.ma/user/wvg";

const standoutEvents = [
  {
    partner: "Northside Ventures",
    title: "Hiring Social",
    src: "/photos/events/northside_event.JPG",
    url: "https://www.linkedin.com/posts/alexander-mcisaac_last-week-northside-ventures-hosted-a-hiring-activity-7442649809619996672-9TsR/",
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
];

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
            <div className="border-l-2 border-wvg-teal/50 pl-6 mb-6">
              <h2 className="font-editorial text-5xl lg:text-6xl">Rooms we built</h2>
            </div>
          </div>
          <a
            href={LUMA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 border border-white/15 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:border-wvg-teal/40 hover:bg-wvg-teal/[0.04]"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">
              For what&apos;s next
            </p>
            <span className="font-grotesk text-sm font-medium text-white group-hover:text-wvg-teal transition-colors inline-flex items-center gap-2">
              Follow on Luma
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </a>
        </div>

        <StandoutRooms events={standoutEvents} />
      </div>
    </section>
  );
}
