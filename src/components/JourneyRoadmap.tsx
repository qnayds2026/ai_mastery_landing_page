import React from 'react';
import { 
  Compass, 
  Layers, 
  Target, 
  Palette, 
  Video, 
  Layout, 
  Briefcase, 
  TrendingUp, 
  Bot,
  FileText,
  Rocket,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface JourneyRoadmapProps {
  onOpenCheckout?: (planId?: string) => void;
}

export function JourneyRoadmap({ onOpenCheckout }: JourneyRoadmapProps) {
  const steps = [
    {
      step: "Week 1",
      title: "Digital Foundation",
      description: "Setting up profiles, managers, and your brand's digital core.",
      icon: Layers,
      color: "from-blue-500 to-indigo-600",
      badge: "Foundation"
    },
    {
      step: "Week 2",
      title: "Advertising Mastery",
      description: "Launching your first Meta Ad campaigns and understanding metrics.",
      icon: Target,
      color: "from-indigo-500 to-purple-600",
      badge: "Paid Traffic"
    },
    {
      step: "Week 3",
      title: "AI Designing",
      description: "Creating converting visuals, posters, and brand identities.",
      icon: Palette,
      color: "from-purple-500 to-pink-600",
      badge: "Creative"
    },
    {
      step: "Week 4",
      title: "AI Video Creation",
      description: "Scripting, generating, and editing AI-driven video content.",
      icon: Video,
      color: "from-pink-500 to-rose-600",
      badge: "Viral Content"
    },
    {
      step: "Week 5",
      title: "Website Development",
      description: "Building a high-converting no-code landing page or store.",
      icon: Layout,
      color: "from-rose-500 to-orange-500",
      badge: "Store / Funnel"
    },
    {
      step: "Week 6",
      title: "Business Models",
      description: "Choosing between Dropshipping, Reselling, or Affiliate frameworks.",
      icon: Briefcase,
      color: "from-amber-500 to-emerald-500",
      badge: "Monetization"
    },
    {
      step: "Week 7",
      title: "Marketing & Sales",
      description: "Driving organic and paid traffic, building sales funnels.",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-600",
      badge: "Conversion"
    },
    {
      step: "Week 8",
      title: "Business Launch",
      description: "Final project deployment. Launch your brand to the world.",
      icon: Rocket,
      color: "from-blue-600 to-indigo-700",
      badge: "Go Live 🚀"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-2xl opacity-60 transform-gpu"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-100/50 rounded-full blur-2xl opacity-60 transform-gpu"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 px-3.5 py-1 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest shadow-sm">
            <Compass className="w-3.5 h-3.5 text-blue-600" /> Your Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            8-Week Action Plan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A step-by-step roadmap taking you from zero experience to launching your fully automated, AI-driven digital brand.
          </p>
        </div>

        {/* 8 Weeks Grid (4 per row on desktop) */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div 
                key={item.step}
                className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Number Watermark */}
                <span className="absolute top-2 right-3 text-3xl font-black text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none select-none">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>

                <div className="space-y-3 relative z-10">
                  {/* Badge & Step indicator */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-100">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                      {item.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="space-y-2 pt-1">
                    <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform duration-200`}>
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 pt-1 group-hover:text-blue-600 transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-medium text-slate-400">
                  <span className="flex items-center gap-1 text-slate-500 font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-blue-600" /> Phase {index + 1}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform text-blue-600 font-bold text-xs">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner inside Roadmap */}
        {onOpenCheckout && (
          <div className="mt-14 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden border border-blue-900/50">
            <div className="space-y-2 text-center md:text-left relative z-10">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800">
                Ready to Execute Step 1?
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Follow the 8-Week Action Plan
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Get immediate access to all 10 modules, video tutorials, templates, and 1-on-1 WhatsApp mentoring today.
              </p>
            </div>

            <button
              onClick={() => onOpenCheckout('recorded')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-blue-600/30 flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap shrink-0 relative z-10 animate-enroll-blink"
            >
              <span>Start Your Journey Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

