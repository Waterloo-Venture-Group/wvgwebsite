import StandoutRooms from "./StandoutRooms";
import NextEventBanner from "./NextEventBanner";

const standoutEvents = [
  {
    partner: "Northside Ventures",
    title: "YC Hiring Social",
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
    <section id="events" className="py-16 lg:py-20 relative">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div className="border-l-2 border-wvg-teal/50 pl-6">
            <h2 className="font-editorial text-5xl lg:text-6xl">Events</h2>
            <p className="font-mono text-xs uppercase tracking-widest text-white/50 mt-3">
              Rooms we built
            </p>
          </div>

          <NextEventBanner />
        </div>

        <StandoutRooms events={standoutEvents} />
      </div>
    </section>
  );
}
