import { Shield, Sparkles, HeartHandshake, EyeOff } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "100% Pure & Organic",
      desc: "Contains only natural Himalayan Shilajit, organic Ashwagandha, and pure Saffron. Zero synthetic binders, chemicals, or artificial fillers.",
      icon: <Shield className="w-6 h-6 text-gold" />
    },
    {
      title: "The Ultimate Synergy",
      desc: "Most brands only offer capsules or oils. JASEARTH offers both together, targeting inner cellular energy and outer muscle relief simultaneously.",
      icon: <Sparkles className="w-6 h-6 text-gold" />
    },
    {
      title: "GMP Certified & Lab Tested",
      desc: "Manufactured in a certified state-of-the-art facility. Every batch undergoes rigorous quality controls and purity testing.",
      icon: <HeartHandshake className="w-6 h-6 text-gold" />
    },
    {
      title: "Discreet Delivery",
      desc: "We value your privacy. All orders are packed securely and delivered in plain, unmarked packages to your doorstep.",
      icon: <EyeOff className="w-6 h-6 text-gold" />
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-cream scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Visual Text Panel */}
          <div className="lg:col-span-5 bg-primary text-cream p-8 sm:p-12 rounded-3xl border border-primary-light/10 space-y-6">
            <span className="text-xs text-gold font-bold uppercase tracking-widest">Trust & Quality</span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-cream">
              Why Choose JASEARTH Stamina 69?
            </h2>
            <p className="text-sm text-cream/80 leading-relaxed">
              At JASEARTH, we believe that true vitality comes from nature. Stamina 69 is developed by combining ancient Ayurvedic wisdom with modern extraction techniques to ensure premium strength, safety, and results.
            </p>
            <div className="pt-4 border-t border-white/10 space-y-3 text-xs text-cream/70">
              <p>✓ ISO 9001:2015 Quality Management Certified</p>
              <p>✓ 100% Cruelty-Free & Sustainable Sourcing</p>
              <p>✓ Proudly Made from Locally Harvested Herbs</p>
            </div>
          </div>

          {/* Right Side: Bullet Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((p, idx) => (
              <div
                key={idx}
                className="p-6 bg-cream-dark/20 border border-cream-dark/50 rounded-2xl flex flex-col justify-between hover:bg-cream-dark/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6">
                  {p.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold font-display text-primary">{p.title}</h3>
                  <p className="text-xs text-primary/70 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
