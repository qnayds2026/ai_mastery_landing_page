import React from 'react';
import { Mail, Phone, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { QnaydsLogo } from './QnaydsLogo';

interface FooterProps {
  onOpenWebinar: () => void;
  onOpenPortalPreview: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWebinar, onOpenPortalPreview }) => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800 items-start">
          
          {/* Logo & Brand Info */}
          <div className="space-y-3">
            <div>
              <QnaydsLogo
                imgClassName="h-16 sm:h-20 max-h-24 w-auto object-contain select-none shrink-0"
                textClassName="font-black text-white text-3xl sm:text-4xl tracking-tight"
              />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Empowering students, freelancers, and business owners to master cutting-edge AI tools and unlock high-income opportunities.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm tracking-wide">Contact Us</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="mailto:career.qnayds@gmail.com"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>career.qnayds@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919074871204"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Call: +91 90748 71204</span>
                </a>
              </li>

            </ul>
          </div>

          {/* Social Media Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm tracking-wide">Connect With Us</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/qnayds_ai_academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-pink-600 hover:text-white text-slate-300 flex items-center justify-center transition-all duration-200 border border-slate-700/60"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61580936154145"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-300 flex items-center justify-center transition-all duration-200 border border-slate-700/60"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-sky-600 hover:text-white text-slate-300 flex items-center justify-center transition-all duration-200 border border-slate-700/60"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@QnaydsAiAcademy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-red-600 hover:text-white text-slate-300 flex items-center justify-center transition-all duration-200 border border-slate-700/60"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>


          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/60 text-slate-500 text-[11px]">
          <div>© 2026 Qnayds. All Rights Reserved.</div>
        </div>

      </div>
    </footer>
  );
};
