import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ingredients from "@/components/Ingredients";
import HowToUse from "@/components/HowToUse";
import Benefits from "@/components/Benefits";
import WhyChooseUs from "@/components/WhyChooseUs";
import Journey from "@/components/Journey";
import Heritage from "@/components/Heritage";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import Checkout from "@/components/Checkout";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Ingredients />
        <HowToUse />
        <Benefits />
        <WhyChooseUs />
        <Journey />
        <Heritage />
        <Reviews />
        <Faq />
        <Checkout />
      </main>
      <Footer />
    </div>
  );
}
