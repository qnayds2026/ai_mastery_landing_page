import React, { useState } from "react";
import {
   X,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageCircle,
  ExternalLink,
  Mail,
} from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationSubmitted, setRegistrationSubmitted] = useState(false);
  if (!isOpen) return null;

  const handleWebinarRegistration = () => {
    setIsSubmitting(true);
    window.open("https://forms.gle/ikEjj7pJamjm8tP77", "_blank", "noopener,noreferrer");
    setRegistrationSubmitted(true);
    onSuccess?.();
    setIsSubmitting(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWebinarRegistration();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">

        {/* Header */}
        <div className="bg-[#0c2340] px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600/30 p-1.5 rounded-lg border border-blue-400/30">
              <Sparkles className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <span className="text-xs font-bold text-white tracking-wide uppercase">Free Webinar Registration</span>
              <p className="text-[10px] text-slate-300">Reserve your seat for the AI Masterclass webinar</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {registrationSubmitted ? (
            <div className="py-6 animate-scaleUp">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 border-4 border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9 text-emerald-600" />
                </div>
                <h3 className="mt-5 text-3xl font-black text-slate-900">Seat reserved!</h3>
                <p className="mt-2 text-slate-600">Your free webinar registration is confirmed.</p>
                <p className="mt-4 text-sm text-slate-600 font-semibold">Complete the Google Form in the new tab, then come back here to join the WhatsApp group.</p>
              </div>
              <div className="mt-8 space-y-3">
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-blue-900">
                  <p className="font-bold">Next steps</p>
                  <ol className="mt-2 space-y-1 text-blue-800">
                    <li>1. Complete and submit the Google Form.</li>
                    <li>2. Come back to this tab.</li>
                    <li>3. Join the WhatsApp group below.</li>
                  </ol>
                </div>
                <a
                  href="https://chat.whatsapp.com/KDb21dpkaxQDBNtLcVmPkV?s=cl&p=i&ilr=0&amv=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-base shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  I Completed the Form - Join WhatsApp Group
                </a>
                <p className="text-center text-xs text-slate-500">The Google Form is open in another tab. Return here after submitting it.</p>
              </div>
            </div>
          ) : (
            <>
              {/* Webinar offer */}
              <div className="bg-blue-50/80 p-4 rounded-2xl border border-blue-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> AI Masterclass Webinar
                    </span>
                    <h4 className="text-base font-bold text-slate-900">Live AI Masterclass Webinar</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-blue-700">₹0</span>
                    <span className="block text-sm text-slate-500 line-through">₹5,000</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-blue-200/60 text-xs text-slate-700 space-y-1">
                  <p>1. Complete the Google Form.</p>
                  <p>2. Come back here after submitting it.</p>
                  <p>3. Join the WhatsApp group from here.</p>
                </div>
              </div>

              <div className="pt-2">
                <button type="button" onClick={handleWebinarRegistration} disabled={isSubmitting} className="w-full py-4 rounded-xl bg-linear-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer animate-enroll-blink">
                  <span>Open Free Webinar Form</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Your details are collected securely by Google Forms</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};