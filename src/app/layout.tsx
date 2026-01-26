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
    url: "https://www.waterloovg.com",
    siteName: "Waterloo Venture Group",
    images: [
      {
        url: "https://www.waterloovg.com/photos/WVG-Logo-Dark-PFP.png",
        width: 1200,
        height: 1200,
        alt: "Waterloo Venture Group Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterloo Venture Group",
    description: "Your early-stage edge — and your way into the room.",
    images: ["https://www.waterloovg.com/photos/WVG-Logo-Dark-PFP.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Waterloo Venture Group",
    "alternateName": "WVG",
    "url": "https://www.waterloovg.com",
    "logo": "https://www.waterloovg.com/photos/WVG-Logo-Dark-PFP.png",
    "description": "A student-led venture consultancy, talent network, and entrepreneurship community built in Waterloo.",
    "sameAs": [
      "https://www.instagram.com/waterlooventuregroup",
      "https://x.com/waterloovg",
      "https://www.linkedin.com/company/waterlooventuregroup",
      "https://luma.com/user/wvg",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "waterloovg@gmail.com",
      "contactType": "General Inquiry",
    },
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
