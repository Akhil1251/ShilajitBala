import { CheckCircle2, RefreshCw, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream-dark/30 scroll-mt-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Graphic Cards with Glassmorphism */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-6 bg-white/70 backdrop-blur-md rounded-2xl border border-white/40 shadow-sm flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-gold animate-bounce" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-primary mb-1">Stamina Boost</h3>
                <p className="text-xs text-primary/70 leading-relaxed">
                  Infused with pure extracts to deliver steady, long-lasting physical endurance.
                </p>
              </div>
            </div>

            <div className="p-6 bg-primary text-cream rounded-2xl border border-primary-light/10 shadow-sm flex flex-col justify-between hover:translate-y-[-4px] transition-transform duration-300 translate-y-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-cream mb-1">Dual Action</h3>
                <p className="text-xs text-cream/70 leading-relaxed">
                  Combining slow-release capsules with high-absorption massage oil.
                </p>
              </div>
            </div>

            <div className="col-span-2 p-8 bg-white/70 backdrop-blur-md rounded-2xl border border-white/40 shadow-sm flex items-center gap-6 hover:translate-y-[-4px] transition-transform duration-300 mt-6 lg:mt-0">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <span className="text-2xl font-black text-gold font-display">100%</span>
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-primary mb-1">Ayurvedic Formulation</h3>
                <p className="text-xs text-primary/70 leading-relaxed">
                  Carefully blended from the purest traditional herbs, free from harmful synthetics or fillers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Description Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-gold uppercase tracking-widest block">About Stamina 69</span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-gold-dark">
                  A Comprehensive Wellness Supplement Duo
                </span>
              </h2>
            </div>

            <p className="text-base text-primary/80 leading-relaxed">
              Unlock your energy, endurance, and overall wellness with the **OjasEarth Stamina 69 DesireXtract Capsules + Oil Combo**. This comprehensive, all-in-one supplement duo is expertly designed to support your active lifestyle by enhancing vitality, improving stamina, and promoting peak physical performance.
            </p>
            <p className="text-base text-primary/80 leading-relaxed">
              Whether you're tackling an intense workout at the gym, managing a demanding workday, or simply striving to maintain balanced energy levels throughout the day, this combo has you covered.
            </p>

            {/* List features */}
            <ul className="space-y-3 pt-2">
              {[
                "Comprehensive Combo: Capsules for inner vitality, oil for enhanced cellular absorption",
                "Metabolism Support: Optimized with Vitamin B to sustain healthy energy production",
                "Faster Recovery: Effectively reduces muscle fatigue and promotes fast post-exertion recovery",
                "Convenient & Versatile: Easy-to-consume capsules paired with a multi-purpose botanical oil"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-primary/80 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="#buy-now"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-black text-primary bg-gold hover:bg-gold-light shadow-lg shadow-gold/50 border border-gold/40 animate-blink-gold text-center cursor-pointer"
              >
                Get OjasEarth Stamina 69 Now
              </a>
              <a
                href="#ingredients"
                className="inline-flex items-center justify-center px-8 py-4 border border-primary/20 text-sm font-semibold rounded-full text-primary hover:bg-primary/5 transition-all text-center"
              >
                View Key Ingredients
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
