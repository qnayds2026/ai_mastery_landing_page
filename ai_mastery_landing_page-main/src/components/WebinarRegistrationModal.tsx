import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { trackGaEvent } from "../utils/googleAnalytics";
import { trackMetaEvent } from "../utils/metaPixel";

/*
 * ============================================================
 * CONFIG
 * ============================================================
 */

// Your LMS backend API.
// Example:
// VITE_API_URL=https://lms-backend.yourdomain.com/api
const API_URL = import.meta.env.VITE_API_URL;

// Existing Google Apps Script endpoint.
// This is used ONLY for saving registration data to Google Sheet.
const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbwmNdnHkfmwmZjt5sVpywlaHwDvGuY5MopJhY6xm2MCe4sksv2gBBoA1RiimaedLBbqEw/exec";

// WhatsApp webinar group
const WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/KDb21dpkaxQDBNtLcVmPkV?s=cl&p=i&ilr=0&amv=1";

// Razorpay PUBLIC Key ID only.
// NEVER put RAZORPAY_KEY_SECRET here.
const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;

// ₹99 = 9900 paise
const WEBINAR_AMOUNT = 9900;

/*
 * ============================================================
 * TYPES
 * ============================================================
 */

interface WebinarFormData {
  fullName: string;
  email: string;
  whatsapp: string;
  job: string;
  place: string;
}

interface WebinarRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CreateOrderResponse {
  success?: boolean;
  data?: {
    orderId?: string;
    amount?: number;
    currency?: string;
  };
  message?: string;
}

interface VerifyPaymentResponse {
  success?: boolean;
  message?: string;
  data?: {
    paymentId?: string;
    orderId?: string;
    amount?: number;
    status?: string;
  };
}

interface SaveRegistrationResponse {
  success?: boolean;
  message?: string;
}

interface RazorpayPaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
  handler: (response: RazorpayPaymentResponse) => void;
  modal: {
    ondismiss: () => void;
  };
}

interface RazorpayInstance {
  open: () => void;
  on: (event: "payment.failed", handler: () => void) => void;
}

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayOptions) => RazorpayInstance;
  }
}

/*
 * ============================================================
 * INITIAL FORM
 * ============================================================
 */

const INITIAL_FORM: WebinarFormData = {
  fullName: "",
  email: "",
  whatsapp: "",
  job: "",
  place: "",
};

/*
 * ============================================================
 * JOB OPTIONS
 * ============================================================
 */

const JOB_OPTIONS = [
  "Student",
  "Job / Working Professional",
  "Business Owner",
  "Freelancer",
  "Homemaker",
  "Currently Looking for a Job",
  "Other",
];

/*
 * ============================================================
 * RESPONSE PARSER
 * ============================================================
 */

const parseResponse = async <T,>(response: Response): Promise<T> => {
  const responseText = await response.text();

  try {
    return JSON.parse(responseText) as T;
  } catch {
    throw new Error("The server returned an invalid response.");
  }
};

/*
 * ============================================================
 * COMPONENT
 * ============================================================
 */

export const WebinarRegistrationModal: React.FC<
  WebinarRegistrationModalProps
> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<WebinarFormData>(INITIAL_FORM);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<"form" | "success" | "failure">("form");

  const [statusMessage, setStatusMessage] = useState("");

  const firstInputRef = useRef<HTMLInputElement>(null);

  /*
   * ==========================================================
   * OPEN / CLOSE
   * ==========================================================
   */

  useEffect(() => {
    if (isOpen) {
      trackGaEvent("registration_started");
      trackMetaEvent("registration_started");

      window.setTimeout(() => {
        firstInputRef.current?.focus();
      }, 0);
    } else {
      setFormData(INITIAL_FORM);
      setIsSubmitting(false);
      setStatus("form");
      setStatusMessage("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  /*
   * ==========================================================
   * FIELD UPDATE
   * ==========================================================
   */

  const updateField = (field: keyof WebinarFormData, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setStatusMessage("");
  };

  /*
   * ==========================================================
   * WHATSAPP
   * ==========================================================
   */

  const openWhatsAppGroup = () => {
    trackGaEvent("whatsapp_group_click");
    trackMetaEvent("whatsapp_group_click");

    window.open(WHATSAPP_GROUP_URL, "_blank", "noopener,noreferrer");
  };

  /*
   * ==========================================================
   * FAILURE
   * ==========================================================
   */

  const showFailure = (message = "Payment was not completed.") => {
    setIsSubmitting(false);
    setStatus("failure");
    setStatusMessage(message);

    trackGaEvent("payment_failed");
    trackMetaEvent("payment_failed");
  };

  /*
   * ==========================================================
   * SAVE REGISTRATION TO GOOGLE SHEET
   * ==========================================================
   */

  const saveRegistrationToSheet = async (payment: RazorpayPaymentResponse) => {
    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        action: "save_registration",

        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        whatsapp: formData.whatsapp.trim(),
        job: formData.job.trim(),
        place: formData.place.trim(),

        razorpay_payment_id: payment.razorpay_payment_id,

        razorpay_order_id: payment.razorpay_order_id,

        amount: 99,

        payment_status: "PAID",
      }),
    });

    const result = await parseResponse<SaveRegistrationResponse>(response);

    if (!response.ok || result.success !== true) {
      throw new Error(result.message || "Registration could not be saved.");
    }

    return result;
  };

  /*
   * ==========================================================
   * VERIFY PAYMENT USING LMS BACKEND
   * ==========================================================
   */

  const verifyPayment = async (payment: RazorpayPaymentResponse) => {
    setStatusMessage("Verifying your ₹99 payment...");

    try {
      /*
       * IMPORTANT:
       * Razorpay verification happens on LMS backend.
       *
       * Backend endpoint:
       *
       * POST /api/webinar/verify
       */

      const response = await fetch(`${API_URL}/webinar/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          razorpay_payment_id: payment.razorpay_payment_id,

          razorpay_order_id: payment.razorpay_order_id,

          razorpay_signature: payment.razorpay_signature,
        }),
      });

      const result = await parseResponse<VerifyPaymentResponse>(response);

      if (!response.ok || result.success !== true) {
        throw new Error(result.message || "Payment verification failed.");
      }

      /*
       * ======================================================
       * PAYMENT VERIFIED
       * ======================================================
       *
       * Only NOW save the registration to Google Sheet.
       */

      setStatusMessage("Payment verified. Saving your registration...");

      await saveRegistrationToSheet(payment);

      /*
       * ======================================================
       * SUCCESS
       * ======================================================
       *
       * Payment has been verified by the backend and the
       * registration has been saved to Google Sheets.
       * Only now redirect the user to WhatsApp.
       */

      trackGaEvent("payment_verified", {
        amount: 99,
        currency: "INR",
      });

      trackGaEvent("payment_success", {
        amount: 99,
        currency: "INR",
      });

      trackMetaEvent("payment_success");

      setIsSubmitting(false);
      setStatus("success");
      setStatusMessage(
        "Payment successful! Redirecting you to the WhatsApp group...",
      );

      // Redirect only after payment verification AND Google Sheet save succeed.
      window.setTimeout(() => {
        window.location.href = WHATSAPP_GROUP_URL;
      }, 1500);
    } catch (error) {
      console.error("Payment verification failed:", error);

      showFailure(
        error instanceof Error
          ? error.message
          : "Payment verification failed. Please contact support before retrying.",
      );
    }
  };

  /*
   * ==========================================================
   * OPEN RAZORPAY CHECKOUT
   * ==========================================================
   */

  const openCheckout = (orderId: string) => {
    if (!window.Razorpay) {
      throw new Error("Secure payment checkout is unavailable right now.");
    }

    if (!RAZORPAY_KEY_ID) {
      throw new Error("Razorpay configuration is missing.");
    }

    const checkout = new window.Razorpay({
      key: RAZORPAY_KEY_ID,

      amount: WEBINAR_AMOUNT,

      currency: "INR",

      name: "Qnayds AI Academy",

      description: "Live 90-MinuteAI Masterclass Webinar",

      order_id: orderId,

      prefill: {
        name: formData.fullName.trim(),
        email: formData.email.trim(),
        contact: formData.whatsapp.trim(),
      },

      theme: {
        color: "#2563eb",
      },

      handler: (payment) => {
        void verifyPayment(payment);
      },

      modal: {
        ondismiss: () => {
          showFailure("Payment was cancelled.");
        },
      },
    });

    checkout.on("payment.failed", () => {
      showFailure("Payment failed. Please try again.");
    });

    setStatusMessage("Opening secure payment...");

    trackGaEvent("payment_started", {
      amount: 99,
      currency: "INR",
    });

    checkout.open();
  };

  /*
   * ==========================================================
   * FORM SUBMIT
   * ==========================================================
   */

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    /*
     * WhatsApp validation
     */

    const normalizedWhatsapp = formData.whatsapp.replace(/[\s()+-]/g, "");

    if (
      normalizedWhatsapp.length < 7 ||
      normalizedWhatsapp.length > 15 ||
      !/^\d+$/.test(normalizedWhatsapp)
    ) {
      setStatusMessage("Please enter a valid WhatsApp number.");

      return;
    }

    /*
     * Required fields
     */

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.job.trim() ||
      !formData.place.trim()
    ) {
      setStatusMessage("Please complete all required fields.");

      return;
    }

    /*
     * Razorpay configuration
     */

    if (!RAZORPAY_KEY_ID) {
      setStatusMessage(
        "Payment configuration is missing. Please contact support.",
      );

      return;
    }

    /*
     * Start
     */

    setIsSubmitting(true);

    setStatusMessage("Creating secure ₹99 payment...");

    trackGaEvent("razorpay_order_create_started");

    try {
      /*
       * ======================================================
       * CREATE RAZORPAY ORDER
       * ======================================================
       *
       * LMS backend:
       *
       * POST /api/webinar/create-order
       *
       * No personal registration data is sent here.
       */

      const response = await fetch(`${API_URL}/webinar/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await parseResponse<CreateOrderResponse>(response);

      const orderId = result.data?.orderId;

      const amount = result.data?.amount;

      if (
        !response.ok ||
        result.success !== true ||
        !orderId ||
        amount !== WEBINAR_AMOUNT
      ) {
        throw new Error(
          result.message || "Unable to create the payment order.",
        );
      }

      trackGaEvent("razorpay_order_created", {
        amount: 99,
        currency: "INR",
      });

      /*
       * ======================================================
       * OPEN RAZORPAY
       * ======================================================
       */

      openCheckout(orderId);
    } catch (error) {
      console.error("Razorpay order creation failed:", error);

      setIsSubmitting(false);

      setStatusMessage(
        error instanceof Error
          ? error.message
          : "We could not start the payment. Please try again.",
      );

      trackGaEvent("payment_failed");
      trackMetaEvent("payment_failed");
    }
  };

  /*
   * ==========================================================
   * RETRY
   * ==========================================================
   */

  const retryPayment = () => {
    setStatus("form");
    setStatusMessage("");
  };

  /*
   * ==========================================================
   * UI
   * ==========================================================
   */

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/60 p-4 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="webinar-modal-title"
    >
      <div className="relative my-4 flex max-h-[94vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between bg-[#0c2340] px-6 py-5 text-white">
          <div className="flex items-center gap-3">
            <div className="rounded-lg border border-blue-400/30 bg-blue-600/30 p-2">
              <Sparkles className="h-5 w-5 text-blue-400" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-white">
                🎓 Live 90-Minute AI Masterclass
              </p>

              <p className="text-[11px] text-slate-300">
                Reserve your seat for ₹99
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close webinar registration"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}

        <div className="overflow-y-auto p-6 sm:p-8">
          {/* SUCCESS */}

          {status === "success" ? (
            <div className="py-5 text-center animate-scaleUp">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-emerald-200 bg-emerald-100">
                <CheckCircle2 className="h-9 w-9 text-emerald-600" />
              </div>

              <h2 className="mt-5 text-3xl font-black text-slate-900">
                Payment Successful! 🎉
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600">
                Your webinar registration has been confirmed successfully.
              </p>

              <div className="mx-auto mt-6 max-w-md rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <div className="flex items-center justify-center gap-2 text-sm font-bold text-emerald-700">
                  <MessageCircle className="h-5 w-5" />
                  Redirecting you to WhatsApp...
                </div>

                <p className="mt-2 text-xs leading-relaxed text-emerald-600">
                  Please join the WhatsApp group to receive the webinar joining
                  link and important updates.
                </p>
              </div>
            </div>
          ) : status === "failure" ? (
            /* FAILURE */

            <div className="py-5 text-center">
              <h2 className="text-2xl font-black text-slate-900">
                Payment was not completed.
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600">
                Your registration has not been confirmed.
              </p>

              <p className="mt-3 text-sm font-semibold text-red-600">
                {statusMessage}
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  onClick={retryPayment}
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-blue-700"
                >
                  Try Again
                </button>

                <button
                  onClick={onClose}
                  className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-extrabold text-slate-700 hover:bg-slate-50"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            /* FORM */

            <>
              <div className="mb-6">
                <h2
                  id="webinar-modal-title"
                  className="text-2xl font-black text-slate-900 sm:text-3xl"
                >
                  Join the Live 90-Minute AI Masterclass for ₹99
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Complete your details and continue to secure payment.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}

                <div>
                  <label
                    htmlFor="webinar-full-name"
                    className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-600"
                  >
                    Full Name *
                  </label>

                  <input
                    ref={firstInputRef}
                    id="webinar-full-name"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={(event) =>
                      updateField("fullName", event.target.value)
                    }
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Email + WhatsApp */}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="webinar-email"
                      className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-600"
                    >
                      Email Address *
                    </label>

                    <input
                      id="webinar-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="webinar-whatsapp"
                      className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-600"
                    >
                      WhatsApp Mobile Number *
                    </label>

                    <input
                      id="webinar-whatsapp"
                      name="whatsapp"
                      type="tel"
                      required
                      autoComplete="tel"
                      pattern="[0-9+()\s-]{7,20}"
                      value={formData.whatsapp}
                      onChange={(event) =>
                        updateField("whatsapp", event.target.value)
                      }
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Job + Place */}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="webinar-job"
                      className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-600"
                    >
                      Job / Occupation *
                    </label>

                    <select
                      id="webinar-job"
                      name="job"
                      required
                      value={formData.job}
                      onChange={(event) =>
                        updateField("job", event.target.value)
                      }
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    >
                      <option value="">Select your occupation</option>

                      {JOB_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="webinar-place"
                      className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-600"
                    >
                      Place / Location *
                    </label>

                    <input
                      id="webinar-place"
                      name="place"
                      type="text"
                      required
                      autoComplete="address-level2"
                      placeholder="Malappuram, Kerala"
                      value={formData.place}
                      onChange={(event) =>
                        updateField("place", event.target.value)
                      }
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Status */}

                {statusMessage && (
                  <div
                    role="status"
                    className="rounded-xl border border-blue-200 bg-blue-50 p-3 text-sm font-semibold text-blue-700"
                  >
                    {statusMessage}
                  </div>
                )}

                {/* Submit */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 px-5 py-4 text-base font-extrabold text-white shadow-xl shadow-blue-600/30 transition-all hover:from-blue-700 hover:to-indigo-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    statusMessage || "Processing..."
                  ) : (
                    <>
                      🔥 Join Webinar for ₹99
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>

                {/* Security */}

                <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-blue-600" />
                  Secure payment through Razorpay. Your details are saved after
                  verification.
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
