"use client";

import { useState } from "react";
import Image from "next/image";

export interface StandoutEvent {
  partner: string;
  title: string;
  src: string;
  url: string;
}

export default function StandoutRooms({ events }: { events: StandoutEvent[] }) {
  const [active, setActive] = useState(0);
  const current = events[active];

  return (
    <div className="white-frame overflow-hidden">
      <div className="grid lg:grid-cols-[minmax(260px,320px)_1fr]">
        <div
          className="flex lg:flex-col gap-1 p-3 lg:p-4 border-b lg:border-b-0 lg:border-r border-white/10 overflow-x-auto lg:overflow-visible"
          role="tablist"
          aria-label="Standout events"
        >
          {events.map((event, index) => {
            const isActive = index === active;

            return (
              <button
                key={event.title}
                type="button"
                role="tab"
                aria-selected={isActive}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`group min-w-[220px] lg:min-w-0 shrink-0 lg:shrink text-left rounded-md border-l-2 px-4 py-3 transition-all duration-300 ${
                  isActive
                    ? "border-wvg-teal bg-white/[0.04]"
                    : "border-transparent hover:border-white/20 hover:bg-white/[0.02]"
                }`}
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/35">
                  0{index + 1}
                </span>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/45 mt-2 mb-1">
                  {event.partner}
                </p>
                <p
                  className={`font-editorial text-lg lg:text-xl leading-tight transition-colors ${
                    isActive ? "text-white" : "text-white/70 group-hover:text-white/90"
                  }`}
                >
                  {event.title}
                </p>
              </button>
            );
          })}
        </div>

        <a
          href={current.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block min-h-[240px] sm:min-h-[300px] lg:min-h-[340px]"
        >
          {events.map((event, index) => (
            <div
              key={event.title}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={event.src}
                alt={`${event.title} with ${event.partner}`}
                fill
                className={`object-cover transition-transform duration-700 ease-out ${
                  index === active ? "scale-100 group-hover:scale-[1.02]" : "scale-105"
                }`}
                sizes="(max-width: 1024px) 100vw, 900px"
                quality={80}
                priority={index === 0}
              />
            </div>
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-wvg-teal/10 via-transparent to-wvg-purple/10" />

          <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7">
            <p className="font-mono text-[10px] uppercase tracking-widest text-wvg-teal mb-2">
              {current.partner}
            </p>
            <h3 className="font-editorial text-2xl lg:text-3xl text-white mb-3">
              {current.title}
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/50 group-hover:text-wvg-teal transition-colors">
              View recap →
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
