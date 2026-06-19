"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, MessageCircle, Award, Shield, Sparkles, Gem, ChevronLeft, ChevronRight, Star } from "lucide-react";

const carouselImages = [
  { src: "/product.png", alt: "OjasEarth Stamina 69 Premium Combo" },
  { src: "/man.png", alt: "Peak Physical Performance and Vitality" },
  { src: "/sourcing.png", alt: "100% Pure Himalayan Sourcing" },
  { src: "/mixing.png", alt: "Authentic Ayurvedic Preparation" },
  { src: "/testing.png", alt: "Rigorous Lab Testing and Quality Standards" },
  { src: "/shilajit.png", alt: "Premium Purified Himalayan Shilajit" },
  { src: "/kesar.png", alt: "Pure Saffron (Kesar) Extract" },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#050505] flex flex-col">
      {/* ── Layered Fire Background ── */}
      <div className="absolute inset-0 fire-bg" />

      {/* Fire horse background image */}
      <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
        <Image
          src="/fire-horse.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Extra fire glow blobs */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-red-600/8 rounded-full blur-[100px] pointer-events-none" />

      {/* ── Trust Badge Top Bar ── */}
      <div className="relative z-20 border-b border-white/5 bg-black/40 backdrop-blur-sm shrink-0">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center lg:justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 overflow-x-auto">
          <span className="flex items-center gap-1.5 whitespace-nowrap"><Award className="w-3.5 h-3.5 text-gold" /> Premium Ingredients</span>
          <span className="hidden sm:flex items-center gap-1.5 whitespace-nowrap"><Sparkles className="w-3.5 h-3.5 text-gold" /> Ayurvedic Formula</span>
          <span className="hidden md:flex items-center gap-1.5 whitespace-nowrap"><Shield className="w-3.5 h-3.5 text-gold" /> Made in India</span>
          <span className="hidden lg:flex items-center gap-1.5 whitespace-nowrap"><Award className="w-3.5 h-3.5 text-gold" /> 1,248+ Reviews</span>
          <span className="hidden xl:flex items-center gap-1.5 whitespace-nowrap"><Gem className="w-3.5 h-3.5 text-gold" /> Expert Approved</span>
        </div>
      </div>

      {/* ── Main Hero Content ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

            {/* Left: Product Image Carousel (Order 1) */}
            <div className="lg:col-span-6 w-full max-w-lg mx-auto order-1">
              {/* Main Image Viewer */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden card-glow bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10 group select-none">
                {/* Arrow Navigation */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/75 border border-white/15 text-white/80 hover:text-white hover:bg-black/90 flex items-center justify-center cursor-pointer transition-all active:scale-95 z-20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/75 border border-white/15 text-white/80 hover:text-white hover:bg-black/90 flex items-center justify-center cursor-pointer transition-all active:scale-95 z-20"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Main Active Image */}
                <div className="relative w-[85%] h-[85%] transition-all duration-300">
                  <Image
                    src={carouselImages[activeIndex].src}
                    alt={carouselImages[activeIndex].alt}
                    fill
                    className="object-contain drop-shadow-[0_15px_40px_rgba(212,175,55,0.15)]"
                    priority
                  />
                </div>

                {/* Caption Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm border-t border-white/5 py-2.5 px-4 text-center">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gold/90">
                    {carouselImages[activeIndex].alt}
                  </span>
                </div>
              </div>

              {/* Thumbnails Row */}
              <div className="flex gap-2 sm:gap-2.5 mt-4 overflow-x-auto pb-2 scrollbar-hide snap-x select-none">
                {carouselImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0 border transition-all duration-200 snap-start cursor-pointer bg-black/20 ${
                      activeIndex === i
                        ? "border-gold shadow-[0_0_12px_rgba(212,175,55,0.3)] scale-102"
                        : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Flipkart/Amazon Style Product Details (Order 2) */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left order-2">
              <div className="space-y-3">
                {/* Brand / Cert Badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-gold">
                  🌿 100% Premium Ayurvedic Formula
                </span>
                
                {/* Product Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                  OjasEarth Stamina 69 <br className="hidden lg:block"/>
                  <span className="text-metallic">Premium Combo</span>
                </h1>

                {/* Rating row */}
                <div className="flex items-center justify-center lg:justify-start gap-1">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider ml-1.5">
                    4.8 (1,248+ Reviews)
                  </span>
                </div>
              </div>

              {/* Price Row */}
              <div className="price-tag rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4 justify-between max-w-md mx-auto lg:mx-0">
                <div className="text-center sm:text-left">
                  <span className="text-[10px] text-white/40 font-bold block uppercase tracking-wider mb-1">Exclusive Combo Offer</span>
                  <div className="flex items-baseline gap-2.5 justify-center sm:justify-start">
                    <span className="text-white/30 line-through text-sm font-semibold">₹1,799</span>
                    <span className="font-black text-2xl sm:text-3xl text-metallic">₹1,619</span>
                  </div>
                </div>
                <span className="price-save px-3 py-1.5 text-red-400 text-[10px] sm:text-xs font-black rounded-full uppercase tracking-wider animate-pulse whitespace-nowrap">
                  Save 10% OFF
                </span>
              </div>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start max-w-md mx-auto lg:mx-0 w-full pt-2">
                <a href="#checkout" className="btn-fire animate-glow-red w-full sm:w-auto">
                  <ShoppingCart className="w-5 h-5" /> Buy Now — ₹1,619
                </a>
                <a
                  href="https://wa.me/911234567890?text=Hi,%20I'm%20interested%20in%20OjasEarth%20Stamina%2069%20Combo"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold animate-glow-gold w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5" /> Order on WhatsApp
                </a>
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
