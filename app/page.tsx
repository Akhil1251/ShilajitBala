import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import BenefitsGuide from "@/components/BenefitsGuide";
import SocialProof from "@/components/SocialProof";
import Checkout from "@/components/Checkout";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProductShowcase />
        <BenefitsGuide />
        <SocialProof />
        <Checkout />
      </main>
      <Footer />
    </div>
  );
}
