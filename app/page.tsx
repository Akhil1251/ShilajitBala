import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Ingredients from "@/components/Ingredients";
import WellnessKit from "@/components/WellnessKit";
import Lifestyle from "@/components/Lifestyle";
import HowToUse from "@/components/HowToUse";
import Reviews from "@/components/Reviews";
import ExpertVideos from "@/components/ExpertVideos";
import Faq from "@/components/Faq";
import Checkout from "@/components/Checkout";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#060606] text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyChooseUs />
        <Ingredients />
        <WellnessKit />
        <Lifestyle />
        <HowToUse />
        <Reviews />
        <ExpertVideos />
        <Faq />
        <Checkout />
      </main>
      <Footer />
    </div>
  );
}
