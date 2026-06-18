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
    comment: "I've tried different Shilajit capsules before, but the Jasearth Capsules + Oil combo is on a different level. The capsules give me clean energy during my morning gym sessions and workdays, and the oil has helped significantly with muscle recovery. Highly recommended!",
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
    <section id="reviews" className="py-20 bg-cream-dark/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-gold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Star className="w-4 h-4 fill-gold text-gold" /> Real Verified Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary">
            Customer Testimonials
          </h2>
          <p className="text-primary/70 text-sm sm:text-base">
            See how JASEARTH Stamina 69 helps our clients maintain high vitality, focus, and energy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 bg-white border border-cream-dark/50 rounded-3xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
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
      </div>
    </section>
  );
}
