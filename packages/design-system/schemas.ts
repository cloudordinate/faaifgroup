import { z } from 'zod';

export const ReasonEnum = z.enum(['SOFTWARE', 'FITNESS', 'RETAIL', 'PARTNERSHIPS']);

export const InquirySchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(120, 'Name must be at most 120 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().max(120, 'Company name must be at most 120 characters').optional(),
  reason: ReasonEnum,
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(4000, 'Message must be at most 4000 characters'),
});

export type InquiryInput = z.infer<typeof InquirySchema>;

export const ReasonLabels: Record<z.infer<typeof ReasonEnum>, string> = {
  SOFTWARE: 'Software',
  FITNESS: 'Fitness',
  RETAIL: 'Retail',
  PARTNERSHIPS: 'Partnerships',
};
