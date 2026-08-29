import React, { useState } from "react";
import { TESTIMONIALS } from "../data/courseData";
import {
  Star,
  CheckCircle2,
  TrendingUp,
  Quote,
  ArrowRight,
} from "lucide-react";

interface TestimonialsProps {
  onOpenWebinar: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  onOpenWebinar,
}) => {
  const [filter, setFilter] = useState<string>("all");

  const audioFiles = [
    "/audio/student2.ogg",
    "/audio/student1.ogg",
    "/audio/student3.ogg",
  ];

  const filtered =
    filter === "all"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) =>
          t.businessType.toLowerCase().includes(filter.toLowerCase()),
        );

  // Show only the first 3 testimonials in the initial "All" view.
  const visibleTestimonials =
    filter === "all" ? filtered.slice(0, 3) : filtered;

  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-20 bg-white overflow-hidden border-b border-slate-200"
    >
      {/* Soft Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-emerald-700 mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            REAL STUDENT EXPERIENCES
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            ഇവർക്ക് പഠിക്കാനും ചെയ്യാനും കഴിഞ്ഞെങ്കിൽ...
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              നിങ്ങൾക്കും കഴിയും.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Masterclass-ൽ പഠിച്ച AI skills practical ആയി ഉപയോഗിച്ച
            വിദ്യാർത്ഥികളുടെ experiences നോക്കൂ.
          </p>
        </div>

        {/* Trust Strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10 text-xs sm:text-sm font-semibold text-slate-600">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Verified Students
          </div>

          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            Real Experiences
          </div>

          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-blue-500" />
            Practical Results
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: "all", label: "Top Student Results" },
            { id: "copywriting", label: "AI Copywriting" },
            { id: "faceless", label: "Faceless Content" },
            { id: "saas", label: "Micro-SaaS" },
            { id: "digital", label: "Digital Products" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filter === tab.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {visibleTestimonials.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col"
            >
              {/* Student Info */}
              <div className="flex items-start gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                  {item.name
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 1)
                    .join("")}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-bold text-slate-900 text-sm">
                      {item.name}
                    </span>

                    {item.verified && (
                      <span className="inline-flex items-center gap-0.5 text-[9px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-md font-semibold border border-blue-200">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                  </div>

                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {item.role} • {item.location}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                <div className="flex">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 ml-1">
                  {item.businessType}
                </span>
              </div>

              {/* Voice Feedback */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Quote className="w-5 h-5 text-blue-500" />

                  <span className="text-sm font-bold text-slate-700">
                    Voice Feedback
                  </span>
                </div>

                <audio
                  key={audioFiles[index]}
                  controls
                  preload="metadata"
                  className="w-full"
                  src={audioFiles[index]}
                >
                  Your browser does not support audio playback.
                </audio>
              </div>

              {/* Result */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-wide text-slate-400 font-bold mb-1">
                      Key Result
                    </div>

                    <div className="text-sm font-bold text-blue-700">
                      {item.highlight}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-lg font-extrabold text-slate-900">
                      {item.earnings}
                    </div>

                    <div className="text-[9px] text-slate-400 font-medium">
                      {item.timeframe}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-sm text-slate-500 mb-3">
            ഇനി നിങ്ങളുടെ AI learning journey തുടങ്ങാം.
          </p>

          <button
            onClick={onOpenWebinar}
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer animate-pulse-blink"
          >
            <span>🔥 Join Webinar for ₹99</span>

            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};