import { Router, type Router as ExpressRouter } from 'express';

const router: ExpressRouter = Router();

const VERSION = process.env.npm_package_version ?? '1.0.0';

router.get('/', (_req, res) => {
  res.json({ ok: true, version: VERSION });
});

export default router;
