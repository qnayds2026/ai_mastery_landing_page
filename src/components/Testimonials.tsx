import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/courseData';
import { Star, CheckCircle2, TrendingUp, Quote, ArrowRight } from 'lucide-react';

interface TestimonialsProps {
  onOpenCheckout: (planId?: string) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenCheckout }) => {
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all' 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter(t => t.businessType.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest">
            <TrendingUp className="w-3.5 h-3.5 text-blue-600" /> Verified Student Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Real People. Real Workflows. Real Results.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Over 10,000+ students are building AI income streams using these exact frameworks.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Student Results' },
            { id: 'copywriting', label: 'AI Copywriting & Agency' },
            { id: 'faceless', label: 'Faceless YouTube / TikTok' },
            { id: 'saas', label: 'Micro-SaaS & Web Apps' },
            { id: 'digital', label: 'Digital Products & Etsy' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 font-bold'
                  : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 border border-slate-200 hover:border-blue-300 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-md flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                {/* Top Info Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-slate-900 text-base">{item.name}</span>
                        {item.verified && (
                          <span className="flex items-center gap-0.5 text-[10px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-semibold border border-blue-200">
                            <CheckCircle2 className="w-3 h-3 text-blue-600" /> Verified Graduate
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500">{item.role} • {item.location}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-blue-600 font-extrabold text-lg sm:text-xl font-mono">{item.earnings}</div>
                    <div className="text-[10px] text-slate-500 font-medium">{item.timeframe}</div>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-semibold text-slate-500 ml-2">{item.businessType}</span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic relative">
                  <Quote className="w-6 h-6 text-slate-200 absolute -top-2 -left-2 -z-10" />
                  "{item.quote}"
                </p>

              </div>

              {/* Highlight Tag */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                  ⚡ Key Win: {item.highlight}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Verified Student</span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenCheckout('vip')}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-sm bg-blue-50 border border-blue-200 hover:border-blue-400 px-6 py-3 rounded-xl transition-all cursor-pointer animate-pulse-blink"
          >
            <span>Join Successful Students Today</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </button>
        </div>

      </div>

    </section>
  );
};
