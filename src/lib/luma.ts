import { manualNextEvent } from "./site-content";

const WVG_USER_API_ID = "usr-1hBnFgfaqGFmdzw";
const LUMA_HEADERS = {
  "User-Agent": "Mozilla/5.0",
  Origin: "https://luma.com",
  Referer: "https://lu.ma/user/wvg",
};

export type NextEvent = {
  title: string;
  dateLabel: string;
  url: string;
};

type LumaDiscoverEntry = {
  event?: {
    name?: string;
    start_at?: string;
    timezone?: string;
    url?: string;
    user_api_id?: string;
  };
  hosts?: Array<{ api_id?: string }>;
};

function formatEventDate(startAt: string, timezone = "America/Toronto"): string {
  return new Intl.DateTimeFormat("en-CA", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: timezone,
  }).format(new Date(startAt));
}

function entryToNextEvent(entry: LumaDiscoverEntry): NextEvent | null {
  const event = entry.event;
  if (!event?.name || !event.start_at || !event.url) return null;

  return {
    title: event.name,
    dateLabel: formatEventDate(event.start_at, event.timezone),
    url: `https://lu.ma/${event.url}`,
  };
}

function isWvgHosted(entry: LumaDiscoverEntry): boolean {
  const event = entry.event;
  if (event?.user_api_id === WVG_USER_API_ID) return true;
  return (entry.hosts ?? []).some((host) => host.api_id === WVG_USER_API_ID);
}

async function fetchDiscoverEntries(): Promise<LumaDiscoverEntry[]> {
  const url =
    "https://api2.luma.com/discover/get-paginated-events?slug=tech&latitude=43.4643&longitude=-80.5204&pagination_limit=50";

  const response = await fetch(url, {
    headers: LUMA_HEADERS,
    next: { revalidate: 3600 },
  });

  if (!response.ok) return [];

  const data = (await response.json()) as { entries?: LumaDiscoverEntry[] };
  return data.entries ?? [];
}

export async function getNextWvgEvent(): Promise<NextEvent | null> {
  if (manualNextEvent) return manualNextEvent;

  try {
    const now = Date.now();
    const entries = await fetchDiscoverEntries();

    const upcoming = entries
      .filter(isWvgHosted)
      .filter((entry) => {
        const startAt = entry.event?.start_at;
        return startAt ? new Date(startAt).getTime() >= now : false;
      })
      .sort((a, b) => {
        const aTime = new Date(a.event?.start_at ?? 0).getTime();
        const bTime = new Date(b.event?.start_at ?? 0).getTime();
        return aTime - bTime;
      });

    return entryToNextEvent(upcoming[0] ?? {}) ?? null;
  } catch {
    return null;
  }
}
