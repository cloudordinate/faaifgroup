import 'dotenv/config';
import { createApp } from '../src/app';

// Vercel Node runtime can serve an Express app directly as a serverless handler.
const app = createApp();

export default app;
