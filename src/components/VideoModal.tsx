import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, CheckCircle, Lock, ArrowRight, Sparkles } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lessonTitle?: string;
  moduleTitle?: string;
  onOpenCheckout: (planId?: string) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  lessonTitle = "Module 1.1: The 2026 AI Monetization Landscape",
  moduleTitle = "Module 1: AI Prompt Engineering & Core Mastery",
  onOpenCheckout
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(42); // 42% sample progress

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-3">
            <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded border border-blue-200 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" /> FREE LESSON PREVIEW
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">{moduleTitle}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden group">
          {isPlaying ? (
            <iframe
              src="https://www.youtube.com/embed/wllEGVxCACA?autoplay=1&rel=0"
              title="Demo Class Video"
              className="w-full h-full border-0 absolute inset-0 z-20"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src="https://img.youtube.com/vi/wllEGVxCACA/hqdefault.jpg"
                alt="Lesson Preview"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40" />

              {/* Instructor Watermark Badge */}
              <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 flex items-center gap-2 z-10">
                <img
                  src="/sawad.png"
                  alt="Sawad KT"
                  className="w-6 h-6 rounded-full border border-blue-400 object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs text-white font-medium">Sawad KT • AI Mentor</span>
              </div>

              {/* Big Play Overlay Button - Centered */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-2">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer hover:bg-blue-500 shadow-blue-600/50 animate-enroll-blink"
                  aria-label="Play Demo Class Video"
                >
                  <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-white ml-1" />
                </button>
                <span className="text-xs font-bold text-white bg-slate-900/80 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm shadow-md">
                  Click to Watch Demo Class
                </span>
              </div>
            </>
          )}
        </div>

        {/* Lesson Info Footer */}
        <div className="p-6 bg-white space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">{lessonTitle}</h3>
              <p className="text-xs text-slate-600 mt-1">In this lesson, you will learn the exact 5-step prompt structure that generates $100/hr commercial results.</p>
            </div>
            <button
              onClick={() => { onClose(); onOpenCheckout('vip'); }}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-md shadow-blue-600/20 cursor-pointer animate-pulse-blink"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Unlock Full 45-Lesson Course ($47)</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
