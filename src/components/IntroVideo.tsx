import React, { useState } from "react";
import { Play, Sparkles, Youtube } from "lucide-react";

export const IntroVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "Qk1BtYgNrA0";

  return (
    <section className="py-12 sm:py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full filter blur-2xl transform-gpu" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/30 rounded-full filter blur-2xl transform-gpu" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Program Intro Video</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            WATCH BEFORE YOU ENROLL
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl mx-auto">
            ഈ മാസ്റ്റർക്ലാസിൽ എന്തൊക്കെ പഠിക്കാം, എങ്ങനെ വരുമാനം ഉണ്ടാക്കാം
            എന്ന് ചുരുക്കത്തിൽ മനസ്സിലാക്കാം
          </p>
        </div>

        {/* Video Player Box - Portrait (9:16) Style */}
        <div className="max-w-[340px] sm:max-w-[360px] mx-auto bg-slate-800/90 rounded-3xl p-3 border border-slate-700/80 shadow-2xl backdrop-blur-sm">
          <div className="relative aspect-[9/16] bg-slate-950 rounded-2xl overflow-hidden group shadow-inner border border-slate-800">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Program Intro Video"
                className="w-full h-full border-0 absolute inset-0 z-20"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full relative flex items-center justify-center">
                {/* High-Res Thumbnail Image */}
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  onError={(e) => {
                    // Fallback if maxresdefault is missing
                    (e.target as HTMLImageElement).src =
                      `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                  }}
                  alt="Intro Video Thumbnail"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-black/30" />

                {/* Badge Top Left */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/80 text-xs font-semibold text-white shadow-lg">
                  <Youtube className="w-4 h-4 text-red-500 fill-red-500" />
                  <span>YouTube Short Intro</span>
                </div>

                {/* Play Button Overlay - Centered */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer hover:bg-blue-500 group-hover:shadow-blue-500/50 animate-enroll-blink"
                    aria-label="Play Intro Video"
                  >
                    <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-white ml-1" />
                  </button>
                  <span className="text-xs font-bold text-white bg-slate-900/80 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm shadow-lg whitespace-nowrap">
                    Tap to Watch (1 min)
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
