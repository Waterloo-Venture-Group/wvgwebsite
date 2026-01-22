import Image from "next/image";

const eventPhotos = [
  {
    src: "/photos/IMG_4016.JPG",
    title: "Founder Fireside",
    date: "Fall 2024",
    location: "Waterloo, ON",
  },
  {
    src: "/photos/IMG_4090.jpg",
    title: "Investor Dinner",
    date: "Winter 2024",
    location: "Toronto, ON",
  },
  {
    src: "/photos/IMG_4002.JPG",
    title: "WVG Summit",
    date: "Fall 2024",
    location: "Waterloo, ON",
  },
  {
    src: "/photos/IMG_9744.JPG",
    title: "Pitch Workshop",
    date: "Winter 2024",
    location: "Waterloo, ON",
  },
  {
    src: "/photos/IMG_9816.JPG",
    title: "Community Meetup",
    date: "Fall 2024",
    location: "Waterloo, ON",
  },
];

export default function Events() {
  return (
    <section id="events" className="py-20 lg:py-28 relative">
      {/* Section divider */}
      <div className="section-divider mb-20" />

      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-t from-wvg-purple/10 via-wvg-blue/5 to-transparent blur-[150px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">04</span>
              <div className="w-12 h-[1px] bg-white/20" />
            </div>
            <h2 className="font-editorial text-5xl lg:text-6xl mb-4">Rooms we built</h2>
            <p className="font-mono text-sm text-white/70 max-w-lg">
              WVG curates high-signal rooms where founders, investors, and students 
              meet before outcomes are obvious.
            </p>
          </div>
          <a href="#contact" className="btn-primary shrink-0">
            <span>Partner with us</span>
          </a>
        </div>

        {/* Event gallery - horizontal scroll on mobile, grid on desktop */}
        <div className="relative">
          <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto pb-6 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory lg:snap-none">
            {eventPhotos.slice(0, 3).map((event, index) => (
              <div
                key={index}
                className="shrink-0 w-[85vw] sm:w-[60vw] lg:w-auto snap-center group"
              >
                <div className="relative aspect-[4/3] white-frame overflow-hidden card-hover">
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none gradient-border" />
                  
                  {/* Image */}
                  <Image
                    src={event.src}
                    alt={event.title}
                    fill
                    className="object-cover img-editorial"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                  {/* Content */}
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

          {/* Second row */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-6 mt-6">
            {eventPhotos.slice(3, 5).map((event, index) => (
              <div key={index} className="group">
                <div className="relative aspect-[16/9] white-frame overflow-hidden card-hover">
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none gradient-border" />
                  
                  {/* Image */}
                  <Image
                    src={event.src}
                    alt={event.title}
                    fill
                    className="object-cover img-editorial"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                  {/* Content */}
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
      </div>
    </section>
  );
}
