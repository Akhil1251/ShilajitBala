import Image from "next/image";
import { Zap, ShieldCheck, Flame, Sun, RefreshCw, Trophy } from "lucide-react";

export default function Lifestyle() {
  const points = [
    { label: "Supports Energy", icon: <Zap className="w-5 h-5 text-gold" /> },
    { label: "Supports Strength", icon: <ShieldCheck className="w-5 h-5 text-gold" /> },
    { label: "Supports Daily Wellness", icon: <Sun className="w-5 h-5 text-gold" /> },
    { label: "Supports Active Lifestyle", icon: <Flame className="w-5 h-5 text-gold" /> },
    { label: "Supports Recovery", icon: <RefreshCw className="w-5 h-5 text-gold" /> },
    { label: "Supports Confidence", icon: <Trophy className="w-5 h-5 text-gold" /> }
  ];

  return (
    <section id="lifestyle" className="py-24 bg-[#060606] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Muscular Model Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] bg-white/5 border border-white/10 rounded-3xl p-4 shadow-2xl overflow-hidden group">
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src="/man.png"
                  alt="Designed for Modern Men"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] text-gold font-bold uppercase tracking-wider">High Vitality</span>
                  <h4 className="text-xl font-black text-white uppercase font-sans mt-0.5">Physical Excellence</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Features List & Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-bold text-gold uppercase tracking-widest block">Designed For Modern Men</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white uppercase tracking-tight">
                Enhance Every <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dark">
                  Capability
                </span>
              </h2>
            </div>

            <p className="text-base text-white/70 leading-relaxed text-center lg:text-left">
              Stamina 69's synergistic formula delivers targeted Ayurvedic extracts directly to where your body needs it most, supporting hormones, cardiovascular flow, and muscle cell energy.
            </p>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {points.map((pt, idx) => (
                <div 
                  key={idx}
                  className="p-4 bg-[#121212] border border-white/5 rounded-2xl flex items-center gap-4 hover:border-gold/20 transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center shrink-0">
                    {pt.icon}
                  </div>
                  <span className="text-sm font-bold text-white">{pt.label}</span>
                </div>
              ))}
            </div>

            {/* Section CTA */}
            <div className="pt-6 text-center lg:text-left">
              <a
                href="#buy-now"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-black text-primary bg-gold hover:bg-gold-light shadow-lg shadow-gold/50 border border-gold/40 animate-glow-gold cursor-pointer"
              >
                Boost Your Vitality Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
