import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  X,
  Lock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import { PRICING_PLANS } from "../data/courseData";
import { trackPurchase } from "../utils/metaPixel";
import { trackGaPurchase } from "../utils/googleAnalytics";
import api from "../api/axios";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  planId?: string;
  onSuccess: () => void;
}

declare global {
  interface Window {
    Razorpay?: any;
  }
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  planId = "vip",
  onSuccess,
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  // Holds the real Razorpay payment id once verification succeeds
  const [paymentSuccessId, setPaymentSuccessId] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentPlan =
    PRICING_PLANS.find((p) => p.id === planId) || PRICING_PLANS[0];

  const currency = currentPlan.currencySymbol || "₹";

  const basePriceNum =
    typeof currentPlan.price === "string"
      ? parseInt(currentPlan.price.replace(/,/g, ""), 10)
      : currentPlan.price;

  const numericTotal = basePriceNum;
  const totalPriceFormatted = numericTotal.toLocaleString();

  const courseId = Number(import.meta.env.VITE_COURSE_ID);

if (!courseId) {
  throw new Error("VITE_COURSE_ID is not configured.");
}

  const loadRazorpayScript = () => {
    return new Promise<boolean>((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpayCheckout = async () => {
    try {
      setIsSubmitting(true);

      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error("Unable to load Razorpay.");
      }

      const { data } = await api.post("/landing/create-order", {
        name,
        email,
        phone,
        courseId,
      });

      const paymentData = data.data;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: paymentData.order.amount,
        currency: paymentData.order.currency,
        name: "QNAYDS Academy",
        description: paymentData.course.title,
        order_id: paymentData.order.id,
        prefill: {
          name: paymentData.student.name,
          email: paymentData.student.email,
          contact: phone,
        },
        theme: {
          color: "#2563eb",
        },
        handler: async function (response: any) {
          try {
            await api.post("/payments/verify", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            trackPurchase(
              response.razorpay_payment_id,
              numericTotal,
              currentPlan.name
            );

            trackGaPurchase(
              response.razorpay_payment_id,
              numericTotal,
              "INR",
              currentPlan.name
            );

            confetti({
              particleCount: 150,
              spread: 90,
              origin: { y: 0.6 },
            });

            setIsSubmitting(false);
            // Show the success screen with LMS / WhatsApp links
            setPaymentSuccessId(response.razorpay_payment_id);

            onSuccess();
          } catch (error: any) {
            setIsSubmitting(false);
            alert(
              error.response?.data?.message ||
                "Payment verification failed."
            );
          }
        },
        modal: {
          ondismiss() {
            setIsSubmitting(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error: any) {
      setIsSubmitting(false);
      alert(
        error.response?.data?.message ||
          "Unable to create payment order."
      );
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleRazorpayCheckout();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">

        {/* Header */}
        <div className="bg-[#0c2340] px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600/30 p-1.5 rounded-lg border border-blue-400/30">
              <Lock className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white tracking-wide uppercase">Razorpay Secure Checkout</span>
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-500/30">
                  VERIFIED
                </span>
              </div>
              <p className="text-[10px] text-slate-300">UPI • GPay • PhonePe • Cards • NetBanking</p>
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

          {paymentSuccessId ? (
            /* Success screen — shown after real Razorpay verification succeeds */
            <div className="py-8 text-center space-y-5 animate-scaleUp">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-200">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-black text-slate-900">Razorpay Payment Successful!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Payment ID: <span className="font-mono font-bold text-blue-600">{paymentSuccessId}</span>
                </p>
              </div>

              <div className="bg-linear-to-br from-blue-50 to-emerald-50 border border-blue-200 p-5 rounded-2xl max-w-md mx-auto space-y-3 shadow-sm">
                <p className="text-xs font-bold text-slate-900">
                  🎉 Welcome to Qnayds AI Academy! Access your course and community below:
                </p>
                <div className="space-y-2.5">
                  <a
                    href="https://lms.qnayds.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Go to LMS Portal (lms.qnayds.in)</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="https://chat.whatsapp.com/DSgFgxESGfD41hHv77TiAb?s=cl&p=i&mlu=4&amv=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-white stroke-none" />
                    <span>Join VIP WhatsApp Community</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Order Summary Box */}
              <div className="bg-blue-50/80 p-4 rounded-2xl border border-blue-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Selected Course
                    </span>
                    <h4 className="text-base font-bold text-slate-900">{currentPlan.name}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-blue-700">{currency}{currentPlan.price}</span>
                    <span className="block text-[10px] text-slate-500 line-through">₹6,999</span>
                  </div>
                </div>

                <ul className="text-xs text-slate-700 space-y-1 pt-2 border-t border-blue-200/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Full Malayalam Audio/Video Course on WhatsApp & Web
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" /> Lifetime Updates + VIP Community & Mentoring Access
                  </li>
                </ul>
              </div>

              {/* Student Registration Form — submitting triggers real Razorpay checkout */}
              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">Full Name:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs rounded-xl p-3 focus:border-blue-600 focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 uppercase mb-1">Email Address:</label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs rounded-xl p-3 focus:border-blue-600 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-600 uppercase mb-1 flex items-center justify-between">
                    <span>WhatsApp Mobile Number (For Course Delivery):</span>
                    <span className="text-[10px] text-emerald-600 font-semibold">+91 Malayalam WhatsApp</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs rounded-xl p-3 focus:border-blue-600 focus:bg-white focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-linear-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer animate-enroll-blink"
                  >
                    {isSubmitting ? (
                      <span>Opening Razorpay Gateway...</span>
                    ) : (
                      <>
                        <span>Pay {currency}{totalPriceFormatted} via Razorpay</span>
                        <ArrowRight className="w-5 h-5 text-white" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Razorpay 256-Bit Bank Grade SSL Encryption • Instant Access</span>
                </div>

              </form>
            </>
          )}

        </div>

      </div>
    </div>
  );
};