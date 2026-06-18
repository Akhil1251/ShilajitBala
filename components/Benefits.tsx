import { Zap, Heart, ShieldAlert, Sparkles, Smile, ShieldCheck, Flame, RefreshCw } from "lucide-react";

interface BenefitItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function Benefits() {
  const benefits: BenefitItem[] = [
    {
      title: "Increased Physical Endurance",
      desc: "Stay stronger for longer. Build physical resilience and stay active without fatigue, whether at the gym or in your busy daily life.",
      icon: <Flame className="w-6 h-6 text-gold" />
    },
    {
      title: "Enhanced Energy Levels",
      desc: "Provides clean, sustained release of natural energy without the jitters, spikes, or crashes associated with sugar and caffeine.",
      icon: <Zap className="w-6 h-6 text-gold" />
    },
    {
      title: "Improved Recovery",
      desc: "Aids in reducing post-workout muscle soreness, relieving fatigue, and accelerating recovery time after physical exertion.",
      icon: <RefreshCw className="w-6 h-6 text-gold" />
    },
    {
      title: "Healthy Metabolism Support",
      desc: "Supports natural metabolic function, ensuring your body converts food to energy efficiently to maintain consistent stamina.",
      icon: <Sparkles className="w-6 h-6 text-gold" />
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-cream-dark/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-gold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4" /> Clinically Inspired Ayurvedic Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary">
            Remarkable Health Benefits
          </h2>
          <p className="text-primary/70 text-sm sm:text-base">
            Feel the natural transformation. Stamina 69 works synergistically to elevate your physical, mental, and metabolic health.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="group p-8 bg-white rounded-3xl border border-cream-dark/50 hover:border-gold/30 shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex gap-6 items-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors">
                {b.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold font-display text-primary group-hover:text-gold transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
