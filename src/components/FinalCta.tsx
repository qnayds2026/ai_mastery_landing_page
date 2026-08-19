import React from 'react';
import { ArrowRight, Zap, MessageCircle } from 'lucide-react';

interface FinalCtaProps {
  onOpenCheckout: (planId?: string) => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-900 relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-4 py-1.5 rounded-full text-xs font-bold text-blue-300 mb-6">
          <Zap className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
          AI Learning Starts Here
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
          Start Your AI Learning
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mt-1">
            Journey Today.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
          ₹0-ൽ ഒരു live AI webinar-ൽ join ചെയ്ത്, step-by-step practical AI
          strategies പഠിക്കൂ. Beginner-friendly. Malayalam support.
        </p>

        {/* Price + CTA */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 text-white">
            <span className="text-slate-400 text-sm font-medium line-through">₹5,000</span>
            <span className="text-4xl font-black">₹0</span>
          </div>

          <button
            onClick={() => onOpenCheckout('vip')}
            className="group relative overflow-hidden rounded-xl font-bold shadow-2xl shadow-blue-600/30 hover:scale-[1.03] active:scale-[0.98] transition-all cursor-pointer animate-enroll-blink"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 rounded-xl" />
            <div className="relative bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 sm:py-5 rounded-[10px] flex items-center justify-center gap-3 transition-colors">
              <span className="text-base sm:text-lg">Join Free Webinar</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <p className="text-xs text-slate-400 mt-1">
            Free registration • Webinar details sent by email and WhatsApp
          </p>
        </div>

        {/* WhatsApp fallback */}
        <div className="mt-10 pt-8 border-t border-slate-800">
          <p className="text-slate-400 text-sm mb-3">Have questions before enrolling?</p>
          <a
            href={`https://wa.me/919074871204?text=${encodeURIComponent('Hi, I want to learn about the AI Masterclass. Please share the details.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
            Chat on WhatsApp before joining
          </a>
        </div>

      </div>
    </section>
  );
};
