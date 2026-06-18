import Image from "next/image";
import { Award, Compass, ShieldAlert, Sparkles } from "lucide-react";

export default function Heritage() {
  return (
    <section id="heritage" className="py-24 bg-cream-dark/20 scroll-mt-20 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Text Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-gold uppercase tracking-widest flex items-center gap-1.5">
                <Compass className="w-4 h-4" /> Traditional Wisdom & Quality
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary">
                Sourced from Nature, Refined by Science
              </h2>
            </div>

            <p className="text-base text-primary/80 leading-relaxed">
              **OjasEarth** bridges the gap between pure Ayurvedic heritage and modern performance requirements. Every batch of Stamina 69 undergoes **Shodhana** (traditional purification) to remove heavy metals and impurities, preserving the high density of bio-active compounds.
            </p>

            {/* Quality Markers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 border border-cream-dark shadow-sm text-gold">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-base font-display">GMP Certified Facility</h4>
                  <p className="text-xs text-primary/70 leading-relaxed mt-1">
                    Manufactured under stringent sanitary standards to ensure zero contamination and total product consistency.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 border border-cream-dark shadow-sm text-gold">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-base font-display">Fulvic Acid Standard</h4>
                  <p className="text-xs text-primary/70 leading-relaxed mt-1">
                    Our Shilajit is standardized to contain over 60% Fulvic Acid, the key molecule responsible for energy transport and recovery.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#buy-now"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-full text-base font-bold text-white bg-primary hover:bg-primary-light hover:scale-105 active:scale-95 shadow-md shadow-primary/20 transition-all duration-300 border border-gold/10"
              >
                Experience Pure Ayurveda
              </a>
            </div>
          </div>

          {/* Right Side: Lifestyle/Visual representation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] bg-white/70 backdrop-blur-md rounded-3xl p-4 border border-cream-dark/50 shadow-xl group">
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src="/lifestyle.png"
                  alt="Healthy active couple representing OjasEarth vitality"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm border border-gold/20 text-gold font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                  Active Vitality
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
