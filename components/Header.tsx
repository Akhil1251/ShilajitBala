"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ShoppingCart } from "lucide-react";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Benefits", href: "#benefits" },
  { label: "Reviews", href: "#reviews" },
  { label: "Order", href: "#checkout" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="relative w-36 h-9">
              <Image
                src="/logo.png"
                alt="JASEARTH"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/50 hover:text-white font-bold text-[11px] uppercase tracking-[0.15em] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="tel:+918269979897"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[11px] font-black text-black bg-gold hover:bg-gold-light uppercase tracking-wider transition-all shadow-md shadow-gold/20 border border-gold/30"
            >
              <ShoppingCart className="w-3.5 h-3.5" /> Buy Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-white/70 hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#080808] border-b border-white/5 px-4 pt-2 pb-5 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-bold text-white/70 hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 px-3">
            <a
              href="tel:+918269979897"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-black text-black bg-gold uppercase tracking-wider border border-gold/30"
            >
              <ShoppingCart className="w-4 h-4" /> Buy Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
