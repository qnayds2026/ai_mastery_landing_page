import React from 'react';
import { Play, Sparkles, CheckCircle2 } from 'lucide-react';

interface ShortVideo {
  id: string;
  title: string;
  tag: string;
  youtubeId: string;
}

const SHORTS: ShortVideo[] = [
  {
    id: '1',
    title: 'Live Student Proof & Real AI Training',
    tag: 'Live Class #1',
    youtubeId: '0ptgmJWdWKM',
  },
  {
    id: '2',
    title: 'Live Student Session & Real AI Workflow',
    tag: 'Live Class #2',
    youtubeId: 'E68zlKM292A',
  },
  {
    id: '3',
    title: 'Hands-on AI Monetization & Case Study',
    tag: 'Live Class #3',
    youtubeId: '-Xqia5RB0WM',
  },
  {
    id: '4',
    title: 'Practical AI Automation Class Breakdown',
    tag: 'Live Class #4',
    youtubeId: 'mdfMjsRaYzE',
  },
];

export const RealClassesResults: React.FC = () => {
  return (
    <section id="real-classes" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow decorations */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 blur-2xl transform-gpu rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/10 blur-2xl transform-gpu rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Student Proof & Highlights</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Real Classes, Real Results.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Take a look inside our interactive live training sessions. See how our students learn, build custom AI automations, and achieve real financial outcomes.
          </p>
        </div>

        {/* Video Shorts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {SHORTS.map((video) => (
            <div
              key={video.id}
              className="w-full max-w-xs sm:max-w-none mx-auto bg-slate-800/80 rounded-3xl p-3 border border-slate-700/80 shadow-2xl hover:border-blue-500/50 transition-all group flex flex-col"
            >
              {/* Badge & Title */}
              <div className="p-3 space-y-1 mb-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-400 bg-blue-950/60 px-2.5 py-0.5 rounded-md border border-blue-800/40">
                    {video.tag}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Recording
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-blue-300 transition-colors pt-1">
                  {video.title}
                </h3>
              </div>

              {/* YouTube Shorts Embed Container (Vertical 9:16 aspect ratio frame) */}
              <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                  title={video.title}
                  className="w-full h-full border-0 rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Footer caption */}
              <div className="p-3 text-center">
                <a
                  href={`https://youtube.com/shorts/${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 transition-colors font-medium cursor-pointer"
                >
                  <Play className="w-3 h-3 fill-current text-red-500" />
                  <span>Watch on YouTube</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
