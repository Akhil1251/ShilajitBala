"use client";

import { useState } from "react";
import Image from "next/image";
import { CreditCard, ShoppingBag, Flame, MessageCircle, ShoppingCart, Shield, Sparkles } from "lucide-react";

export default function Checkout() {
  const [qty, setQty] = useState(1);
  const pricePerUnit = 1619;
  const originalPrice = 1799;
  const discount = Math.round(((originalPrice - pricePerUnit) / originalPrice) * 100);

  return (
    <section id="checkout" className="fire-bg py-20 lg:py-28 relative overflow-hidden border-t border-white/5">
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

            {/* ── Right: Order Form ── */}
            <div className="lg:col-span-7 bg-[#111111] border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
              {/* Price row */}
              <div className="flex flex-wrap justify-between items-baseline gap-3 pb-5 border-b border-white/5">
                <div>
                  <span className="text-[10px] text-white/40 font-bold block uppercase tracking-[0.2em]">Special Combo Price</span>
                  <span className="text-3xl font-black text-white">₹{pricePerUnit * qty}</span>
                  <span className="text-xs text-white/30 line-through ml-2">₹{originalPrice * qty}</span>
                </div>
                <div className="bg-red-600/15 border border-red-600/20 text-red-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Save {discount}% Today
                </div>
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

              {/* Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Order placed successfully! (Demo)");
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-[10px] font-bold text-white/50 uppercase mb-1.5 tracking-wider">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-white/8 bg-black/50 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold/40 transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-white/50 uppercase mb-1.5 tracking-wider">Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="Phone number"
                      className="w-full px-4 py-3 rounded-xl border border-white/8 bg-black/50 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-white/50 uppercase mb-1.5 tracking-wider">Pincode</label>
                    <input
                      type="text"
                      required
                      placeholder="6-digit PIN"
                      className="w-full px-4 py-3 rounded-xl border border-white/8 bg-black/50 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold/40 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-white/50 uppercase mb-1.5 tracking-wider">Address</label>
                  <textarea
                    required
                    rows={2}
                    placeholder="Full delivery address"
                    className="w-full px-4 py-3 rounded-xl border border-white/8 bg-black/50 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                  />
                </div>

                {/* Dual CTA buttons */}
                <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button type="submit" className="btn-fire animate-glow-red w-full">
                    <ShoppingCart className="w-5 h-5" /> Order Now
                  </button>
                  <a
                    href="https://wa.me/911234567890?text=Hi,%20I'm%20interested%20in%20OjasEarth%20Stamina%2069%20Combo"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gold animate-glow-gold w-full text-center"
                  >
                    <MessageCircle className="w-5 h-5" /> WhatsApp Order
                  </a>
                </div>

                {/* Micro trust */}
                <div className="flex items-center justify-center gap-2 pt-2 text-[9px] text-white/30 font-semibold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-gold/50" />
                  Cash on Delivery Available • Free Shipping
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
