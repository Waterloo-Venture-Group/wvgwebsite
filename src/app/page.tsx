import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import WhatWeDo from "@/components/WhatWeDo";
import Signals from "@/components/Signals";
import Supporters from "@/components/Supporters";
import Events from "@/components/Events";
import BuildWithUs from "@/components/BuildWithUs";
import GetInvolved from "@/components/GetInvolved";
import Team from "@/components/Team";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ShapeGrid from "@/components/ShapeGrid";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* ShapeGrid background - WVG styled */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-40">
          <ShapeGrid
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor="rgba(255, 255, 255, 0.06)"
            hoverFillColor="rgba(17, 193, 188, 0.12)"
            shape="square"
            hoverTrailAmount={0}
          />
        </div>
      </div>
      <div className="relative z-10">
      <Nav />
      <Hero />
      <Story />
      <WhatWeDo />
      <Signals />
      <Events />
      <BuildWithUs />
      <GetInvolved />
      <Team />
      <Socials />
      <Contact />
      <Footer />
      </div>
    </main>
  );
}
