import { Star, ShieldCheck } from "lucide-react";

interface Testimonial {
  name: string;
  age: number;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: "Arjun Mehta",
    age: 34,
    rating: 5,
    title: "Unbelievable stamina improvement!",
    comment: "I've tried different Shilajit capsules before, but the OjasEarth Capsules + Oil combo is on a different level. The capsules give me clean energy during my morning gym sessions and workdays, and the oil has helped significantly with muscle recovery. Highly recommended!",
    date: "2 days ago",
    verified: true
  },
  {
    name: "Rajesh K.",
    age: 41,
    rating: 5,
    title: "Clean energy all day",
    comment: "What I love most is that there are no jitters or crashes like you get with pre-workout or coffee. Just steady, sustained stamina. My metabolism feels healthier and I feel much more active throughout the day.",
    date: "1 week ago",
    verified: true
  },
  {
    name: "Vikram Singh",
    age: 29,
    rating: 4,
    title: "Great recovery oil",
    comment: "The capsules are easy to swallow and work great. The oil has a pleasant Nilgiri scent and does wonders for relieving muscle tightness after running. Knocked off one star because shipping took 4 days, but the product itself is outstanding.",
    date: "2 weeks ago",
    verified: true
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-cream-dark/20 scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-gold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Star className="w-4 h-4 fill-gold text-gold" /> Real Verified Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-gold-dark">
              Customer Testimonials
            </span>
          </h2>
          <p className="text-primary/70 text-sm sm:text-base">
            See how OjasEarth Stamina 69 helps our clients maintain high vitality, focus, and energy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 bg-white/80 backdrop-blur-md border border-cream-dark/50 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < t.rating ? "fill-gold text-gold" : "text-cream-dark"
                      }`}
                    />
                  ))}
                </div>

                <h3 className="text-base font-bold text-primary mb-2 font-display">"{t.title}"</h3>
                <p className="text-xs text-primary/70 leading-relaxed mb-6">
                  {t.comment}
                </p>
              </div>

              {/* Reviewer details */}
              <div className="pt-4 border-t border-cream-dark/50 flex items-center justify-between">
                <div>
                  <span className="block text-sm font-bold text-primary">{t.name}</span>
                  <span className="block text-[10px] text-primary/50 font-semibold">{t.age} years old • {t.date}</span>
                </div>
                {t.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary-light bg-primary/5 px-2.5 py-1 rounded-full border border-primary/5">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold" /> Verified Buy
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-16 text-center">
          <a
            href="#buy-now"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-black text-primary bg-gold hover:bg-gold-light shadow-lg shadow-gold/50 border border-gold/40 animate-blink-gold text-center cursor-pointer"
          >
            Join the Satisfied Clients Now
          </a>
        </div>
      </div>
    </section>
  );
}
