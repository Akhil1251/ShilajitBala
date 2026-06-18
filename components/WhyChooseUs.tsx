import { Zap, Shield, Flame, Activity } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Energy & Endurance",
      desc: "Helps improve stamina and daily performance.",
      icon: <Activity className="w-8 h-8 text-gold" />
    },
    {
      title: "Daily Vitality",
      desc: "Promotes natural drive and active lifestyle.",
      icon: <Zap className="w-8 h-8 text-gold" />
    },
    {
      title: "Premium Herbs",
      desc: "Crafted with powerful Ayurvedic ingredients.",
      icon: <Shield className="w-8 h-8 text-gold" />
    },
    {
      title: "Active Lifestyle",
      desc: "Designed to support strength, recovery and overall wellness.",
      icon: <Flame className="w-8 h-8 text-gold" />
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#0B0B0B] scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-gold uppercase tracking-widest block">Core Strengths</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white uppercase tracking-tight">
            Why Thousands Choose <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dark">
              Stamina 69
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#121212] border border-white/5 rounded-2xl flex flex-col justify-between hover:border-gold/30 transition-all duration-300 shadow-md group hover:translate-y-[-4px]"
            >
              <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-8 border border-white/5 group-hover:border-gold/20 transition-all">
                {p.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold uppercase tracking-wide text-white group-hover:text-gold transition-colors font-sans">
                  Supports {p.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed font-medium">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-16 text-center">
          <a
            href="#buy-now"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-black text-primary bg-gold hover:bg-gold-light shadow-lg shadow-gold/50 border border-gold/40 animate-glow-gold cursor-pointer"
          >
            Claim Your Wellness Kit Now
          </a>
        </div>
      </div>
    </section>
  );
}
