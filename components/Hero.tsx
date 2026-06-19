import Image from "next/image";
import { Check, ShoppingCart, MessageCircle, Award, Shield, Sparkles, Gem } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#050505] flex flex-col">
      {/* ── Layered Fire Background ── */}
      <div className="absolute inset-0 fire-bg" />

      {/* Fire horse background image */}
      <div className="absolute inset-0 opacity-25 mix-blend-screen pointer-events-none">
        <Image
          src="/fire-horse.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Extra fire glow blobs */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-orange-600/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-red-600/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-gold/6 rounded-full blur-[80px] pointer-events-none" />

      {/* ── Trust Badge Top Bar ── */}
      <div className="relative z-20 border-b border-white/5 bg-black/40 backdrop-blur-sm shrink-0">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center lg:justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 overflow-x-auto">
          <span className="flex items-center gap-1.5 whitespace-nowrap"><Award className="w-3.5 h-3.5 text-gold" /> Premium Ingredients</span>
          <span className="hidden sm:flex items-center gap-1.5 whitespace-nowrap"><Sparkles className="w-3.5 h-3.5 text-gold" /> Ayurvedic Formula</span>
          <span className="hidden md:flex items-center gap-1.5 whitespace-nowrap"><Shield className="w-3.5 h-3.5 text-gold" /> Made in India</span>
          <span className="hidden lg:flex items-center gap-1.5 whitespace-nowrap"><Award className="w-3.5 h-3.5 text-gold" /> 1,248+ Reviews</span>
          <span className="hidden xl:flex items-center gap-1.5 whitespace-nowrap"><Gem className="w-3.5 h-3.5 text-gold" /> Expert Approved</span>
        </div>
      </div>

      {/* ── Main Hero Content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-8 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center relative min-h-[calc(100vh-140px)] lg:min-h-0">

            {/* Left: Copy */}
            <div className="space-y-5 lg:space-y-8 text-center lg:text-left z-10 relative py-2 lg:py-0">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
                  <Sparkles className="w-3 h-3" /> OjasEarth Stamina 69
                </span>
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black uppercase leading-[0.9] tracking-[-0.03em]">
                  <span className="block text-white">Unleash</span>
                  <span className="block text-white/90">Your Inner</span>
                  <span className="block text-metallic">Strength</span>
                </h1>
              </div>

              <p className="text-xs sm:text-base lg:text-lg text-white/60 font-semibold max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Premium Ayurvedic Formula powered by{" "}
                <span className="text-gold font-bold">Gold, Shilajit</span> &amp; Herbal Extracts.
                Designed for men who demand excellence.
              </p>

              {/* Benefit Checklist */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 lg:gap-y-3 max-w-sm sm:max-w-md mx-auto lg:mx-0 text-xs sm:text-sm font-bold">
                {["Supports Daily Energy", "Boosts Confidence", "Enhances Vitality", "Builds Strength"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-white/80">
                    <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full max-w-md mx-auto lg:mx-0">
                <a href="#checkout" className="btn-fire animate-glow-red">
                  <ShoppingCart className="w-5 h-5" /> Buy Now — ₹1,619
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

              {/* Price highlight */}
              <div className="price-tag rounded-2xl px-4 py-2.5 lg:px-6 lg:py-4 flex items-center gap-3 lg:gap-4 justify-center lg:justify-start max-w-xs sm:max-w-md mx-auto lg:mx-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-white/30 line-through text-xs lg:text-base font-semibold">₹1,799</span>
                  <span className="font-black text-xl sm:text-2xl lg:text-3xl text-metallic">₹1,619</span>
                </div>
                <span className="price-save px-2.5 py-1 lg:px-3 lg:py-1.5 text-red-400 text-[9px] lg:text-[11px] font-black rounded-full uppercase tracking-wider animate-pulse">
                  Save 10%
                </span>
              </div>
            </div>

            {/* Right: Product Image (blended into bg on mobile, side column on desktop) */}
            <div className="absolute lg:relative inset-y-0 right-0 w-full lg:w-auto flex items-center justify-center lg:justify-end pointer-events-none z-0 lg:z-10 lg:order-2">
              {/* Glowing ring */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-orange-500/8 blur-3xl pointer-events-none" />
              <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-gold/10 pointer-events-none animate-pulse" />

              <div className="relative w-[70vw] h-[70vw] max-w-[260px] max-h-[260px] sm:max-w-[340px] sm:max-h-[340px] lg:w-[420px] lg:h-[420px] lg:max-w-none lg:max-h-none animate-float opacity-15 lg:opacity-100 mix-blend-lighten lg:mix-blend-normal">
                <Image
                  src="/product.png"
                  alt="OjasEarth Stamina 69 Premium Combo"
                  fill
                  className="object-contain drop-shadow-[0_20px_60px_rgba(212,175,55,0.15)]"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom Trust Bar ── */}
      <div className="relative z-10 border-t border-white/5 bg-black/30 backdrop-blur-sm shrink-0">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: <Award className="w-4 h-4" />, label: "100% Ayurvedic" },
              { icon: <Shield className="w-4 h-4" />, label: "Made in India" },
              { icon: <Sparkles className="w-4 h-4" />, label: "Premium Herbs" },
              { icon: <Gem className="w-4 h-4" />, label: "Secure Checkout" }
            ].map((b, i) => (
              <div key={i} className="flex items-center justify-center gap-2.5 py-2.5 px-3 bg-white/[0.02] border border-white/5 rounded-xl">
                <span className="text-gold">{b.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
