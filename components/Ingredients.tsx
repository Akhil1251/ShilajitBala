import Image from "next/image";
import { Leaf, Sparkles, Flame } from "lucide-react";

interface Ingredient {
  name: string;
  hindiName: string;
  desc: string;
  role: string;
  image?: string;
  tag?: string;
}

const ingredients: Ingredient[] = [
  {
    name: "Gold Shilajit",
    hindiName: "Shilajit",
    desc: "Renowned as the ultimate rejuvenator in Ayurveda. Sourced from pristine high-altitude rocks, it delivers fulvic acid, mineral complexes, and premium gold particles to boost absolute power and stamina.",
    role: "Stamina & Energy",
    image: "/shilajit.png",
    tag: "Star Ingredient"
  },
  {
    name: "Ashwagandha",
    hindiName: "Ashwgandh",
    desc: "A powerful adaptogen that reduces cortisol (stress hormone), improves cellular recovery, increases physical strength, and boosts mental clarity and physical endurance.",
    role: "Stress relief & Power",
    image: "/ashwagandha.png",
    tag: "Recovery Booster"
  },
  {
    name: "Saffron",
    hindiName: "Kesar",
    desc: "Rich in antioxidants like crocin. Saffron boosts overall mood, supports healthy circulation, enhances vitality, and plays a key role in physical well-being.",
    role: "Mood & Circulation",
    image: "/kesar.png",
    tag: "Antioxidant Rich"
  },
  {
    name: "Safed Musli",
    hindiName: "Safeed musli",
    desc: "Often referred to as white musli, this herb acts as a natural revitalizer, boosting physical performance, promoting lean muscle growth, and reducing daily fatigue.",
    role: "Revitalizer",
  },
  {
    name: "Kaunch Beej",
    hindiName: "Kanch beej",
    desc: "Supports nervous system health, elevates mood, and aids in maintaining optimal muscle coordination, building clean physical strength.",
    role: "Muscle & Nerve Support",
  },
  {
    name: "Nilgiri",
    hindiName: "Neel giri",
    desc: "Known for its refreshing, cooling properties. Nilgiri oil helps relieve muscle soreness when applied topically and boosts absorption.",
    role: "Absorption & Healing",
  }
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-20 bg-cream scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-gold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Leaf className="w-4 h-4" /> Nature's Finest Formulation
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary">
            Key Ingredients of Stamina 69
          </h2>
          <p className="text-primary/70 text-sm sm:text-base">
            Carefully selected, premium grade Ayurvedic herbs processed using traditional methods for maximum potency and safety.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ing, idx) => (
            <div
              key={idx}
              className="group relative bg-cream-dark/20 hover:bg-primary hover:text-cream rounded-3xl p-6 border border-cream-dark/50 hover:border-primary transition-all duration-500 shadow-sm flex flex-col justify-between overflow-hidden"
            >
              {/* Background gradient decorative element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 group-hover:bg-white/5 rounded-bl-full transition-colors" />

              <div>
                {/* Visual Image if exists, else icon */}
                {ing.image ? (
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 border border-cream-dark/30 group-hover:border-white/10 shadow-inner">
                    <Image
                      src={ing.image}
                      alt={ing.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {ing.tag && (
                      <span className="absolute top-3 left-3 bg-primary group-hover:bg-gold text-gold group-hover:text-primary text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md shadow-sm">
                        {ing.tag}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 group-hover:bg-white/10 flex items-center justify-center mb-6 text-gold group-hover:text-gold-light border border-primary/10 group-hover:border-white/10 transition-colors">
                    <Flame className="w-6 h-6" />
                  </div>
                )}

                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold font-display">{ing.name}</h3>
                  <span className="text-xs opacity-60 font-semibold italic">({ing.hindiName})</span>
                </div>

                <p className="text-xs opacity-80 leading-relaxed mb-6">
                  {ing.desc}
                </p>
              </div>

              <div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-primary/5 group-hover:bg-white/10 border border-primary/10 group-hover:border-white/10 text-gold group-hover:text-gold-light">
                  {ing.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
