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

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbwmNdnHkfmwmZjt5sVpywlaHwDvGuY5MopJhY6xm2MCe4sksv2gBBoA1RiimaedLBbqEw/exec";
const WHATSAPP_GROUP_URL =
  "https://chat.whatsapp.com/KDb21dpkaxQDBNtLcVmPkV?s=cl&p=i&ilr=0&amv=1";

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

const INITIAL_FORM: WebinarFormData = {
  fullName: "",
  email: "",
  whatsapp: "",
  job: "",
  place: "",
};

const JOB_OPTIONS = [
  "Student",
  "Job / Working Professional",
  "Business Owner",
  "Freelancer",
  "Homemaker",
  "Currently Looking for a Job",
  "Other",
];

export const WebinarRegistrationModal: React.FC<
  WebinarRegistrationModalProps
> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<WebinarFormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      trackGaEvent("webinar_form_open");
      trackMetaEvent("webinar_form_open");
      window.setTimeout(() => firstInputRef.current?.focus(), 0);
    } else {
      setFormData(INITIAL_FORM);
      setIsSubmitting(false);
      setIsSuccess(false);
      setErrorMessage("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const updateField = (field: keyof WebinarFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const openWhatsAppGroup = () => {
    trackGaEvent("whatsapp_group_click");
    trackMetaEvent("whatsapp_group_click");
    window.open(WHATSAPP_GROUP_URL, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const normalizedWhatsapp = formData.whatsapp.replace(/[\s()+-]/g, "");
    if (normalizedWhatsapp.length < 7 || normalizedWhatsapp.length > 15) {
      setErrorMessage("Please enter a valid WhatsApp number.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    trackGaEvent("webinar_registration_attempt");
    trackMetaEvent("webinar_registration_attempt");

    try {
      const response = await fetch(WEB_APP_URL, {
        method: "POST",
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          whatsapp: formData.whatsapp.trim(),
          job: formData.job,
          place: formData.place.trim(),
        }),
      });

      const responseText = await response.text();
      let responseData: { success?: boolean; message?: string };
      try {
        responseData = JSON.parse(responseText) as {
          success?: boolean;
          message?: string;
        };
      } catch {
        throw new Error(
          "The registration service returned an invalid response.",
        );
      }

      if (!response.ok || responseData.success !== true) {
        throw new Error(
          responseData.message || "Registration was not accepted.",
        );
      }

      setIsSuccess(true);
      trackGaEvent("webinar_registration_success");
      trackMetaEvent("webinar_registration_success");
      window.open(WHATSAPP_GROUP_URL, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Webinar registration failed:", error);
      setErrorMessage(
        "Something went wrong. Please check your details and try again.",
      );
      trackGaEvent("webinar_registration_error");
      trackMetaEvent("webinar_registration_error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-900/60 p-4 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="webinar-modal-title"
    >
      <div className="relative my-4 flex max-h-[94vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between bg-[#0c2340] px-6 py-5 text-white">
          <div className="flex items-center gap-3">
            <div className="rounded-lg border border-blue-400/30 bg-blue-600/30 p-2">
              <Sparkles className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-white">
                🎓 Free AI Masterclass
              </p>
              <p className="text-[11px] text-slate-300">
                Reserve your seat for the live webinar
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

        <div className="overflow-y-auto p-6 sm:p-8">
          {isSuccess ? (
            <div className="py-5 text-center animate-scaleUp">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-emerald-200 bg-emerald-100">
                <CheckCircle2 className="h-9 w-9 text-emerald-600" />
              </div>
              <h2 className="mt-5 text-3xl font-black text-slate-900">
                Registration Successful! 🎉
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600">
                Your details have been registered successfully. Join our
                WhatsApp group to receive webinar updates and the webinar
                joining details.
              </p>
              <button
                onClick={openWhatsAppGroup}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-4 text-sm font-extrabold text-white shadow-lg transition-all hover:bg-[#20ba59] sm:w-auto"
              >
                <MessageCircle className="h-5 w-5 fill-current" />
                Join WhatsApp Webinar Group <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h2
                  id="webinar-modal-title"
                  className="text-2xl font-black text-slate-900 sm:text-3xl"
                >
                  Join the Free AI Masterclass
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Register now to reserve your webinar access and receive the
                  webinar updates through WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                      WhatsApp Number *
                    </label>
                    <input
                      id="webinar-whatsapp"
                      name="whatsapp"
                      type="tel"
                      required
                      autoComplete="tel"
                      pattern="[0-9+()\\s-]{7,20}"
                      value={formData.whatsapp}
                      onChange={(event) =>
                        updateField("whatsapp", event.target.value)
                      }
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm text-slate-900 outline-none transition-colors focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

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

                {errorMessage && (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-semibold text-red-700"
                  >
                    <p>Something went wrong.</p>
                    <p className="mt-1 font-normal">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 via-blue-700 to-indigo-700 px-5 py-4 text-base font-extrabold text-white shadow-xl shadow-blue-600/30 transition-all hover:from-blue-700 hover:to-indigo-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    "Registering..."
                  ) : errorMessage ? (
                    <>
                      Try Again <ArrowRight className="h-5 w-5" />
                    </>
                  ) : (
                    <>
                      🎓 Register & Join Webinar{" "}
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-blue-600" /> Your details
                  are submitted securely to Google Sheets.
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
