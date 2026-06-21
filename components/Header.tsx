"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Benefits", href: "#benefits" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative w-32 sm:w-36 h-8 sm:h-9 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Stamina 69"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold text-[#555] hover:text-[#111] rounded-xl hover:bg-black/[0.03] transition-all duration-200"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+916269696232"
                className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gold-dark hover:text-gold transition-colors"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <Phone className="w-4 h-4" />
                <span>+91 6269696232</span>
              </a>
              <a
                href="https://ojasearth.com/product/ojasearth-stamina-69-desirextract-combocapsule-oil/"
                className="btn-cta text-sm px-6 py-3 btn-cta-pulse"
              >
                <ShoppingCart className="w-4 h-4" /> ORDER NOW
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:+916269696232"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold/10 text-gold hover:bg-gold/20 transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-xl hover:bg-black/5 transition-all"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5 text-[#333]" /> : <Menu className="w-5 h-5 text-[#333]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-black/5 px-4 pt-3 pb-5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-semibold text-[#555] hover:text-[#111] hover:bg-black/[0.03] transition-all"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 px-1">
              <a
                href="https://ojasearth.com/product/ojasearth-stamina-69-desirextract-combocapsule-oil/"
                onClick={() => setIsOpen(false)}
                className="btn-cta w-full text-center text-sm"
              >
                <ShoppingCart className="w-4 h-4" /> ORDER NOW — ₹1,499
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  );
}