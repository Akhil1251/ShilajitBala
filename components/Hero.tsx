import Image from "next/image";
import { ShieldCheck, Flame, Star, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative overflow-hidden py-16 lg:py-28 border-b border-cream-dark/30 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* Glassmorphic overlay for luxury feel and high contrast legibility */}
      <div className="absolute inset-0 bg-[#FAF8F5]/85 backdrop-blur-[3px] z-0" />

      {/* Background mesh light leaks */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none z-1" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none z-1" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-gold-dark block">
                Unlock Pure Energy,
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold to-primary block">
                Endurance & Vigour
              </span>
            </h1>

            <p className="text-base sm:text-lg text-primary/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the dual power of **OjasEarth Stamina 69**. An all-in-one supplement combo containing premium capsules and fast-absorbing oil, crafted to elevate physical performance and lifetime vitality.
            </p>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 py-4 max-w-md mx-auto lg:mx-0 border-y border-cream-dark/50 bg-white/60 backdrop-blur-sm rounded-xl px-4 shadow-sm border border-white/50">
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-bold font-display text-primary">100%</span>
                <span className="text-xs text-primary/60 font-semibold uppercase">Organic Herbs</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-bold font-display text-primary">GMP</span>
                <span className="text-xs text-primary/60 font-semibold uppercase">Certified</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl font-bold font-display text-primary">4.9/5</span>
                <span className="text-xs text-primary/60 font-semibold uppercase flex items-center justify-center lg:justify-start gap-0.5">
                  Rating <Star className="w-3 h-3 fill-gold text-gold" />
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <a
                href="#buy-now"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-black text-primary bg-gold hover:bg-gold-light shadow-lg shadow-gold/50 border border-gold/40 animate-blink-gold cursor-pointer"
              >
                Buy OjasEarth Combo Now
              </a>
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-primary/20 rounded-full text-base font-semibold text-primary hover:bg-primary/5 transition-all backdrop-blur-sm"
              >
                Learn More
              </a>
            </div>

            {/* Verification highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-medium text-primary/70">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-gold animate-bounce" /> Gold Shilajit Enriched
              </span>
              <span className="flex items-center gap-1">
                <Flame className="w-4 h-4 text-gold" /> Double Action Formula
              </span>
            </div>
          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-white/60 backdrop-blur-md rounded-3xl p-6 border border-primary/10 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 group">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center animate-bounce duration-1000">
                <Flame className="w-6 h-6 text-gold" />
              </div>

              {/* Main Product Image */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src="/product.png"
                  alt="Stamina 69 Desire Xtract Oil and Capsules Combo"
                  fill
                  sizes="(max-w-md) 100vw"
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                  priority
                />
              </div>

              {/* Floating product label */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border border-cream-dark p-3 rounded-xl flex items-center justify-between shadow-md border border-white/50">
                <div>
                  <span className="block text-xs text-primary/60 font-bold uppercase tracking-wider">Combo Pack</span>
                  <span className="block text-sm font-bold text-primary font-display">Oil & Capsules (30 Caps)</span>
                </div>
                <div className="bg-primary text-gold text-xs font-black px-2.5 py-1.5 rounded-lg shadow-sm border border-gold/20">
                  BEST DEAL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
