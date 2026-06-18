import Image from "next/image";
import { Sparkles } from "lucide-react";

interface Ingredient {
  name: string;
  desc: string;
  image: string;
}

const ingredients: Ingredient[] = [
  {
    name: "Gold",
    desc: "Rejuvenates and builds absolute physical strength.",
    image: "/kesar.png"
  },
  {
    name: "Shilajit",
    desc: "Boosts cellular energy, power and stamina.",
    image: "/shilajit.png"
  },
  {
    name: "Ashwagandha",
    desc: "Reduces stress hormones and improves muscle strength.",
    image: "/ashwagandha.png"
  },
  {
    name: "Safed Musli",
    desc: "Enhances vitality, active stamina and performance.",
    image: "/musli.png"
  },
  {
    name: "Kaunch Beej",
    desc: "Supports natural hormonal balance and nervous system.",
    image: "/kaunch.png"
  },
  {
    name: "Gokshura",
    desc: "Supports cellular vitality, flow, and physical endurance.",
    image: "/nilgiri.png"
  }
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-24 bg-[#060606] scroll-mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 scroll-reveal">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-gold uppercase tracking-widest flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-gold" /> Powered By Nature
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white uppercase tracking-tight">
            Ancient Ayurvedic Wisdom. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dark">
              Modern Excellence.
            </span>
          </h2>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {ingredients.map((ing, idx) => (
            <div
              key={idx}
              className="group bg-[#121212] border border-white/5 hover:border-gold/30 rounded-2xl p-4 flex flex-col justify-between items-center text-center shadow-md hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 border border-white/5 group-hover:border-gold/20 transition-all">
                <Image
                  src={ing.image}
                  alt={ing.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-1">
                <h4 className="text-sm font-black uppercase text-gold tracking-wider font-sans">{ing.name}</h4>
                <p className="text-[10px] sm:text-xs text-white/60 leading-normal font-medium px-1">
                  {ing.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-16 text-center">
          <a
            href="#buy-now"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-black text-primary bg-gold hover:bg-gold-light shadow-lg shadow-gold/50 border border-gold/40 animate-glow-gold cursor-pointer"
          >
            Order Sourced Herbal Combo
          </a>
        </div>
      </div>
    </section>
  );
}
