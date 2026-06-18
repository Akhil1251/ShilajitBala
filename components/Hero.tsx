import Image from "next/image";
import { Check, Flame, MessageCircle, ShoppingCart, Award, ShieldAlert, Sparkles } from "lucide-react";

export default function Hero() {
  const trustBadges = [
    { label: "100% Ayurvedic", icon: <Award className="w-5 h-5 text-gold" /> },
    { label: "Made in India", icon: <Award className="w-5 h-5 text-gold" /> },
    { label: "Premium Ingredients", icon: <Sparkles className="w-5 h-5 text-gold" /> },
    { label: "Secure Checkout", icon: <Award className="w-5 h-5 text-gold" /> },
  ];

  return (
    <section className="relative overflow-hidden bg-[#060606] py-16 lg:py-24 border-b border-white/5">
      {/* Background decorations: Fiery orange mesh blur */}
      <div className="absolute top-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Trust badges bar at the very top of Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/5 pb-6 mb-12 hidden lg:flex justify-between items-center text-xs text-white/50 font-semibold tracking-wider uppercase z-10 relative">
        <div className="flex items-center gap-1.5">
          <Award className="w-4 h-4 text-gold" /> Premium Ingredients
        </div>
        <div className="flex items-center gap-1.5">
          <Award className="w-4 h-4 text-gold" /> Ayurvedic Formula
        </div>
        <div className="flex items-center gap-1.5">
          <Award className="w-4 h-4 text-gold" /> Made in India
        </div>
        <div className="flex items-center gap-1.5">
          <Award className="w-4 h-4 text-gold" /> Customer Reviews
        </div>
        <div className="flex items-center gap-1.5">
          <Award className="w-4 h-4 text-gold" /> Expert Approved
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-sans font-black tracking-tight leading-none text-white uppercase">
                <span className="block text-gold-light">Unleash</span>
                <span className="block text-white">Your Inner</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-orange-500 to-red-600 block shadow-sm">
                  Strength
                </span>
              </h1>
              <p className="text-base sm:text-lg text-white/80 font-bold max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Premium Ayurvedic Formula powered by <span className="text-gold">Gold, Shilajit</span> & Herbal Extracts.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              {[
                "Supports Daily Energy",
                "Supports Confidence",
                "Supports Vitality",
                "Supports Strength"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-bold text-white/90">
                  <div className="w-5 h-5 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#buy-now"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-lg text-base font-black text-white bg-red-600 hover:bg-red-700 shadow-xl shadow-red-600/30 transition-all uppercase tracking-wider animate-glow-red cursor-pointer"
              >
                <ShoppingCart className="w-5 h-5" /> Buy Now
              </a>
              <a
                href="https://wa.me/911234567890?text=Hi,%20I'm%20interested%20in%20OjasEarth%20Stamina%2069%20Combo"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-lg text-base font-bold text-gold bg-transparent border border-gold/40 hover:border-gold hover:bg-white/5 transition-all uppercase tracking-wider animate-glow-gold"
              >
                <MessageCircle className="w-5 h-5" /> Order on Whatsapp
              </a>
            </div>
          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Fiery Horse Graphic backdrop (represented as stylized glowing circle) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-orange-500/20 bg-orange-600/5 animate-pulse z-0" />

            <div className="relative w-full max-w-sm aspect-square bg-[#121212]/90 rounded-3xl p-6 border border-white/10 flex items-center justify-center shadow-2xl z-10 group overflow-hidden">
              {/* Product Image */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src="/product.png"
                  alt="OjasEarth Stamina 69 Product Pack"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 border-t border-white/5 mt-16 text-center">
          {trustBadges.map((badge, idx) => (
            <div 
              key={idx}
              className="p-4 bg-[#121212]/50 border border-white/5 rounded-2xl flex items-center justify-center gap-3 shadow-inner"
            >
              {badge.icon}
              <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
