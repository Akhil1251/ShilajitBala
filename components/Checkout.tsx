"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldAlert, CreditCard, ShoppingBag, Flame, Sparkles } from "lucide-react";

export default function Checkout() {
  const [qty, setQty] = useState(1);
  const pricePerUnit = 1499; // in INR
  const originalPrice = 2499;

  return (
    <section id="buy-now" className="py-20 bg-cream scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-cream-dark/50 rounded-3xl p-8 sm:p-12 shadow-md relative overflow-hidden">
          {/* Top highlight bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-gold to-primary-light" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image & Deal info */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5" /> Best Seller Deal
              </div>
              <h3 className="text-3xl font-display font-bold text-primary">
                Stamina 69 Combo Pack
              </h3>
              <p className="text-sm text-primary/75">
                Get both the JASEARTH DesireXtract Capsules (30 Capsules) and the targeted Massage Oil for complete internal & external health enhancement.
              </p>

              <div className="relative w-full max-w-sm aspect-square mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-cream-dark shadow-inner">
                <Image
                  src="/product.png"
                  alt="Stamina 69 Combo Pack"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Secure Trust badging */}
              <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-xs text-primary/60 font-semibold uppercase">
                <span className="flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-gold" /> Secure Checkout
                </span>
                <span className="flex items-center gap-1.5">
                  <ShoppingBag className="w-4 h-4 text-gold" /> 30-Day Guarantee
                </span>
              </div>
            </div>

            {/* Right Order Form */}
            <div className="lg:col-span-7 bg-cream-dark/10 border border-cream-dark/40 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex justify-between items-baseline pb-4 border-b border-cream-dark/50">
                <div>
                  <span className="text-xs text-primary/60 font-bold block">SPECIAL COMBO PRICE</span>
                  <span className="text-3xl font-black text-primary font-display">₹{pricePerUnit * qty}</span>
                  <span className="text-xs text-primary/50 line-through ml-2">₹{originalPrice * qty}</span>
                </div>
                <div className="bg-gold/10 border border-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full">
                  Save 40% Today
                </div>
              </div>

              {/* Quantity selector */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-primary">Select Quantity:</span>
                <div className="flex items-center border border-cream-dark bg-white rounded-full overflow-hidden">
                  <button
                    onClick={() => qty > 1 && setQty(qty - 1)}
                    className="px-4 py-2 hover:bg-cream-dark/50 font-bold text-primary transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 font-bold text-primary text-sm">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-4 py-2 hover:bg-cream-dark/50 font-bold text-primary transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Mock Shipping Details Form */}
              <form onSubmit={(e) => { e.preventDefault(); alert("Mock Checkout Successful! Your order has been placed (for demonstration)."); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-primary/70 uppercase mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors text-primary"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-primary/70 uppercase mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="Phone number"
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors text-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-primary/70 uppercase mb-1.5">Pincode</label>
                    <input
                      type="text"
                      required
                      placeholder="6 digit PIN code"
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors text-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary/70 uppercase mb-1.5">Delivery Address</label>
                  <textarea
                    required
                    rows={2}
                    placeholder="Enter full flat, street and locality details"
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-sm focus:outline-none focus:border-gold transition-colors text-primary resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 border border-transparent rounded-full text-base font-bold text-white bg-primary hover:bg-primary-light hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-primary/20 transition-all duration-300 cursor-pointer"
                  >
                    Place Secure Order (Cash on Delivery)
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
