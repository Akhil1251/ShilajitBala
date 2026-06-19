import Image from "next/image";
import { Check, X, Layers, Flame, Calendar, Zap, ShieldCheck, Sun, RefreshCw, Trophy, ShoppingCart } from "lucide-react";

const benefits = [
  { label: "Supports Energy", icon: <Zap className="w-4 h-4 text-gold" /> },
  { label: "Supports Strength", icon: <ShieldCheck className="w-4 h-4 text-gold" /> },
  { label: "Supports Wellness", icon: <Sun className="w-4 h-4 text-gold" /> },
  { label: "Active Lifestyle", icon: <Flame className="w-4 h-4 text-gold" /> },
  { label: "Supports Recovery", icon: <RefreshCw className="w-4 h-4 text-gold" /> },
  { label: "Boosts Confidence", icon: <Trophy className="w-4 h-4 text-gold" /> },
];

const steps = [
  { num: "1", title: "Take Capsules", desc: "2 capsules daily after meals with water or warm milk.", icon: <Layers className="w-4 h-4 text-gold" /> },
  { num: "2", title: "Apply Oil", desc: "5-10 drops externally. Massage in upward strokes, morning & night.", icon: <Flame className="w-4 h-4 text-gold" /> },
  { num: "3", title: "Stay Consistent", desc: "Follow for 30+ days for optimal results. Pair with exercise.", icon: <Calendar className="w-4 h-4 text-gold" /> },
];

const comparison = [
  { feature: "Premium Ingredients", ours: true, theirs: false },
  { feature: "Gold Enriched Formula", ours: true, theirs: false },
  { feature: "Complete Kit (Capsules + Oil)", ours: true, theirs: false },
  { feature: "Ayurvedic Certified Blend", ours: true, theirs: false },
  { feature: "Lab Quality Tested", ours: true, theirs: false },
  { feature: "Trusted by 1,248+ Men", ours: true, theirs: false },
];

export default function BenefitsGuide() {
  return (
    <section id="benefits" className="fire-bg-subtle py-10 lg:py-16 relative overflow-hidden border-y border-white/5">
      {/* Background glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-600/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ═══ Top: "Designed for Modern Men" with image + benefits ═══ */}
        <div className="scroll-reveal mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Man image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm aspect-[3/4] card-glow bg-[#0c0c0c] rounded-3xl p-3 overflow-hidden group">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/man.png"
                    alt="Designed for Modern Men"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="text-[9px] text-gold font-bold uppercase tracking-[0.2em]">High Vitality</span>
                    <h4 className="text-lg font-black text-white uppercase mt-0.5">Physical Excellence</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Benefits + description */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-gold uppercase tracking-[0.25em]">Designed For Modern Men</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                  Enhance Every{" "}
                  <span className="text-metallic">Capability</span>
                </h2>
              </div>
              <p className="text-sm text-white/50 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Stamina 69&apos;s synergistic formula delivers targeted Ayurvedic extracts directly to where your body needs it most — supporting hormones, cardiovascular flow, and muscle cell energy.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {benefits.map((b, i) => (
                  <div key={i} className="card-glow bg-[#0c0c0c] rounded-xl p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold/5 border border-gold/10 flex items-center justify-center shrink-0">
                      {b.icon}
                    </div>
                    <span className="text-xs font-bold text-white/80">{b.label}</span>
                  </div>
                ))}
              </div>
              <a href="tel:+918269979897" className="btn-fire animate-glow-red inline-flex">
                <ShoppingCart className="w-5 h-5" /> Buy Now — ₹1,619
              </a>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="gold-divider mb-10" />

        {/* ═══ Bottom: How to Use + Comparison side by side ═══ */}
        <div className="scroll-reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

            {/* Left: How to Use */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-gold uppercase tracking-[0.25em]">Guide</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">How to Use</h3>
              </div>
              <div className="space-y-4">
                {steps.map((s, i) => (
                  <div key={i} className="card-glow bg-[#0c0c0c] rounded-2xl p-5 flex items-center gap-5">
                    <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center font-black text-gold shrink-0 text-sm">
                      {s.num}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-black text-white uppercase tracking-wider">{s.title}</h4>
                      <p className="text-[11px] text-white/50 mt-0.5 leading-snug">{s.desc}</p>
                    </div>
                    <div className="text-gold/30 shrink-0">{s.icon}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: What Makes Us Different */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-gold uppercase tracking-[0.25em]">Comparison</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">What Makes Us Different</h3>
              </div>
              <div className="card-glow bg-[#0c0c0c] rounded-2xl p-5 sm:p-6 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="py-3 text-[10px] font-black uppercase text-white/40 tracking-wider">Features</th>
                      <th className="py-3 text-[10px] font-black uppercase text-gold tracking-wider text-center">Stamina 69</th>
                      <th className="py-3 text-[10px] font-black uppercase text-white/30 tracking-wider text-center">Others</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {comparison.map((c, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-3.5 text-xs font-bold text-white/70">{c.feature}</td>
                        <td className="py-3.5 text-center">
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold/10 border border-gold/20">
                            <Check className="w-3 h-3 text-gold" />
                          </div>
                        </td>
                        <td className="py-3.5 text-center">
                          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-600/10 border border-red-600/20">
                            <X className="w-3 h-3 text-red-500" />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="mt-14 text-center flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918269979897" className="btn-fire animate-glow-red">
              <ShoppingCart className="w-5 h-5" /> Buy Now — ₹1,619
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
