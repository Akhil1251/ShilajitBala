import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function WellnessKit() {
  return (
    <section id="wellness-kit" className="py-24 bg-[#0B0B0B] relative overflow-hidden border-y border-white/5">
      {/* Glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-gold uppercase tracking-widest block">Complete Treatment</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white uppercase tracking-tight">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dark">Wellness Kit</span>
          </h2>
        </div>

        {/* Outer card container */}
        <div className="bg-[#121212] border border-white/5 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
          {/* Accent light lines */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column stats */}
            <div className="md:col-span-3 space-y-8 text-center md:text-left">
              <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                <span className="block text-2xl font-black text-gold font-sans leading-none">60</span>
                <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider mt-1 block">Capsules</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                <span className="block text-sm font-black text-white uppercase tracking-wider font-sans leading-none">Gold Enriched</span>
                <span className="text-[10px] text-gold font-bold uppercase tracking-wider mt-1 block">Formula</span>
              </div>
            </div>

            {/* Center Product Image inside glowing circles */}
            <div className="md:col-span-6 flex justify-center relative py-6">
              {/* Glowing ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-gold/15 bg-gold/5 animate-pulse z-0" />
              <div className="relative w-64 h-64 z-10">
                <Image
                  src="/product.png"
                  alt="OjasEarth Wellness Kit"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column stats */}
            <div className="md:col-span-3 space-y-8 text-center md:text-right">
              <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                <span className="block text-2xl font-black text-gold font-sans leading-none">30ml</span>
                <span className="text-[10px] text-white/50 font-bold uppercase tracking-wider mt-1 block">Applicator Oil</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/5 rounded-2xl">
                <span className="block text-sm font-black text-white uppercase tracking-wider font-sans leading-none">100% Herbal</span>
                <span className="text-[10px] text-gold font-bold uppercase tracking-wider mt-1 block">Organic Blend</span>
              </div>
            </div>

          </div>

          {/* Bottom center badge label */}
          <div className="mt-12 text-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary/10 border border-gold/20 text-gold rounded-full text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> COMPLETE WELLNESS KIT
            </span>
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-16 text-center">
          <a
            href="#buy-now"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-black text-primary bg-gold hover:bg-gold-light shadow-lg shadow-gold/50 border border-gold/40 animate-glow-gold cursor-pointer"
          >
            Order Wellness Kit Now
          </a>
        </div>
      </div>
    </section>
  );
}
