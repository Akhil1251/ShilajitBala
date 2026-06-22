import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/5">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Mobile: Stacked vertical layout */}
        <div className="sm:hidden space-y-4">
          {/* Features */}
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-gold/[0.03] border border-gold/10">
              <p className="text-sm font-bold text-[#111] mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                ✓ COD Available
              </p>
              <p className="text-xs text-[#666]" style={{ fontFamily: "var(--font-inter)" }}>
                Pay when you receive your order
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gold/[0.03] border border-gold/10">
              <p className="text-sm font-bold text-[#111] mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                ✓ Fast Shipping
              </p>
              <p className="text-xs text-[#666]" style={{ fontFamily: "var(--font-inter)" }}>
                2-5 business days delivery across India
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gold/[0.03] border border-gold/10">
              <p className="text-sm font-bold text-[#111] mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                ✓ Secure Checkout
              </p>
              <p className="text-xs text-[#666]" style={{ fontFamily: "var(--font-inter)" }}>
                100% secure and protected transactions
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gold/[0.03] border border-gold/10">
              <p className="text-sm font-bold text-[#111] mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                ✓ Customer Support
              </p>
              <p className="text-xs text-[#666]" style={{ fontFamily: "var(--font-inter)" }}>
                Call or WhatsApp us anytime
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="border-t border-gold/20 pt-4 flex justify-center">
            <a
              href="tel:+916269696232"
              className="flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-500 transition-colors animate-pulse"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <div className="w-8 h-8 rounded-full bg-red-600/10 border border-red-600/20 flex items-center justify-center shadow-[0_0_10px_rgba(229,57,53,0.3)] shrink-0">
                <Phone className="w-4 h-4 text-red-600 fill-red-600" />
              </div>
              <span>Contact Us: +91 6269696232</span>
            </a>
          </div>

          {/* Rights */}
          <div className="border-t border-gold/20 pt-4 text-center">
            <p className="text-xs text-[#888]" style={{ fontFamily: "var(--font-inter)" }}>
              © {new Date().getFullYear()} <span className="font-bold text-[#555]">Stamina 69</span> by OjasEarth. All rights reserved.
            </p>
          </div>
        </div>

        {/* Tablet & Desktop: Grid layout */}
        <div className="hidden sm:block">
          {/* Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-5 rounded-2xl bg-gold/[0.03] border border-gold/10 hover:bg-gold/[0.05] transition-all">
              <p className="text-sm font-bold text-[#111] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                ✓ COD Available
              </p>
              <p className="text-xs text-[#666]" style={{ fontFamily: "var(--font-inter)" }}>
                Pay when you receive your order
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-gold/[0.03] border border-gold/10 hover:bg-gold/[0.05] transition-all">
              <p className="text-sm font-bold text-[#111] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                ✓ Fast Shipping
              </p>
              <p className="text-xs text-[#666]" style={{ fontFamily: "var(--font-inter)" }}>
                2-5 business days delivery across India
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-gold/[0.03] border border-gold/10 hover:bg-gold/[0.05] transition-all">
              <p className="text-sm font-bold text-[#111] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                ✓ Secure Checkout
              </p>
              <p className="text-xs text-[#666]" style={{ fontFamily: "var(--font-inter)" }}>
                100% secure and protected transactions
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-gold/[0.03] border border-gold/10 hover:bg-gold/[0.05] transition-all">
              <p className="text-sm font-bold text-[#111] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                ✓ Customer Support
              </p>
              <p className="text-xs text-[#666]" style={{ fontFamily: "var(--font-inter)" }}>
                Call or WhatsApp us anytime
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="gold-divider mb-6" />

          {/* Footer Bottom */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Rights and Contact */}
            <p className="text-xs sm:text-sm text-[#888] font-medium" style={{ fontFamily: "var(--font-inter)" }}>
              © {new Date().getFullYear()} <span className="font-bold text-[#555]">Stamina 69</span> by OjasEarth. All rights reserved.
            </p>

            {/* Contact Info */}
            <a
              href="tel:+916269696232"
              className="flex items-center gap-2 text-xs sm:text-sm font-bold text-red-600 hover:text-red-500 transition-colors animate-pulse"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <div className="w-8 h-8 rounded-full bg-red-600/10 border border-red-600/20 flex items-center justify-center shadow-[0_0_10px_rgba(229,57,53,0.3)] shrink-0">
                <Phone className="w-4 h-4 text-red-600 fill-red-600" />
              </div>
              <span>Contact Us: +91 6269696232</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}