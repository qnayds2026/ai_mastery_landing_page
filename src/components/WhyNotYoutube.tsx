import React from "react";
import { X, CheckCircle2, Youtube, BookOpen, ArrowRight } from "lucide-react";

interface WhyNotYoutubeProps {
  onOpenCheckout: (planId?: string) => void;
}

const youtubeProblems = [
  "No clear learning order",
  "Different tools & styles every video",
  "Hard to know what actually matters",
  "Information overload with no focus",
  "No defined progression or milestones",
  "No support when you get stuck",
];

const masterclasBenefits = [
  "Structured 4-week roadmap from day one",
  "Curated, practical tools that work together",
  "Step-by-step learning path — nothing skipped",
  "Focused skills with real-world application",
  "Clear weekly milestones to track progress",
  "WhatsApp support throughout your journey",
];

export const WhyNotYoutube: React.FC<WhyNotYoutubeProps> = ({
  onOpenCheckout,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-700 mb-4">
            <Youtube className="w-3.5 h-3.5 text-red-500" />
            Common Question
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Why Not Just Learn From
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-1">
              Random YouTube Videos?
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            YouTube has great content — but great content alone doesn't build a
            skill. Structure, curation, and a defined path do. That's what
            you're paying for.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
          {/* YouTube Column */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center flex-shrink-0">
                <Youtube className="w-5 h-5 text-slate-500" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                  Random Free Videos
                </div>
                <div className="font-bold text-slate-700 text-base">
                  Self-directed browsing
                </div>
              </div>
            </div>
            <ul className="space-y-3">
              {youtubeProblems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-slate-600"
                >
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-rose-500 stroke-[3]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Masterclass Column */}
          <div className="bg-blue-600 rounded-2xl p-6 sm:p-8 shadow-xl shadow-blue-600/20 relative overflow-hidden">
            {/* Subtle texture */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-0.5">
                  This Masterclass
                </div>
                <div className="font-bold text-white text-base">
                  Structured learning path
                </div>
              </div>
            </div>

            <ul className="space-y-3 relative z-10">
              {masterclasBenefits.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-blue-50"
                >
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-white stroke-[3]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-10 bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-200 rounded-2xl p-6 sm:p-8 text-center shadow-sm">
          <div className="max-w-3xl mx-auto">
            <p className="text-slate-700 font-semibold text-sm sm:text-base leading-7">
              YouTube-ൽ ആയിരക്കണക്കിന് AI വീഡിയോകൾ കാണാം. പക്ഷേ{" "}
              <strong className="text-slate-900">
                എന്ത് ആദ്യം പഠിക്കണം, എന്ത് practice ചെയ്യണം
              </strong>{" "}
              എന്നൊരു clear direction പലപ്പോഴും ഉണ്ടാകില്ല.
            </p>

            <p className="mt-3 text-slate-700 font-semibold text-sm sm:text-base leading-7">
              ₹0-ൽ നിങ്ങൾക്ക് ലഭിക്കുന്നത് ഒരു practical AI webinar ആണ് —
              <strong className="text-slate-900">
                {" "}
                ഒരു structured learning path, തിരഞ്ഞെടുത്ത practical tools,
                step-by-step guidance, കൂടാതെ support
              </strong>{" "}
              ആണ്.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-600">
              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200">
                ✓ Structured Learning
              </span>

              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200">
                ✓ Practical Tools
              </span>

              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200">
                ✓ Step-by-Step Guidance
              </span>

              <span className="px-3 py-1.5 rounded-full bg-white border border-slate-200">
                ✓ Support
              </span>
            </div>

            <button
              onClick={() => onOpenCheckout("vip")}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer animate-pulse-blink"
            >
              <span>Join Free Webinar</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="mt-3 text-xs text-slate-500">
              Start your practical AI learning journey today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
