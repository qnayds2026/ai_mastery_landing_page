import React from "react";
import { Play, Sparkles, CheckCircle2, Star } from "lucide-react";

interface ShortVideo {
  id: string;
  title: string;
  tag: string;
  youtubeId: string;
}

const SHORTS: ShortVideo[] = [
  {
    id: "1",
    title: "Live Student Proof & Real AI Training",
    tag: "🎥 Live Class",
    youtubeId: "0ptgmJWdWKM",
  },
  {
    id: "2",
    title: "Live Student Session & Real AI Workflow",
    tag: "🎥 Live Class",
    youtubeId: "E68zlKM292A",
  },
  {
    id: "3",
    title: "Hands-on AI Monetization & Case Study",
    tag: "🎥 Live Class",
    youtubeId: "-Xqia5RB0WM",
  },
  {
    id: "4",
    title: "Practical AI Automation Class Breakdown",
    tag: "🎥 Live Class",
    youtubeId: "mdfMjsRaYzE",
  },
  {
    id: "6",
    title: "Real Student Experience After Joining",
    tag: "⭐ Testimonial",
    youtubeId: "QCcYoDzDI8Y",
  },
  {
    id: "7",
    title: "AI Course Result & Student Success",
    tag: "⭐ Success Story",
    youtubeId: "4gQxDTJeHqk",
  },
];

export  function RealClassesResults() {
  return (
    <section
      id="real-classes"
      className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">

          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-5 py-2 rounded-full text-blue-400 text-sm font-bold">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            Real Classes • Real Students • Real Results
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-black leading-tight">
            Don't Just Believe Us.
            <br />
            <span className="text-blue-400">
              Watch Our Students In Action.
            </span>
          </h2>

          <p className="mt-5 text-slate-300 text-lg">
            Explore actual live sessions, practical AI projects and genuine
            student testimonials before joining the program.
          </p>

        </div>

        {/* Videos */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
  {SHORTS.map((video) => (
    <div
      key={video.id}
      className="group relative rounded-[32px] overflow-hidden bg-slate-900 border border-slate-700 hover:border-blue-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(37,99,235,0.35)]"
    >
      {/* Video */}
      <div className="relative h-[430px] sm:h-[500px] overflow-hidden bg-black rounded-2xl">

        <iframe
          src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
          title={video.title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />

        {/* TOP */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">

          <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold shadow-lg">
            {video.tag}
          </span>

          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] text-white font-semibold">
              Verified
            </span>
          </div>

        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">

          <h3 className="text-white text-lg font-black leading-snug drop-shadow-lg">
            {video.title}
          </h3>

          <div className="mt-3 flex items-center gap-2">

            <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center shadow-lg">

              <Play className="w-4 h-4 fill-white text-white ml-0.5" />

            </div>

            <div>
              <p className="text-sm font-bold text-white">
                Watch Student Proof
              </p>

              <p className="text-xs text-slate-300">
                Real students • Real classes
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Footer */}
      <a
        href={`https://youtube.com/shorts/${video.youtubeId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between px-5 py-4 bg-slate-950 hover:bg-blue-950 transition-all"
      >
        <span className="text-sm font-semibold text-white">
          Watch Full Short
        </span>

        <div className="w-10 h-10 rounded-full bg-blue-600 group-hover:translate-x-1 transition-transform flex items-center justify-center">
          <Play className="w-4 h-4 fill-white text-white" />
        </div>
      </a>
    </div>
  ))}
</div>

        {/* Bottom */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-center">

          <Star className="mx-auto w-10 h-10 text-yellow-300 mb-4 fill-yellow-300" />

          <h3 className="text-3xl font-black">
            Thousands Are Already Learning AI
          </h3>

          <p className="mt-3 text-blue-100 max-w-2xl mx-auto">
            Join the growing community of students building practical AI skills
            through live classes, mentorship and real-world projects.
          </p>

        </div>

      </div>
    </section>
  );
}