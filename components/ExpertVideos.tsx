"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Sparkles } from "lucide-react";

interface Expert {
  name: string;
  title: string;
  image: string;
  videoUrl?: string; // Sourced by the user later
}

const experts: Expert[] = [
  {
    name: "Dr. Neha Sharma",
    title: "Ayurvedic Expert",
    image: "/neha.png"
  },
  {
    name: "Dr. Rajiv Mehta",
    title: "Wellness Consultant",
    image: "/rajiv.png"
  },
  {
    name: "Dr. Ankit Patel",
    title: "Herbal Specialist",
    image: "/ankit.png"
  }
];

export default function ExpertVideos() {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);

  return (
    <section id="experts" className="py-24 bg-[#060606] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-gold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-gold animate-pulse" /> Verified Science
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white uppercase tracking-tight">
            What Experts Say
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((exp, idx) => {
            const isPlaying = playingIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-[#121212] border border-white/5 rounded-3xl p-4 flex flex-col justify-between shadow-lg hover:border-gold/30 transition-all duration-300 group hover:translate-y-[-4px]"
              >
                {/* Video Container */}
                <div className="relative w-full aspect-[4/3] bg-black rounded-2xl overflow-hidden mb-6 border border-white/5 shadow-inner">
                  {isPlaying ? (
                    <video 
                      className="w-full h-full object-cover" 
                      controls 
                      autoPlay 
                      src={exp.videoUrl || "/placeholder-video.mp4"}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <>
                      <Image
                        src={exp.image}
                        alt={exp.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      />
                      {/* Play Overlay */}
                      <button 
                        onClick={() => setPlayingIdx(idx)}
                        className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-gold hover:bg-gold-light text-primary flex items-center justify-center shadow-lg cursor-pointer transform hover:scale-110 active:scale-95 transition-all animate-glow-gold"
                        aria-label={`Play review by ${exp.name}`}
                      >
                        <Play className="w-6 h-6 fill-primary stroke-none ml-1" />
                      </button>
                    </>
                  )}
                </div>

                {/* Info */}
                <div className="text-center pb-2">
                  <h4 className="text-lg font-black uppercase text-white font-sans">{exp.name}</h4>
                  <span className="text-xs text-gold font-bold uppercase tracking-wider block mt-0.5">{exp.title}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="mt-16 text-center">
          <a
            href="#buy-now"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-black text-primary bg-gold hover:bg-gold-light shadow-lg shadow-gold/50 border border-gold/40 animate-glow-gold cursor-pointer"
          >
            Order Certified Combo Pack
          </a>
        </div>
      </div>
    </section>
  );
}
