"use client";

import { useState, useEffect, useRef } from "react";
import { Zap, Heart, Flame, Leaf, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "All Day Energy",
    desc: "Feel energized from morning to night. Our natural formula supports sustained vitality without crashes or jitters.",
    color: "from-amber-50 to-amber-100/50",
    border: "border-amber-200/30",
    iconBg: "bg-amber-50",
    iconBorder: "border-amber-200/40"
  },
  {
    icon: <Heart className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Improved Stamina",
    desc: "Boost your physical endurance and performance. Experience longer-lasting energy for workouts and daily activities.",
    color: "from-rose-50 to-rose-100/50",
    border: "border-rose-200/30",
    iconBg: "bg-rose-50",
    iconBorder: "border-rose-200/40"
  },
  {
    icon: <Flame className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Better Performance",
    desc: "Enhance your overall vitality and confidence. Support healthy hormone levels and natural strength.",
    color: "from-orange-50 to-orange-100/50",
    border: "border-orange-200/30",
    iconBg: "bg-orange-50",
    iconBorder: "border-orange-200/40"
  },
  {
    icon: <Leaf className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Herbal Formula",
    desc: "100% natural Ayurvedic blend with Gold, Shilajit, Ashwagandha and premium herbs. No chemicals, no additives.",
    color: "from-emerald-50 to-emerald-100/50",
    border: "border-emerald-200/30",
    iconBg: "bg-emerald-50",
    iconBorder: "border-emerald-200/40"
  }
];

export default function BenefitsGuide() {
  const [benefitIndex, setBenefitIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-swap every 4 seconds on mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setBenefitIndex((prev) => (prev + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const difference = touchStartX.current - touchEndX.current;
    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        // Swiped left, go to next
        setBenefitIndex((prev) => (prev + 1) % benefits.length);
      } else {
        // Swiped right, go to previous
        setBenefitIndex((prev) => (prev - 1 + benefits.length) % benefits.length);
      }
    }
  };

  return (
    <section id="benefits" className="section-padding bg-gradient-to-b from-white via-gold/[0.01] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-gold/[0.02] rounded-full blur-[80px]" />
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-gold/[0.02] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14 space-y-3">
          <span 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-dark text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            <Zap className="w-3 h-3" /> Why Men Choose Stamina 69
          </span>
          <h2 
            className="text-[clamp(1.75rem,5vw,3.5rem)] font-black text-[#111] leading-[1.1] text-balance"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Designed for{" "}
            <span className="text-metallic">Peak Performance</span>
          </h2>
          <p className="text-sm sm:text-base text-[#555] max-w-lg mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
            Thousands of men trust our premium herbal formula for their daily vitality needs.
          </p>
        </div>

        {/* Benefits Grid - Desktop / Mobile Carousel */}
        <div 
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
        >
          {benefits.map((benefit, i) => (
            <div 
              key={i} 
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-black/5 hover:border-gold/20 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(212,175,55,0.08)] hover:-translate-y-1 scroll-reveal"
            >
              {/* Subtle gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-b ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${benefit.iconBg} border ${benefit.iconBorder} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-500`}>
                  <span className="text-gold-dark">{benefit.icon}</span>
                </div>
                
                {/* Content */}
                <h3 
                  className="text-base sm:text-lg font-bold text-[#111] mb-2 sm:mb-3"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                  {benefit.desc}
                </p>
                
                {/* Hover indicator */}
                <div className="mt-4 flex items-center gap-1 text-gold/0 group-hover:text-gold transition-all duration-500">
                  <span className="text-[10px] font-bold uppercase tracking-wider">Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel - Show one card at a time */}
        <div className="sm:hidden">
          <div
            className="overflow-hidden"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${benefitIndex * 100}%)` }}
            >
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="min-w-full px-2"
                >
                  <div 
                    className="group relative bg-white rounded-2xl p-5 border border-black/5 hover:border-gold/20 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(212,175,55,0.08)]"
                  >
                    {/* Subtle gradient overlay on hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-2xl ${benefit.iconBg} border ${benefit.iconBorder} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                        <span className="text-gold-dark">{benefit.icon}</span>
                      </div>
                      
                      {/* Content */}
                      <h3 
                        className="text-base font-bold text-[#111] mb-2"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                        {benefit.desc}
                      </p>
                      
                      {/* Hover indicator */}
                      <div className="mt-4 flex items-center gap-1 text-gold/0 group-hover:text-gold transition-all duration-500">
                        <span className="text-[10px] font-bold uppercase tracking-wider">Learn more</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators for mobile carousel */}
          <div className="flex justify-center gap-2 mt-5">
            {benefits.map((_, i) => (
              <button
                key={i}
                onClick={() => setBenefitIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === benefitIndex
                    ? 'bg-gold w-6'
                    : 'bg-gold/30 hover:bg-gold/50'
                }`}
                aria-label={`Go to benefit ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 scroll-reveal">
          {[
            { number: "10,000+", label: "Happy Men" },
            { number: "4.8/5", label: "Average Rating" },
            { number: "100%", label: "Natural Formula" },
            { number: "30 Day", label: "Money Back" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 sm:p-5 rounded-2xl bg-gold/[0.03] border border-gold/10">
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-gold-dark" style={{ fontFamily: "var(--font-poppins)" }}>
                {stat.number}
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-[#555] uppercase tracking-wider mt-1" style={{ fontFamily: "var(--font-montserrat)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}