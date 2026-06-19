import Image from "next/image";
import { Shield, CreditCard, Award, Sparkles, Gem } from "lucide-react";

const badges = [
  { icon: <CreditCard className="w-3.5 h-3.5" />, label: "Secure Checkout" },
  { icon: <Shield className="w-3.5 h-3.5" />, label: "Cash on Delivery" },
  { icon: <Award className="w-3.5 h-3.5" />, label: "Made in India" },
  { icon: <Sparkles className="w-3.5 h-3.5" />, label: "Premium Quality" },
  { icon: <Gem className="w-3.5 h-3.5" />, label: "Ayurvedic Formula" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      {/* Trust badge bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {badges.map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
              <span className="text-gold/50">{b.icon}</span>
              {b.label}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-white/20 font-semibold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <div className="relative w-24 h-6">
                <Image
                  src="/logo.png"
                  alt="JASEARTH"
                  fill
                  className="object-contain object-left opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
            <p>© {new Date().getFullYear()} OjasEarth. All rights reserved.</p>
            <a
              href="mailto:support@ojasearth.com"
              className="hover:text-white/40 transition-colors"
            >
              support@ojasearth.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
