import React from "react";
import {
  GraduationCap,
  UserPlus,
  Briefcase,
  MonitorPlay,
  Network,
  BookOpen,
} from "lucide-react";

interface AudienceItem {
  icon: React.ElementType;
  title: string;
  benefit: string;
}

export const TargetAudience: React.FC = () => {
  const audienceList: AudienceItem[] = [
    {
      icon: GraduationCap,
      title: "Students",
      benefit: "AI skills ഉപയോഗിച്ച് career advantage നേടാൻ",
    },
    {
      icon: UserPlus,
      title: "Job Seekers",
      benefit: "Practical AI skills portfolio-യിൽ add ചെയ്യാൻ",
    },
    {
      icon: MonitorPlay,
      title: "Content Creators",
      benefit: "Posters, videos & content faster create ചെയ്യാൻ",
    },
    {
      icon: Network,
      title: "Business Owners",
      benefit: "AI ഉപയോഗിച്ച് marketing കൂടുതൽ efficiently ചെയ്യാൻ",
    },
    {
      icon: Briefcase,
      title: "Freelancers",
      benefit: "AI-based services explore ചെയ്ത് income grow ചെയ്യാൻ",
    },
    {
      icon: BookOpen,
      title: "Teachers & Professionals",
      benefit: "Teaching & content creation smarter ആക്കാൻ",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-blue-600 font-bold text-xs sm:text-sm tracking-[1.5px] uppercase mb-3">
            ആർക്കൊക്കെ Join ചെയ്യാം?
          </div>
          <h2 className="text-slate-900 font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Who Is This For?
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            AI background ഇല്ലാത്ത ആർക്കും ഈ course join ചെയ്യാം. നിങ്ങൾ ഏത്
            field-ൽ ആണെങ്കിലും, AI skills ഉപയോഗിച്ച് smarter ആയി work ചെയ്യാൻ
            ഇത് help ചെയ്യും.
          </p>
        </div>

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {audienceList.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-5 sm:p-6 flex items-start gap-4 transition-all duration-300 ease-out bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/40 hover:shadow-lg hover:shadow-blue-500/8 hover:-translate-y-1 cursor-default overflow-hidden"
              >
                {/* Hover accent line */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-white shadow-sm border border-slate-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Text */}
                <div>
                  <div className="font-bold text-slate-900 group-hover:text-blue-700 text-sm sm:text-base leading-tight transition-colors duration-300 mb-1">
                    {item.title}
                  </div>
                  <p className="text-xs text-slate-500 group-hover:text-slate-600 leading-relaxed transition-colors duration-300">
                    → {item.benefit}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-10 sm:mt-14 text-center">
          <p className="text-slate-500 font-medium text-sm sm:text-base">
            AI beginners-നും, tech background ഇല്ലാത്തവർക്കും perfect.
          </p>
        </div>
      </div>
    </section>
  );
};
