"use client";

import { useState } from "react";
import Image from "next/image";
import { CreditCard, ShoppingBag, Flame, MessageCircle, ShoppingCart } from "lucide-react";

export default function Checkout() {
  const [qty, setQty] = useState(1);
  const pricePerUnit = 1619; // in INR
  const originalPrice = 1799;

  return (
    <section id="buy-now" className="py-24 bg-[#060606] scroll-mt-20 relative overflow-hidden border-t border-white/5">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal">
        <div className="bg-[#121212] border border-white/5 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-orange-500 to-red-600" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image & Deal info */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 animate-pulse" /> Best Seller Deal
              </div>
              
              <h3 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase leading-none">
                Ready to Experience <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dark">
                  Premium Wellness?
                </span>
              </h3>
              
              <p className="text-sm text-white/70 leading-relaxed font-medium">
                Take the first step towards a stronger, more confident you! Get the complete kit: 60 capsules, 30ml oil, and a premium gift box.
              </p>

              <div className="relative w-full max-w-sm aspect-square mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-white/5 shadow-inner group">
                <Image
                  src="/product.png"
                  alt="Stamina 69 Combo Pack"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Secure Trust badging */}
              <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-xs text-white/50 font-semibold uppercase">
                <span className="flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-gold" /> Secure Checkout
                </span>
                <span className="flex items-center gap-1.5">
                  <ShoppingBag className="w-4 h-4 text-gold" /> 30-Day Guarantee
                </span>
              </div>
            </div>

            {/* Right Order Form */}
            <div className="lg:col-span-7 bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex justify-between items-baseline pb-4 border-b border-white/5">
                <div>
                  <span className="text-xs text-white/50 font-bold block uppercase tracking-wider">SPECIAL COMBO PRICE</span>
                  <span className="text-3xl font-black text-white font-sans">₹{pricePerUnit * qty}</span>
                  <span className="text-xs text-white/40 line-through ml-2">₹{originalPrice * qty}</span>
                </div>
                <div className="bg-gold/10 border border-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full">
                  Save {Math.round(((originalPrice - pricePerUnit) / originalPrice) * 100)}% Today
                </div>
              </div>

              {/* Quantity selector */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white uppercase tracking-wider">Select Quantity:</span>
                <div className="flex items-center border border-white/10 bg-black rounded-full overflow-hidden shadow-sm">
                  <button
                    onClick={() => qty > 1 && setQty(qty - 1)}
                    className="px-4 py-2 hover:bg-white/5 font-bold text-white transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-bold text-white text-sm bg-white/5">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-4 py-2 hover:bg-white/5 font-bold text-white transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Mock Shipping Details Form */}
              <form onSubmit={(e) => { e.preventDefault(); alert("Mock Checkout Successful! Your order has been placed (for demonstration)."); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-white/70 uppercase mb-1.5 tracking-wider">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black text-sm text-white focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white/70 uppercase mb-1.5 tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="Phone number"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black text-sm text-white focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/70 uppercase mb-1.5 tracking-wider">Pincode</label>
                    <input
                      type="text"
                      required
                      placeholder="6 digit PIN code"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black text-sm text-white focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/70 uppercase mb-1.5 tracking-wider">Delivery Address</label>
                  <textarea
                    required
                    rows={2}
                    placeholder="Enter full address details"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-black text-sm text-white focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                {/* Blinking CTAs inside form */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-lg text-base font-black text-white bg-red-600 hover:bg-red-700 shadow-xl shadow-red-600/35 transition-all uppercase tracking-wider animate-glow-red cursor-pointer border border-red-600/20"
                  >
                    <ShoppingCart className="w-5 h-5" /> Order Now
                  </button>
                  
                  <a
                    href="https://wa.me/911234567890?text=Hi,%20I'm%20interested%20in%20OjasEarth%20Stamina%2069%20Combo"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 px-8 py-4.5 rounded-lg text-base font-bold text-gold bg-transparent border border-gold/40 hover:border-gold hover:bg-white/5 transition-all uppercase tracking-wider animate-glow-gold text-center"
                  >
                    <MessageCircle className="w-5 h-5" /> Order on Whatsapp
                  </a>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
