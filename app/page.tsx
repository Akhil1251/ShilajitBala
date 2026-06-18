import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ingredients from "@/components/Ingredients";
import HowToUse from "@/components/HowToUse";
import Benefits from "@/components/Benefits";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
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
        <Reviews />
        <Checkout />
      </main>
      <Footer />
    </div>
  );
}
