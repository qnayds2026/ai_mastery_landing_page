import React from 'react';
import { StudentRecord } from '../utils/lmsWorkflow';
import { CheckCircle2, AlertCircle, ExternalLink, MessageCircle, ShieldCheck, Database, RefreshCw, X, Mail } from 'lucide-react';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentRecord: StudentRecord | null;
  onOpenStudentPortal?: () => void;
}

export const ThankYouModal: React.FC<ThankYouModalProps> = ({
  isOpen,
  onClose,
  studentRecord,
  onOpenStudentPortal
}) => {
  if (!isOpen || !studentRecord) return null;

  const isSuccess = studentRecord.paymentStatus === 'Successful';
  const lmsUrl = 'https://lms.qnayds.in';
  const waGroupUrl = 'https://chat.whatsapp.com/DSgFgxESGfD41hHv77TiAb?s=cl&p=i&mlu=4&amv=1';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl my-6 flex flex-col max-h-[92vh]">

        {/* Top Header Banner */}
        <div className={`p-6 sm:p-8 text-white relative text-center ${isSuccess ? 'bg-linear-to-r from-blue-900 via-slate-900 to-indigo-950' : 'bg-linear-to-r from-amber-900 via-slate-900 to-red-950'}`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {isSuccess ? (
            <>
              <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight">Payment Successful</h2>
              <p className="text-sm text-slate-300 mt-1">Welcome to QNAYDS Academy</p>
              <p className="text-xs text-slate-400 mt-3">
                We've sent an activation email to<br />
                <span className="font-bold text-white">{studentRecord.email}</span>
              </p>
            </>
          ) : (
            <>
              <div className="w-14 h-14 bg-amber-500/20 border border-amber-400/30 text-amber-300 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-black text-white tracking-tight">Payment Pending / Failed</h2>
              <p className="text-sm text-slate-300 mt-1">No course access is active yet.</p>
            </>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 flex-1 bg-slate-50/50">

          {isSuccess ? (
            <>
              {/* Next Steps */}
              <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Next Steps</span>
                <ol className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">1</span>
                    Check your email
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">2</span>
                    Click Activate Account
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">3</span>
                    Create your password
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">4</span>
                    Login to LMS
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">5</span>
                    Start learning
                  </li>
                </ol>
              </div>

              {/* Didn't receive email */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 space-y-2">
                <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" /> Didn't receive the email?
                </span>
                <ul className="text-xs text-amber-800 space-y-1 pl-1">
                  <li>• Check your spam folder</li>
                  <li>• Wait 2–3 minutes</li>
                  <li>• Contact support</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={lmsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black text-sm px-5 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Login to LMS</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
<a
                  href={waGroupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm px-5 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Join WhatsApp Community</span>
                </a>

                {onOpenStudentPortal && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenStudentPortal();
                    }}
                    className="w-full text-xs font-bold text-slate-600 hover:text-blue-700 bg-white border border-slate-200 hover:border-blue-300 py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Launch In-App Student Portal Dashboard
                  </button>
                )}
              </div>
            </>
          ) : (
            <button
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black text-sm px-5 py-3.5 rounded-xl transition-all shadow-md cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Retry Payment & Activate Access</span>
            </button>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 text-center text-slate-500 text-xs flex items-center justify-between">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Razorpay Verified & LMS Synced
          </span>
          <button onClick={onClose} className="font-bold text-slate-700 hover:text-slate-900 cursor-pointer">
            Close
          </button>
        </div>

      </div>
    </div>
  );
};