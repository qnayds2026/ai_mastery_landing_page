import React, { useState } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Sparkles,
  Tv,
  ArrowRight,
} from 'lucide-react';

interface VideoSpaceProps {
  onOpenWebinar?: () => void;
  onOpenVideoModal?: () => void;
}

interface VideoLesson {
  id: string;
  title: string;
  duration: string;
  module: string;
  thumbnail: string;
  description: string;
  isUnlocked?: boolean;
}

export const VideoSpace: React.FC<VideoSpaceProps> = ({
  onOpenWebinar,
  onOpenVideoModal,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);

  const lessons: VideoLesson[] = [
    {
      id: '1',
      title: 'Demo Class: AI Monetization & Course Overview',
      duration: '18:30',
      module: 'Free Demo Class',
      thumbnail:
        'https://img.youtube.com/vi/wllEGVxCACA/hqdefault.jpg',
      description:
        'Watch this free demo class session to see how our step-by-step AI Masterclass is taught and how you can monetize AI tools.',
      isUnlocked: true,
    },
  ];

  const [activeLesson] = useState<VideoLesson>(lessons[0]);

  return (
    <section className="bg-slate-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 font-bold text-xs tracking-wider uppercase">
            <Tv className="w-3.5 h-3.5 text-blue-600" />
            <span>FREE DEMO CLASS</span>
          </div>

          <h2 className="text-slate-900 font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-tight">
            Buy ചെയ്യുന്നതിന് മുമ്പ്,
            <span className="block text-blue-600 mt-1">
              നിങ്ങൾ പഠിക്കാൻ പോകുന്ന രീതിയൊന്ന് കാണൂ.
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            ഈ ഡെമോ ക്ലാസ്സിലൂടെ ഞങ്ങളുടെ ലളിതമായ പഠന രീതിയും തത്സമയ AI ടൂൾ പ്രാക്ടിക്കൽ മാതൃകകളും കണ്ടു മനസ്സിലാക്കൂ.
          </p>
        </div>

        {/* Video Player Box (Full Width Centered) */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xl flex flex-col">

          {/* Screen Area */}
          <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden group">
            {isPlaying ? (
              <iframe
                src="https://www.youtube.com/embed/wllEGVxCACA?autoplay=1&rel=0"
                title={activeLesson.title}
                className="w-full h-full border-0 absolute inset-0 z-20"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={activeLesson.thumbnail}
                  alt={activeLesson.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-black/40" />

                {/* Top Watermark Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                  <div className="bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/80 flex items-center gap-2">
                    <img
                      src="/sawad.png"
                      alt="Instructor"
                      className="w-6 h-6 rounded-full border border-blue-400 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-xs text-white font-medium">Sawad KT • Founder, Qnayds LLP</span>
                  </div>

                  <div className="bg-blue-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-yellow-300" />
                    <span>HD 1080p</span>
                  </div>
                </div>

                {/* Play Overlay Button - Centered */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2 sm:gap-3">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer hover:bg-blue-500 shadow-blue-600/50 animate-enroll-blink"
                    aria-label="Play Free Demo Class Video"
                  >
                    <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-white ml-1" />
                  </button>
                  <span className="text-[11px] sm:text-xs font-bold text-white bg-slate-900/80 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/20 backdrop-blur-md shadow-lg">
                    Watch Free Demo Class
                  </span>
                </div>
              </>
            )}

            {/* Bottom Control Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-5 space-y-2.5">
              {/* Timeline Progress Bar */}
              <div
                className="w-full h-2 bg-slate-800/80 rounded-full cursor-pointer relative"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  setProgress(Math.round((clickX / rect.width) * 100));
                }}
              >
                <div
                  className="h-full bg-blue-500 rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white shadow-md border-2 border-blue-500" />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-blue-400" />
                    ) : (
                      <Play className="w-5 h-5 text-blue-400" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-rose-400" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>
                  <span className="font-mono text-xs text-slate-400">
                    04:12 / {activeLesson.duration}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {onOpenVideoModal && (
                    <button
                      onClick={onOpenVideoModal}
                      className="text-xs text-blue-400 hover:text-blue-300 font-semibold underline flex items-center gap-1 cursor-pointer"
                    >
                      Pop-out Player
                    </button>
                  )}
                  <Maximize className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Below Video — Context + CTA */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            ഇതുപോലെ step-by-step practical sessions ആണ് Masterclass-ൽ ലഭിക്കുന്നത്.
          </p>
          {onOpenWebinar && (
            <button
              onClick={onOpenWebinar}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer animate-enroll-blink"
            >
              <span>👉 Free Webinar-ൽ Join ചെയ്യൂ</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
