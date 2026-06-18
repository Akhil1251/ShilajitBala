import Image from "next/image";
import { ShieldCheck, Flame, Star, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream py-12 lg:py-24 border-b border-cream-dark/30">
      {/* Background Decorative Mountain Slopes (Inspired by Matcha Ren) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120C150 160 300 180 450 150C600 120 750 90 900 130C1050 170 1200 180 1440 140V200H0V120Z"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Premium Ayurvedic Vitality Combo
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-primary">
              Unlock Pure Energy, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-gold">
                Endurance & Vigour
              </span>
            </h1>

            <p className="text-base sm:text-lg text-primary/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the dual power of **JASEARTH Stamina 69**. An all-in-one supplement combo containing premium capsules and fast-absorbing oil, crafted to elevate physical performance and daily vitality.
            </p>

            {/* Quick trust metrics */}
            <div className="grid grid-cols-3 gap-4 py-4 max-w-md mx-auto lg:mx-0 border-y border-cream-dark/50">
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
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#buy-now"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-full text-base font-bold text-white bg-primary hover:bg-primary-light hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 transition-all duration-300"
              >
                Buy Combo Now
              </a>
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-primary/20 rounded-full text-base font-semibold text-primary hover:bg-primary/5 transition-all"
              >
                Learn More
              </a>
            </div>

            {/* Verification highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-medium text-primary/70">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-gold" /> Gold Shilajit Enriched
              </span>
              <span className="flex items-center gap-1">
                <Flame className="w-4 h-4 text-gold" /> Double Action Formula
              </span>
            </div>
          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-b from-primary/5 to-primary/10 rounded-3xl p-6 border border-primary/15 flex items-center justify-center shadow-xl shadow-primary/5 hover:shadow-2xl transition-all duration-500 group">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center animate-bounce duration-1000">
                <Flame className="w-6 h-6 text-gold" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center">
                <Image
                  src="/shilajit.png"
                  alt="Gold Shilajit Rock decoration"
                  width={60}
                  height={60}
                  className="object-contain opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
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
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border border-cream-dark p-3 rounded-xl flex items-center justify-between shadow-md">
                <div>
                  <span className="block text-xs text-primary/60 font-bold uppercase tracking-wider">Combo Pack</span>
                  <span className="block text-sm font-bold text-primary font-display">Oil & Capsules (30 Caps)</span>
                </div>
                <div className="bg-primary text-gold text-xs font-black px-2.5 py-1.5 rounded-lg">
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
