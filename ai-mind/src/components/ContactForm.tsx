"use client";

import { useState, type FormEvent } from "react";
import { createConsultationRequest } from "@/services/leads";

const serviceOptions = [
  "Tư vấn triển khai GMP/ISO kết hợp AI",
  "Xây dựng hệ thống AI & Automation",
  "Đào tạo nội bộ AI GMP/ISO",
  "Đánh giá hiện trạng (Gap Assessment)",
  "Gói đồng hành sau triển khai",
];

const standardOptions = [
  "GMP WHO",
  "EU GMP",
  "PIC/S GMP",
  "ISO 9001",
  "ISO 13485",
  "ISO 22000",
  "Chưa áp dụng chuẩn nào",
];

const painPointOptions = [
  "Hồ sơ GMP/ISO quá nhiều, xử lý thủ công",
  "Áp lực thanh tra, chưa audit-ready",
  "Quy trình lặp lại, dễ sai sót",
  "Muốn số hóa nhưng chưa có lộ trình",
  "Cần đào tạo đội ngũ về AI/Automation",
  "Khác",
];

const scaleOptions = [
  "Dưới 50 nhân sự",
  "50 – 200 nhân sự",
  "200 – 500 nhân sự",
  "Trên 500 nhân sự",
];

type FormData = {
  contact_name: string;
  job_title: string;
  company_name: string;
  phone: string;
  email: string;
  factory_scale: string;
  standards_current: string[];
  pain_points: string[];
  service_interest: string[];
  preferred_contact_time: string;
  note: string;
};

const initialForm: FormData = {
  contact_name: "",
  job_title: "",
  company_name: "",
  phone: "",
  email: "",
  factory_scale: "",
  standards_current: [],
  pain_points: [],
  service_interest: [],
  preferred_contact_time: "",
  note: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 3;

  function updateField<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleArray(key: "standards_current" | "pain_points" | "service_interest", value: string) {
    setForm((prev) => {
      const arr = prev[key];
      return {
        ...prev,
        [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  }

  function canProceed(): boolean {
    if (step === 1) {
      return !!(form.contact_name && form.email && form.company_name && form.phone);
    }
    if (step === 2) {
      return form.service_interest.length > 0;
    }
    return true;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await createConsultationRequest({
        contact_name: form.contact_name,
        job_title: form.job_title,
        company_name: form.company_name,
        phone: form.phone,
        email: form.email,
        factory_scale: form.factory_scale,
        standards_current: form.standards_current,
        pain_points: form.pain_points,
        service_interest: form.service_interest,
        preferred_contact_time: form.preferred_contact_time,
        note: form.note,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to submit lead:", err);
      alert("Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp qua hotline.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <section className="py-20 sm:py-28 bg-surface" id="contact">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[0.5rem] bg-surface-lowest p-10 sm:p-14 shadow-ghost text-center">
            <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-tertiary/10 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4edea3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-bold text-on-surface mb-3">
              Cảm ơn bạn đã gửi thông tin!
            </h2>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-md mx-auto mb-8">
              Đội ngũ AI Mind sẽ liên hệ bạn trong vòng <span className="font-semibold text-primary">2 giờ làm việc</span> để sắp xếp buổi tư vấn miễn phí.
            </p>
            <button
              onClick={() => { setSubmitted(false); setStep(1); setForm(initialForm); }}
              className="inline-flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Gửi yêu cầu khác
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-28 bg-surface" id="contact">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Tư vấn miễn phí
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-on-surface tracking-tight mb-3">
            Đặt lịch tư vấn cùng chuyên gia
          </h2>
          <p className="text-sm text-on-surface-variant">
            Hoàn tất thông tin bên dưới, đội ngũ AI Mind sẽ liên hệ trong 2 giờ làm việc.
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-10 max-w-xs mx-auto">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 flex items-center gap-2">
              <div className={`flex-1 h-1 rounded-full transition-colors duration-300 ${
                s <= step ? "bg-secondary" : "bg-surface-high"
              }`} />
            </div>
          ))}
          <span className="text-xs text-on-surface-variant font-medium ml-2">
            {step}/{totalSteps}
          </span>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="rounded-[0.5rem] bg-surface-lowest p-8 sm:p-10 shadow-ghost">

            {/* ─── Step 1: Contact info ─── */}
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="font-display text-lg font-bold text-on-surface mb-2">
                  Thông tin liên hệ
                </h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.contact_name}
                      onChange={(e) => updateField("contact_name", e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full border-b border-outline-variant bg-transparent py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:border-secondary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                      Chức danh
                    </label>
                    <input
                      type="text"
                      value={form.job_title}
                      onChange={(e) => updateField("job_title", e.target.value)}
                      placeholder="Giám đốc nhà máy / Trưởng phòng QA"
                      className="w-full border-b border-outline-variant bg-transparent py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:border-secondary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                    Tên công ty <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.company_name}
                    onChange={(e) => updateField("company_name", e.target.value)}
                    placeholder="Công ty Dược phẩm ABC"
                    className="w-full border-b border-outline-variant bg-transparent py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:border-secondary focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="email@company.com"
                      className="w-full border-b border-outline-variant bg-transparent py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:border-secondary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="0912 345 678"
                      className="w-full border-b border-outline-variant bg-transparent py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:border-secondary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                    Quy mô nhà máy
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {scaleOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => updateField("factory_scale", opt)}
                        className={`rounded-[0.375rem] px-4 py-2.5 text-xs font-medium transition-all duration-200 ${
                          form.factory_scale === opt
                            ? "bg-primary text-white shadow-ghost"
                            : "bg-surface-low text-on-surface-variant hover:bg-surface-high"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ─── Step 2: Needs ─── */}
            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-lg font-bold text-on-surface mb-1">
                    Nhu cầu của bạn
                  </h3>
                  <p className="text-xs text-on-surface-variant mb-5">
                    Chọn các mục phù hợp để chúng tôi chuẩn bị buổi tư vấn tốt nhất.
                  </p>

                  <label className="block text-xs font-semibold text-on-surface-variant mb-2.5">
                    Dịch vụ quan tâm <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {serviceOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleArray("service_interest", opt)}
                        className={`w-full flex items-center gap-3 rounded-[0.375rem] px-4 py-3 text-left text-sm transition-all duration-200 ${
                          form.service_interest.includes(opt)
                            ? "bg-primary text-white shadow-ghost"
                            : "bg-surface-low text-on-surface-variant hover:bg-surface-high"
                        }`}
                      >
                        <span className={`shrink-0 h-4 w-4 rounded-sm border-2 flex items-center justify-center transition-colors ${
                          form.service_interest.includes(opt)
                            ? "border-secondary bg-secondary"
                            : "border-outline-variant"
                        }`}>
                          {form.service_interest.includes(opt) && (
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#041534" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </span>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-2.5">
                    Vấn đề đang gặp phải
                  </label>
                  <div className="space-y-2">
                    {painPointOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleArray("pain_points", opt)}
                        className={`w-full flex items-center gap-3 rounded-[0.375rem] px-4 py-3 text-left text-sm transition-all duration-200 ${
                          form.pain_points.includes(opt)
                            ? "bg-primary/10 text-primary font-medium"
                            : "bg-surface-low text-on-surface-variant hover:bg-surface-high"
                        }`}
                      >
                        <span className={`shrink-0 h-4 w-4 rounded-sm border-2 flex items-center justify-center transition-colors ${
                          form.pain_points.includes(opt)
                            ? "border-primary bg-primary"
                            : "border-outline-variant"
                        }`}>
                          {form.pain_points.includes(opt) && (
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </span>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ─── Step 3: Standards & Note ─── */}
            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-lg font-bold text-on-surface mb-1">
                    Thông tin bổ sung
                  </h3>
                  <p className="text-xs text-on-surface-variant mb-5">
                    Giúp chúng tôi hiểu rõ hơn hiện trạng của doanh nghiệp bạn.
                  </p>

                  <label className="block text-xs font-semibold text-on-surface-variant mb-2.5">
                    Chuẩn đang áp dụng
                  </label>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {standardOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleArray("standards_current", opt)}
                        className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 ${
                          form.standards_current.includes(opt)
                            ? "bg-secondary text-on-secondary shadow-ghost"
                            : "bg-surface-low text-on-surface-variant hover:bg-surface-high"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                    Thời gian thuận tiện nhận liên hệ
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {["Sáng (8h–12h)", "Chiều (13h–17h)", "Linh hoạt"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => updateField("preferred_contact_time", opt)}
                        className={`rounded-[0.375rem] px-3 py-2.5 text-xs font-medium transition-all duration-200 ${
                          form.preferred_contact_time === opt
                            ? "bg-primary text-white"
                            : "bg-surface-low text-on-surface-variant hover:bg-surface-high"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-on-surface-variant mb-1.5">
                    Ghi chú thêm
                  </label>
                  <textarea
                    rows={3}
                    value={form.note}
                    onChange={(e) => updateField("note", e.target.value)}
                    placeholder="Mô tả thêm về nhu cầu hoặc câu hỏi bạn muốn trao đổi..."
                    className="w-full border-b border-outline-variant bg-transparent py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:border-secondary focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Summary */}
                <div className="rounded-[0.375rem] bg-surface-low p-5">
                  <div className="text-xs font-semibold text-on-surface-variant mb-3 uppercase tracking-wider">
                    Tóm tắt
                  </div>
                  <div className="space-y-2 text-sm text-on-surface">
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">Liên hệ</span>
                      <span className="font-medium">{form.contact_name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">Công ty</span>
                      <span className="font-medium">{form.company_name}</span>
                    </div>
                    {form.factory_scale && (
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant">Quy mô</span>
                        <span className="font-medium">{form.factory_scale}</span>
                      </div>
                    )}
                    {form.service_interest.length > 0 && (
                      <div>
                        <span className="text-on-surface-variant">Dịch vụ: </span>
                        <span className="font-medium">{form.service_interest.join(", ")}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ─── Navigation ─── */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-surface-high">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Quay lại
                </button>
              ) : (
                <div />
              )}

              {step < totalSteps ? (
                <button
                  type="button"
                  disabled={!canProceed()}
                  onClick={() => setStep(step + 1)}
                  className="inline-flex items-center gap-2 rounded-[0.375rem] bg-primary px-6 py-3 text-sm font-semibold text-white hover:scale-[1.02] transition-transform duration-200 disabled:opacity-40 disabled:pointer-events-none"
                >
                  Tiếp tục
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-[0.375rem] bg-secondary px-8 py-3 text-sm font-bold text-on-secondary hover:scale-[1.02] transition-transform duration-200 disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      Gửi yêu cầu tư vấn
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Trust signals */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-1.5 text-xs text-on-surface-variant/60">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              Bảo mật thông tin
            </div>
            <div className="flex items-center gap-1.5 text-xs text-on-surface-variant/60">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              Phản hồi trong 2h
            </div>
            <div className="flex items-center gap-1.5 text-xs text-on-surface-variant/60">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Tư vấn miễn phí
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
