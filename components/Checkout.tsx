"use client";

import { ShoppingCart, Clock, Shield, Truck, HeadphonesIcon, Sparkles, Star, Zap, ArrowRight, CheckCircle, Phone } from "lucide-react";

export default function Checkout() {
  return (
    <section id="offer" className="section-padding bg-gradient-to-b from-[#faf8f5] via-white to-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-gold/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="scroll-reveal text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12 space-y-3">
          <span 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-dark text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <Zap className="w-3 h-3" /> Limited Time Offer
          </span>
          <h2 
            className="text-[clamp(1.75rem,5vw,3.5rem)] font-black text-[#111] leading-[1.1] text-balance"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Special{" "}
            <span className="text-metallic">Combo Pack</span>
          </h2>
          <p className="text-sm sm:text-base text-[#555] max-w-lg mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
            Get the complete wellness system at an unbeatable price
          </p>
        </div>

        {/* Premium Offer Card */}
        <div className="scroll-reveal offer-strip p-6 sm:p-8 lg:p-12 relative overflow-hidden">
          {/* Top gold gradient line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold/60 via-gold to-gold/60 via-50% to-transparent" />
          
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.02]" 
            style={{
              backgroundImage: "radial-gradient(circle at 25px 25px, #D4AF37 1.5px, transparent 1.5px)",
              backgroundSize: "50px 50px"
            }}
          />
          
          {/* Glow orbs */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-64 h-64 bg-gold/[0.04] rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-gold/[0.03] rounded-full blur-[60px]" />

          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Content */}
              <div className="text-center lg:text-left space-y-5">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
                  <Sparkles className="w-3.5 h-3.5 text-gold" />
                  <span className="text-[10px] font-bold text-gold uppercase tracking-[0.15em]">Best Seller — Premium Quality</span>
                </div>

                <h3 
                  className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Stamina 69{" "}
                  <span className="text-gold">Combo Pack</span>
                </h3>

                <p className="text-sm sm:text-base text-white/50 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                  60 Premium Herbal Capsules + 30ml Therapeutic Oil — Complete Wellness System
                </p>

                {/* Price */}
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div>
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-gold" style={{ fontFamily: "var(--font-poppins)" }}>
                      ₹1,619
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="text-base sm:text-lg text-white/30 line-through block" style={{ fontFamily: "var(--font-montserrat)" }}>
                      ₹2,499
                    </span>
                    <span className="text-sm font-bold text-green-400" style={{ fontFamily: "var(--font-montserrat)" }}>
                      Save 40% Today
                    </span>
                  </div>
                </div>

                {/* What's included */}
                <div className="space-y-2.5">
                  {[
                    "60 Premium Herbal Capsules (30-Day Supply)",
                    "30ml Therapeutic Oil with Applicator",
                    "Gold & Shilajit Enriched Formula",
                    "Free Shipping + COD Available"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                      <span className="text-xs sm:text-sm text-white/60" style={{ fontFamily: "var(--font-inter)" }}>{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-2 flex flex-col gap-3 w-full sm:w-auto">
                  <a href="https://ojasearth.com/product/ojasearth-stamina-69-desirextract-combocapsule-oil/" className="btn-cta text-base sm:text-lg px-10 py-5 sm:px-14 sm:py-6 w-full btn-cta-pulse">
                    <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" /> ORDER NOW — ₹1,619
                  </a>
                  <a href="tel:+916269696232" className="btn-cta text-base sm:text-lg px-10 py-5 sm:px-14 sm:py-6 w-full btn-cta-pulse">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" /> CALL NOW
                  </a>
                </div>
              </div>

              {/* Right: Features Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: <Truck className="w-5 h-5 sm:w-6 sm:h-6" />, title: "COD Available", desc: "Pay when you receive" },
                  { icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Fast Shipping", desc: "2-5 day delivery" },
                  { icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Secure Checkout", desc: "100% safe & secure" },
                  { icon: <HeadphonesIcon className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Customer Support", desc: "Call or WhatsApp" },
                ].map((feature, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 sm:p-5 text-center hover:bg-white/[0.05] transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <span className="text-gold">{feature.icon}</span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5" style={{ fontFamily: "var(--font-poppins)" }}>
                      {feature.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-white/40" style={{ fontFamily: "var(--font-inter)" }}>
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust bar below offer */}
        <div className="scroll-reveal mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#555]">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span className="font-semibold" style={{ fontFamily: "var(--font-montserrat)" }}>4.8/5 Rating</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="font-semibold" style={{ fontFamily: "var(--font-montserrat)" }}>30-Day Guarantee</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-gold" />
            <span className="font-semibold" style={{ fontFamily: "var(--font-montserrat)" }}>Free Shipping</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="font-semibold" style={{ fontFamily: "var(--font-montserrat)" }}>COD Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}