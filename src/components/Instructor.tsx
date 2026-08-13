import React from 'react';
import { Award, CheckCircle2, Sparkles, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import sawadImg from './sawad.png';

interface InstructorProps {
  onOpenCheckout?: (planId?: string) => void;
}

export const Instructor: React.FC<InstructorProps> = ({ onOpenCheckout }) => {
  const achievements = [
    { icon: Globe, text: "Educated 1 Million+ learners via social media" },
    { icon: TrendingUp, text: "Helped multiple businesses scale via AI & Automation" },
  ];

  const expertiseTags = [
    "Artificial Intelligence",
    "Meta Ads",
    "Digital Marketing",
    "Business Automation",
    "Web Development",
    "Dropshipping",
  ];

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl grid lg:grid-cols-12 gap-8 items-center">

          {/* Photo Column */}
          <div className="lg:col-span-5 relative text-center flex flex-col items-center">
            <div className="relative inline-block rounded-2xl overflow-hidden p-1.5 bg-gradient-to-tr from-blue-600 via-indigo-500 to-blue-500 shadow-xl">
              <img
                src={sawadImg}
                alt="Sawad KT - Founder, Qnayds LLP"
                className="w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-xl object-cover object-top shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-slate-900">Sawad KT</h3>
              <p className="text-xs text-blue-600 font-bold mt-0.5">Founder – Qnayds LLP</p>
              <p className="text-xs text-slate-600 font-medium mt-0.5">AI Mentor • Digital Strategist</p>
            </div>
          </div>

          {/* Bio & Details Column */}
          <div className="lg:col-span-7 space-y-6">

            <div>
              <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200 mb-3">
                <Award className="w-3.5 h-3.5 text-blue-600" /> Meet Your Instructor
              </div>

              <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug">
                "AI ഒരു ടൂൾ മാത്രമല്ല, ഭാവിയിലേക്കുള്ള ഒരു സ്കിലാണ്. ആ സ്കിൽ എല്ലാവർക്കും ലളിതമായി പഠിപ്പിച്ച് പുതിയ അവസരങ്ങളിലേക്ക് നയിക്കുകയാണ് എൻ്റെ ലക്ഷ്യം."
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                ഞാൻ സവാദ്, Qnayds LLP-യുടെ Founder. 10,000+ വിദ്യാർത്ഥികൾക്ക് AI പരിശീലനം നൽകിയ അനുഭവത്തോടെ, ജോലി നഷ്ടപ്പെടുന്ന ഈ കാലത്ത്, ഏത് വ്യക്തിക്കും AI ഉപയോഗിച്ച് വരുമാനം ഉണ്ടാക്കാനുള്ള മാർഗങ്ങൾ ലളിതമായ മലയാളത്തിൽ പഠിപ്പിക്കുന്നു.
              </p>
            </div>

            {/* Achievements Section */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Key Achievements
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {achievements.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                      <div className="p-1 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs text-slate-800 font-medium leading-snug">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Expertise Section */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Areas of Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {expertiseTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 bg-blue-50/80 text-blue-900 border border-blue-200/80 text-xs font-semibold px-3 py-1.5 rounded-lg"
                  >
                    <CheckCircle2 className="w-3 h-3 text-blue-600 flex-shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            {onOpenCheckout && (
              <button
                onClick={() => onOpenCheckout('vip')}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer animate-pulse-blink"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
