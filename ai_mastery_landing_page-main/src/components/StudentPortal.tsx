import React, { useState } from 'react';
import { COURSE_MODULES, BONUSES } from '../data/courseData';
import { generateSamplePrompt } from '../utils/geminiClient';
import { Play, CheckCircle2, Download, Search, Copy, Check, Sparkles, BookOpen, Database, Code, ShieldAlert, ArrowLeft, Loader2, Bot, Layers, MessageCircle } from 'lucide-react';

interface StudentPortalProps {
  onBackToLanding: () => void;
}

const SAMPLE_PROMPT_VAULT = [
  { id: 'p1', category: 'Copywriting', title: '5-Step VSL High-Converting Script Generator', prompt: 'Act as a $10,000/mo VSL Copywriter. Generate a 3-minute video sales letter script for [PRODUCT_NAME] targeting [TARGET_AUDIENCE]. Follow the structure: Pattern Interrupt Hook -> Agitate Pain -> Introduce Solution -> Social Proof -> Limited Urgency Call to Action.' },
  { id: 'p2', category: 'Cold Email', title: '40%+ Open Rate B2B Agency Cold Email Sequence', prompt: 'Write a 3-email cold outreach sequence for an AI Automation Agency reaching out to [NICHE_BUSINESS, e.g. Real Estate Brokers]. Subject line must be under 5 words. Email 1 must offer a free 60-second video audit.' },
  { id: 'p3', category: 'YouTube Shorts', title: '85% Retention Faceless YouTube Script Prompt', prompt: 'Create a 60-second viral YouTube Shorts script about [TOPIC]. Include visual cues for Midjourney [SCENE_1], audio cues for ElevenLabs voiceover, and mid-roll curiosity loop hook at second 25.' },
  { id: 'p4', category: 'Midjourney', title: 'Photorealistic Hyper-Detailed Product Photography', prompt: 'Commercial product photography of [PRODUCT], sleek modern minimalist background, studio lighting, 8k resolution, cinematic atmosphere, shot on 85mm lens --ar 16:9 --v 6.0' },
  { id: 'p5', category: 'Micro-SaaS', title: 'System Prompt for Custom Resume Generator GPT', prompt: 'You are an elite Career Strategist and ATS Resume Customizer. When user inputs their raw bullet points and target job description, rewrite their experience using action verbs and quantified impact metrics.' }
];

export const StudentPortal: React.FC<StudentPortalProps> = ({ onBackToLanding }) => {
  const [activeTab, setActiveTab] = useState<'lessons' | 'vault' | 'generator' | 'resources'>('lessons');
  const [selectedModuleId, setSelectedModuleId] = useState<number>(1);
  const [completedLessons, setCompletedLessons] = useState<string[]>(['1-1', '1-2']);
  const [searchVault, setSearchVault] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Prompt Generator Tool State
  const [genTask, setGenTask] = useState<string>('Landing Page Sales Copy');
  const [genNiche, setGenNiche] = useState<string>('Real Estate Agents');
  const [genLoading, setGenLoading] = useState<boolean>(false);
  const [generatedPromptResult, setGeneratedPromptResult] = useState<string | null>(null);

  const selectedModule = COURSE_MODULES.find(m => m.id === selectedModuleId) || COURSE_MODULES[0];
  const progressPercent = Math.round((completedLessons.length / 45) * 100);

  const toggleLessonComplete = (lessonId: string) => {
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter(id => id !== lessonId));
    } else {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleGenerateCustomPrompt = async (e: React.FormEvent) => {
    e.preventDefault();
    setGenLoading(true);
    setGeneratedPromptResult(null);

    const result = await generateSamplePrompt(genTask, genNiche);
    setGeneratedPromptResult(result);
    setGenLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      
      {/* Top Portal Header */}
      <header className="bg-white border-b border-slate-200 px-4 py-4 sm:px-8 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToLanding}
            className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Exit Portal
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base text-slate-900">AI MONEY MASTERY</span>
              <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-200">
                STUDENT DASHBOARD
              </span>
            </div>
            <span className="text-xs text-slate-500 hidden sm:block">Welcome back, Student! VIP Enrolled.</span>
          </div>
        </div>

        {/* Overall Progress Tracker & LMS Link */}
        <div className="flex items-center gap-3">
          <a
            href="https://lms.qnayds.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-700 px-3.5 py-2 rounded-xl transition-all shadow-md cursor-pointer"
          >
            <span>Open LMS (lms.qnayds.in)</span>
          </a>

          <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 text-xs hidden sm:flex">
            <div>
              <div className="text-slate-500">Course Progress</div>
              <div className="font-bold text-blue-600">{completedLessons.length} / 45 Lessons ({progressPercent}%)</div>
            </div>
            <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 rounded-full" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        
        {/* VIP WhatsApp Community Join Banner */}
        <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-4 sm:p-5 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 border border-emerald-500/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 fill-white stroke-none" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-sm sm:text-base">Join Official VIP WhatsApp Community</h3>
                <span className="bg-emerald-300 text-emerald-950 font-black text-[10px] px-2 py-0.5 rounded-full uppercase">
                  ACTIVE NOW
                </span>
              </div>
              <p className="text-xs text-emerald-100 mt-0.5">
                Connect with mentors, get daily AI prompt updates, and receive instant support.
              </p>
            </div>
          </div>
          <a
            href="https://chat.whatsapp.com/DSgFgxESGfD41hHv77TiAb?s=cl&p=i&mlu=4&amv=1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 bg-white text-emerald-800 hover:bg-emerald-50 font-extrabold text-xs sm:text-sm rounded-xl shadow transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-700 stroke-none" />
            <span>Join WhatsApp Community</span>
          </a>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveTab('lessons')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'lessons'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" /> 90-MinuteMasterclass Video Lessons
          </button>

          <button
            onClick={() => setActiveTab('vault')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'vault'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Database className="w-4 h-4" /> 1,000+ Master Prompts Vault
          </button>

          <button
            onClick={() => setActiveTab('generator')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'generator'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" /> AI Prompt Generator Tool
          </button>

          <button
            onClick={() => setActiveTab('resources')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'resources'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Download className="w-4 h-4" /> Downloads & Templates
          </button>
        </div>

        {/* TAB 1: 90-MINUTE MASTERCLASS VIDEO LESSONS */}
        {activeTab === 'lessons' && (
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Left Module Selector List */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Select Course Module:</div>
              {COURSE_MODULES.map((mod) => (
                <button
                  key={mod.id}
                  onClick={() => setSelectedModuleId(mod.id)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    selectedModuleId === mod.id
                      ? 'bg-white border-blue-600 shadow-md shadow-blue-600/10'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-bold text-blue-600 mb-1">
                    <span>Module {mod.id}</span>
                    <span>{mod.lessonsCount} Lessons</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{mod.title}</h4>
                </button>
              ))}
            </div>

            {/* Right Video Player & Lessons Details */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Main Player Container */}
              <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-slate-900 relative flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80"
                    alt="Active Video Lesson"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />
                  
                  <div className="relative z-10 text-center space-y-3 p-4">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-8 h-8 fill-white ml-1" />
                    </div>
                    <div className="text-white font-bold text-base">Now Playing: {selectedModule.lessons[0]?.title}</div>
                    <div className="text-xs text-slate-300">Instructor: Sawad KT • Full HD 1080p Stream</div>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900">{selectedModule.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{selectedModule.description}</p>
                </div>
              </div>

              {/* Lessons Checklist */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Module Lessons Checklist:</h4>
                <div className="space-y-2">
                  {selectedModule.lessons.map((lesson) => {
                    const isDone = completedLessons.includes(lesson.id);
                    return (
                      <div
                        key={lesson.id}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700"
                      >
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => toggleLessonComplete(lesson.id)}
                            className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all cursor-pointer ${
                              isDone ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 hover:border-blue-600'
                            }`}
                          >
                            {isDone && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </button>
                          <span className={isDone ? 'line-through text-slate-400' : 'font-medium'}>{lesson.title}</span>
                        </div>
                        <span className="font-mono text-slate-400 text-[11px]">{lesson.duration}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: PROMPTS VAULT */}
        {activeTab === 'vault' && (
          <div className="space-y-6">
            
            {/* Search Bar */}
            <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-2xl p-3 shadow-sm">
              <Search className="w-5 h-5 text-slate-400 ml-2" />
              <input
                type="text"
                placeholder="Search 1,000+ commercial prompts by keyword (e.g., copywriting, cold email, midjourney)..."
                value={searchVault}
                onChange={e => setSearchVault(e.target.value)}
                className="w-full bg-transparent text-sm text-slate-900 focus:outline-none placeholder-slate-400"
              />
            </div>

            {/* Prompt Cards Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {SAMPLE_PROMPT_VAULT
                .filter(p => p.title.toLowerCase().includes(searchVault.toLowerCase()) || p.category.toLowerCase().includes(searchVault.toLowerCase()))
                .map((p) => (
                  <div key={p.id} className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 relative group shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-200 uppercase">
                        {p.category}
                      </span>
                      <button
                        onClick={() => handleCopy(p.id, p.prompt)}
                        className="flex items-center gap-1.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-300 transition-colors cursor-pointer"
                      >
                        {copiedId === p.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-blue-600" />
                            <span className="text-blue-600 font-bold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Prompt</span>
                          </>
                        )}
                      </button>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900">{p.title}</h4>
                    <pre className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[11px] text-slate-700 font-mono whitespace-pre-wrap leading-relaxed max-h-36 overflow-y-auto">
                      {p.prompt}
                    </pre>
                  </div>
                ))}
            </div>

          </div>
        )}

        {/* TAB 3: INTERACTIVE AI PROMPT GENERATOR TOOL */}
        {activeTab === 'generator' && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                <Bot className="w-3.5 h-3.5 text-blue-600" /> Student Tool Suite
              </div>
              <h3 className="text-xl font-bold text-slate-900">AI Master Prompt Construction Tool</h3>
              <p className="text-xs text-slate-500">Generate tailor-made system prompts for your specific agency clients or digital products on demand.</p>
            </div>

            <form onSubmit={handleGenerateCustomPrompt} className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Target Task / Copy Output:</label>
                <select
                  value={genTask}
                  onChange={e => setGenTask(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 text-slate-800 text-xs rounded-xl p-3 focus:border-blue-600 focus:outline-none"
                >
                  <option value="Landing Page Sales Copy">Landing Page Sales Copy</option>
                  <option value="Cold Email Outreach Campaign">Cold Email Outreach Campaign</option>
                  <option value="YouTube Shorts Script">YouTube Shorts Script</option>
                  <option value="Photorealistic Midjourney Art">Photorealistic Midjourney Art</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Target Business Niche:</label>
                <input
                  type="text"
                  value={genNiche}
                  onChange={e => setGenNiche(e.target.value)}
                  placeholder="e.g. Real Estate Agents, E-commerce Beauty, Dentists"
                  className="w-full bg-slate-50 border border-slate-300 text-slate-800 text-xs rounded-xl p-3 focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  disabled={genLoading}
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  {genLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Generating Custom Master Prompt...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-white" />
                      <span>Generate Custom Master Prompt</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {generatedPromptResult && (
              <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-blue-200 space-y-3">
                <div className="flex items-center justify-between text-xs text-blue-700 font-bold">
                  <span>Generated Master System Prompt:</span>
                  <button
                    onClick={() => handleCopy('generated', generatedPromptResult)}
                    className="text-[10px] bg-white px-2.5 py-1 rounded border border-slate-300 hover:text-slate-900 cursor-pointer"
                  >
                    Copy Prompt
                  </button>
                </div>
                <pre className="text-xs text-slate-800 font-mono whitespace-pre-wrap leading-relaxed">
                  {generatedPromptResult}
                </pre>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: DOWNLOADS & RESOURCES */}
        {activeTab === 'resources' && (
          <div className="grid md:grid-cols-2 gap-6">
            {BONUSES.map((bonus) => (
              <div key={bonus.id} className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-slate-900">{bonus.title}</h4>
                  <span className="text-xs text-blue-600 font-mono font-bold">Included</span>
                </div>
                <p className="text-xs text-slate-600">{bonus.description}</p>
                <button
                  onClick={() => alert(`Downloading ${bonus.title} package files...`)}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-blue-600" /> Download Resource Package (ZIP / Notion)
                </button>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
};
