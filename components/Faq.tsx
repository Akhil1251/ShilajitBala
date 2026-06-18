"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "What is Stamina 69?",
    a: "Stamina 69 by OjasEarth is a premium wellness kit containing 60 capsules and 30ml applicator oil. It is designed synergistically to support male vitality, endurance, daily energy, and muscle recovery."
  },
  {
    q: "How should it be used?",
    a: "Take 2 capsules daily after meals with water or milk. For the oil, apply 5-10 drops externally onto the targeted area daily, preferably morning and night, and massage in upward strokes."
  },
  {
    q: "Who can use it?",
    a: "It is designed specifically for adult men who want to support active lifestyles, speed up post-workout recovery, build lean physical strength, and maintain high vitality levels."
  },
  {
    q: "How long does one bottle last?",
    a: "One combo pack contains 60 capsules (30-day supply) and 30ml oil, which will easily last for a full 30 days under the recommended daily application guidelines."
  },
  {
    q: "What ingredients are included?",
    a: "It is packed with wild-harvested Himalayan Shilajit, organic Ashwagandha, pure Saffron/Kesar, Safed Musli, Kaunch Beej, and Gokshura."
  }
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#060606] scroll-mt-20 relative overflow-hidden border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 scroll-reveal">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold text-gold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-gold animate-bounce" /> FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white uppercase tracking-tight">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dark">
              Questions
            </span>
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#121212] border border-white/5 rounded-2xl overflow-hidden shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-sans font-black text-white hover:text-gold transition-colors uppercase tracking-wider"
                >
                  <span className="text-sm">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-white">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
