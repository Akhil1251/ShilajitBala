"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BenefitsGuide from "@/components/BenefitsGuide";
import ProductShowcase from "@/components/ProductShowcase";
import SocialProof from "@/components/SocialProof";
import Checkout from "@/components/Checkout";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />
        
        {/* Section 2: Benefits */}
        <BenefitsGuide />
        
        {/* Section 3: Product Showcase + Section 4: Ingredients + Section 6: How To Use */}
        <ProductShowcase />
        
        {/* Section 5: Social Proof (Reviews) + Section 8: FAQ */}
        <SocialProof />
        
        {/* Section 7: Offer */}
        <Checkout />
      </main>
      <Footer />
      <LeadPopup />
    </div>
  );
}