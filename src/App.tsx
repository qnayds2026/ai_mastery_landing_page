import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroVideo } from './components/IntroVideo';
import { AboutProgram } from './components/AboutProgram';
import { TargetAudience } from './components/TargetAudience';
import { RealClassesResults } from './components/RealClassesResults';
import { VideoSpace } from './components/VideoSpace';
import { LearningOutcomes } from './components/LearningOutcomes';
import { Curriculum } from './components/Curriculum';
import { JourneyRoadmap } from './components/JourneyRoadmap';
import { Instructor } from './components/Instructor';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { VideoModal } from './components/VideoModal';
import { StudentPortal } from './components/StudentPortal';
import { ThankYouModal } from './components/ThankYouModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { initMetaPixel, trackInitiateCheckout } from './utils/metaPixel';
import { initGoogleAnalytics, trackGaBeginCheckout } from './utils/googleAnalytics';
import { StudentRecord } from './utils/lmsWorkflow';
import { Zap, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function App() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('vip');
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoTitle, setVideoTitle] = useState("Module 1.1: The 2026 AI Monetization Landscape");
  const [videoModule, setVideoModule] = useState("Module 1: AI Prompt Engineering & Core Mastery");
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [viewingPortal, setViewingPortal] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [thankYouOpen, setThankYouOpen] = useState(false);
  const [currentStudentRecord, setCurrentStudentRecord] = useState<StudentRecord | null>(null);

  useEffect(() => {
    // Initialize Meta Pixel and Google Analytics tracking on app mount
    initMetaPixel();
    initGoogleAnalytics();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowStickyCta(window.scrollY > 600);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenCheckout = (planId: string = 'recorded') => {
    setSelectedPlan(planId);
    setCheckoutOpen(true);

    const amount = 1;
    const planName = 'Recorded Course';
    trackInitiateCheckout(amount, planName);
    trackGaBeginCheckout(amount, 'INR', planName);
  };

  const handleOpenVideoPreview = (title?: string, mod?: string) => {
    if (title) setVideoTitle(title);
    if (mod) setVideoModule(mod);
    setVideoOpen(true);
  };

  const handleEnrollSuccess = (studentRecord: StudentRecord) => {
    setIsEnrolled(true);
    setCurrentStudentRecord(studentRecord);
    setThankYouOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentFailed = (studentRecord: StudentRecord) => {
    setCurrentStudentRecord(studentRecord);
    setThankYouOpen(true);
  };

  // If user is actively viewing Student Portal Dashboard:
  if (viewingPortal) {
    return <StudentPortal onBackToLanding={() => setViewingPortal(false)} />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Header */}
      <Header
        onOpenCheckout={handleOpenCheckout}
        onOpenPortalPreview={() => setViewingPortal(true)}
        isEnrolled={isEnrolled}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenCheckout={handleOpenCheckout}
          onOpenVideoPreview={() => handleOpenVideoPreview()}
        />

        {/* Intro Video Section */}
        <IntroVideo />

        {/* Malayalam Value Proposition Callout Banner directly after Intro Video */}
        <section className="bg-slate-900 border-y border-slate-800 py-8 px-4 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/60 via-indigo-900/60 to-slate-900/90 border border-blue-500/30 p-6 sm:p-8 rounded-3xl shadow-2xl backdrop-blur-sm text-center relative z-10 space-y-4">
            <p className="text-base sm:text-xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
              "വെറും <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 font-black px-2.5 py-0.5 rounded-lg shadow-md">₹1499-ൽ</span>, ഒരു റെസ്റ്റോറന്റിൽ കുടുംബത്തോടൊപ്പം ഒരിക്കൽ ഭക്ഷണം കഴിക്കുന്ന ചെലവിൽ, ആരും പറഞ്ഞു തരാത്ത ലക്ഷങ്ങൾ സമ്പാദിക്കാനുള്ള AI സ്കിൽ ഒരു മാസം (4 ആഴ്ച) കൊണ്ട് നിങ്ങൾക്ക് സ്വന്തമാക്കാം."
            </p>
            <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Malayalam Audio & Video Lessons • Lifetime Community Access</span>
            </div>
          </div>
        </section>

        {/* Enroll Now Scrolling Action Bar after Intro Video */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 py-3.5 px-4 shadow-lg text-white border-y border-blue-500/30">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-300 animate-pulse flex-shrink-0" />
              <span className="font-bold text-sm sm:text-base">
                തയ്യാറാണോ നിങ്ങളുടെ AI യാത്ര ആരംഭിക്കാൻ?
              </span>
            </div>
            <button
              onClick={() => handleOpenCheckout('vip')}
              className="bg-white text-blue-700 hover:bg-slate-100 font-extrabold text-sm px-6 py-2.5 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap active:scale-95 animate-pulse-blink"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4 text-blue-700" />
            </button>
          </div>
        </div>

        {/* About Program Section */}
        <AboutProgram />

        {/* Target Audience: Who Can Join? */}
        <TargetAudience />

        {/* Video Space: Program Preview & Video Showcase */}
        <VideoSpace
          onOpenCheckout={handleOpenCheckout}
          onOpenVideoModal={() => handleOpenVideoPreview()}
        />

        {/* Learning Outcomes Section */}
        <LearningOutcomes />

        {/* Real Classes, Real Results - YouTube Shorts / Video Showcase */}
        <RealClassesResults />

        {/* Your Journey: 4-Week Action Plan */}
        <JourneyRoadmap onOpenCheckout={handleOpenCheckout} />

        {/* Course Curriculum: 10-Step Blueprint to Success */}
        <Curriculum
          onOpenCheckout={handleOpenCheckout}
          onSelectPreviewLesson={(title, mod) => handleOpenVideoPreview(title, mod)}
        />

        {/* Meet the Instructor (Sawad KT) */}
        <Instructor />

        {/* Pricing Table ($47, $97, $197) */}
        <Pricing onOpenCheckout={handleOpenCheckout} />

        {/* Frequently Asked Questions */}
        <Faq onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* Footer */}
      <Footer
        onOpenCheckout={handleOpenCheckout}
        onOpenPortalPreview={() => setViewingPortal(true)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        planId={selectedPlan}
        onSuccess={handleEnrollSuccess}
        onPaymentFailed={handlePaymentFailed}
      />

      {/* Thank You & Enrollment Confirmation Modal (Step 9) */}
      <ThankYouModal
        isOpen={thankYouOpen}
        onClose={() => setThankYouOpen(false)}
        studentRecord={currentStudentRecord}
        onOpenStudentPortal={() => setViewingPortal(true)}
      />

      {/* Video Lesson Preview Modal */}
      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        lessonTitle={videoTitle}
        moduleTitle={videoModule}
        onOpenCheckout={handleOpenCheckout}
      />

      {/* Floating Sticky Scrolling Button Bar (Appears when scrolling past the first container) */}
      {showStickyCta && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md bg-slate-900/98 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center justify-between gap-3 transform-gpu animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-extrabold text-white">Enrollment Open Today</span>
          </div>
          <button
            onClick={() => handleOpenCheckout('vip')}
            className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-95 animate-enroll-blink"
          >
            <span>Enroll Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Scrolling Button */}
      <FloatingWhatsApp />

    </div>
  );
}
