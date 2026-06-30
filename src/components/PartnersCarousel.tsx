"use client";

import Image from "next/image";
import "./PartnersCarousel.css";

export interface Supporter {
  name: string;
  description: string;
  logo: string;
  url: string;
  whiteLogo?: boolean;
}

function PartnerCard({ supporter }: { supporter: Supporter }) {
  return (
    <a
      href={supporter.url}
      target="_blank"
      rel="noopener noreferrer"
      className="partner-marquee-card group flex shrink-0 items-center gap-3.5"
    >
      <div className="relative h-8 w-16 shrink-0">
        <Image
          src={supporter.logo}
          alt={supporter.name}
          fill
          className="object-contain"
          style={{
            filter: supporter.whiteLogo ? "none" : "brightness(0) invert(1)",
            opacity: 0.85,
          }}
        />
      </div>
      <div className="min-w-0 w-[180px]">
        <p className="font-grotesk text-sm font-semibold text-white/90 truncate group-hover:text-wvg-teal transition-colors">
          {supporter.name}
        </p>
        <p className="font-mono text-[10px] text-white/50 truncate">
          {supporter.description}
        </p>
      </div>
    </a>
  );
}

function MarqueeTrack({
  supporters,
  reverse = false,
  duration = 45,
}: {
  supporters: Supporter[];
  reverse?: boolean;
  duration?: number;
}) {
  const loop = [...supporters, ...supporters];

  return (
    <div className="partners-marquee-row overflow-hidden">
      <div
        className={`partners-marquee-track flex w-max flex-nowrap gap-3 ${reverse ? "partners-marquee-track--reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((supporter, index) => (
          <PartnerCard key={`${supporter.name}-${index}`} supporter={supporter} />
        ))}
      </div>
    </div>
  );
}

export default function PartnersCarousel({
  supporters,
}: {
  supporters: Supporter[];
}) {
  const midpoint = Math.ceil(supporters.length / 2);
  const topRow = supporters.slice(0, midpoint);
  const bottomRow = supporters.slice(midpoint);

  return (
    <div className="partners-marquee relative w-full overflow-hidden">
      <div className="partners-marquee-fade partners-marquee-fade--left" />
      <div className="partners-marquee-fade partners-marquee-fade--right" />

      <div className="flex flex-col gap-3">
        <MarqueeTrack supporters={topRow} duration={42} />
        <MarqueeTrack supporters={bottomRow.length > 0 ? bottomRow : topRow} reverse duration={36} />
      </div>
    </div>
  );
}
