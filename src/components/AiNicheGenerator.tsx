import React, { useState } from 'react';
import { Sparkles, Bot, ArrowRight, Loader2, Compass, CheckCircle2, Zap } from 'lucide-react';
import { generateAiBusinessRoadmap } from '../utils/geminiClient';

interface AiNicheGeneratorProps {
  onOpenCheckout: (planId?: string) => void;
}

export const AiNicheGenerator: React.FC<AiNicheGeneratorProps> = ({ onOpenCheckout }) => {
  const [interest, setInterest] = useState<string>('Writing & Marketing');
  const [hours, setHours] = useState<string>('10');
  const [budget, setBudget] = useState<string>('$0 - Free Tools Only');
  const [loading, setLoading] = useState<boolean>(false);
  const [roadmap, setRoadmap] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setRoadmap(null);

    const result = await generateAiBusinessRoadmap(interest, hours, budget);
    setRoadmap(result);
    setLoading(false);
  };

  return (
    <section id="generator" className="py-20 bg-white relative overflow-hidden border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest">
            <Bot className="w-3.5 h-3.5 text-blue-600" /> Interactive AI Business Roadmap Finder
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Not Sure Where To Start? Let AI Build Your Plan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Tell us your background and available time. Our built-in Gemini AI agent will analyze your profile and construct a step-by-step roadmap tailored to you.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8">
          
          <form onSubmit={handleGenerate} className="grid sm:grid-cols-3 gap-5">
            
            {/* Input 1: Skill / Interest */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Primary Interest:
              </label>
              <select
                value={interest}
                onChange={e => setInterest(e.target.value)}
                className="w-full bg-white border border-slate-300 text-slate-800 text-sm rounded-xl p-3 focus:border-blue-600 focus:outline-none"
              >
                <option value="Writing & Marketing">Writing & Copywriting</option>
                <option value="Video Creation & Social Media">Video & Social Media</option>
                <option value="No-Code Tech & Web Apps">No-Code & Web Apps</option>
                <option value="B2B Automations & Chatbots">B2B Automations & Chatbots</option>
                <option value="E-Commerce & Digital Products">E-Commerce & Digital Products</option>
                <option value="General Freelancing">General AI Freelancing</option>
              </select>
            </div>

            {/* Input 2: Weekly Hours */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Weekly Time Available:
              </label>
              <select
                value={hours}
                onChange={e => setHours(e.target.value)}
                className="w-full bg-white border border-slate-300 text-slate-800 text-sm rounded-xl p-3 focus:border-blue-600 focus:outline-none"
              >
                <option value="5">5 Hours / Week</option>
                <option value="10">10 Hours / Week</option>
                <option value="20">20 Hours / Week</option>
                <option value="40">40+ Hours / Week</option>
              </select>
            </div>

            {/* Input 3: Budget */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Starting Tool Budget:
              </label>
              <select
                value={budget}
                onChange={e => setBudget(e.target.value)}
                className="w-full bg-white border border-slate-300 text-slate-800 text-sm rounded-xl p-3 focus:border-blue-600 focus:outline-none"
              >
                <option value="$0 - Free Tools Only">$0 (Free Tools Only)</option>
                <option value="$20 - ChatGPT Plus">$20/mo (ChatGPT/Claude)</option>
                <option value="$100 - Full Stack">$100+ Pro Tech Stack</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-3 pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Gemini AI is Analyzing Your Profile...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-white" />
                    <span>Generate My Custom AI Business Roadmap</span>
                    <ArrowRight className="w-5 h-5 text-white" />
                  </>
                )}
              </button>
            </div>

          </form>

          {/* AI Roadmap Output Result */}
          {roadmap && (
            <div className="mt-8 pt-8 border-t border-slate-200 space-y-6 animate-fadeIn">
              
              <div className="flex items-center justify-between bg-blue-50 p-4 rounded-xl border border-blue-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-900 font-bold text-sm">Custom AI Roadmap Generated!</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">2026 AI Strategy</span>
              </div>

              {/* Rendered Text Box */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 text-slate-800 text-sm leading-relaxed whitespace-pre-line font-sans space-y-3 shadow-sm">
                {roadmap}
              </div>

              {/* Next Step Banner */}
              <div className="bg-blue-50 p-5 rounded-2xl border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-blue-900 font-bold text-sm flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-blue-600 fill-blue-600" /> Ready to Execute This Exact Roadmap?
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Get all step-by-step video tutorials, prompt templates, and software kits in AI Money Making Mastery.
                  </div>
                </div>
                <button
                  onClick={() => onOpenCheckout('vip')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all whitespace-nowrap shadow-md shadow-blue-600/20 cursor-pointer animate-enroll-blink"
                >
                  Enroll Today for ₹1
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
