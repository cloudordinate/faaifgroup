import { vi } from 'vitest';

// Mock Prisma
vi.mock('../lib/prisma', () => ({
  prisma: {
    inquiry: {
      create: vi.fn().mockResolvedValue({
        id: 'test-id-123',
        createdAt: new Date('2026-01-01T00:00:00Z'),
      }),
    },
  },
}));

// Mock mailer
vi.mock('../lib/mailer', () => ({
  sendInquiryEmails: vi.fn().mockResolvedValue(undefined),
}));
