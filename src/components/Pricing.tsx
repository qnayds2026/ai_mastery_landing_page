import React from 'react';
import { PRICING_PLANS, PricingPlan } from '../data/courseData';
import { Check, X, Zap, ArrowRight, Sparkles } from 'lucide-react';

interface PricingProps {
  onOpenCheckout: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onOpenCheckout }) => {
  return (
    <section id="pricing" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-100/60 rounded-full blur-[100px] transform-gpu pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 px-3.5 py-1 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 text-blue-600" /> Choose Your Learning Mode
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
            Choose Your Learning Mode
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Select the option that best fits your goals and schedule to start mastering AI today.
          </p>
        </div>

        {/* Malayalam Value Proposition Callout Banner */}
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-5 sm:p-6 rounded-2xl shadow-xl shadow-blue-600/15 mb-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-center gap-2 mb-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Unbeatable Investment Value
          </div>
          <p className="text-base sm:text-lg font-bold leading-relaxed max-w-2xl mx-auto">
            "വെറും <span className="bg-amber-400 text-slate-900 px-2 py-0.5 rounded font-black">₹2499-ൽ</span>, ഒരു റെസ്റ്റോറന്റിൽ കുടുംബത്തോടൊപ്പം ഒരിക്കൽ ഭക്ഷണം കഴിക്കുന്ന ചെലവിൽ, ആരും പറഞ്ഞു തരാത്ത ലക്ഷങ്ങൾ സമ്പാദിക്കാനുള്ള AI സ്കിൽ രണ്ടുമാസം കൊണ്ട് നിങ്ങൾക്ക് സ്വന്തമാക്കാം."
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className={PRICING_PLANS.length === 1 ? "max-w-xl mx-auto" : "grid lg:grid-cols-3 gap-8 items-stretch"}>
          {PRICING_PLANS.map((plan: PricingPlan) => {
            const isPopular = plan.popular;
            const currency = plan.currencySymbol || '₹';

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-white border-2 border-blue-600 shadow-2xl shadow-blue-600/15 scale-105 z-10'
                    : 'bg-white border border-slate-200 hover:border-slate-300 shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-black px-4 py-1 rounded-full shadow-lg uppercase tracking-wider whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-6">
                  
                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{plan.tagline}</p>
                  </div>

                  {/* Price Header */}
                  <div className="py-2 border-y border-slate-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-slate-900">{currency}{plan.price}</span>
                      <span className="text-lg line-through text-slate-400 font-semibold">{currency}{plan.originalPrice}</span>
                      <span className="text-xs text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        ONE-TIME
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">Instant Lifetime Access • No Hidden Fees</div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Included In This Plan:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}

                    {/* Not Included Section if any */}
                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-2 space-y-2 border-t border-slate-100 opacity-60">
                        {plan.notIncluded.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                            <X className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  <button
                    onClick={() => onOpenCheckout(plan.id)}
                    className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl ${
                      isPopular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20 animate-enroll-blink'
                        : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 animate-pulse-blink'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
