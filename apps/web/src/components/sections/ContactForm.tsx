'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { InquirySchema, type InquiryInput } from 'design-system';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const contactDetails = [
  { label: 'Headquarters', value: 'One Financial Center · Boston, MA' },
  { label: 'General', value: 'hello@faaif.group' },
  { label: 'Investor Relations', value: 'ir@faaif.group' },
];

const reasonOptions = [
  { value: 'SOFTWARE', label: 'Software' },
  { value: 'FITNESS', label: 'Fitness' },
  { value: 'RETAIL', label: 'Retail' },
  { value: 'PARTNERSHIPS', label: 'Partnerships' },
];

const fieldClass =
  'w-full font-sans text-[14px] px-[14px] py-3 border border-slate-200 rounded-md bg-white text-navy-900 outline-none transition-[border-color,box-shadow] duration-short ease-brand focus:border-navy-900 focus:ring-2 focus:ring-amber-500/15 placeholder:text-slate-400';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryInput>({
    resolver: zodResolver(InquirySchema),
    defaultValues: { reason: 'SOFTWARE' },
  });

  async function onSubmit(data: InquiryInput) {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';
      const res = await fetch(`${apiUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message ?? 'Submission failed');
      }

      setSubmitted(true);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="bg-slate-50 py-[128px]" aria-labelledby="contact-heading">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-24 items-start">
          {/* Left — details */}
          <div>
            <Eyebrow className="mb-5">Contact Hub</Eyebrow>
            <h2
              id="contact-heading"
              className="font-sans font-bold text-navy-900 mb-6"
              style={{ fontSize: 48, letterSpacing: '-0.025em', lineHeight: 1.1 }}
            >
              Let&rsquo;s build
              <br />
              something lasting.
            </h2>
            <p className="font-sans text-base leading-relaxed text-slate-600 mb-10">
              Partnership inquiries, press, investor relations, and general correspondence — we read
              every message within two business days.
            </p>

            <div className="flex flex-col gap-5">
              {contactDetails.map((item) => (
                <div key={item.label} className="pb-5 border-b border-slate-200">
                  <div
                    className="text-[11px] text-slate-500 mb-1 tracking-[0.04em] uppercase"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {item.label}
                  </div>
                  <div className="font-sans text-[15px] font-medium text-navy-900">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form card */}
          <div className="bg-white border border-slate-200 rounded-xl p-10 shadow-1">
            {submitted ? (
              <div className="py-10 text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500 inline-flex items-center justify-center mb-5">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0F172A"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-sans font-semibold text-[22px] text-navy-900 mb-2">
                  Received, thank you.
                </h3>
                <p className="font-sans text-[14px] text-slate-600">
                  A team member will be in touch within two business days.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    reset();
                  }}
                  className="mt-6 bg-transparent text-navy-900 border border-slate-200 px-[18px] py-[10px] rounded-md font-sans text-[13px] font-medium cursor-pointer hover:border-navy-900 transition-colors duration-short ease-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-sans font-semibold text-[12px] text-slate-600 tracking-[0.02em] mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Alexandra Chen"
                      className={cn(
                        fieldClass,
                        errors.name && 'border-red-400 focus:border-red-500'
                      )}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      {...register('name')}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-[12px] text-red-500" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-sans font-semibold text-[12px] text-slate-600 tracking-[0.02em] mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="alex@company.com"
                      className={cn(
                        fieldClass,
                        errors.email && 'border-red-400 focus:border-red-500'
                      )}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      {...register('email')}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-[12px] text-red-500" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block font-sans font-semibold text-[12px] text-slate-600 tracking-[0.02em] mb-2"
                  >
                    Company <span className="font-normal text-slate-400">(optional)</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Organization name"
                    className={fieldClass}
                    {...register('company')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="reason"
                    className="block font-sans font-semibold text-[12px] text-slate-600 tracking-[0.02em] mb-2"
                  >
                    Reason for Inquiry
                  </label>
                  <select
                    id="reason"
                    className={cn(
                      fieldClass,
                      'appearance-none cursor-pointer pr-9',
                      "bg-[url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748B' stroke-width='2'><path d='M6 9l6 6 6-6'/></svg>\")] bg-no-repeat bg-[right_14px_center]"
                    )}
                    aria-invalid={!!errors.reason}
                    {...register('reason')}
                  >
                    {reasonOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-sans font-semibold text-[12px] text-slate-600 tracking-[0.02em] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us how we can help…"
                    className={cn(
                      fieldClass,
                      'resize-y min-h-[120px]',
                      errors.message && 'border-red-400 focus:border-red-500'
                    )}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-[12px] text-red-500" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  loading={isSubmitting}
                  className="justify-self-start"
                >
                  Submit Inquiry
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
