import React from 'react';
import { Check, Sparkles } from 'lucide-react';

export const AboutProgram: React.FC = () => {
  const features = [
    'Practical Learning',
    'Live Implementation',
    'Beginner Friendly',
    'No Coding Required',
    'Industry Ready',
    'Project Based',
  ];

  return (
    <section className="bg-white py-12 md:py-20 px-4 sm:px-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        
        {/* Left Column (55%) */}
        <div className="w-full lg:w-[55%] space-y-6">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full border border-blue-100">
            <Sparkles className="w-3.5 h-3.5" /> About The Program
          </div>

          {/* Main Heading */}
          <h2 className="text-slate-900 font-black text-xl sm:text-3xl lg:text-4xl leading-snug tracking-tight">
            നിങ്ങൾ വിദ്യാർത്ഥിയോ, ജോലി അന്വേഷിക്കുന്ന ആളോ, ബിസിനസ് ഉടമയോ അല്ലെങ്കിൽ വീട്ടമ്മയോ?
          </h2>

          {/* Malayalam Body Text */}
          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
            <p className="text-blue-600 font-semibold text-lg sm:text-xl">
              AI ഉപയോഗിച്ച് പുതിയ അവസരങ്ങൾ തുറക്കാനുള്ള സമയമാണിത്.
            </p>
            <p>
              നിങ്ങളുടെ സ്കിൽസ് വീട്ടിലിരുന്നുകൊണ്ട് തന്നെ വരുമാനമാക്കി മാറ്റാൻ പഠിക്കൂ.
            </p>
            <p>
              ജോലി, ബിസിനസ്, ഫ്രീലാൻസിംഗ്—എല്ലാം AI-യോടെ കൂടുതൽ സ്മാർട്ടാക്കൂ.
            </p>
            <p className="text-slate-900 font-bold pt-1">
              ഇന്ന് പഠിക്കൂ... നാളെയുടെ വിജയത്തിന് ഇന്ന് തന്നെ തുടക്കമിടൂ!
            </p>
          </div>
        </div>

        {/* Right Column (45%) - Key Points */}
        <div className="w-full lg:w-[45%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 border border-slate-200/80"
              >
                {/* Circular Blue Icon */}
                <div className="w-9 h-9 rounded-full border-2 border-blue-600 bg-blue-50 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-blue-600 stroke-[3]" />
                </div>

                {/* Text */}
                <span className="text-slate-900 text-base font-bold leading-snug">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

