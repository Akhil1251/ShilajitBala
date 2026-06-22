"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ShoppingCart, CheckCircle, Star, Shield, Zap, TrendingUp, Phone } from "lucide-react";

const heroImages = [
  "/hero-img/img-1.jpeg",
  "/hero-img/img-2.jpeg",
  "/hero-img/img-3.jpeg",
  "/hero-img/img-4.jpeg",
  "/hero-img/img-5.jpeg",
  "/hero-img/img-6.jpeg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || window.innerWidth < 1024) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const glow = containerRef.current.querySelector('.parallax-glow') as HTMLElement;
      if (glow) {
        glow.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative bg-gradient-to-b from-white via-gold/[0.02] to-white overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-gold/[0.04] rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gold/[0.03] rounded-full blur-[120px] animate-float-slow" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.02] rounded-full blur-[150px]" />

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-80px)] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full pt-2 pb-8 lg:py-0">

            {/* ── Left: Content ── */}
            <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
              {/* Rating Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mx-auto lg:mx-0">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-xs font-bold text-gold-dark" style={{ fontFamily: "var(--font-montserrat)" }}>
                  4.8 · 1,248+ Reviews
                </span>
              </div>

              {/* Headline */}
              <h1 
                className="text-[clamp(2rem,8vw,4.5rem)] font-black leading-[1.05] tracking-[-0.02em] text-[#111] text-balance"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Feel Stronger.
                <br />
                Last Longer.
                <br />
                <span className="text-metallic">Live Better.</span>
              </h1>

              {/* Subheadline */}
              <p 
                className="text-base sm:text-lg text-[#555] max-w-lg mx-auto lg:mx-0 leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Premium Herbal Formula with{" "}
                <span className="font-bold text-[#111]">Gold, Shilajit & African Herbs</span>.
                100% natural ayurvedic blend for peak vitality and unstoppable energy.
              </p>

              {/* CTA + Stats Row */}
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start w-full">
                <div className="flex flex-col gap-3 w-full sm:w-auto">
                  <a href="https://ojasearth.com/product/ojasearth-stamina-69-desirextract-combocapsule-oil/" className="btn-cta text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 w-full btn-cta-pulse">
                    <ShoppingCart className="w-5 h-5" /> ORDER NOW — ₹1,619
                  </a>
                  <a href="tel:+916269696232" className="btn-cta text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-5 w-full btn-cta-pulse">
                    <Phone className="w-5 h-5" /> CALL NOW
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#555] shrink-0">
                  <div className="flex -space-x-2">
                    {[1,2,3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gold/20 border-2 border-white flex items-center justify-center">
                        <span className="text-[10px] font-bold text-gold-dark">{i}</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-semibold" style={{ fontFamily: "var(--font-montserrat)" }}>
                    10K+ Happy Customers
                  </span>
                </div>
              </div>

              {/* Trust Badges - Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 max-w-lg mx-auto lg:mx-0">
                {[
                  { icon: <CheckCircle className="w-3.5 h-3.5" />, label: "100% Natural" },
                  { icon: <Shield className="w-3.5 h-3.5" />, label: "No Side Effects" },
                  { icon: <Zap className="w-3.5 h-3.5" />, label: "Trusted By 10K+" },
                  { icon: <TrendingUp className="w-3.5 h-3.5" />, label: "COD Available" },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-gold/[0.04] border border-gold/10">
                    <span className="text-gold shrink-0">{badge.icon}</span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-gold-dark leading-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Product Visual ── */}
            <div className="relative flex items-center justify-center pt-0 pb-6 lg:py-0 order-1 lg:order-2">
              {/* Parallax glow */}
              <div className="parallax-glow absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] bg-gradient-to-br from-gold/15 via-gold/8 to-transparent rounded-full blur-[100px] transition-transform duration-300 ease-out" />

              {/* Hero Image Carousel - No up/down float, stays steady */}
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className="relative aspect-square w-full rounded-[32px] overflow-hidden bg-gradient-to-br from-gold/[0.03] via-white to-gold/[0.02] border border-gold/10 shadow-[0_20px_60px_rgba(212,175,55,0.08),0_8px_24px_rgba(0,0,0,0.04)]">
                  {heroImages.map((src, index) => (
                    <div
                      key={src}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <Image
                        src={src}
                        alt={`Hero image ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 448px"
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>

                {/* Dots indicator */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-gold w-5'
                          : 'bg-gold/30 hover:bg-gold/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Floating badges */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4">
                  <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-gold to-gold-dark text-white text-[10px] sm:text-xs font-black shadow-lg shadow-gold/30 flex items-center gap-1">
                    <Zap className="w-3 h-3" /> BEST SELLER
                  </div>
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3">
                  <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white border border-gold/20 text-gold-dark text-[10px] sm:text-xs font-bold shadow-lg flex items-center gap-1">
                    <Star className="w-3 h-3 fill-gold text-gold" /> 4.8 Rating
                  </div>
                </div>
              </div>

              {/* Under product trust bar - mobile only */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm lg:hidden">
                <div className="flex items-center justify-center gap-2 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-2xl border border-black/5 shadow-lg">
                  <span className="flex items-center gap-1 text-[9px] font-bold text-green-700">
                    <CheckCircle className="w-2.5 h-2.5" /> 100% Natural
                  </span>
                  <span className="w-px h-3 bg-black/10" />
                  <span className="flex items-center gap-1 text-[9px] font-bold text-green-700">
                    <CheckCircle className="w-2.5 h-2.5" /> COD
                  </span>
                  <span className="w-px h-3 bg-black/10" />
                  <span className="flex items-center gap-1 text-[9px] font-bold text-green-700">
                    <CheckCircle className="w-2.5 h-2.5" /> Free Shipping
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}