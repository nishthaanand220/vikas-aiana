import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import WeddingEvents from "./components/WeddingEvents";
import Invitation from "./components/Invitation";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
import GiftRegistry from "./components/GiftRegistry";
import TravelStay from "./components/TravelStay";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F4]">
      <Navigation />
      <Hero />
      <OurStory />
      <WeddingEvents />
      <Invitation />
      <Gallery />
      <RSVP />
      <GiftRegistry />
      <TravelStay />
      <FAQ />
      <Footer />
    </div>
  );
}