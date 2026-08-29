import React from "react";
import { Check, ArrowRight } from "lucide-react";

interface OutcomeItem {
  title: string;
}

interface LearningOutcomesProps {
  onOpenWebinar?: () => void;
}

export const LearningOutcomes: React.FC<LearningOutcomesProps> = ({
  onOpenWebinar,
}) => {
  const outcomes: OutcomeItem[] = [
    { title: "Professional AI Posters & Marketing Creatives Create ചെയ്യാം" },
    { title: "AI Videos & Faceless Content Produce ചെയ്യാം" },
    { title: "Realistic AI Avatars & Voiceovers Generate ചെയ്യാം" },
    { title: "Facebook & Instagram Ads professionally run ചെയ്യാം" },
    { title: "Coding ഇല്ലാതെ Websites & Landing Pages Build ചെയ്യാം" },
    { title: "Social Media Content faster & smarter create ചെയ്യാം" },
    { title: "AI ഉപയോഗിച്ച് Businesses & Personal Brand market ചെയ്യാം" },
    { title: "Winning Products Research & Validate ചെയ്യാം" },
    { title: "AI-powered Freelancing & Income Opportunities Explore ചെയ്യാം" },
  ];

  const tools = [
    "ChatGPT",
    "Gemini",
    "Canva AI",
    "Runway",
    "ElevenLabs",
    "Meta Ads Manager",
    "Webflow / No-Code Tools",
    "Midjourney",
    "CapCut AI",
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header — Outcome First */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-blue-600 font-bold text-xs sm:text-sm tracking-[1.5px] uppercase">
            OUTCOMES
          </div>
          <h2 className="text-slate-900 font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            ഈ 90-Minute Masterclass കഴിഞ്ഞാൽ
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-1">
              നിങ്ങൾക്ക് എന്തൊക്കെ ചെയ്യാൻ കഴിയും?
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Theory മാത്രം അല്ല — ഈ 90-Minute Masterclass-ൽ നിങ്ങൾക്ക്
            real-world AI skills practical ആയി step-by-step പഠിക്കാം.ഈ outcomes real-world situations-ൽ
             directly apply ചെയ്യാൻ കഴിയുന്നവയാണ്.
            
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {outcomes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 flex items-start gap-4 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-300 ease-out cursor-default"
            >
              {/* Check Badge */}
              <div className="w-8 h-8 min-w-[32px] rounded-full border border-emerald-300/80 bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
              </div>
              {/* Title */}
              <span className="text-slate-900 font-bold text-sm sm:text-base leading-snug">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* Tools Section */}

        {/* CTA */}
        {onOpenWebinar && (
          <div className="text-center">
            <button
              onClick={onOpenWebinar}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer animate-pulse-blink"
            >
              <span>🔥 Join Webinar for ₹99</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
              {/* Bonus Prompt Kit */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-6 sm:p-8 text-center shadow-sm">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold mb-4">
              🎁 BONUS WORTH ₹2,000+
            </div>

            <h3 className="text-slate-900 font-extrabold text-xl sm:text-2xl md:text-3xl">
              2,000+ AI Prompts Bonus Kit
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3 max-w-2xl mx-auto">
              Masterclass-നൊപ്പം 2,000+ ready-to-use AI prompts അടങ്ങിയ
              valuable Bonus Kit ലഭിക്കും. Content creation, marketing,
              business, freelancing തുടങ്ങിയ കാര്യങ്ങളിൽ prompts
              practical ആയി ഉപയോഗിക്കാം.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <span className="bg-white border border-amber-200 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-700">
                🤖 AI Prompts
              </span>
              <span className="bg-white border border-amber-200 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-700">
                📱 Content Creation
              </span>
              <span className="bg-white border border-amber-200 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-700">
                📈 Marketing
              </span>
              <span className="bg-white border border-amber-200 px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-700">
                💼 Business & Freelancing
              </span>
            </div>
          </div>
        </div>
    </section>
  );
};
