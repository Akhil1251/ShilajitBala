import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-cream pt-16 pb-8 border-t border-primary-light/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center">
                <span className="text-gold font-bold text-lg font-display">O</span>
              </div>
              <div>
                <span className="text-cream font-bold text-xl tracking-wide font-display block leading-none">OjasEarth</span>
                <span className="text-[10px] text-gold font-semibold tracking-widest uppercase block mt-1">Stamina 69</span>
              </div>
            </div>
            <p className="text-xs text-cream/75 max-w-sm leading-relaxed">
              OjasEarth brings you pure, high-potency Ayurvedic solutions designed to help you achieve peak physical capability, mental clarity, and lifetime vitality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold font-display">Product Links</h4>
            <ul className="space-y-2 text-xs text-cream/70">
              <li><a href="#about" className="hover:text-gold transition-colors">About Supplement</a></li>
              <li><a href="#ingredients" className="hover:text-gold transition-colors">Key Ingredients</a></li>
              <li><a href="#how-to-use" className="hover:text-gold transition-colors">How to Use</a></li>
              <li><a href="#benefits" className="hover:text-gold transition-colors">Health Benefits</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gold font-display">Customer Support</h4>
            <ul className="space-y-2 text-xs text-cream/70">
              <li><span className="block">Email: support@ojasearth.com</span></li>
              <li><span className="block">Hours: Mon-Fri, 9:00 AM - 6:00 PM IST</span></li>
              <li><span className="block">Secure payments with SSL Encryption</span></li>
            </ul>
          </div>
        </div>

        {/* Health Disclaimer */}
        <div className="py-8 border-b border-white/10 flex flex-col sm:flex-row gap-4 items-start text-[10px] text-cream/65 leading-relaxed">
          <Shield className="w-5 h-5 text-gold shrink-0 mt-0.5" />
          <p>
            <strong>Disclaimer:</strong> The statements made regarding these products have not been evaluated by the Food and Drug Administration or any national health authority. These products are not intended to diagnose, treat, cure, or prevent any disease. The information provided on this website is for informational purposes only and is not a substitute for professional medical advice. Always consult a healthcare professional before starting any dietary supplement program.
          </p>
        </div>

        {/* Copy */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-cream/50 gap-4">
          <p>© {new Date().getFullYear()} OjasEarth. All rights reserved. Made in India.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
