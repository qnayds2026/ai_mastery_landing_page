import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { StudentGoogleReviews } from "./components/StudentGoogleReviews";
import { IntroVideo } from "./components/IntroVideo";
import { LearningOutcomes } from "./components/LearningOutcomes";
import { TargetAudience } from "./components/TargetAudience";
import { VideoSpace } from "./components/VideoSpace";
import { RealClassesResults } from "./components/RealClassesResults";
import { JourneyRoadmap } from "./components/JourneyRoadmap";
import { WhyNotYoutube } from "./components/WhyNotYoutube";
import { Curriculum } from "./components/Curriculum";
import { Instructor } from "./components/Instructor";
import { WhatYouGet } from "./components/WhatYouGet";
import { Pricing } from "./components/Pricing";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { WebinarRegistrationModal } from "./components/WebinarRegistrationModal";
import { VideoModal } from "./components/VideoModal";
import { StudentPortal } from "./components/StudentPortal";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { initMetaPixel } from "./utils/metaPixel";
import { initGoogleAnalytics, trackGaEvent } from "./utils/googleAnalytics";
import { trackMetaEvent } from "./utils/metaPixel";
import { ArrowRight } from "lucide-react";
import { MoneyBackGuarantee } from "./components/MoneyBackGuarantee";

export default function App() {
  const [webinarOpen, setWebinarOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoTitle, setVideoTitle] = useState(
    "Module 1.1: The 2026 AI Monetization Landscape",
  );
  const [videoModule, setVideoModule] = useState(
    "Module 1: AI Prompt Engineering & Core Mastery",
  );
  const [viewingPortal, setViewingPortal] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);

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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenWebinar = () => {
    trackGaEvent("webinar_cta_click");
    trackMetaEvent("webinar_cta_click");
    setWebinarOpen(true);
  };

  const handleOpenVideoPreview = (title?: string, mod?: string) => {
    if (title) setVideoTitle(title);
    if (mod) setVideoModule(mod);
    setVideoOpen(true);
  };

  // If user is actively viewing Student Portal Dashboard:
  if (viewingPortal) {
    return <StudentPortal onBackToLanding={() => setViewingPortal(false)} />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <Header
        onOpenWebinar={handleOpenWebinar}
        onOpenPortalPreview={() => setViewingPortal(true)}
        isEnrolled={false}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenWebinar={handleOpenWebinar}
          onOpenVideoPreview={() => handleOpenVideoPreview()}
        />

        {/* 2. Social Proof — immediately after Hero */}
        <Testimonials onOpenWebinar={handleOpenWebinar} />

        {/* 3. Watch Before You Enroll — Intro Video */}
        <IntroVideo />

        {/* 2.5. Real Student Google Reviews — Trust & Verification */}
        <StudentGoogleReviews />

        {/* 4. What Will You Be Able To Do? — Learning Outcomes (outcome-first) */}
        <LearningOutcomes onOpenWebinar={handleOpenWebinar} />

        {/* 5. Who Is This For? — Target Audience with benefits */}
        <TargetAudience />

        {/* 6. Demo Class Preview — Watch Before Enrolling */}
        <VideoSpace
          onOpenWebinar={handleOpenWebinar}
          onOpenVideoModal={() => handleOpenVideoPreview()}
        />

        {/* 7. More Social Proof — Real Classes, Real Students, Real Results */}
        <RealClassesResults onOpenWebinar={handleOpenWebinar} />

        {/* 8. 4-Week Action Plan */}
        <JourneyRoadmap onOpenWebinar={handleOpenWebinar} />

        {/* 9. Why This Instead of Random YouTube Videos? */}
        <WhyNotYoutube onOpenWebinar={handleOpenWebinar} />

        {/* 10. Course Curriculum: 8-Step Blueprint */}
        <Curriculum
          onOpenWebinar={handleOpenWebinar}
          onSelectPreviewLesson={(title, mod) =>
            handleOpenVideoPreview(title, mod)
          }
        />

        {/* 11. Meet the Instructor */}
        <Instructor onOpenWebinar={handleOpenWebinar} />

        {/* 12. What You Get — Value Stack */}
        <WhatYouGet onOpenWebinar={handleOpenWebinar} />

        {/* 13. Pricing */}
        <Pricing onOpenWebinar={handleOpenWebinar} />

        <MoneyBackGuarantee onOpenWebinar={handleOpenWebinar} />

        {/* 14. Frequently Asked Questions */}
        <Faq onOpenWebinar={handleOpenWebinar} />

        {/* 15. Final CTA */}
        <FinalCta onOpenWebinar={handleOpenWebinar} />
      </main>

      {/* Footer */}
      <Footer
        onOpenWebinar={handleOpenWebinar}
        onOpenPortalPreview={() => setViewingPortal(true)}
      />

      <WebinarRegistrationModal
        isOpen={webinarOpen}
        onClose={() => setWebinarOpen(false)}
      />

      {/* Video Lesson Preview Modal */}
      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        lessonTitle={videoTitle}
        moduleTitle={videoModule}
        onOpenWebinar={handleOpenWebinar}
      />

      {/* Mobile Sticky Bottom CTA — visible only on mobile when scrolled */}
      {showStickyCta && (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
          <div className="bg-slate-900/98 border-t border-slate-700/80 px-4 py-3 flex items-center justify-between gap-3 shadow-2xl">
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] text-slate-400 font-medium">
                AI Masterclass
              </span>
                <span className="text-lg font-black text-white leading-tight">
                <span className="line-through text-slate-400 text-sm mr-1">₹5,000</span> ₹99
              </span>
            </div>
            <button
              onClick={handleOpenWebinar}
              className="shrink-0 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-95 animate-enroll-blink"
            >
              <span>🔥 Join Webinar for ₹99</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Desktop Floating CTA pill — appears when scrolled on desktop */}
      {showStickyCta && (
        <div className="hidden md:block fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
          <div className="bg-slate-900/98 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-300">
            <div className="flex flex-col">
              <span className="text-xs font-extrabold text-white">
                AI Masterclass Webinar — ₹99
              </span>
              <span className="text-[10px] text-slate-400">
                Live webinar • 1-Hour Master Class  • WhatsApp updates
              </span>
            </div>
            <button
              onClick={handleOpenWebinar}
              className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-95"
            >
              <span>🔥 Join Webinar for ₹99</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Scrolling Button */}
      <FloatingWhatsApp />
    </div>
  );
}
