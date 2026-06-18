"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Is OjasEarth Stamina 69 safe to use?",
    a: "Yes, absolutely. Stamina 69 is made from 100% organic, lab-tested Ayurvedic herbs. It is manufactured in a GMP-certified facility and does not contain any synthetic chemicals, binders, or fillers. If you have any chronic medical conditions, please consult your physician before starting any new dietary routine."
  },
  {
    q: "How long does it take to see noticeable results?",
    a: "While many clients notice a boost in daily energy levels and recovery within the first week, we highly recommend using the capsule and oil combo consistently for at least 4 to 6 weeks to experience the full, long-lasting stamina and metabolic benefits."
  },
  {
    q: "Why does the combo contain both capsules and oil?",
    a: "Our dual-action design provides synergy. The capsules work internally to optimize cell metabolism and energy production using Ashwagandha, Shilajit, and Kesar. The massage oil targets muscles externally, relaxing tension and enhancing local circulation and absorption of active herbs."
  },
  {
    q: "How is the Shilajit in OjasEarth purified?",
    a: "We practice traditional Ayurvedic 'Shodhana' purification. Sourced from high Himalayan altitudes, the raw resin is purified using pure water and organic herbal extractions (Triphala) to eliminate any heavy metals or impurities while preserving the vital fulvic acid content."
  },
  {
    q: "Is the shipping packaging discreet?",
    a: "Yes. We respect your privacy. All orders are shipped in unmarked, plain packaging with no mention of the product name or supplement category on the outer box. We also offer free cash on delivery across India."
  }
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-cream scroll-mt-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 scroll-reveal">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold text-gold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-gold animate-bounce" /> Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-gold-dark">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-primary/70 text-sm sm:text-base">
            Find quick answers to common questions about OjasEarth Stamina 69 combo below.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm border border-cream-dark/50 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-display font-bold text-primary hover:text-gold transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-cream-dark/30 flex items-center justify-center shrink-0 text-primary">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-primary/75 leading-relaxed border-t border-cream-dark/35 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="mt-16 text-center">
          <a
            href="#buy-now"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-black text-primary bg-gold hover:bg-gold-light shadow-lg shadow-gold/50 border border-gold/40 animate-blink-gold text-center cursor-pointer"
          >
            Ready to Buy? Order OjasEarth Combo Now
          </a>
        </div>
      </div>
    </section>
  );
}
