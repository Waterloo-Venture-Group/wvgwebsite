// TODO: Replace with real event data from backend/CMS
const upcomingEvents = [
  {
    name: "Founder & Investor Dinner",
    date: "February 2025",
    location: "Toronto, ON",
    link: "#", // TODO: Add real event link
  },
  {
    name: "WVG Spring Summit",
    date: "March 2025",
    location: "Waterloo, ON",
    link: "#", // TODO: Add real event link
  },
  {
    name: "Pitch Night",
    date: "April 2025",
    location: "Waterloo, ON",
    link: "#", // TODO: Add real event link
  },
];

export default function EventList() {
  return (
    <section className="py-16 lg:py-20 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/60 mb-3">
              Upcoming
            </p>
            <h3 className="font-editorial text-3xl lg:text-4xl">Events</h3>
          </div>
          <a 
            href="https://lu.ma/wvg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-wider text-wvg-teal hover:text-white transition-colors inline-flex items-center gap-2"
          >
            <span>View all on Luma</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Event list */}
        <div className="divide-y divide-white/10">
          {upcomingEvents.map((event, index) => (
            <a
              key={index}
              href={event.link}
              className="group flex flex-col lg:flex-row lg:items-center justify-between py-6 hover:pl-4 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-8">
                <h4 className="font-grotesk text-lg lg:text-xl group-hover:text-wvg-teal transition-colors">
                  {event.name}
                </h4>
                <div className="flex items-center gap-4 font-mono text-xs text-white/60">
                  <span>{event.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{event.location}</span>
                </div>
              </div>
              <div className="mt-4 lg:mt-0 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white/60 group-hover:text-white transition-colors">
                <span>RSVP</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
