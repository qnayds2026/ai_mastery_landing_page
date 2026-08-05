import React from 'react';
import { Sparkles, Zap, Star, ArrowRight, MessageCircle } from 'lucide-react';

interface HeroProps {
  onOpenCheckout: (planId?: string) => void;
  onOpenVideoPreview: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout, onOpenVideoPreview }) => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[100px] transform-gpu pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-indigo-100/50 rounded-full blur-[80px] transform-gpu pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-sky-100/50 rounded-full blur-[80px] transform-gpu pointer-events-none" />

      {/* Light Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="space-y-6">
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
            AI പഠിച്ച് വരുമാനം നേടാൻ{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600">
              തയ്യാറാണോ?
            </span>
          </h1>

          {/* Subheadline Malayalam */}
          <div className="space-y-2 max-w-2xl mx-auto">
            <p className="text-lg sm:text-xl font-bold text-blue-600">
              ഇനി അവസരങ്ങൾ നഷ്ടപ്പെടുത്തേണ്ട!
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              AI ഉപയോഗിച്ച് Content Creation, Freelancing, Digital Products, Online Income എന്നിവ എങ്ങനെ തുടങ്ങാമെന്ന് പ്രായോഗികമായി വാട്സാപ്പിലൂടെ മലയാളത്തിൽ പഠിക്കാം.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenCheckout('vip')}
              className="w-full sm:w-auto relative group overflow-hidden rounded-xl p-[2px] font-bold text-base shadow-xl shadow-blue-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer animate-enroll-blink"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl" />
              <div className="relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-[10px] flex items-center justify-center gap-3 transition-colors shadow-inner">
                <Zap className="w-5 h-5 text-blue-200 fill-blue-200" />
                <span>Enroll Today</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          {/* Social Proof Metric Counters */}
          <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-1.5 sm:gap-4 text-center px-1">
            <div className="flex flex-col items-center justify-center">
              <div className="text-lg xs:text-xl sm:text-3xl font-extrabold text-slate-900 flex items-center justify-center gap-0.5 sm:gap-1">
                <span>10,000</span><span className="text-blue-600">+</span>
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 sm:mt-1 leading-tight">Enrolled Students</div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="text-lg xs:text-xl sm:text-3xl font-extrabold text-blue-600 flex items-center justify-center gap-1">
                <span>4.6</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 sm:mt-1 leading-tight">Verified Reviews</div>
            </div>

            <a
              href={`https://wa.me/919074871204?text=${encodeURIComponent('Hi, I want to learn about the AI Money Making Course. Please share the details.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center group cursor-pointer hover:opacity-90 transition-opacity"
            >
              <div className="text-lg xs:text-xl sm:text-3xl font-extrabold text-slate-900 flex items-center justify-center gap-1 sm:gap-1.5">
                <MessageCircle className="w-4 h-4 xs:w-5 xs:h-5 sm:w-7 sm:h-7 text-emerald-500 fill-emerald-500/10 shrink-0 group-hover:scale-110 transition-transform" />
                <span>24/7</span>
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5 sm:mt-1 leading-tight group-hover:text-emerald-600">WhatsApp Support</div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
