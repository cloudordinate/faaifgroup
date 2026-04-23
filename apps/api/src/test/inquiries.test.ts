import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../app';

const app = createApp({ disableRateLimit: true });

const validPayload = {
  name: 'Alexandra Chen',
  email: 'alex@company.com',
  company: 'Acme Corp',
  reason: 'SOFTWARE',
  message: 'We are interested in a partnership.',
};

describe('POST /api/inquiries', () => {
  it('returns 201 with id and createdAt on valid input', async () => {
    const res = await request(app).post('/api/inquiries').send(validPayload);
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('createdAt');
  });

  it('accepts inquiry without optional company field', async () => {
    const { company: _c, ...noCompany } = validPayload;
    const res = await request(app).post('/api/inquiries').send(noCompany);
    expect(res.status).toBe(201);
  });

  it('rejects invalid email', async () => {
    const res = await request(app)
      .post('/api/inquiries')
      .send({ ...validPayload, email: 'not-an-email' });
    expect(res.status).toBe(400);
    expect(res.body.issues).toHaveProperty('email');
  });

  it('rejects name shorter than 2 chars', async () => {
    const res = await request(app)
      .post('/api/inquiries')
      .send({ ...validPayload, name: 'A' });
    expect(res.status).toBe(400);
    expect(res.body.issues).toHaveProperty('name');
  });

  it('rejects message shorter than 10 chars', async () => {
    const res = await request(app)
      .post('/api/inquiries')
      .send({ ...validPayload, message: 'Short' });
    expect(res.status).toBe(400);
    expect(res.body.issues).toHaveProperty('message');
  });

  it('rejects invalid reason enum', async () => {
    const res = await request(app)
      .post('/api/inquiries')
      .send({ ...validPayload, reason: 'INVALID' });
    expect(res.status).toBe(400);
    expect(res.body.issues).toHaveProperty('reason');
  });

  it('rejects missing required fields', async () => {
    const res = await request(app).post('/api/inquiries').send({});
    expect(res.status).toBe(400);
    expect(res.body.issues).toHaveProperty('name');
    expect(res.body.issues).toHaveProperty('email');
  });
});

describe('GET /api/health', () => {
  it('returns ok:true', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body.ok).toBe(true);
  });
});
