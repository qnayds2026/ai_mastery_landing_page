import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const RECENT_ENROLLMENTS = [
  { name: "Julian M.", location: "London, UK", action: "enrolled in VIP Mastery Pass", time: "2 mins ago", earning: "Target: $10k/mo Agency" },
  { name: "Chloe R.", location: "Austin, TX", action: "just hit $4,200/mo on YouTube Shorts", time: "5 mins ago", earning: "Module 3 Graduate" },
  { name: "Vikram K.", location: "Mumbai, IN", action: "landed $2,500 copywriting retainer", time: "8 mins ago", earning: "Module 2 Graduate" },
  { name: "Sora T.", location: "Tokyo, JP", action: "launched Micro-SaaS on ProductHunt", time: "12 mins ago", earning: "180 Paid Users" },
  { name: "Michael B.", location: "Miami, FL", action: "enrolled in VIP Mastery Pass", time: "15 mins ago", earning: "Starting Today" }
];

export const SocialProofTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % RECENT_ENROLLMENTS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const current = RECENT_ENROLLMENTS[currentIndex];

  return (
    <section className="bg-slate-50 border-y border-slate-200 py-4 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Live Ticker Feed */}
        <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm max-w-lg w-full">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
          <div className="text-xs text-slate-700 flex-1 truncate">
            <strong className="text-slate-900 font-semibold">{current.name}</strong> ({current.location}) {' '}
            <span className="text-blue-600 font-medium">{current.action}</span> {' '}
            <span className="text-slate-400 text-[11px]">• {current.time}</span>
          </div>
          <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-200 whitespace-nowrap">
            {current.earning}
          </span>
        </div>

        {/* Media Logos */}
        <div className="flex items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-wider overflow-x-auto py-1">
          <span className="text-slate-400 text-[10px] whitespace-nowrap">FEATURED ON:</span>
          <span className="hover:text-slate-700 transition-colors whitespace-nowrap font-serif text-sm italic">Forbes</span>
          <span className="hover:text-slate-700 transition-colors whitespace-nowrap tracking-tighter text-sm">TechCrunch</span>
          <span className="hover:text-slate-700 transition-colors whitespace-nowrap text-xs font-sans font-black">BLOOMBERG</span>
          <span className="hover:text-slate-700 transition-colors whitespace-nowrap font-mono text-xs">Entrepreneur</span>
          <span className="hover:text-slate-700 transition-colors whitespace-nowrap text-xs font-semibold text-blue-600">PRODUCT HUNT</span>
        </div>

      </div>
    </section>
  );
};
