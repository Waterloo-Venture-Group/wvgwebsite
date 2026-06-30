import { getNextWvgEvent } from "@/lib/luma";

const LUMA_URL = "https://lu.ma/user/wvg";

export default async function NextEventBanner() {
  const nextEvent = await getNextWvgEvent();

  return (
    <a
      href={nextEvent?.url ?? LUMA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group block shrink-0 border border-white/15 bg-white/[0.02] px-5 py-4 lg:min-w-[320px] lg:max-w-[420px] transition-all duration-300 hover:border-wvg-teal/40 hover:bg-wvg-teal/[0.04]"
    >
      {nextEvent ? (
        <>
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/40 mb-2">
            Next up
          </p>
          <p className="font-grotesk text-sm lg:text-base font-medium text-white group-hover:text-wvg-teal transition-colors">
            {nextEvent.title}
          </p>
          <p className="font-mono text-xs text-white/50 mt-1">{nextEvent.dateLabel}</p>
          <span className="font-mono text-[10px] uppercase tracking-wider text-wvg-teal group-hover:text-white transition-colors inline-flex items-center gap-2 mt-3">
            RSVP on Luma
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </>
      ) : (
        <>
          <p className="font-grotesk text-sm lg:text-base font-medium text-white group-hover:text-wvg-teal transition-colors">
            Follow on Luma for the next room
          </p>
          <span className="font-mono text-[10px] uppercase tracking-wider text-white/50 group-hover:text-wvg-teal transition-colors inline-flex items-center gap-2 mt-3">
            lu.ma/user/wvg
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </>
      )}
    </a>
  );
}
