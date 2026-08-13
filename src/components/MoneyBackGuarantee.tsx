import React from 'react';
import { ShieldCheck, MessageCircle, Youtube, CheckCircle2, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';

interface MoneyBackGuaranteeProps {
  onOpenCheckout: (planId?: string) => void;
}

export const MoneyBackGuarantee: React.FC<MoneyBackGuaranteeProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden border-y border-blue-900/50">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Main Guarantee Card */}
        <div className="bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-blue-950/80 border-2 border-emerald-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden">
          {/* Top Badge */}
          <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 font-black text-xs px-4 py-1.5 rounded-bl-2xl shadow-md uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 fill-slate-950" /> 100% Risk Free
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            {/* Seal Graphic */}
            <div className="shrink-0 flex flex-col items-center text-center">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-emerald-300 p-1 shadow-2xl shadow-emerald-500/30 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-slate-900 border-2 border-emerald-400/50 flex flex-col items-center justify-center p-3 text-center">
                  <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-400 mb-1" />
                  <span className="text-xs sm:text-sm font-black text-white leading-tight uppercase">100% Money-Back</span>
                  <span className="text-[10px] font-bold text-emerald-300 tracking-wider uppercase">Guarantee</span>
                </div>
              </div>
            </div>

            {/* Guarantee Text Content */}
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Zero-Risk Income Guarantee
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Our 100% Income-Earning Money-Back Guarantee
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                ഞങ്ങളുടെ എല്ലാ <span className="text-emerald-400 font-bold underline underline-offset-4">step-by-step practical sessions</span>-ഉം കൃത്യമായി പിന്തുടർന്നിട്ടും നിങ്ങൾക്ക് വരുമാനം ഉണ്ടാക്കാൻ സാധിച്ചില്ലെങ്കിൽ, ഞങ്ങൾ നൽകുന്നു <span className="text-white font-black bg-emerald-600/80 px-2 py-0.5 rounded">100% Money-Back Guarantee!</span>
              </p>

              <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs sm:text-sm text-slate-300">
                <span className="flex items-center gap-1.5 font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Full Step-by-Step Sessions
                </span>
                <span className="flex items-center gap-1.5 font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Verified Income Roadmap
                </span>
                <span className="flex items-center gap-1.5 font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> 100% Refund Assurance
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Mentoring via WhatsApp & YouTube Tutorials */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* WhatsApp Mentoring Card */}
          <div className="bg-slate-800/80 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex items-start gap-4 hover:border-emerald-500/60 transition-all shadow-lg group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-emerald-400 fill-emerald-400/20" />
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800">
                Direct Mentoring
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                1-on-1 & Community WhatsApp Support
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                സന്ദേശങ്ങളിലൂടെയും വോയ്‌സ് നോട്ടുകളിലൂടെയും നിങ്ങൾക്ക് സംശയങ്ങൾ എപ്പോൾ വേണമെങ്കിലും ചോദിക്കാം. തത്സമയ വഴികാട്ടലോടെ പഠനം കൂടുതൽ എളുപ്പമാകൂ.
              </p>
            </div>
          </div>

          {/* YouTube Tutorials Card */}
          <div className="bg-slate-800/80 border border-red-500/30 rounded-3xl p-6 sm:p-8 flex items-start gap-4 hover:border-red-500/60 transition-all shadow-lg group">
            <div className="w-12 h-12 rounded-2xl bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0">
              <Youtube className="w-6 h-6 text-red-400 fill-red-400/20" />
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-red-400 bg-red-950 px-2.5 py-0.5 rounded border border-red-800">
                Detailed Walkthroughs
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-red-300 transition-colors">
                Dedicated YouTube Tutorial Guides
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                ഓരോ ടൂളും സ്ക്രീനിൽ ചെയ്തുകാണിക്കുന്ന HD വീഡിയോ ട്യൂട്ടോറിയലുകൾ. എവിടെ വച്ചും നിങ്ങളുടെ വേഗതയിൽ വീണ്ടും വീണ്ടും കണ്ടു പഠിക്കാം.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-2">
          <button
            onClick={() => onOpenCheckout('vip')}
            className="inline-flex items-center justify-center gap-3 text-slate-950 font-black text-base sm:text-lg bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 px-8 py-4 rounded-2xl shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-emerald-300 animate-enroll-blink"
          >
            <ShieldCheck className="w-6 h-6 text-slate-950 shrink-0" />
            <span>Join 100% Risk-Free Now (₹1,499)</span>
            <ArrowRight className="w-5 h-5 text-slate-950" />
          </button>
        </div>

      </div>
    </section>
  );
};
