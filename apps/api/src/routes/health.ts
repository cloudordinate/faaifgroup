import { Router, type Request, type Response, type IRouter } from 'express';

const router: IRouter = Router();

const VERSION = process.env.npm_package_version ?? '1.0.0';

router.get('/', (_req: Request, res: Response) => {
  res.json({ ok: true, version: VERSION });
});

export default router;
