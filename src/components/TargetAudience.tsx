import React from 'react';
import {
  GraduationCap,
  UserPlus,
  Briefcase,
  MonitorPlay,
  Network,
  Users,
  Building2,
  Video,
  BarChart3,
  Globe,
} from 'lucide-react';

interface AudienceItem {
  icon: React.ReactNode;
  title: string;
  isSpecial?: boolean;
}

export const TargetAudience: React.FC = () => {
  const audienceList = [
    { icon: GraduationCap, title: 'Students' },
    { icon: UserPlus, title: 'Graduates' },
    { icon: Briefcase, title: 'Job Seekers' },
    { icon: MonitorPlay, title: 'Freelancers' },
    { icon: Network, title: 'Business Owners' },
    { icon: Users, title: 'Housewives' },
    { icon: Building2, title: 'Professionals' },
    { icon: Video, title: 'Content Creators' },
    { icon: BarChart3, title: 'Digital Marketers' },
    { icon: Globe, title: 'Anyone' },
  ];

  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-2">
          <div className="text-[#3563FF] font-bold text-xs sm:text-sm tracking-[1.5px] uppercase">
            TARGET AUDIENCE
          </div>
          <h2 className="text-[#111827] font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Who Can Join?
          </h2>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {audienceList.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 ease-out bg-[#F8FAFC] border border-slate-200/80 hover:border-blue-500 hover:bg-blue-50/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 cursor-pointer overflow-hidden"
              >
                {/* Subtle Hover Gradient Accent Line */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Circular White Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:scale-110 group-hover:shadow-md transition-all duration-300 flex items-center justify-center shrink-0">
                  <IconComponent className="w-5 h-5 transition-transform duration-300" />
                </div>

                {/* Title Text */}
                <span className="text-[#111827] group-hover:text-blue-600 font-bold text-sm sm:text-base leading-tight transition-colors duration-300">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footer Subtitle */}
        <div className="mt-10 sm:mt-14 text-center">
          <p className="text-slate-500 font-medium text-sm sm:text-base">
            Perfect for anyone interested in earning online.
          </p>
        </div>

      </div>
    </section>
  );
};
