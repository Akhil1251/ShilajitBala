"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ShoppingCart, CheckCircle, Sparkles, Droplets, Pill, Star, Shield, Truck, Check, X } from "lucide-react";

const ingredients = [
  {
    name: "Shilajit",
    desc: "Boosts cellular energy, power and stamina naturally.",
    image: "/shilajit.png",
    color: "from-amber-900/5 to-amber-900/10"
  },
  {
    name: "Gold Extract",
    desc: "Rejuvenates and builds absolute physical strength.",
    image: "/hero-img/gold.jpeg",
    color: "from-yellow-900/5 to-yellow-900/10"
  },
  {
    name: "African Herbs",
    desc: "Potent herbal extracts for enhanced vitality and endurance.",
    image: "/ashwagandha.png",
    color: "from-green-900/5 to-green-900/10"
  },
  {
    name: "Ashwagandha",
    desc: "Reduces stress hormones and improves muscle strength.",
    image: "/musli.png",
    color: "from-emerald-900/5 to-emerald-900/10"
  }
];

const howToSteps = [
  {
    step: "01",
    title: "Take Capsules",
    desc: "Take 2 capsules daily after meals with water or warm milk. Consistent use builds results.",
    icon: <Pill className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    step: "02",
    title: "Use Oil",
    desc: "Use 5-6 drops and massage gently before intimate moments. For external use only.",
    icon: <Droplets className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    step: "03",
    title: "Feel The Difference",
    desc: "Stay consistent for 30+ days. Experience improved energy, stamina, and confidence daily.",
    icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
  }
];

const reviews = [
  {
    name: "Rahul Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Amazing results! Within 2 weeks I felt more energetic and confident. The combo really works. Highly recommend to all men looking for natural vitality boost.",
    image: "/review/img-1.jpeg",
    tag: "Verified Buyer"
  },
  {
    name: "Amit Verma",
    location: "Delhi",
    rating: 5,
    text: "I was struggling with low energy for years. This product changed my life. Natural ingredients, no side effects. Best decision I ever made for my health.",
    image: "/review/img-2.jpeg",
    tag: "Verified Buyer"
  },
  {
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    rating: 5,
    text: "Game changer! My stamina has improved dramatically. The oil + capsule combination is perfect. My wife has also noticed the difference. Thank you!",
    image: "/review/img-3.jpeg",
    tag: "Verified Buyer"
  },
  {
    name: "Sandeep Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "100% natural and effective. I've tried many products but this is the only one that gave real results. Feeling stronger and more active every day.",
    image: "/review/img-4.jpeg",
    tag: "Verified Buyer"
  },
  {
    name: "Rajesh Kumar",
    location: "Lucknow, UP",
    rating: 5,
    text: "Outstanding quality! The gold and shilajit combination is powerful. Noticed improvement in strength and recovery within 3 weeks. Worth every rupee.",
    image: "/review/img-5.jpeg",
    tag: "Verified Buyer"
  },
  {
    name: "Deepak Joshi",
    location: "Dehradun, Uttarakhand",
    rating: 5,
    text: "Best ayurvedic product I've used. Complete package for men's health. The results speak for themselves. Already recommended to 5 of my friends!",
    image: "/review/img-6.jpeg",
    tag: "Verified Buyer"
  },
];

export default function ProductShowcase() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoTouchStartX = useRef(0);
  const videoTouchEndX = useRef(0);
  const videoIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-swap videos every 5 seconds, but only when not playing
  useEffect(() => {
    if (!isVideoPlaying) {
      videoIntervalRef.current = setInterval(() => {
        setVideoIndex((prev) => (prev + 1) % 3);
      }, 5000);
    } else {
      // Clear interval when video is playing
      if (videoIntervalRef.current) {
        clearInterval(videoIntervalRef.current);
      }
    }

    return () => {
      if (videoIntervalRef.current) {
        clearInterval(videoIntervalRef.current);
      }
    };
  }, [isVideoPlaying]);

  // Handle video play
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  // Handle video pause/stop
  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  // Handle video end
  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
    // Auto-advance to next video when current ends
    setVideoIndex((prev) => (prev + 1) % 3);
  };

  // Handle video touch swipe
  const handleVideoTouchStart = (e: React.TouchEvent) => {
    videoTouchStartX.current = e.changedTouches[0].screenX;
  };

  const handleVideoTouchEnd = (e: React.TouchEvent) => {
    videoTouchEndX.current = e.changedTouches[0].screenX;
    handleVideoSwipe();
  };

  const handleVideoSwipe = () => {
    const videos = [
      "/videos/Ankit.mp4",
      "/videos/Neha.mp4",
      "/videos/Rajiv.mp4",
    ];
    const difference = videoTouchStartX.current - videoTouchEndX.current;
    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        // Swiped left, go to next
        setVideoIndex((prev) => (prev + 1) % videos.length);
      } else {
        // Swiped right, go to previous
        setVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
      }
      // Reset video playing state when user manually swipes
      setIsVideoPlaying(false);
    }
  };
  return (
    <section id="product" className="relative overflow-hidden">
      {/* ═══════════════════════════════════════════════════════
          PRODUCT SHOWCASE
          ═══════════════════════════════════════════════════════ */}
      <div className="pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 lg:pb-10 bg-gradient-to-b from-white via-gold/[0.01] to-[#faf8f5] relative">
        {/* Decorative */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-gold/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-0 w-60 h-60 bg-gold/[0.02] rounded-full blur-[80px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="scroll-reveal text-center max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 space-y-3">
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-dark text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <Sparkles className="w-3 h-3" /> Complete Wellness System
            </span>
            <h2 
              className="text-[clamp(1.75rem,5vw,3.5rem)] font-black text-[#111] leading-[1.1] text-balance"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              One Powerful{" "}
              <span className="text-metallic">Daily Ritual</span>
            </h2>
            <p className="text-sm sm:text-base text-[#555] max-w-lg mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
              Oil + Capsules working together for complete results.
            </p>
          </div>

          {/* Product Display - Centered Banner Layout */}
          <div className="scroll-reveal flex flex-col items-center mb-12 lg:mb-16">
            {/* Animated golden glow behind image */}
            <div className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-gradient-to-br from-gold/20 via-gold/10 to-transparent rounded-full blur-[120px] pointer-events-none animate-float-slow" />
            <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-gradient-to-tl from-gold/10 via-gold/5 to-transparent rounded-full blur-[100px] pointer-events-none animate-float-slow" style={{ animationDelay: '-4s', top: '10%', right: '5%' }} />

            {/* Banner Image - full image view, no cropping */}
            <div className="relative w-[85%] sm:w-[75%] max-w-4xl aspect-auto rounded-[32px] overflow-hidden bg-gradient-to-br from-white via-gold/[0.02] to-white border border-gold/10 shadow-[0_20px_60px_rgba(212,175,55,0.12),0_8px_24px_rgba(0,0,0,0.04)] p-4 sm:p-6">
              <div className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
                <Image
                  src="/hero-img/4.jpeg"
                  alt="Stamina 69 Oil + Capsules Combo"
                  fill
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 75vw, 896px"
                  className="object-contain hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Discount Banner Overlay */}
              <div className="absolute top-0 left-0 right-0 z-20">
                {/* Red discount ribbon */}
                <div className="relative">
                  <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center gap-2 sm:gap-3 shadow-lg">
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] bg-white/20 px-2.5 py-0.5 rounded-full animate-pulse">
                      ⚡ Limited
                    </span>
                    <span className="text-xs sm:text-sm font-black text-white" style={{ fontFamily: "var(--font-poppins)" }}>
                      40% OFF
                    </span>
                    <span className="hidden sm:inline text-[10px] sm:text-xs text-red-200 line-through">
                      ₹2,999
                    </span>
                    <span className="text-xs sm:text-sm font-black text-white" style={{ fontFamily: "var(--font-poppins)" }}>
                      ₹1,619
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-yellow-300 uppercase">
                      Today Only!
                    </span>
                  </div>
                  {/* Bottom message */}
                  <div className="bg-black/80 backdrop-blur-sm text-center py-1.5 sm:py-2">
                    <span className="text-[9px] sm:text-[11px] font-bold text-white/90 tracking-[0.05em]" style={{ fontFamily: "var(--font-montserrat)" }}>
                      🔥 Don't Miss This Chance — Get Yours Now!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature badges below image - 2x2 grid */}
            <div className="w-[70%] max-w-3xl mt-6 grid grid-cols-2 gap-3">
              {[
                { icon: <Pill className="w-3.5 h-3.5" />, text: "60 Premium Herbal Capsules" },
                { icon: <Droplets className="w-3.5 h-3.5" />, text: "30ml Therapeutic Oil" },
                { icon: <Star className="w-3.5 h-3.5" />, text: "Gold & Shilajit Enriched" },
                { icon: <Shield className="w-3.5 h-3.5" />, text: "100% Natural Ayurvedic Formula" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-gold/10 shadow-[0_2px_8px_rgba(212,175,55,0.06)]">
                  <span className="text-gold shrink-0">{item.icon}</span>
                  <span className="text-[11px] sm:text-xs font-bold text-gold-dark leading-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Text + Button below badges */}
            <div className="text-center mt-8 space-y-5">
              <h3 
                className="text-xl sm:text-2xl font-bold text-[#111]"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Oil + Capsules Working Together
              </h3>
              <a href="https://ojasearth.com/product/ojasearth-stamina-69-desirextract-combocapsule-oil/" className="btn-cta text-center btn-cta-pulse inline-flex">
                <ShoppingCart className="w-4 h-4" /> ORDER NOW — ₹1,619
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          INGREDIENTS
          ═══════════════════════════════════════════════════════ */}
      <div id="ingredients" className="pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 lg:pb-16 bg-[#faf8f5] relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/[0.03] rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="scroll-reveal text-center max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 space-y-3">
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-dark text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <Sparkles className="w-3 h-3" /> Premium Ingredients
            </span>
            <h2 
              className="text-[clamp(1.75rem,5vw,3.5rem)] font-black text-[#111] leading-[1.1] text-balance"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Nature's{" "}
              <span className="text-metallic">Finest Blend</span>
            </h2>
          </div>

          <div className="scroll-reveal grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {ingredients.map((ing, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl sm:rounded-3xl border border-black/5 hover:border-gold/30 transition-all duration-500 hover:shadow-[0_12px_48px_rgba(212,175,55,0.12)] hover:-translate-y-2 text-center overflow-hidden"
              >
                {/* Full-bleed image - no padding, fills card width */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] rounded-xl overflow-hidden bg-gradient-to-br from-gold/[0.06] to-gold/[0.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <Image
                    src={ing.image}
                    alt={ing.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain p-4 sm:p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Golden shimmer on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full z-20" style={{ transitionDuration: '1s' }} />
                </div>

                {/* Text below image */}
                <div className="px-4 sm:px-5 pb-5 sm:pb-6 pt-4">
                  <h4 
                    className="text-sm sm:text-base font-bold text-[#111] mb-1.5 group-hover:text-gold-dark transition-colors duration-300"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {ing.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#555] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                    {ing.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          COMPARISON SECTION (OJASEARTH VS OTHERS)
          ═══════════════════════════════════════════════════════ */}
      <div className="pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 lg:pb-16 bg-white relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/[0.02] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="scroll-reveal text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-3">
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-dark text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <Shield className="w-3 h-3" /> The OjasEarth Guarantee
            </span>
            <h2 
              className="text-[clamp(1.75rem,5vw,3rem)] font-black text-[#111] leading-[1.1] text-balance"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Why Ojasearth is{" "}
              <span className="text-metallic">Way Better</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#555] max-w-md mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
              Don't compromise on your health. See how our premium Ayurvedic system compares to standard market products.
            </p>
          </div>

          {/* Desktop Comparison Table (Hidden on Mobile) */}
          <div className="hidden md:block scroll-reveal overflow-hidden rounded-3xl border border-black/5 shadow-[0_8px_40px_rgba(212,175,55,0.06)] bg-white">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-[#faf8f5] border-b border-black/5">
                  <th className="p-6 text-xs font-black uppercase text-gray-400 tracking-wider w-[34%]" style={{ fontFamily: "var(--font-montserrat)" }}>Key Benefits</th>
                  <th className="p-6 text-xs font-black uppercase text-gold-dark tracking-wider w-[33%] bg-gold/[0.03] border-x border-gold/10" style={{ fontFamily: "var(--font-montserrat)" }}>
                    <div className="flex items-center gap-2">
                      <span className="bg-gradient-to-r from-gold to-gold-dark text-white text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider font-extrabold shadow-sm">Winner</span>
                      OjasEarth Stamina 69
                    </div>
                  </th>
                  <th className="p-6 text-xs font-black uppercase text-gray-500 tracking-wider w-[33%]" style={{ fontFamily: "var(--font-montserrat)" }}>Other Products</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {[
                  {
                    feature: "Premium Ingredients",
                    featureDesc: "What goes into the formula",
                    ojasearth: "Grade A Himalayan Shilajit enriched with 24K Gold Extract (Swarna Bhasma) and Ashwagandha.",
                    others: "Diluted herbal extracts, heavy metals, or low-grade raw shilajit containing impurities."
                  },
                  {
                    feature: "Dual-Action Synergy",
                    featureDesc: "How it is administered",
                    ojasearth: "Unique combo system: Capsules for internal stamina + Oil for external circulation & muscle massage.",
                    others: "Single tablets or basic capsules without targeted multi-dimensional relief."
                  },
                  {
                    feature: "100% Safe & Natural",
                    featureDesc: "Side effects and health risks",
                    ojasearth: "Pure Ayurvedic ingredients. Zero chemicals, zero steroids, zero side effects.",
                    others: "Often loaded with synthetic prescription drugs that cause headaches, high blood pressure & dependency."
                  },
                  {
                    feature: "Long-Lasting Results",
                    featureDesc: "Energy longevity and consistency",
                    ojasearth: "Nourishes the body at a cellular level, building permanent daily energy & sustained strength.",
                    others: "Temporary high followed by a massive energy crash, only offering brief surface-level boosts."
                  },
                  {
                    feature: "Certified Authentication",
                    featureDesc: "Quality standards & regulations",
                    ojasearth: "Manufactured in state-of-the-art AYUSH and GMP certified facilities. Heavily lab-tested.",
                    others: "Uncertified, mass-produced in unregulated setups with zero testing for heavy metal toxicity."
                  }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-6">
                      <h4 className="text-sm font-bold text-[#111]" style={{ fontFamily: "var(--font-poppins)" }}>{row.feature}</h4>
                      <p className="text-xs text-gray-400 mt-0.5" style={{ fontFamily: "var(--font-inter)" }}>{row.featureDesc}</p>
                    </td>
                    <td className="p-6 bg-gold/[0.02] border-x border-gold/10 relative">
                      {idx === 0 && (
                        <div className="absolute inset-x-0 -top-[1px] h-[1px] bg-gold/30" />
                      )}
                      <div className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-green-600 stroke-[3]" />
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>{row.ojasearth}</p>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex gap-3 opacity-75">
                        <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3.5 h-3.5 text-red-500 stroke-[3]" />
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>{row.others}</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card-Based Side-by-Side Comparison Layout (Perfectly Aligned) */}
          <div className="md:hidden space-y-6 scroll-reveal">
            {[
              {
                feature: "Premium Ingredients",
                ojasearth: "Grade A Himalayan Shilajit + 24K Swarna Bhasma (Gold Extract) & Ashwagandha.",
                others: "Low-grade raw shilajit, heavy metals, or diluted herbal fillers."
              },
              {
                feature: "Dual-Action Synergy",
                ojasearth: "Capsules (internal energy) + Therapeutic Oil (external blood flow/massage).",
                others: "Standard single tablets/capsules that offer incomplete relief."
              },
              {
                feature: "100% Safe & Natural",
                ojasearth: "Pure Ayurvedic ingredients. Zero steroids or chemical additives. No side effects.",
                others: "Often contains hidden chemical drugs causing high BP or headaches."
              },
              {
                feature: "Long-Lasting Results",
                ojasearth: "Nourishes cells for permanent daily stamina, vitality, and natural power.",
                others: "Temporary artificial spike followed by energy crashes and addiction."
              },
              {
                feature: "Certified Quality",
                ojasearth: "Manufactured in AYUSH & GMP-certified lab-tested facilities.",
                others: "Mass-produced in unregulated setups with zero heavy metal screening."
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl border border-black/5 shadow-[0_4px_16px_rgba(0,0,0,0.02)] overflow-hidden"
              >
                {/* Header Feature Label */}
                <div className="bg-gradient-to-r from-gray-50 to-white px-4 py-3 border-b border-black/5">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider" style={{ fontFamily: "var(--font-montserrat)" }}>
                    {item.feature}
                  </h4>
                </div>
                
                {/* Side by Side mobile columns */}
                <div className="grid grid-cols-2 divide-x divide-black/5">
                  {/* Ojasearth Box */}
                  <div className="p-4 bg-gold/[0.02]">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-green-600 stroke-[3]" />
                      </div>
                      <span className="text-[10px] font-black text-gold-dark uppercase tracking-wider" style={{ fontFamily: "var(--font-montserrat)" }}>
                        OjasEarth
                      </span>
                    </div>
                    <p className="text-[11px] font-semibold text-gray-800 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                      {item.ojasearth}
                    </p>
                  </div>
                  
                  {/* Others Box */}
                  <div className="p-4 opacity-75">
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                        <X className="w-2.5 h-2.5 text-red-500 stroke-[3]" />
                      </div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider" style={{ fontFamily: "var(--font-montserrat)" }}>
                        Others
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                      {item.others}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          VIDEO TESTIMONIALS
          ═══════════════════════════════════════════════════════ */}
      <div className="pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 lg:pb-16 bg-white relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/[0.03] rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="scroll-reveal text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 space-y-3">
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-dark text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <Star className="w-3 h-3" /> Real Results
            </span>
            <h2 
              className="text-[clamp(1.5rem,4vw,3rem)] font-black text-[#111] leading-[1.1] text-balance"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Trusted by Thousands of{" "}
              <span className="text-metallic">Satisfied Men</span>
            </h2>
          </div>

          {/* Videos - Desktop Grid / Mobile Carousel */}
          <div className="scroll-reveal hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {[
              "/videos/Ankit.mp4",
              "/videos/Neha.mp4",
              "/videos/Rajiv.mp4",
            ].map((src, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl sm:rounded-3xl border border-black/5 hover:border-gold/30 transition-all duration-500 hover:shadow-[0_12px_48px_rgba(212,175,55,0.12)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative w-full aspect-[9/16] sm:aspect-[3/4] bg-black rounded-xl overflow-hidden">
                  <video
                    src={`${src}#t=0.001`}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="auto"
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                    onEnded={handleVideoEnded}
                  />
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Video Carousel - Show one video at a time */}
          <div className="scroll-reveal md:hidden">
            <div 
              onTouchStart={handleVideoTouchStart}
              onTouchEnd={handleVideoTouchEnd}
              className="relative overflow-hidden"
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${videoIndex * 100}%)` }}
              >
                {[
                  "/videos/Ankit.mp4",
                  "/videos/Neha.mp4",
                  "/videos/Rajiv.mp4",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="min-w-full px-2"
                  >
                    <div
                      className="group bg-white rounded-2xl border border-black/5 overflow-hidden"
                    >
                      <div className="relative w-full aspect-[9/16] bg-black rounded-xl overflow-hidden">
                        <video
                          src={`${src}#t=0.001`}
                          className="w-full h-full object-cover"
                          controls
                          playsInline
                          preload="auto"
                          onPlay={handleVideoPlay}
                          onPause={handleVideoPause}
                          onEnded={handleVideoEnded}
                        />
                        {/* Bottom gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot indicators for mobile video carousel */}
            <div className="flex justify-center gap-2 mt-5">
              {["/videos/Ankit.mp4", "/videos/Neha.mp4", "/videos/Rajiv.mp4"].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setVideoIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === videoIndex
                      ? 'bg-gold w-6'
                      : 'bg-gold/30 hover:bg-gold/50'
                  }`}
                  aria-label={`Go to video ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          CUSTOMER REVIEWS
          ═══════════════════════════════════════════════════════ */}
      <div id="reviews" className="pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-12 lg:pb-16 bg-[#faf8f5] relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/[0.02] rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="scroll-reveal text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12 space-y-3">
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-dark text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <Star className="w-3 h-3" /> Genuine Reviews
            </span>
            <h2 
              className="text-[clamp(1.5rem,4vw,3rem)] font-black text-[#111] leading-[1.1] text-balance"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              What Our{" "}
              <span className="text-metallic">Indian Customers Say</span>
            </h2>
          </div>

          {/* Reviews Carousel - Desktop shows 3 at a time, Mobile shows 1 */}
          <div className="scroll-reveal relative overflow-hidden">
            {/* Desktop: 3 cards view */}
            <div className="hidden sm:block">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${(reviewIndex * (100 / 3))}%)` }}
              >
                {/* Duplicate reviews array for seamless infinite loop */}
                {[...reviews, ...reviews].map((review, i) => (
                  <div
                    key={i}
                    className="min-w-[33.333%] px-2 sm:px-2.5"
                  >
                    <div className="group bg-white rounded-2xl sm:rounded-3xl border border-black/5 hover:border-gold/30 transition-all duration-500 hover:shadow-[0_12px_48px_rgba(212,175,55,0.12)] hover:-translate-y-2 overflow-hidden h-full">
                      {/* Review image - full bleed */}
                      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-gold/[0.06] to-gold/[0.02]">
                        <Image
                          src={review.image}
                          alt={review.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Golden overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Review content */}
                      <div className="px-4 sm:px-5 pb-5 sm:pb-6 pt-4">
                        {/* Stars */}
                        <div className="flex gap-0.5 mb-2">
                          {Array.from({ length: review.rating }).map((_, j) => (
                            <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                          ))}
                        </div>

                        {/* Review text */}
                        <p className="text-xs sm:text-sm text-[#555] leading-relaxed mb-3 line-clamp-3" style={{ fontFamily: "var(--font-inter)" }}>
                          &ldquo;{review.text}&rdquo;
                        </p>

                        {/* Author info */}
                        <div className="flex items-center gap-3 pt-2 border-t border-black/5">
                          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gold/20 shrink-0">
                            <Image
                              src={review.image}
                              alt={review.name}
                              width={36}
                              height={36}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-bold text-[#111] block truncate" style={{ fontFamily: "var(--font-poppins)" }}>
                              {review.name}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] text-[#888]">{review.location}</span>
                              <span className="text-[8px] text-gold">●</span>
                              <span className="text-[9px] font-bold text-green-700 flex items-center gap-0.5">
                                <Shield className="w-2.5 h-2.5" /> {review.tag}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: 1 card view */}
            <div className="sm:hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${reviewIndex * 100}%)` }}
              >
                {reviews.map((review, i) => (
                  <div
                    key={i}
                    className="min-w-full px-0"
                  >
                    <div className="group bg-white rounded-2xl border border-black/5 overflow-hidden">
                      {/* Review image - full bleed */}
                      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-gold/[0.06] to-gold/[0.02]">
                        <Image
                          src={review.image}
                          alt={review.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Golden overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Review content */}
                      <div className="px-4 pb-5 pt-4">
                        {/* Stars */}
                        <div className="flex gap-0.5 mb-2">
                          {Array.from({ length: review.rating }).map((_, j) => (
                            <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                          ))}
                        </div>

                        {/* Review text */}
                        <p className="text-sm text-[#555] leading-relaxed mb-3" style={{ fontFamily: "var(--font-inter)" }}>
                          &ldquo;{review.text}&rdquo;
                        </p>

                        {/* Author info */}
                        <div className="flex items-center gap-3 pt-2 border-t border-black/5">
                          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gold/20 shrink-0">
                            <Image
                              src={review.image}
                              alt={review.name}
                              width={36}
                              height={36}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-bold text-[#111] block truncate" style={{ fontFamily: "var(--font-poppins)" }}>
                              {review.name}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] text-[#888]">{review.location}</span>
                              <span className="text-[8px] text-gold">●</span>
                              <span className="text-[9px] font-bold text-green-700 flex items-center gap-0.5">
                                <Shield className="w-2.5 h-2.5" /> {review.tag}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setReviewIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === reviewIndex % reviews.length
                      ? 'bg-gold w-5'
                      : 'bg-gold/30 hover:bg-gold/50'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          HOW TO USE
          ═══════════════════════════════════════════════════════ */}
      <div className="section-padding bg-white relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/[0.02] rounded-full blur-[100px]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="scroll-reveal text-center max-w-2xl mx-auto mb-10 lg:mb-14 space-y-3">
            <span 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold-dark text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <Sparkles className="w-3 h-3" /> How To Use
            </span>
            <h2 
              className="text-[clamp(1.75rem,5vw,3.5rem)] font-black text-[#111] leading-[1.1] text-balance"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Simple 3-Step{" "}
              <span className="text-metallic">Routine</span>
            </h2>
          </div>

          <div className="scroll-reveal relative">
            {/* Mobile vertical layout */}
            <div className="md:hidden space-y-0">
              {howToSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark text-white flex items-center justify-center text-sm font-black shadow-lg shrink-0 animate-step-glow`} style={{ animationDelay: `${i * 2}s` }}>
                        {step.step}
                      </div>
                      {i < howToSteps.length - 1 && (
                        <div className="w-0.5 h-16 bg-gradient-to-b from-gold/40 to-transparent" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="bg-white rounded-2xl p-5 border border-black/5 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-gold">{step.icon}</span>
                          <h4 className="text-base font-bold text-[#111]" style={{ fontFamily: "var(--font-poppins)" }}>
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-sm text-[#222] leading-relaxed font-medium" style={{ fontFamily: "var(--font-inter)" }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop horizontal layout */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
              {howToSteps.map((step, i) => (
                <div key={i} className="relative text-center">
                  <div className="bg-white rounded-3xl p-6 lg:p-8 border border-black/5 hover:border-gold/20 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(212,175,55,0.08)] hover:-translate-y-1 h-full">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-dark text-white flex items-center justify-center mx-auto mb-4 text-lg font-black shadow-lg animate-step-glow`} style={{ animationDelay: `${i * 2}s` }}>
                      {step.step}
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <span className="text-gold">{step.icon}</span>
                      <h4 className="text-lg font-bold text-[#111]" style={{ fontFamily: "var(--font-poppins)" }}>
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-sm text-[#222] leading-relaxed font-medium" style={{ fontFamily: "var(--font-inter)" }}>
                      {step.desc}
                    </p>
                  </div>
                  {/* Arrow connector with glow */}
                  {i < howToSteps.length - 1 && (
                    <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-10">
                      <div className={`w-10 h-10 rounded-full bg-white border border-gold/20 flex items-center justify-center shadow-lg animate-step-glow`} style={{ animationDelay: `${i * 2 + 1}s` }}>
                        <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
