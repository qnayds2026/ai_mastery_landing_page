import React from 'react';
import { CheckCircle2, ArrowRight, Infinity, MessageCircle, BookOpen, Video, Map, Users } from 'lucide-react';

interface WhatYouGetProps {
  onOpenWebinar: () => void;
}

const inclusions = [
  {
    icon: BookOpen,
    title: 'Complete AI Masterclass',
    description: 'Full access to the structured 8-step curriculum covering AI Poster Design, AI Video Creation, Meta Ads, No-Code Websites, and more.',
    color: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    icon: Map,
    title: 'Structured 4-Week Learning Plan',
    description: 'A clear weekly roadmap so you always know what to do next — from AI foundations to real-world application.',
    color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
  },
  {
    icon: Video,
    title: 'Recorded Video Sessions',
    description: 'Watch sessions at your own pace, pause, rewatch, and revise any time. No pressure, no fixed schedule.',
    color: 'text-sky-600 bg-sky-50 border-sky-100',
  },
  {
    icon: Users,
    title: 'YouTube Learning Library',
    description: 'Access to the Qnayds YouTube learning library with additional tutorials and practical demonstrations.',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Mentoring & Support',
    description: 'Get your doubts cleared through WhatsApp. Support available throughout your learning journey.',
    color: 'text-green-600 bg-green-50 border-green-100',
  },
  {
    icon: Infinity,
    title: 'Lifetime Access',
    description: 'Register free for the live webinar and receive the joining details by email and WhatsApp.',
    color: 'text-purple-600 bg-purple-50 border-purple-100',
  },
];

export const WhatYouGet: React.FC<WhatYouGetProps> = ({ onOpenWebinar }) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-700 mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            What's Included
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            ഈ Masterclass-ൽ
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mt-1">
              നിങ്ങൾക്ക് എന്തൊക്കെ ലഭിക്കും?
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            ₹99-ൽ live webinar registration ചെയ്ത് practical AI strategies പഠിക്കൂ.
          </p>
        </div>

        {/* Inclusions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {inclusions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 flex gap-4"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 mt-0.5 ${item.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm mb-1.5">
                    {item.title}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Banner */}
        <div className="mt-10 bg-white border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Everything above for just
              </div>
              <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                <span className="text-4xl sm:text-5xl font-black text-slate-900">₹99</span>
                <span className="text-sm font-semibold text-slate-500"><span className="line-through">₹5,000</span> • live webinar</span>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                No payment required. Webinar details are sent after registration.
              </p>
            </div>
            <button
              onClick={onOpenWebinar}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer animate-enroll-blink"
            >
              <span>🔥 Join Webinar for ₹99</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
