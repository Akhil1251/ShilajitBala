import { Info, Sparkles, CheckCircle2 } from "lucide-react";

export default function HowToUse() {
  return (
    <section id="how-to-use" className="py-24 bg-primary text-cream scroll-mt-20 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-gold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4" /> Perfect Routine for Maximum Vigour
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-cream">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream via-gold-light to-cream">
              How to Use Stamina 69 Combo
            </span>
          </h2>
          <p className="text-cream/70 text-sm sm:text-base">
            For outstanding results, follow this daily routine consistently. The dual action of capsules (internal) and oil (external) provides comprehensive benefits.
          </p>
        </div>

        {/* Dual Routine Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-stretch">
          {/* Capsules Guide Card */}
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:bg-white/10 transition-colors duration-300">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-wider mb-6">
                Step 1: Capsules (Internal Care)
              </div>
              <h3 className="text-2xl font-bold font-display text-cream mb-4">
                OjasEarth DesireXtract Capsules
              </h3>
              <p className="text-cream/80 text-sm mb-6 leading-relaxed">
                Formulated to boost stamina and vitality from within. The slow-release capsule design ensures consistent energy throughout the day.
              </p>

              <ul className="space-y-4">
                {[
                  "Dosage: Take 2 capsules twice daily.",
                  "Timing: Best consumed after meals (lunch & dinner).",
                  "Medium: Take with milk or lukewarm water for maximum absorption.",
                  "Consistency: Use daily for at least 4-6 weeks to see significant differences."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-cream/90">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-cream/60">
              <Info className="w-4 h-4 text-gold shrink-0" />
              <span>Do not exceed the recommended daily dose. Consult a doctor if you have medical concerns.</span>
            </div>
          </div>

          {/* Oil Guide Card */}
          <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:bg-white/10 transition-colors duration-300">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-wider mb-6">
                Step 2: Oil (External Care)
              </div>
              <h3 className="text-2xl font-bold font-display text-cream mb-4">
                OjasEarth DesireXtract Massage Oil
              </h3>
              <p className="text-cream/80 text-sm mb-6 leading-relaxed">
                Applied topically to support localized cellular vitality, enhance absorption of active nutrients, and soothe muscle tension.
              </p>

              <ul className="space-y-4">
                {[
                  "Quantity: Apply 5 to 10 drops directly onto the targeted external area.",
                  "Application: Gently massage in an upward motion until completely absorbed.",
                  "Frequency: Apply once or twice daily, preferably morning and night.",
                  "Dietary Tip: Can also be added (1-2 drops) to smoothies or warm drinks for an extra internal energy boost."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-cream/90">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-cream/60">
              <Info className="w-4 h-4 text-gold shrink-0" />
              <span>For external application only. Perform a patch test before first use to ensure no sensitivity.</span>
            </div>
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-16 text-center">
          <a
            href="#buy-now"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-black text-primary bg-gold hover:bg-gold-light shadow-lg shadow-gold/50 border border-gold/40 animate-blink-gold cursor-pointer"
          >
            Start Your Routine Today
          </a>
        </div>
      </div>
    </section>
  );
}
