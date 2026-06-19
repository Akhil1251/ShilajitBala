import Image from "next/image";
import { Zap, Shield, Flame, Activity, Sparkles, ShoppingCart, MessageCircle } from "lucide-react";

const features = [
  { title: "Energy & Endurance", desc: "Helps improve stamina and daily performance.", icon: <Activity className="w-7 h-7 text-gold" /> },
  { title: "Daily Vitality", desc: "Promotes natural drive and active lifestyle.", icon: <Zap className="w-7 h-7 text-gold" /> },
  { title: "Premium Herbs", desc: "Crafted with powerful Ayurvedic ingredients.", icon: <Shield className="w-7 h-7 text-gold" /> },
  { title: "Active Lifestyle", desc: "Supports strength, recovery and overall wellness.", icon: <Flame className="w-7 h-7 text-gold" /> },
];

const ingredients = [
  { name: "Gold", desc: "Rejuvenates and builds absolute physical strength.", image: "/kesar.png" },
  { name: "Shilajit", desc: "Boosts cellular energy, power and stamina.", image: "/shilajit.png" },
  { name: "Ashwagandha", desc: "Reduces stress hormones and improves muscle strength.", image: "/ashwagandha.png" },
  { name: "Safed Musli", desc: "Enhances vitality, active stamina and performance.", image: "/musli.png" },
  { name: "Kaunch Beej", desc: "Supports natural hormonal balance and nervous system.", image: "/kaunch.png" },
  { name: "Gokshura", desc: "Supports cellular vitality, flow, and physical endurance.", image: "/nilgiri.png" },
];

export default function ProductShowcase() {
  return (
    <section id="product" className="relative overflow-hidden">
      {/* ═══════════════════════════════════════════════════════
          BLOCK 1: Why Thousands Choose Stamina 69
          ═══════════════════════════════════════════════════════ */}
      <div className="fire-bg-subtle py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-[10px] font-bold text-gold uppercase tracking-[0.25em]">
              Core Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              Why Thousands Choose{" "}
              <span className="text-metallic">Stamina 69</span>
            </h2>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <div key={i} className="card-glow bg-[#0c0c0c] rounded-2xl p-7 flex flex-col gap-5">
                <div className="w-14 h-14 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center">
                  {f.icon}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-sm font-black uppercase tracking-wider text-white">{f.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a href="#checkout" className="btn-fire animate-glow-red">
              <ShoppingCart className="w-5 h-5" /> Order Now — ₹1,619
            </a>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          BLOCK 2: Ancient Ayurvedic Wisdom + Ingredients
          ═══════════════════════════════════════════════════════ */}
      <div className="ember-bg py-20 lg:py-28 border-b border-white/5 relative">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-gold uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" /> Powered By Nature
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              Ancient Ayurvedic Wisdom.{" "}
              <span className="text-metallic">Modern Excellence.</span>
            </h2>
          </div>

          {/* Ingredient grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {ingredients.map((ing, i) => (
              <div key={i} className="group card-glow bg-[#0c0c0c] rounded-2xl p-3 text-center">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 border border-white/5">
                  <Image
                    src={ing.image}
                    alt={ing.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Dark overlay at bottom for text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <h4 className="text-xs font-black uppercase tracking-wider text-gold mb-0.5">{ing.name}</h4>
                <p className="text-[10px] text-white/45 leading-snug px-1">{ing.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          BLOCK 3: Premium Wellness Kit — Product Detail
          ═══════════════════════════════════════════════════════ */}
      <div className="fire-bg-subtle py-20 lg:py-28 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/4 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal">
          {/* Header */}
          <div className="text-center mb-14 space-y-3">
            <span className="text-[10px] font-bold text-gold uppercase tracking-[0.25em]">Complete Treatment</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              Premium <span className="text-metallic">Wellness Kit</span>
            </h2>
          </div>

          {/* Kit card */}
          <div className="card-glow bg-[#0c0c0c] rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            {/* Top gold line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Left stats */}
              <div className="space-y-4 text-center md:text-left">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <span className="block text-3xl font-black text-gold leading-none">60</span>
                  <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider mt-1 block">Capsules</span>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <span className="block text-sm font-black text-white uppercase tracking-wider leading-none">Gold Enriched</span>
                  <span className="text-[10px] text-gold font-bold uppercase tracking-wider mt-1 block">Formula</span>
                </div>
              </div>

              {/* Center product */}
              <div className="flex justify-center relative py-4">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-gold/10 animate-pulse pointer-events-none" />
                <div className="relative w-52 h-52 z-10 animate-float">
                  <Image src="/product.png" alt="OjasEarth Wellness Kit" fill className="object-contain" />
                </div>
              </div>

              {/* Right stats */}
              <div className="space-y-4 text-center md:text-right">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <span className="block text-3xl font-black text-gold leading-none">30ml</span>
                  <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider mt-1 block">Applicator Oil</span>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <span className="block text-sm font-black text-white uppercase tracking-wider leading-none">100% Herbal</span>
                  <span className="text-[10px] text-gold font-bold uppercase tracking-wider mt-1 block">Organic Blend</span>
                </div>
              </div>
            </div>

            {/* Bottom CTA row */}
            <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a href="#checkout" className="btn-fire animate-glow-red">
                <ShoppingCart className="w-5 h-5" /> Order Wellness Kit — ₹1,619
              </a>
              <a
                href="https://wa.me/911234567890?text=Hi,%20I'm%20interested%20in%20OjasEarth%20Stamina%2069%20Combo"
                target="_blank"
                rel="noreferrer"
                className="btn-gold animate-glow-gold"
              >
                <MessageCircle className="w-5 h-5" /> Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
