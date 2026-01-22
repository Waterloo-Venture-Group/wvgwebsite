import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waterloo Venture Group | Your Early-Stage Edge",
  description: "WVG is a student-led venture consultancy, talent network, and entrepreneurship community. We build rooms where founders meet investors, students find real startup roles, and funds meet talent early.",
  keywords: ["venture", "startup", "waterloo", "entrepreneurship", "talent", "founders", "investors", "co-op", "consulting"],
  authors: [{ name: "Waterloo Venture Group" }],
  icons: {
    icon: "/photos/WVG-Logo-Dark-PFP.png",
    shortcut: "/photos/WVG-Logo-Dark-PFP.png",
    apple: "/photos/WVG-Logo-Dark-PFP.png",
  },
  openGraph: {
    title: "Waterloo Venture Group | Your Early-Stage Edge",
    description: "A student-led venture consultancy, talent network, and entrepreneurship community built in Waterloo.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterloo Venture Group",
    description: "Your early-stage edge — and your way into the room.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
