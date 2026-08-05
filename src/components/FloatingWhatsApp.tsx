import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const phoneNumber = '919074871204';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    'Hi, I want to learn about the AI Money Making Course. Please share the details.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating WhatsApp Circle Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-600/40 hover:bg-[#20ba59] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white animate-bounce">
          1
        </span>
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />
      </a>
    </div>
  );
};
