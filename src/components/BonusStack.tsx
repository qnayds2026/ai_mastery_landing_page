import React from 'react';
import { BONUSES } from '../data/courseData';
import { Gift, Check, Sparkles, Database, FileCheck, Code, Users, ArrowRight } from 'lucide-react';

interface BonusStackProps {
  onOpenWebinar: () => void;
}

const BONUS_ICON_MAP: Record<string, React.ReactNode> = {
  Database: <Database className="w-6 h-6 text-blue-600" />,
  FileCheck: <FileCheck className="w-6 h-6 text-blue-600" />,
  Code: <Code className="w-6 h-6 text-indigo-600" />,
  Users: <Users className="w-6 h-6 text-blue-600" />
};

export const BonusStack: React.FC<BonusStackProps> = ({ onOpenWebinar }) => {
  return (
    <section id="bonuses" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-100/60 rounded-full blur-[90px] transform-gpu pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 px-3.5 py-1 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest">
            <Gift className="w-3.5 h-3.5 text-blue-600" /> Limited Time Enrollment Offer
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Get <span className="text-blue-600">$1,497 Worth of Bonuses</span> FREE Today
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            When you enroll in AI Money Making Mastery today, you unlock our entire vault of templates and scripts.
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {BONUSES.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-white border border-slate-200 hover:border-blue-400 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-lg flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    {BONUS_ICON_MAP[bonus.icon]}
                  </div>
                  <span className="bg-blue-50 text-blue-700 font-extrabold text-xs px-3 py-1 rounded-full border border-blue-200 uppercase tracking-wider">
                    {bonus.value} • FREE
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {bonus.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {bonus.description}
                </p>

                <div className="pt-2 space-y-2 border-t border-slate-100">
                  {bonus.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bonus Stack Summary Banner */}
        <div className="mt-12 bg-white p-6 sm:p-8 rounded-3xl border border-blue-200 shadow-xl text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> Total Value Stack
          </div>
          <div className="text-xl sm:text-2xl font-black text-slate-900">
            Core Masterclass ($297) + 4 Bonus Vaults ($1,497) = <span className="line-through text-slate-400">$1,794 Value</span>
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">
            Join Today For ₹0 <span className="text-xs text-slate-500 font-normal">(<span className="line-through">₹5,000</span> webinar)</span>
          </div>
          <div className="pt-2">
            <button
              onClick={onOpenWebinar}
              className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl shadow-blue-600/20 transition-all inline-flex items-center gap-2 cursor-pointer animate-enroll-blink"
            >
              <span>Join Free Webinar</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
