import { Star, ShieldCheck } from "lucide-react";

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rohit Sharma",
    rating: 5,
    comment: "Game changer! More energy, better stamina and amazing results."
  },
  {
    name: "Vikram Patel",
    rating: 5,
    comment: "I feel more confident and active throughout the day."
  },
  {
    name: "Amit Verma",
    rating: 5,
    comment: "Great combination of capsules and oil. Highly recommended."
  },
  {
    name: "Sandeep Yadav",
    rating: 5,
    comment: "Natural ingredients that actually work! Very satisfied."
  },
  {
    name: "Karan Singh",
    rating: 5,
    comment: "Improved strength and recovery. Worth every penny."
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-[#0B0B0B] scroll-mt-20 relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16 pb-6 border-b border-white/5">
          <div className="md:col-span-4 space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-gold uppercase tracking-widest block">Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase tracking-tight">
              Customer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dark">
                Reviews
              </span>
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 text-center md:text-right">
            <div>
              <span className="block text-3xl font-black text-white font-sans leading-none">4.8/5</span>
              <span className="text-xs text-white/50 font-bold uppercase tracking-wider mt-1 block">Based on 1,248+ reviews</span>
            </div>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#121212] border border-white/5 hover:border-gold/20 rounded-2xl shadow-sm flex flex-col justify-between hover:translate-y-[-2px] transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-xs text-white/80 leading-relaxed font-semibold">
                  "{t.comment}"
                </p>
              </div>

              {/* Reviewer details */}
              <div className="pt-4 border-t border-white/5 mt-6 flex items-center justify-between">
                <div>
                  <span className="block text-xs font-black uppercase text-white font-sans">{t.name}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[9px] font-bold text-gold bg-gold/5 px-2 py-0.5 rounded-full border border-gold/10">
                  <ShieldCheck className="w-3 h-3 text-gold" /> Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
