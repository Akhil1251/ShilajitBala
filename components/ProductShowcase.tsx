"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, ShoppingCart, Play } from "lucide-react";

const clientTestimonials = [
  { name: "Neha Sharma", title: "Verified Client", image: "/neha.png", videoUrl: "/videos/Neha.mp4" },
  { name: "Rajiv Mehta", title: "Verified Client", image: "/rajiv.png", videoUrl: "/videos/Rajiv.mp4" },
  { name: "Ankit Patel", title: "Verified Client", image: "/ankit.png", videoUrl: "/videos/Ankit.mp4" },
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
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);

  return (
    <section id="product" className="relative overflow-hidden">
      {/* ═══════════════════════════════════════════════════════
          BLOCK 1: Suno pareshaani, client ki zubaani (Testimonials)
          ═══════════════════════════════════════════════════════ */}
      <div className="fire-bg-subtle py-10 lg:py-16 border-b border-white/5 relative">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-gold uppercase tracking-[0.25em]">
              Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              Suno pareshaani, <span className="text-metallic">client ki zubaani</span>
            </h2>
          </div>

          {/* Testimonial Videos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {clientTestimonials.map((exp, i) => {
              const isPlaying = playingIdx === i;
              return (
                <div key={i} className="card-glow bg-[#0c0c0c] rounded-2xl p-4 group">
                  <div className="relative w-full aspect-[3/4] bg-black rounded-xl overflow-hidden mb-4 border border-white/5">
                    {isPlaying && exp.videoUrl ? (
                      <video className="w-full h-full object-cover" controls autoPlay src={exp.videoUrl}>
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <>
                        <Image
                          src={exp.image}
                          alt={exp.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                        />
                        <button
                          onClick={() => setPlayingIdx(i)}
                          className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-gold/90 text-black flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 active:scale-95 transition-transform animate-glow-gold z-20"
                          aria-label={`Play review by ${exp.name}`}
                        >
                          <Play className="w-5 h-5 fill-black stroke-none ml-0.5" />
                        </button>
                      </>
                    )}
                  </div>
                  <div className="text-center">
                    <h4 className="text-xs font-black uppercase text-white tracking-wider">{exp.name}</h4>
                    <span className="text-[9px] text-gold font-bold uppercase tracking-wider">{exp.title}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a href="tel:+918269979897" className="btn-fire animate-glow-red">
              <ShoppingCart className="w-5 h-5" /> Buy Now — ₹1,619
            </a>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          BLOCK 2: Ancient Ayurvedic Wisdom + Ingredients
          ═══════════════════════════════════════════════════════ */}
      <div className="ember-bg py-10 lg:py-16 border-b border-white/5 relative">
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
      <div className="fire-bg-subtle py-10 lg:py-16 relative">
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
            <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-center">
              <a href="tel:+918269979897" className="btn-fire animate-glow-red w-full sm:w-auto text-center">
                <ShoppingCart className="w-5 h-5" /> Buy Now — ₹1,619
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
