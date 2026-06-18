"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0B0B0B]/90 backdrop-blur-md border-b border-white/5 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border border-gold/30">
              <span className="text-gold font-bold text-lg font-display">O</span>
            </div>
            <div>
              <span className="text-white font-bold text-xl tracking-wide font-display block leading-none">OjasEarth</span>
              <span className="text-[10px] text-gold font-semibold tracking-widest uppercase block mt-1">Stamina 69</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-white/75 hover:text-white font-semibold transition-colors text-sm">Features</a>
            <a href="#ingredients" className="text-white/75 hover:text-white font-semibold transition-colors text-sm">Ingredients</a>
            <a href="#wellness-kit" className="text-white/75 hover:text-white font-semibold transition-colors text-sm">Wellness Kit</a>
            <a href="#lifestyle" className="text-white/75 hover:text-white font-semibold transition-colors text-sm">Benefits</a>
            <a href="#how-to-use" className="text-white/75 hover:text-white font-semibold transition-colors text-sm">How to Use</a>
            <a href="#reviews" className="text-white/75 hover:text-white font-semibold transition-colors text-sm">Reviews</a>
            <a href="#faq" className="text-white/75 hover:text-white font-semibold transition-colors text-sm">FAQs</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#buy-now"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-primary bg-gold hover:bg-gold-light hover:scale-105 active:scale-95 shadow-md shadow-gold/20 transition-all duration-300 border border-gold/30"
            >
              Order Combo Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#0D0D0D] border-b border-white/5 px-4 pt-2 pb-6 space-y-3 shadow-inner">
          <a
            href="#features"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-white/80 hover:bg-white/5 transition-colors"
          >
            Features
          </a>
          <a
            href="#ingredients"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-white/80 hover:bg-white/5 transition-colors"
          >
            Ingredients
          </a>
          <a
            href="#wellness-kit"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-white/80 hover:bg-white/5 transition-colors"
          >
            Wellness Kit
          </a>
          <a
            href="#lifestyle"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-white/80 hover:bg-white/5 transition-colors"
          >
            Benefits
          </a>
          <a
            href="#how-to-use"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-white/80 hover:bg-white/5 transition-colors"
          >
            How to Use
          </a>
          <a
            href="#reviews"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-white/80 hover:bg-white/5 transition-colors"
          >
            Reviews
          </a>
          <a
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-white/80 hover:bg-white/5 transition-colors"
          >
            FAQs
          </a>
          <div className="pt-4 px-3">
            <a
              href="#buy-now"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center px-6 py-3 rounded-full text-base font-bold text-primary bg-gold hover:bg-gold-light shadow-md transition-all border border-gold/30 text-center"
            >
              Order Combo Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
