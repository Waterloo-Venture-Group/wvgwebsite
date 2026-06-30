export const navLinks = [
  { href: "#what-we-do", label: "About" },
  { href: "#signals", label: "Signals" },
  { href: "#events", label: "Events" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
] as const;

export const sectionIds = navLinks.map((link) => link.href.slice(1));
