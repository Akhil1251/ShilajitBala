import { Check, X, Calendar, Flame, Layers } from "lucide-react";

export default function HowToUse() {
  const steps = [
    {
      num: "1",
      title: "Step 1",
      desc: "Take Capsules daily.",
      icon: <Layers className="w-5 h-5 text-gold" />
    },
    {
      num: "2",
      title: "Step 2",
      desc: "Use Oil externally as directed.",
      icon: <Flame className="w-5 h-5 text-gold" />
    },
    {
      num: "3",
      title: "Step 3",
      desc: "Follow consistently.",
      icon: <Calendar className="w-5 h-5 text-gold" />
    }
  ];

  const comparison = [
    { feature: "Premium Ingredients", ours: true, theirs: false },
    { feature: "Gold Enriched Formula", ours: true, theirs: false },
    { feature: "Complete Wellness Kit", ours: true, theirs: false },
    { feature: "Ayurvedic Blend", ours: true, theirs: false },
    { feature: "Quality Tested", ours: true, theirs: false },
    { feature: "Trusted by Thousands", ours: true, theirs: false }
  ];

  return (
    <section id="how-to-use" className="py-24 bg-[#0B0B0B] scroll-mt-20 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: How to Use */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold text-gold uppercase tracking-widest block">Guide</span>
              <h2 className="text-3xl font-sans font-black text-white uppercase tracking-tight">
                How to Use
              </h2>
            </div>

            <div className="space-y-6">
              {steps.map((s, idx) => (
                <div 
                  key={idx}
                  className="p-5 bg-[#121212] border border-white/5 rounded-2xl flex items-center gap-6 shadow-sm hover:border-gold/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center font-black text-gold font-sans shrink-0">
                    {s.num}
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs tracking-wider">{s.title}</h4>
                    <p className="text-sm text-white/70 font-semibold mt-0.5">{s.desc}</p>
                  </div>
                  <div className="ml-auto text-gold opacity-50">
                    {s.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: What Makes Us Different comparison table */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold text-gold uppercase tracking-widest block">Comparison</span>
              <h2 className="text-3xl font-sans font-black text-white uppercase tracking-tight">
                What Makes Us Different
              </h2>
            </div>

            <div className="overflow-x-auto bg-[#121212] border border-white/5 rounded-2xl p-4 sm:p-6 shadow-md">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 pb-4">
                    <th className="py-3 text-xs font-black uppercase text-white/50 tracking-wider">Features</th>
                    <th className="py-3 text-xs font-black uppercase text-gold tracking-wider text-center">Stamina 69</th>
                    <th className="py-3 text-xs font-black uppercase text-white/50 tracking-wider text-center">Ordinary Products</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparison.map((c, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 text-xs sm:text-sm font-bold text-white/90">{c.feature}</td>
                      <td className="py-4 text-center">
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold/10 border border-gold/30 text-gold">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      </td>
                      <td className="py-4 text-center">
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-600/10 border border-red-600/30 text-red-600">
                          <X className="w-3.5 h-3.5" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Section CTA */}
        <div className="mt-16 text-center">
          <a
            href="#buy-now"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-black text-primary bg-gold hover:bg-gold-light shadow-lg shadow-gold/50 border border-gold/40 animate-glow-gold cursor-pointer"
          >
            Start Your Synergy Routine
          </a>
        </div>
      </div>
    </section>
  );
}
