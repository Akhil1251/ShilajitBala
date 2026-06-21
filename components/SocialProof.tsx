"use client";

import { useState } from "react";
import { Star, Plus, Minus, ShoppingCart, Quote, ChevronDown, MessageCircle, Shield } from "lucide-react";

const testimonials = [
  {
    name: "Rohit S.",
    rating: 5,
    comment: "I was skeptical at first, but after 30 days I feel like a new man. More energy, better stamina, and my confidence is back!",
    tag: "Verified Buyer",
    initials: "RS"
  },
  {
    name: "Vikram P.",
    rating: 5,
    comment: "Game changer! The combo really works. I feel more active throughout the day and my performance has improved significantly.",
    tag: "Verified Buyer",
    initials: "VP"
  },
  {
    name: "Amit V.",
    rating: 5,
    comment: "Great combination of capsules and oil. Noticed the difference within 2 weeks. Highly recommended for anyone looking to boost vitality.",
    tag: "Verified Buyer",
    initials: "AV"
  },
  {
    name: "Sandeep Y.",
    rating: 5,
    comment: "Natural ingredients that actually work! Very satisfied with the results. My energy levels have never been better.",
    tag: "Verified Buyer",
    initials: "SY"
  },
  {
    name: "Karan S.",
    rating: 5,
    comment: "Improved strength and recovery. Worth every penny. The oil + capsule combo is perfect for complete results.",
    tag: "Verified Buyer",
    initials: "KS"
  }
];

const faqs = [
  {
    q: "Is it safe?",
    a: "Yes, Stamina 69 is 100% safe. It is made with natural Ayurvedic ingredients including Gold, Shilajit, Ashwagandha, and premium herbs. All ingredients are lab-tested and certified. No artificial chemicals or preservatives are used."
  },
  {
    q: "Any side effects?",
    a: "No side effects have been reported. Our formula uses only natural ingredients that are gentle on the body. However, if you have any pre-existing medical conditions or are on medication, we recommend consulting your doctor before use."
  },
  {
    q: "When will results show?",
    a: "Most users start noticing improvements within 7-14 days of consistent use. For optimal and long-lasting results, we recommend completing the full 30-day cycle. Results may vary based on individual body composition and lifestyle."
  },
  {
    q: "How to use?",
    a: "Take 2 capsules daily after meals with water or warm milk. Apply 5-10 drops of oil externally on the targeted area, massaging gently in upward strokes. Use morning and night for best results. Stay consistent for 30+ days."
  }
];

export default function SocialProof() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden">

      {/* ═══════════════════════════════════════════════════════
          FAQ
          ═══════════════════════════════════════════════════════ */}
      <div id="faq" className="section-padding bg-[#faf8f5] relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/[0.03] rounded-full blur-[120px]" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="scroll-reveal text-center max-w-2xl mx-auto mb-10 lg:mb-14 space-y-3">
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-dark text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <MessageCircle className="w-3 h-3" /> FAQ
            </span>
            <h2 
              className="text-[clamp(1.75rem,5vw,3.5rem)] font-black text-[#111] leading-[1.1] text-balance"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Frequently Asked{" "}
              <span className="text-metallic">Questions</span>
            </h2>
            <p className="text-sm sm:text-base text-[#555] max-w-lg mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
              Everything you need to know about Stamina 69
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="scroll-reveal space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div 
                  key={i} 
                  className={`bg-white rounded-2xl sm:rounded-3xl border transition-all duration-300 ${
                    isOpen 
                      ? "border-gold/30 shadow-[0_4px_20px_rgba(212,175,55,0.08)]" 
                      : "border-black/5 hover:border-black/10"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-3 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-gold/10" : "bg-black/[0.03]"
                      }`}>
                        <span className={`text-xs font-black transition-colors ${
                          isOpen ? "text-gold" : "text-[#888]"
                        }`}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <span 
                        className={`text-sm sm:text-base font-bold transition-colors ${
                          isOpen ? "text-[#111]" : "text-[#333]"
                        }`}
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {faq.q}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-gold/10 rotate-180" : "bg-black/[0.03]"
                    }`}>
                      <ChevronDown className={`w-4 h-4 transition-colors ${
                        isOpen ? "text-gold" : "text-[#888]"
                      }`} />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className="px-5 sm:px-7 pb-5 sm:pb-6 pt-0">
                      <div className="pl-11 border-l-2 border-gold/20 pl-4 sm:pl-11">
                        <p className="text-sm sm:text-base text-[#555] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Still have questions */}
          <div className="scroll-reveal mt-8 sm:mt-10 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gold/20 shadow-sm">
              <MessageCircle className="w-4 h-4 text-gold" />
              <span className="text-xs sm:text-sm font-bold text-[#555]" style={{ fontFamily: "var(--font-poppins)" }}>
                Still have questions?{" "}
                <a href="tel:+916269696232" className="text-gold-dark hover:text-gold underline">Call +91 6269696232</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}