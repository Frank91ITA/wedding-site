import React from "react";
import NavigationBar from "../components/wedding/NavigationBar";
import HeroSection from "../components/wedding/HeroSection";
import OurStorySection from "../components/wedding/OurStorySection";
import EventDetailsSection from "../components/wedding/EventDetailsSection";
import GallerySection from "../components/wedding/GallerySection";
import RSVPSection from "../components/wedding/RSVPSection";
import InfoSection from "../components/wedding/InfoSection";
import FooterSection from "../components/wedding/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <HeroSection />
      <OurStorySection />
      <EventDetailsSection />
      {/*<GallerySection />*/}
      <InfoSection />
      <RSVPSection />
      <FooterSection />
    </div>
  );
}