"use client";

import React, { useState, useEffect } from "react";
import { X, User, Phone, ShieldCheck, Sparkles, Loader2 } from "lucide-react";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Used for transition animations
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // Trigger after a 5-second delay
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Brief timeout to trigger the fade/scale-in transition
      setTimeout(() => setIsVisible(true), 50);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Wait for animation to finish before unmounting/hiding
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Validate name
    if (!name.trim()) {
      setErrorMsg("Kripya apna naam darj krein (Please enter your name).");
      return;
    }

    // Validate mobile number
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setErrorMsg("Kripya ek valid 10-digit mobile number darj krein.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          mobile: mobile,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit lead");
      }

      setIsSuccess(true);
      
      // Auto close after 3 seconds on success
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setIsOpen(false), 300);
      }, 3000);
    } catch (err) {
      console.error("Submission error:", err);
      // Show success anyway to not block the user, or show a friendly message. 
      // It is safer to show success so the client doesn't lose user conversion, but let's allow a retry with a gentle alert.
      setErrorMsg("Kuch error aaya. Kripya dobara try krein ya direct call krein.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative w-full max-w-md overflow-hidden rounded-3xl bg-neutral-950 border border-gold/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.2)] transition-all duration-300 transform ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Glow Effects */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 p-2 rounded-full border border-neutral-800 transition-all duration-200 z-10 cursor-pointer"
          aria-label="Close popup"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSuccess ? (
          <div className="space-y-6 relative z-10">
            {/* Header Content */}
            <div className="text-center space-y-3">
              <div className="inline-flex p-3 bg-gold/10 border border-gold/30 rounded-2xl animate-bounce">
                <Sparkles className="w-6 h-6 text-gold" />
              </div>
              
              <h3 
                className="text-lg sm:text-xl font-black text-white leading-snug"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <span className="text-metallic block text-2xl sm:text-3xl font-black mb-2">
                  पावर, जोश और टाइमिंग
                </span>
                बढ़ाने के लिए अपना नंबर दर्ज करें
              </h3>
              
              <p 
                className="text-xs text-neutral-400 font-medium"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                🔒 100% natural, safe, and completely confidential consultation.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-2">
              {/* Name Input */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                  Apna Naam (Your Name)
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-gold rounded-xl py-3 pl-11 pr-4 text-white placeholder-neutral-600 focus:outline-none transition-all duration-300 text-sm"
                  />
                </div>
              </div>

              {/* Mobile Input */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
                  Mobile Number
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-neutral-500">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[6-9][0-9]{9}"
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "");
                      setMobile(val);
                    }}
                    placeholder="98765 43210"
                    className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-gold rounded-xl py-3 pl-14 pr-4 text-white placeholder-neutral-600 focus:outline-none transition-all duration-300 text-sm font-medium tracking-wide"
                  />
                </div>
              </div>

              {/* Error Message */}
              {errorMsg && (
                <div className="text-xs text-red-500 bg-red-950/30 border border-red-900/40 px-3.5 py-2 rounded-lg text-center font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-cta btn-cta-pulse py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>GET FREE CONSULTATION NOW</span>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-8 space-y-5 relative z-10">
            <div className="inline-flex p-4 bg-emerald-950/50 border border-emerald-500/30 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <ShieldCheck className="w-12 h-12 text-emerald-400" />
            </div>
            
            <div className="space-y-2">
              <h3 
                className="text-2xl font-black text-white"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Dhanyawad! (Thank You)
              </h3>
              <p 
                className="text-sm text-neutral-300 max-w-xs mx-auto"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Aapka number safaltapurvak darj kar liya gaya hai. Hamare expert jald hi aapse contact karenge.
              </p>
            </div>

            <p className="text-[10px] text-neutral-500 animate-pulse">
              Closing this window in a few seconds...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
