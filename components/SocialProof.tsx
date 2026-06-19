"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ShieldCheck, Plus, Minus, HelpCircle, ShoppingCart } from "lucide-react";

/* ── Data ── */
const testimonials = [
  { name: "Rohit S.", rating: 5, comment: "Game changer! More energy, better stamina and amazing results." },
  { name: "Vikram P.", rating: 5, comment: "I feel more confident and active throughout the day." },
  { name: "Amit V.", rating: 5, comment: "Great combination of capsules and oil. Highly recommended." },
  { name: "Sandeep Y.", rating: 5, comment: "Natural ingredients that actually work! Very satisfied." },
  { name: "Karan S.", rating: 5, comment: "Improved strength and recovery. Worth every penny." },
];

const faqs = [
  { q: "What is Stamina 69?", a: "Stamina 69 by OjasEarth is a premium wellness kit containing 60 capsules and 30ml applicator oil. It is designed synergistically to support male vitality, endurance, daily energy, and muscle recovery." },
  { q: "How should it be used?", a: "Take 2 capsules daily after meals with water or milk. For the oil, apply 5-10 drops externally onto the targeted area daily, preferably morning and night, and massage in upward strokes." },
  { q: "Who can use it?", a: "It is designed specifically for adult men who want to support active lifestyles, speed up post-workout recovery, build lean physical strength, and maintain high vitality levels." },
  { q: "How long does one bottle last?", a: "One combo pack contains 60 capsules (30-day supply) and 30ml oil, which will easily last for a full 30 days under the recommended daily application guidelines." },
  { q: "What ingredients are included?", a: "It is packed with wild-harvested Himalayan Shilajit, organic Ashwagandha, pure Saffron/Kesar, Safed Musli, Kaunch Beej, and Gokshura." },
];

export default function SocialProof() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="reviews" className="relative overflow-hidden">
      {/* ═══════════════════════════════════════════════════════
          BLOCK 1: Customer Reviews
          ═══════════════════════════════════════════════════════ */}
      <div className="ember-bg py-10 lg:py-16 border-b border-white/5">
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
          BLOCK 2: FAQ Accordion
          ═══════════════════════════════════════════════════════ */}
      <div className="fire-bg-subtle py-10 lg:py-16 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal">
          <div className="space-y-2 mb-10 text-center">
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

          {/* Bottom CTA */}
          <div className="mt-16 text-center flex items-center justify-center">
            <a href="tel:+916269696232" className="btn-fire animate-glow-red w-full sm:w-auto text-center">
              <ShoppingCart className="w-5 h-5" /> Buy Now — ₹1,619
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
