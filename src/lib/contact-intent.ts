export type Intent = "partner" | "build" | "involved";

export function intentFromHash(hash: string): Intent | null {
  switch (hash) {
    case "#contact-build":
      return "build";
    case "#contact-involved":
      return "involved";
    case "#contact-partner":
      return "partner";
    default:
      return null;
  }
}

export function isContactHash(hash: string): boolean {
  return hash === "#contact" || hash.startsWith("#contact-");
}
