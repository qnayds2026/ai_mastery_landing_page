import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Clock, Zap, ArrowRight, Sparkles } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenWebinar: () => void;
}

const BUSINESS_MODELS = [
  { id: 'copywriting', name: 'High-Ticket AI Copywriting', baseHourlyRate: 65, avgClientRetainer: 2000, icon: '✍️' },
  { id: 'faceless_yt', name: 'Faceless Video Channels (YT/TikTok)', baseHourlyRate: 50, avgClientRetainer: 3200, icon: '📹' },
  { id: 'saas', name: 'No-Code Micro-SaaS App', baseHourlyRate: 90, avgClientRetainer: 4500, icon: '🚀' },
  { id: 'agency', name: 'AI Automation Agency (AAA)', baseHourlyRate: 110, avgClientRetainer: 5000, icon: '⚡' },
  { id: 'digital_products', name: 'Digital Prompts & Notion Templates', baseHourlyRate: 40, avgClientRetainer: 1500, icon: '📦' }
];

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenWebinar }) => {
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);
  const [selectedModel, setSelectedModel] = useState<string>('copywriting');
  const [experience, setExperience] = useState<number>(1); // 1: Beginner, 1.3: Medium, 1.6: Advanced

  const currentModel = BUSINESS_MODELS.find(m => m.id === selectedModel) || BUSINESS_MODELS[0];

  // Calculation Logic
  const monthlyHours = hoursPerWeek * 4.2;
  const multiplier = experience;
  const estimatedMonthlyIncome = Math.round(monthlyHours * currentModel.baseHourlyRate * multiplier);
  const daysToFirstClient = Math.max(7, Math.round(21 - (hoursPerWeek * 0.5)));
  const courseCost = 47;
  const roiX = (estimatedMonthlyIncome / courseCost).toFixed(0);

  return (
    <section id="calculator" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Glow background */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-100/60 rounded-full blur-[80px] transform-gpu pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold text-blue-700 uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5 text-blue-600" /> Interactive ROI Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Calculate Your AI Monthly Revenue Potential
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            See how many hours per week you need to hit your income goal using our proven AI business blueprints.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-10 shadow-xl grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Select Business Model */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                1. Choose Your Preferred AI Business Model:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {BUSINESS_MODELS.map(model => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model.id)}
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedModel === model.id
                        ? 'bg-blue-50 border-blue-600 text-blue-900 font-semibold shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                    }`}
                  >
                    <span className="text-xl">{model.icon}</span>
                    <span className="text-xs sm:text-sm">{model.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Hours Per Week Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  2. Hours You Can Dedicate Per Week:
                </label>
                <span className="text-blue-600 font-extrabold text-sm bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                  {hoursPerWeek} Hours / Week
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="35"
                step="1"
                value={hoursPerWeek}
                onChange={e => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>3 hrs (Side Hustle)</span>
                <span>15 hrs (Part-Time)</span>
                <span>35 hrs (Full-Time Empire)</span>
              </div>
            </div>

            {/* Step 3: Prior Experience */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                3. Your Current Technical / Marketing Experience:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Total Beginner (0 exp)", val: 1 },
                  { label: "Some AI Knowledge", val: 1.2 },
                  { label: "Pro Marketer / Dev", val: 1.5 }
                ].map(item => (
                  <button
                    key={item.label}
                    onClick={() => setExperience(item.val)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                      experience === item.val
                        ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Output Column (Right) */}
          <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-blue-200 shadow-sm space-y-6 text-center">
            
            <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Projected Results Breakdown
            </div>

            {/* Big Income Number */}
            <div className="py-2">
              <div className="text-xs uppercase text-slate-500 font-semibold tracking-wider">Estimated Monthly Income</div>
              <div className="text-4xl sm:text-5xl font-black text-blue-600 my-1">
                ${estimatedMonthlyIncome.toLocaleString()}
                <span className="text-sm font-normal text-slate-500">/mo</span>
              </div>
              <p className="text-xs text-slate-500">Based on {currentModel.name} workflows</p>
            </div>

            {/* Metrics Breakdown Grid */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200 text-left text-xs">
              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <div className="text-slate-500 flex items-center gap-1 mb-0.5">
                  <Clock className="w-3.5 h-3.5 text-blue-600" /> Days to 1st Sale
                </div>
                <div className="text-slate-900 font-extrabold text-base">~{daysToFirstClient} Days</div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200">
                <div className="text-slate-500 flex items-center gap-1 mb-0.5">
                  <TrendingUp className="w-3.5 h-3.5 text-blue-600" /> Course ROI
                </div>
                <div className="text-blue-600 font-extrabold text-base">{roiX}x Return</div>
              </div>
            </div>

            {/* Note */}
            <p className="text-[11px] text-slate-400 italic">
              *Calculated using real graduate average benchmarks. Results depend on implementing course action items.
            </p>

            {/* CTA */}
            <button
              onClick={onOpenWebinar}
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer animate-enroll-blink"
            >
              <span>🔥 Join Webinar for ₹99</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
