"use client";

import { useState } from "react";

interface FormState {
  parent_name: string;
  phone: string;
  student_name: string;
  interested_class: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  parent_name: "",
  phone: "",
  student_name: "",
  interested_class: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.parent_name.trim()) {
      newErrors.parent_name = "Please enter parent or guardian name.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please provide a valid contact phone number.";
    } else if (!/^[0-9+ -]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Please provide a valid 10-digit phone number.";
    }
    if (!formData.interested_class) {
      newErrors.interested_class = "Please select an academic class.";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Please state the reason for inquiry.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please write your message.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setServerError(true);
      return;
    }

    setServerError(false);
    setSubmitting(true);

    // Simulate API dispatch with loading state
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData(INITIAL_FORM);
    }, 800);
  };

  return (
    <div className="bg-[#F8F6EF] rounded-3xl p-8 sm:p-10 border border-[#E2DFC8] custom-shadow-card">
      <div className="mb-8">
        <span className="text-xs font-[family-name:var(--font-display)] font-bold text-[#862D48] uppercase tracking-wider block">
          ADMINISTRATION INQUIRY
        </span>
        <h3 className="font-[family-name:var(--font-display)] font-extrabold text-[#17265B] text-2xl sm:text-3xl mt-1 mb-2 text-balance">
          Send an Inquiry to the Principal
        </h3>
        <p className="font-[family-name:var(--font-body)] text-sm text-[#4D515C] text-pretty">
          Fill out this form for school visits, curriculum inquiries, or general academic assistance.{" "}
          <em className="text-xs text-[#862D48]">(Note: This is an inquiry form, not an online admission form.)</em>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Parent / Guardian Name */}
        <div>
          <label htmlFor="parent-name" className="block font-[family-name:var(--font-display)] text-sm font-semibold text-[#17265B] mb-1.5">
            Parent / Guardian Name <span className="text-[#862D48] font-bold">*</span>
          </label>
          <input
            type="text"
            id="parent-name"
            name="parent_name"
            value={formData.parent_name}
            onChange={handleChange}
            required
            placeholder="e.g. Ramesh Chandra Verma"
            className={`w-full px-4 py-3 bg-white border rounded-xl text-[#252A35] placeholder:text-[#4D515C]/60 focus:outline-none focus:ring-2 focus:ring-[#F6CF45] focus:border-[#17265B] transition-all text-sm ${
              errors.parent_name ? "border-[#862D48]" : "border-[#E2DFC8]"
            }`}
          />
          {errors.parent_name && (
            <span className="text-xs text-[#862D48] font-medium mt-1 block">
              {errors.parent_name}
            </span>
          )}
        </div>

        {/* Phone & Student Name Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone-number" className="block font-[family-name:var(--font-display)] text-sm font-semibold text-[#17265B] mb-1.5">
              Phone Number <span className="text-[#862D48] font-bold">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#4D515C]">
                <span className="material-symbols-outlined !text-[18px]">call</span>
              </span>
              <input
                type="tel"
                id="phone-number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
                className={`w-full pl-10 pr-4 py-3 bg-white border rounded-xl text-[#252A35] placeholder:text-[#4D515C]/60 focus:outline-none focus:ring-2 focus:ring-[#F6CF45] focus:border-[#17265B] transition-all text-sm ${
                  errors.phone ? "border-[#862D48]" : "border-[#E2DFC8]"
                }`}
              />
            </div>
            {errors.phone && (
              <span className="text-xs text-[#862D48] font-medium mt-1 block">
                {errors.phone}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="student-name" className="block font-[family-name:var(--font-display)] text-sm font-semibold text-[#17265B] mb-1.5">
              Student Name <span className="text-[#4D515C] text-xs font-normal">(optional)</span>
            </label>
            <input
              type="text"
              id="student-name"
              name="student_name"
              value={formData.student_name}
              onChange={handleChange}
              placeholder="e.g. Aryan Verma"
              className="w-full px-4 py-3 bg-white border border-[#E2DFC8] rounded-xl text-[#252A35] placeholder:text-[#4D515C]/60 focus:outline-none focus:ring-2 focus:ring-[#F6CF45] focus:border-[#17265B] transition-all text-sm"
            />
          </div>
        </div>

        {/* Interested Class & Reason Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="interested-class" className="block font-[family-name:var(--font-display)] text-sm font-semibold text-[#17265B] mb-1.5">
              Interested Class <span className="text-[#862D48] font-bold">*</span>
            </label>
            <select
              id="interested-class"
              name="interested_class"
              value={formData.interested_class}
              onChange={handleChange}
              required
              className={`w-full px-4 py-3 bg-white border rounded-xl text-[#252A35] focus:outline-none focus:ring-2 focus:ring-[#F6CF45] focus:border-[#17265B] transition-all text-sm ${
                errors.interested_class ? "border-[#862D48]" : "border-[#E2DFC8]"
              }`}
            >
              <option value="">Select Class Range</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={`Class ${num}`}>
                  Class {num}
                </option>
              ))}
            </select>
            {errors.interested_class && (
              <span className="text-xs text-[#862D48] font-medium mt-1 block">
                {errors.interested_class}
              </span>
            )}
          </div>

          <div>
            <label htmlFor="inquiry-subject" className="block font-[family-name:var(--font-display)] text-sm font-semibold text-[#17265B] mb-1.5">
              Subject / Reason <span className="text-[#862D48] font-bold">*</span>
            </label>
            <input
              type="text"
              id="inquiry-subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="e.g. School Tour & Curriculum"
              className={`w-full px-4 py-3 bg-white border rounded-xl text-[#252A35] placeholder:text-[#4D515C]/60 focus:outline-none focus:ring-2 focus:ring-[#F6CF45] focus:border-[#17265B] transition-all text-sm ${
                errors.subject ? "border-[#862D48]" : "border-[#E2DFC8]"
              }`}
            />
            {errors.subject && (
              <span className="text-xs text-[#862D48] font-medium mt-1 block">
                {errors.subject}
              </span>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="inquiry-message" className="block font-[family-name:var(--font-display)] text-sm font-semibold text-[#17265B] mb-1.5">
            Message <span className="text-[#862D48] font-bold">*</span>
          </label>
          <textarea
            id="inquiry-message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Kindly let us know your specific questions or preferred time to meet with the principal..."
            className={`w-full px-4 py-3 bg-white border rounded-xl text-[#252A35] placeholder:text-[#4D515C]/60 focus:outline-none focus:ring-2 focus:ring-[#F6CF45] focus:border-[#17265B] transition-all text-sm ${
              errors.message ? "border-[#862D48]" : "border-[#E2DFC8]"
            }`}
          />
          {errors.message && (
            <span className="text-xs text-[#862D48] font-medium mt-1 block">
              {errors.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F6CF45] hover:bg-amber-400 text-[#17265B] font-[family-name:var(--font-display)] text-sm font-bold rounded-2xl shadow-sm hover:shadow-md transition-all duration-150 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#17265B] disabled:opacity-60 cursor-pointer"
          >
            <span>{submitting ? "Sending Inquiry..." : "Send Inquiry"}</span>
            {submitting ? (
              <span className="material-symbols-outlined !text-[20px] animate-spin">
                sync
              </span>
            ) : (
              <span className="material-symbols-outlined !text-[20px]">
                send
              </span>
            )}
          </button>
        </div>

        {/* Success Confirmation */}
        {submitted && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start gap-3">
            <span className="material-symbols-outlined !text-[22px] text-emerald-600 shrink-0 mt-0.5">
              check_circle
            </span>
            <div>
              <h5 className="font-[family-name:var(--font-display)] font-bold text-sm">
                Inquiry Sent Successfully!
              </h5>
              <p className="font-[family-name:var(--font-body)] text-xs text-emerald-800 mt-0.5">
                Thank you for reaching out to Langta Baba Gyandeep Public School. Our administration will contact you shortly.
              </p>
            </div>
          </div>
        )}

        {/* Error Feedback */}
        {serverError && (
          <div className="p-4 rounded-2xl bg-red-50 border border-red-300 text-red-900 flex items-center gap-3">
            <span className="material-symbols-outlined !text-[22px] text-red-600 shrink-0">
              error
            </span>
            <p className="font-[family-name:var(--font-body)] text-xs text-red-800">
              Please complete all required fields correctly before submitting.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
