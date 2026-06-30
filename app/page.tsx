import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import StudentJourney from "@/components/StudentJourney";
import Pricing from "@/components/Pricing";
import Tutorials from "@/components/Tutorials";
import Testimonials from "@/components/Testimonials";
import CTAStrip from "@/components/CTAStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <StudentJourney />
      <Pricing />
      <Tutorials />
      {/* <Testimonials /> */}
      <CTAStrip />
      <Footer />
    </main>
  );
}
