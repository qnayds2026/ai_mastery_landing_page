import React from 'react';
import { Check } from 'lucide-react';

interface OutcomeItem {
  title: string;
}

export const LearningOutcomes: React.FC = () => {
  const outcomes: OutcomeItem[] = [
    { title: 'Run Facebook & Instagram Ads' },
    { title: 'Create AI Posters' },
    { title: 'Create AI Videos' },
    { title: 'Generate AI Voiceovers' },
    { title: 'Build Websites without Coding' },
    { title: 'Research Winning Products' },
    { title: 'Launch Dropshipping Stores' },
    { title: 'Earn through Affiliate Marketing' },
    { title: 'Start Reselling Businesses' },
    { title: 'Generate Leads' },
    { title: 'Build Personal Branding' },
    { title: 'Create Multiple Income Streams' },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-[#3563FF] font-bold text-xs sm:text-sm tracking-[1.5px] uppercase">
            THE RESULTS
          </div>
          <h2 className="text-[#111827] font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Learning Outcomes
          </h2>
        </div>

        {/* Outcomes Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {outcomes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 flex items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(53,99,255,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out cursor-default"
            >
              {/* Green Circle Check Badge */}
              <div className="w-8 h-8 min-w-[32px] min-h-[32px] rounded-full border border-emerald-400/80 bg-emerald-50/60 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
              </div>

              {/* Title Text */}
              <span className="text-[#111827] font-bold text-base sm:text-lg leading-snug">
                {item.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
