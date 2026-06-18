"use client";

import { useState } from "react";
import { Menu, X, ShieldAlert } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-cream-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-gold font-bold text-lg font-display">O</span>
            </div>
            <div>
              <span className="text-primary font-bold text-lg tracking-wider font-display block leading-none">OJASEARTH</span>
              <span className="text-[10px] text-gold font-semibold tracking-widest uppercase block mt-1">Stamina 69</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-primary/80 hover:text-primary font-medium transition-colors text-sm">About</a>
            <a href="#ingredients" className="text-primary/80 hover:text-primary font-medium transition-colors text-sm">Ingredients</a>
            <a href="#how-to-use" className="text-primary/80 hover:text-primary font-medium transition-colors text-sm">How to Use</a>
            <a href="#benefits" className="text-primary/80 hover:text-primary font-medium transition-colors text-sm">Benefits</a>
            <a href="#why-choose-us" className="text-primary/80 hover:text-primary font-medium transition-colors text-sm">Why Us</a>
            <a href="#reviews" className="text-primary/80 hover:text-primary font-medium transition-colors text-sm">Reviews</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#buy-now"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary-light hover:scale-105 active:scale-95 shadow-md shadow-primary/20 transition-all duration-300"
            >
              Order Combo Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-primary hover:bg-cream-dark/50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden bg-cream border-b border-cream-dark/50 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-cream-dark/50"
          >
            About
          </a>
          <a
            href="#ingredients"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-cream-dark/50"
          >
            Ingredients
          </a>
          <a
            href="#how-to-use"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-cream-dark/50"
          >
            How to Use
          </a>
          <a
            href="#benefits"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-cream-dark/50"
          >
            Benefits
          </a>
          <a
            href="#why-choose-us"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-cream-dark/50"
          >
            Why Us
          </a>
          <a
            href="#reviews"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-cream-dark/50"
          >
            Reviews
          </a>
          <div className="pt-4 px-3">
            <a
              href="#buy-now"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-full text-base font-semibold text-white bg-primary hover:bg-primary-light shadow-md transition-all"
            >
              Order Combo Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
