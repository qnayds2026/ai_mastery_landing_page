import React from "react";
import {
  Zap,
  Star,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

interface HeroProps {
  onOpenCheckout: (planId?: string) => void;
  onOpenVideoPreview: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenCheckout,
  onOpenVideoPreview,
}) => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-slate-200">
      {/* Ambient Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[100px] transform-gpu pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-indigo-100/50 rounded-full blur-[80px] transform-gpu pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-sky-100/50 rounded-full blur-[80px] transform-gpu pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-6">
          {/* Small Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-100/80 px-4 py-2 text-xs sm:text-sm font-bold text-amber-800 shadow-sm">
              <Zap className="w-4 h-4 fill-amber-700" />
              AI ഉപയോഗിച്ച് Content Create ചെയ്യൂൻ മാത്രം അല്ല...
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] max-w-4xl mx-auto">
            <span className="block">AI Skills ഉപയോഗിച്ച്</span>

            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600">
              Income ഉണ്ടാക്കാൻ
            </span>

            <span className="block mt-2">പഠിക്കൂ.</span>
          </h1>

          {/* Supporting Message */}
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-lg sm:text-xl font-bold text-blue-600">
              ഇനി AI പഠിക്കുന്നത് വെറുതെയാകരുത് — practical ആയി ഉപയോഗിക്കാൻ
              പഠിക്കാം.
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              AI Poster, AI Video, AI Avatar, Content Creation, Marketing &amp;
              Practical AI Skills — ഒരു beginner-നും step-by-step ആയി
              പഠിക്കാവുന്ന structured program.
            </p>
          </div>

          {/* Quick Benefits */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-4">
            <div className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50/60 px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              100% Practical Sessions
            </div>

            <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50/60 px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              100% Money-Back Guarantee
            </div>

            <div className="inline-flex items-center gap-2 rounded-lg border border-purple-200 bg-purple-50/60 px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              WhatsApp & YouTube Mentoring
            </div>
          </div>

          {/* Price + CTA */}
          <div className="relative mt-6 w-full max-w-2xl mx-auto">
            {/* Pricing Card */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-5 py-6 sm:px-8 sm:py-7 shadow-[0_10px_35px_rgba(37,99,235,0.12)]">
              {/* Top Right Offer Badge */}
              <div className="absolute top-0 right-0 overflow-hidden">
                <div className="bg-orange-500 text-slate-950 px-5 sm:px-7 py-2 text-xs sm:text-sm font-black tracking-wide rounded-bl-xl shadow-md">
                  🔥 LIMITED BATCH OFFER
                </div>
              </div>

              {/* Price */}
              <div className="pt-4 sm:pt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                  ₹1,499
                </span>

                <span className="text-xl sm:text-2xl font-bold text-slate-400 line-through">
                  ₹4,999
                </span>

                <span className="inline-flex items-center rounded-lg bg-emerald-500 px-3 py-1.5 text-xs sm:text-sm font-black text-white shadow-sm">
                  70% OFF
                </span>
              </div>

              {/* Offer Details */}
              <p className="mt-2 text-center text-sm sm:text-base font-semibold text-slate-600">
                One-Time Fee <span className="text-slate-400">•</span> Lifetime
                Access <span className="text-slate-400">•</span> Instant
                WhatsApp Delivery
              </p>

              {/* CTA */}
              <div className="mt-6">
                <button
                  onClick={() => onOpenCheckout("vip")}
                  className="w-full relative group overflow-hidden rounded-2xl p-[2px] font-bold shadow-xl shadow-blue-600/25 hover:scale-[1.015] active:scale-[0.98] transition-all cursor-pointer animate-pulse-blink"
                >
                  {/* Animated Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 rounded-2xl" />

                  {/* Button */}
                  <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-4 sm:py-5 rounded-[14px] flex items-center justify-center gap-3 transition-all">
                    <span className="text-lg sm:text-xl font-black">
                      🚀 Start Learning AI Now
                    </span>

                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </button>
              </div>

              {/* Trust / Support */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs sm:text-sm font-semibold text-slate-600">
                <span className="text-emerald-600 font-bold">✓</span>

                <span>100% Income Money-Back Guarantee</span>

                <span className="text-slate-300 hidden sm:inline">•</span>

                <span>WhatsApp & YouTube Support</span>
              </div>
            </div>
          </div>
          {/* Social Proof */}
          <div className="pt-7 mt-2 border-t border-slate-200/80 grid grid-cols-3 gap-2 sm:gap-6 text-center max-w-4xl mx-auto">
            {/* Students */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-xl sm:text-3xl font-extrabold text-slate-900 flex items-center justify-center">
                <span>10,000</span>
                <span className="text-blue-600">+</span>
              </div>

              <div className="text-[10px] sm:text-xs text-slate-500 font-semibold mt-1 leading-tight">
                Enrolled Students
              </div>
            </div>

            {/* Rating */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-xl sm:text-3xl font-extrabold text-blue-600 flex items-center justify-center gap-1">
                <span>4.6</span>

                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>

              <div className="text-[10px] sm:text-xs text-slate-500 font-semibold mt-1 leading-tight">
                Verified Reviews
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/919074871204?text=${encodeURIComponent(
                "Hi, I want to learn about the AI Money Making Course. Please share the details.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center group cursor-pointer hover:opacity-90 transition-opacity"
            >
              <div className="text-xl sm:text-3xl font-extrabold text-slate-900 flex items-center justify-center gap-1 sm:gap-1.5">
                <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7 text-emerald-500 fill-emerald-500/10 shrink-0 group-hover:scale-110 transition-transform" />

                <span>24/7</span>
              </div>

              <div className="text-[10px] sm:text-xs text-slate-500 font-semibold mt-1 leading-tight group-hover:text-emerald-600">
                WhatsApp Support
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
