import React, { useState, useEffect } from 'react';
import { QnaydsLogo } from './QnaydsLogo';

interface HeaderProps {
  onOpenCheckout?: (planId?: string) => void;
  onOpenPortalPreview?: () => void;
  isEnrolled?: boolean;
}

export const Header: React.FC<HeaderProps> = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="relative w-full z-50 transition-all duration-300 transform-gpu">
      {/* Top Accent Strip */}
      <div className="bg-blue-600 h-1.5 w-full" />

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md py-1 sm:py-1.5' : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-1.5 sm:py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <div className="flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <QnaydsLogo
              imgClassName="h-18 sm:h-24 md:h-28 max-h-32 w-auto object-contain select-none shrink-0 group-hover:scale-105 transition-transform duration-200"
              iconClassName="w-16 h-16 sm:w-20 sm:h-20 group-hover:scale-105 transition-transform duration-200"
              textClassName="font-black text-4xl sm:text-5xl md:text-6xl tracking-tight text-slate-900"
            />
          </div>
        </div>
      </div>
    </header>
  );
};


