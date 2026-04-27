'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { InquirySchema, type InquiryInput } from 'design-system';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const reasons = [
  { value: 'SOFTWARE', label: 'Software' },
  { value: 'FITNESS', label: 'Fitness' },
  { value: 'RETAIL', label: 'Retail' },
  { value: 'PARTNERSHIPS', label: 'Partnerships' },
];

const inputClass =
  'w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-navy-900 outline-none transition focus:border-navy-900 focus:ring-2 focus:ring-amber-500/20';

export function ContactForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryInput>({
    resolver: zodResolver(InquirySchema),
    defaultValues: { reason: 'SOFTWARE' },
  });

  async function onSubmit(payload: InquiryInput) {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';
      const response = await fetch(`${apiUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Unable to submit inquiry right now.');
      }

      setDone(true);
      toast.success('Inquiry sent successfully.');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Something went wrong.');
    }
  }

  if (done) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-navy-900">Received, thank you.</h3>
        <p className="mt-2 text-sm text-slate-600">
          A team member will reply within two business days.
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="mt-4"
          onClick={() => {
            reset();
            setDone(false);
          }}
        >
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg border border-slate-200 bg-white p-5 md:p-6"
      noValidate
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1 block text-xs font-semibold uppercase tracking-[0.06em] text-slate-500"
          >
            Name
          </label>
          <input
            id="name"
            className={cn(inputClass, errors.name && 'border-red-400')}
            {...register('name')}
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="mb-1 block text-xs font-semibold uppercase tracking-[0.06em] text-slate-500"
          >
            Company
          </label>
          <input id="company" className={inputClass} {...register('company')} />
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-xs font-semibold uppercase tracking-[0.06em] text-slate-500"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className={cn(inputClass, errors.email && 'border-red-400')}
            {...register('email')}
          />
        </div>
        <div>
          <label
            htmlFor="reason"
            className="mb-1 block text-xs font-semibold uppercase tracking-[0.06em] text-slate-500"
          >
            Reason for Inquiry
          </label>
          <select id="reason" className={inputClass} {...register('reason')}>
            {reasons.map((reason) => (
              <option key={reason.value} value={reason.value}>
                {reason.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="message"
          className="mb-1 block text-xs font-semibold uppercase tracking-[0.06em] text-slate-500"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={cn(inputClass, 'resize-y', errors.message && 'border-red-400')}
          {...register('message')}
        />
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-xs text-slate-500">
          Every message is reviewed within two business days.
        </p>
        <Button type="submit" loading={isSubmitting}>
          Submit inquiry
        </Button>
      </div>
    </form>
  );
}
