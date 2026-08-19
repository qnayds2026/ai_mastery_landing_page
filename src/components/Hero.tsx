import React from "react";
import {
  Zap,
  Star,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

interface HeroProps {
  onOpenWebinar: () => void;
  onOpenVideoPreview: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWebinar }) => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200 pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pt-10 lg:pb-16">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-60 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,#000_70%,transparent_100%)]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs sm:text-sm font-bold text-blue-700 shadow-sm">
            <Zap className="w-4 h-4 fill-blue-600 text-blue-600" />

            <span>AI പഠിച്ച് അതിനെ വരുമാനത്തിനായി ഉപയോഗിക്കാം</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="mt-6  mx-auto text-[34px] sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-slate-900 leading-[1.18]">
          പണം ഇല്ലാത്തതാണോ നിങ്ങളുടെ പല പ്രശ്നങ്ങൾക്കും കാരണം?
        </h1>

        {/* Main Promise */}
        <h2 className="mt-4 text-[27px] sm:text-4xl lg:text-[42px] font-extrabold leading-[1.2] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600">
          AI ഉപയോഗിച്ച് വരുമാനം ഉണ്ടാക്കാൻ പഠിക്കാം.
        </h2>

        {/* Trust Question */}
        <p className="mt-3 text-lg sm:text-xl font-bold text-slate-800">
          വിശ്വസിക്കാൻ ബുദ്ധിമുട്ടാണോ?
          <span className="text-blue-600"> Practical ആയി കാണിച്ചുതരാം.</span>
        </p>

        {/* Supporting Copy */}
        <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          AI Poster, AI Video, AI Avatar, Content Creation, Marketing തുടങ്ങി
          practical AI skills ഒരു beginner-നും മനസ്സിലാകുന്ന രീതിയിൽ
          step-by-step ആയി പഠിക്കാം.
        </p>

        {/* Skill / Benefit Chips */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            AI Poster
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            AI Video
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            AI Avatar
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Content Creation
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Marketing
          </div>
        </div>

        {/* ================= PRICING CARD ================= */}

        <div className="mt-7 w-full max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-5 pt-10 pb-6 sm:px-8 sm:pt-9 sm:pb-7 shadow-[0_12px_40px_rgba(37,99,235,0.14)]">
            {/* Limited Offer */}
            <div className="absolute top-0 right-0">
              <div className="bg-orange-500 text-slate-950 px-5 sm:px-7 py-2 text-[11px] sm:text-sm font-black tracking-wide rounded-bl-xl shadow-md">
                🔥 LIMITED BATCH OFFER
              </div>
            </div>

            {/* Price */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                ₹0
              </span>

              <span className="text-lg sm:text-2xl font-bold text-slate-400 line-through">
                ₹5,000
              </span>

              <span className="rounded-lg bg-emerald-500 px-3 py-1.5 text-xs sm:text-sm font-black text-white shadow-sm">
                FREE
              </span>
            </div>

            {/* Price Details */}
            <p className="mt-2 text-xs sm:text-sm font-semibold text-slate-600">
              Free Registration
              <span className="text-slate-400"> • </span>
              Lifetime Access
              <span className="text-slate-400"> • </span>
              Instant WhatsApp Delivery
            </p>

            {/* CTA */}
            <button
              type="button"
              onClick={onOpenWebinar}
              className="mt-5 w-full group rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-4 flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30 hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span className="text-base sm:text-lg font-black">
                Join Free Webinar
              </span>

              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Trust */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] sm:text-sm font-semibold text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />

              <span>Free Registration</span>

              <span className="text-slate-300">•</span>

              <span>WhatsApp & YouTube Support</span>
            </div>
          </div>
        </div>

        {/* ================= SOCIAL PROOF ================= */}

        <div className="mt-7 pt-6 border-t border-slate-200 grid grid-cols-3 gap-2 sm:gap-6 max-w-4xl mx-auto">
          {/* Students */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-xl sm:text-3xl font-extrabold text-slate-900">
              10,000
              <span className="text-blue-600">+</span>
            </div>

            <p className="mt-1 text-[10px] sm:text-xs font-semibold text-slate-500">
              Enrolled Students
            </p>
          </div>

          {/* Rating */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-1">
              <span className="text-xl sm:text-3xl font-extrabold text-blue-600">
                4.6
              </span>

              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>

            <p className="mt-1 text-[10px] sm:text-xs font-semibold text-slate-500">
              Student Reviews
            </p>
          </div>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/919074871204?text=${encodeURIComponent(
              "Hi, I want to learn about the AI Masterclass. Please share the details.",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center group"
          >
            <div className="flex items-center gap-1.5 text-xl sm:text-3xl font-extrabold text-slate-900">
              <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 text-emerald-500 group-hover:scale-110 transition-transform" />

              <span>24/7</span>
            </div>

            <p className="mt-1 text-[10px] sm:text-xs font-semibold text-slate-500 group-hover:text-emerald-600">
              WhatsApp Support
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
