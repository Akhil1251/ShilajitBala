"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ShieldCheck, Play, Plus, Minus, HelpCircle, ShoppingCart, MessageCircle } from "lucide-react";

/* ── Data ── */
const testimonials = [
  { name: "Rohit S.", rating: 5, comment: "Game changer! More energy, better stamina and amazing results." },
  { name: "Vikram P.", rating: 5, comment: "I feel more confident and active throughout the day." },
  { name: "Amit V.", rating: 5, comment: "Great combination of capsules and oil. Highly recommended." },
  { name: "Sandeep Y.", rating: 5, comment: "Natural ingredients that actually work! Very satisfied." },
  { name: "Karan S.", rating: 5, comment: "Improved strength and recovery. Worth every penny." },
];

const experts = [
  { name: "Dr. Neha Sharma", title: "Ayurvedic Expert", image: "/neha.png", videoUrl: "" },
  { name: "Dr. Rajiv Mehta", title: "Wellness Consultant", image: "/rajiv.png", videoUrl: "" },
  { name: "Dr. Ankit Patel", title: "Herbal Specialist", image: "/ankit.png", videoUrl: "" },
];

const faqs = [
  { q: "What is Stamina 69?", a: "Stamina 69 by OjasEarth is a premium wellness kit containing 60 capsules and 30ml applicator oil. It is designed synergistically to support male vitality, endurance, daily energy, and muscle recovery." },
  { q: "How should it be used?", a: "Take 2 capsules daily after meals with water or milk. For the oil, apply 5-10 drops externally onto the targeted area daily, preferably morning and night, and massage in upward strokes." },
  { q: "Who can use it?", a: "It is designed specifically for adult men who want to support active lifestyles, speed up post-workout recovery, build lean physical strength, and maintain high vitality levels." },
  { q: "How long does one bottle last?", a: "One combo pack contains 60 capsules (30-day supply) and 30ml oil, which will easily last for a full 30 days under the recommended daily application guidelines." },
  { q: "What ingredients are included?", a: "It is packed with wild-harvested Himalayan Shilajit, organic Ashwagandha, pure Saffron/Kesar, Safed Musli, Kaunch Beej, and Gokshura." },
];

export default function SocialProof() {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="reviews" className="relative overflow-hidden">
      {/* ═══════════════════════════════════════════════════════
          BLOCK 1: Customer Reviews
          ═══════════════════════════════════════════════════════ */}
      <div className="ember-bg py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 pb-8 border-b border-white/5">
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-gold uppercase tracking-[0.25em]">Reviews</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Customer <span className="text-metallic">Reviews</span>
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <span className="block text-2xl font-black text-white leading-none">4.8/5</span>
                <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">1,248+ reviews</span>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial cards — horizontal scroll on mobile */}
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="card-glow bg-[#0c0c0c] rounded-2xl p-5 flex flex-col justify-between min-w-[240px] snap-start lg:min-w-0"
              >
                <div className="space-y-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-[11px] text-white/70 leading-relaxed font-medium">&quot;{t.comment}&quot;</p>
                </div>
                <div className="pt-4 border-t border-white/5 mt-5 flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase text-white">{t.name}</span>
                  <span className="inline-flex items-center gap-1 text-[8px] font-bold text-gold bg-gold/5 px-1.5 py-0.5 rounded-full border border-gold/10">
                    <ShieldCheck className="w-2.5 h-2.5" /> Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          BLOCK 2: Expert Videos + FAQ — Side by Side on Desktop
          ═══════════════════════════════════════════════════════ */}
      <div className="fire-bg-subtle py-20 lg:py-28 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left: Expert Videos */}
            <div className="lg:col-span-7 scroll-reveal">
              <div className="space-y-2 mb-10">
                <span className="text-[10px] font-bold text-gold uppercase tracking-[0.25em]">Verified Science</span>
                <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                  What Experts <span className="text-metallic">Say</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {experts.map((exp, i) => {
                  const isPlaying = playingIdx === i;
                  return (
                    <div key={i} className="card-glow bg-[#0c0c0c] rounded-2xl p-3 group">
                      <div className="relative w-full aspect-[3/4] bg-black rounded-xl overflow-hidden mb-3 border border-white/5">
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
                              className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-gold/90 text-black flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 active:scale-95 transition-transform animate-glow-gold"
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
            </div>

            {/* Right: FAQ Accordion */}
            <div className="lg:col-span-5 scroll-reveal">
              <div className="space-y-2 mb-10">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-gold uppercase tracking-[0.25em]">
                  <HelpCircle className="w-3.5 h-3.5" /> FAQ
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                  Questions<span className="text-metallic">?</span>
                </h2>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div key={i} className="card-glow bg-[#0c0c0c] rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 font-black text-white hover:text-gold transition-colors uppercase tracking-wider cursor-pointer"
                      >
                        <span className="text-[11px] leading-snug">{faq.q}</span>
                        <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-[11px] text-white/60 leading-relaxed border-t border-white/5 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
    </section>
  );
}
