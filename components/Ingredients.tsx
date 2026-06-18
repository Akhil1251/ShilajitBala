import Image from "next/image";
import { Leaf } from "lucide-react";

interface Ingredient {
  name: string;
  hindiName: string;
  desc: string;
  role: string;
  image: string;
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
    image: "/musli.png",
    tag: "Vitality Support"
  },
  {
    name: "Kaunch Beej",
    hindiName: "Kanch beej",
    desc: "Supports nervous system health, elevates mood, and aids in maintaining optimal muscle coordination, building clean physical strength.",
    role: "Muscle & Nerve Support",
    image: "/kaunch.png",
    tag: "Nerve Tonic"
  },
  {
    name: "Nilgiri",
    hindiName: "Neel giri",
    desc: "Known for its refreshing, cooling properties. Nilgiri oil helps relieve muscle soreness when applied topically and boosts absorption.",
    role: "Absorption & Healing",
    image: "/nilgiri.png",
    tag: "Topical Reliever"
  }
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-24 bg-cream scroll-mt-20 relative overflow-hidden">
      {/* Subtle backdrop decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-gold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Leaf className="w-4 h-4" /> Nature's Finest Formulation
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary">
            Key Ingredients of Stamina 69
          </h2>
          <p className="text-primary/70 text-sm sm:text-base">
            OjasEarth sources only premium grade, certified organic ingredients processed under GMP standards to guarantee potencies.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ing, idx) => (
            <div
              key={idx}
              className="group relative bg-white/60 backdrop-blur-md hover:bg-primary hover:text-cream rounded-3xl p-6 border border-cream-dark/50 hover:border-primary transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden"
            >
              {/* Background gradient decorative element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 group-hover:bg-white/5 rounded-bl-full transition-colors" />

              <div>
                {/* Visual Image */}
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

        {/* Section CTA */}
        <div className="mt-16 text-center">
          <a
            href="#buy-now"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-full text-base font-bold text-white bg-primary hover:bg-primary-light hover:scale-105 active:scale-95 shadow-md shadow-primary/20 transition-all duration-300 border border-gold/10"
          >
            Order OjasEarth Supplement Combo
          </a>
        </div>
      </div>
    </section>
  );
}
