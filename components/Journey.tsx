import Image from "next/image";
import { Sparkles, ArrowDown, ShieldCheck } from "lucide-react";

interface JourneyStep {
  step: string;
  title: string;
  desc: string;
  advantage: string;
  image: string;
}

const steps: JourneyStep[] = [
  {
    step: "01",
    title: "Prastara Sourcing (Wild Harvesting)",
    desc: "Our Shilajit rocks are hand-collected from raw high-altitude Himalayan cliffs above 16,000 feet, where the organic matter has compressed for centuries. Concurrently, wild Ashwagandha roots and organic Kesar are harvested from fertile volcanic mountain soils.",
    advantage: "Ensures maximum active content density (over 60% Fulvic Acid in Shilajit) and unpolluted botanical purity.",
    image: "/sourcing.png"
  },
  {
    step: "02",
    title: "Shodhana Purification (Scientific Safety)",
    desc: "Raw shilajit and root extracts are slow-purified using warm organic water and traditional Triphala decoction. This process filters out heavy metals and impurities while activating the water-soluble fulvic-humic acids and herbal alkaloids.",
    advantage: "Guarantees 100% heavy metal-free safety, rendering the supplement safe for daily organic consumption.",
    image: "/testing.png"
  },
  {
    step: "03",
    title: "Ayurvedic Mortar Mixing (The Synergy)",
    desc: "In ancient stone mortars, Shilajit is blended with micronized Ashwagandha, Saffron, Safed Musli, and Kaunch Beej. Concurrently, Nilgiri extracts are infused into the topical massage carrier oil. The ingredients bond together to enhance bio-availability.",
    advantage: "Enables multi-dimensional support: capsules release systemic vigour, while the topical oil relaxes local muscles and accelerates nutrient transport.",
    image: "/mixing.png"
  },
  {
    step: "04",
    title: "The Finished OjasEarth Stamina 69",
    desc: "The dual-action combo is packed under GMP guidelines. The capsules are delivered alongside the localized applicator oil, ready to release a powerful boost of endurance, energy, and cellular metabolism.",
    advantage: "A cohesive, dual-action system that delivers faster physical recovery and long-lasting performance.",
    image: "/product.png"
  }
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-cream scroll-mt-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-bold text-gold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-gold" /> The Synergy Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-gold-dark">
              How Every Ingredient is Purified & Blended
            </span>
          </h2>
          <p className="text-primary/70 text-sm sm:text-base">
            Follow the journey from high Himalayan peaks to your daily wellness routine. Learn how OjasEarth extracts and mixes every ingredient for absolute safety and maximum vitality.
          </p>
        </div>

        {/* Journey Process List */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Image Column */}
                <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"} flex justify-center`}>
                  <div className="relative w-full max-w-md aspect-[4/3] bg-white/70 backdrop-blur-md rounded-3xl p-4 border border-cream-dark/50 shadow-lg group overflow-hidden">
                    <div className="relative w-full h-full overflow-hidden rounded-2xl">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-gold w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shadow-md border border-gold/20">
                        {step.step}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"} space-y-4 text-center lg:text-left`}>
                  <span className="text-xs font-bold text-gold uppercase tracking-widest block">Stage {step.step}</span>
                  <h3 className="text-2xl font-bold font-display text-primary">{step.title}</h3>
                  <p className="text-sm sm:text-base text-primary/80 leading-relaxed">
                    {step.desc}
                  </p>
                  
                  {/* Advantage Panel */}
                  <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 flex items-start gap-3 text-left">
                    <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs uppercase tracking-wider text-gold font-bold mb-1">Advantage & Benefit</strong>
                      <p className="text-xs text-primary/80 leading-relaxed font-medium">
                        {step.advantage}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="mt-20 text-center">
          <a
            href="#buy-now"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-black text-primary bg-gold hover:bg-gold-light shadow-lg shadow-gold/50 border border-gold/40 animate-blink-gold text-center cursor-pointer"
          >
            Order OjasEarth Vitality Pack Now
          </a>
        </div>
      </div>
    </section>
  );
}
