"use client";

import { useState } from "react";
import Image from "next/image";
import { CreditCard, ShoppingBag, Flame, ShoppingCart, Shield, Sparkles } from "lucide-react";

export default function Checkout() {
  const [qty, setQty] = useState(1);
  const pricePerUnit = 1619;
  const originalPrice = 1799;
  const discount = Math.round(((originalPrice - pricePerUnit) / originalPrice) * 100);

  return (
    <section id="checkout" className="fire-bg py-10 lg:py-16 relative overflow-hidden border-t border-white/5">
      {/* Background glows */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal">
        <div className="card-glow bg-[#0a0a0a] rounded-3xl p-6 sm:p-10 lg:p-14 relative overflow-hidden">
          {/* Top fire gradient bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold via-orange-500 to-red-600" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* ── Left: Product Visual + Deal Info ── */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-[0.2em]">
                <Flame className="w-3 h-3 animate-pulse" /> Best Seller Deal
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white uppercase leading-[0.95] tracking-tight">
                Ready to Experience{" "}
                <span className="text-metallic">Premium Wellness?</span>
              </h3>

              <p className="text-sm text-white/50 leading-relaxed">
                Take the first step towards a stronger, more confident you! Get the complete kit: 60 capsules, 30ml oil, and premium gift box.
              </p>

              {/* Product image */}
              <div className="relative w-full max-w-xs aspect-square mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-white/5 group">
                <Image
                  src="/product.png"
                  alt="Stamina 69 Combo Pack"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Trust badging */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-[10px] text-white/40 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><CreditCard className="w-3.5 h-3.5 text-gold" /> Secure Checkout</span>
                <span className="flex items-center gap-1.5"><ShoppingBag className="w-3.5 h-3.5 text-gold" /> 30-Day Guarantee</span>
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-gold" /> Cash on Delivery</span>
              </div>
            </div>

            {/* ── Right: Call to Order Summary Card ── */}
            <div className="lg:col-span-7 bg-[#111111] border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
              {/* Price row */}
              <div className="price-tag rounded-2xl p-5 flex flex-wrap justify-between items-center gap-3">
                <div>
                  <span className="text-[10px] text-white/40 font-bold block uppercase tracking-[0.2em] mb-1">Special Combo Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-metallic">₹{pricePerUnit * qty}</span>
                    <span className="text-sm text-white/30 line-through">₹{originalPrice * qty}</span>
                  </div>
                </div>
                <span className="price-save px-4 py-2 text-red-400 text-[11px] font-black rounded-full uppercase tracking-wider animate-pulse">
                  Save {discount}% Today
                </span>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Quantity</span>
                <div className="flex items-center border border-white/10 bg-black rounded-full overflow-hidden">
                  <button
                    onClick={() => qty > 1 && setQty(qty - 1)}
                    className="px-4 py-2 hover:bg-white/5 font-bold text-white transition-colors cursor-pointer text-sm"
                  >
                    −
                  </button>
                  <span className="px-5 py-2 font-bold text-white text-sm bg-white/[0.03] border-x border-white/5">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-4 py-2 hover:bg-white/5 font-bold text-white transition-colors cursor-pointer text-sm"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Call Details and CTA */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="text-center sm:text-left space-y-2">
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">How to Order:</h4>
                  <p className="text-[11px] text-white/50 leading-relaxed">
                    Click the button below to connect directly with our Ayurvedic support specialist. We will finalize your delivery address over the call and ship your package with Cash on Delivery (COD).
                  </p>
                </div>

                <a href="tel:+918269979897" className="btn-fire animate-glow-red w-full text-center py-5 flex items-center justify-center gap-3">
                  <ShoppingCart className="w-5 h-5" /> Buy Now — Call +91 8269979897
                </a>

                {/* Micro trust */}
                <div className="flex items-center justify-center gap-2 pt-2 text-[9px] text-white/30 font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-gold/50" />
                  Free Shipping • Cash on Delivery (COD) Available
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
