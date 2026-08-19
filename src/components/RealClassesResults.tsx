import React from "react";
import { Play, Sparkles, CheckCircle2, Star } from "lucide-react";

interface ShortVideo {
  id: string;
  title: string;
  tag: string;
  youtubeId: string;
  quote: string;
}

const SHORTS: ShortVideo[] = [
  {
    id: "2",
    title: "Live Student Session & Real AI Workflow",
    tag: "🎥 Live Class",
    youtubeId: "E68zlKM292A",
    quote:
      "Business എങ്ങനെ തുടങ്ങണം എന്നൊരു idea പോലും ഇല്ലായിരുന്നു. ഈ ക്ലാസ് കേട്ടപ്പോൾ എല്ലാം മനസ്സിലായി.",
  },
  {
    id: "7",
    title: "AI Course Result & Student Success",
    tag: "⭐ Success Story",
    youtubeId: "4gQxDTJeHqk",
    quote:
      "AI കാരണം എൻറെ ജീവിതത്തിൽ ഒരുപാട് മാറ്റങ്ങൾ ഉണ്ടായി. ഇപ്പോൾ ഞാൻ പണം earn ചെയ്ത് തുടങ്ങുന്നു. എൻറെ ഒരുപാട് വർക്കുകൾ AI ആണ് ഇപ്പൊ ചെയ്യുന്നത്.",
  },
  {
    id: "6",
    title: "Real Student Experience After Joining",
    tag: "⭐ Testimonial",
    youtubeId: "QCcYoDzDI8Y",
    quote:
      "YouTube-ൽ പല videos കണ്ടിട്ടും എവിടെ നിന്ന് തുടങ്ങണം എന്ന് അറിയില്ലായിരുന്നു. Qnayds-ൽ join ചെയ്തപ്പോൾ നല്ലൊരു direction കിട്ടി.",
  },
  {
    id: "8",
    title: "Student Success Story & Feedback",
    tag: "Student Testimonial",
    youtubeId: "tIVud4h7ogk",
    quote:
      "AI വെച്ചിട്ട് ഞാൻ ഇപ്പൊ ഒരുപാട് വീഡിയോസും, എഡിറ്റിങ് ഒക്കെ പഠിച്ചു. ഫ്രീലാൻസ് opportunities കിട്ടിത്തുടങ്ങി, ഞാൻ പണം ഉണ്ടാക്കി തുടങ്ങി.",
  },
];

export function RealClassesResults() {
  return (
    <section
      id="real-classes"
      className="relative py-16 sm:py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-400 text-xs sm:text-sm font-bold">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            Real Classes • Real Students • Real Experiences
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            Don't Just Believe Us.
            <br />
            <span className="text-blue-400">
              Hear From Our Students.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            യഥാർത്ഥ വിദ്യാർത്ഥികളുടെ experiences നേരിട്ട് കേൾക്കൂ.
            <br className="hidden sm:block" />
            Real classes, practical learning, and genuine student feedback.
          </p>

        </div>

        {/* ================= CARD GRID ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

          {SHORTS.map((video) => (
            <div
              key={video.id}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)] flex flex-col"
            >

              {/* ================= VIDEO ================= */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-black">

                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />

                {/* Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                {/* ================= TOP BADGE ================= */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-red-600 text-white text-[9px] sm:text-xs font-bold shadow-lg">
                    {video.tag}
                  </span>
                </div>

              </div>

              {/* ================= QUOTE SECTION ================= */}
              <div className="flex-1 flex flex-col px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900">

                {/* Quote Text - Smaller */}
                <p className="text-[11px] sm:text-xs text-slate-200 leading-relaxed font-medium flex-1">
                  💬 "{video.quote}"
                </p>

              </div>

              {/* ================= YOUTUBE FOOTER ================= */}
              <a
                href={`https://youtube.com/shorts/${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-start gap-2 px-3 sm:px-4 py-2.5 bg-slate-950 hover:bg-blue-950 transition-all border-t border-slate-700/30 group/link cursor-pointer"
              >

                <Play className="w-3.5 h-3.5 fill-red-500 text-red-500 shrink-0" />

                <span className="text-[11px] sm:text-xs font-semibold text-slate-300 group-hover/link:text-white transition-colors">
                  Watch on YouTube
                </span>

              </a>

            </div>
          ))}

        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-12 sm:mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-6 sm:p-8 text-center shadow-xl shadow-blue-900/20">

          <Star className="mx-auto w-9 h-9 sm:w-10 sm:h-10 text-yellow-300 mb-3 sm:mb-4 fill-yellow-300" />

          <h3 className="text-2xl sm:text-3xl font-black">
            Ready to Start Learning AI?
          </h3>

          <p className="mt-2 sm:mt-3 text-blue-100 max-w-2xl mx-auto text-sm sm:text-base">
            Join the AI Masterclass and start building practical AI skills
            with a structured learning path.
          </p>

          <button
            onClick={() => {
              const event = new CustomEvent("openCheckout", {
                detail: { planId: "vip" },
              });

              window.dispatchEvent(event);
            }}
            className="mt-6 inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Join Free Webinar</span>
            <Play className="w-4 h-4 fill-blue-700" />
          </button>

        </div>

      </div>
    </section>
  );
}