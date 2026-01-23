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
import EventList from "@/components/EventList";
import Socials from "@/components/Socials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Nav />
      <Hero />
      <Story />
      <WhatWeDo />
      <Signals />
      <Supporters />
      <Events />
      <BuildWithUs />
      <GetInvolved />
      <Team />
      <EventList />
      <Socials />
      <Contact />
      <Footer />
    </main>
  );
}
