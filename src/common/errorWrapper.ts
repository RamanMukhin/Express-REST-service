import { Request, Response, NextFunction, RequestHandler } from 'express';

export function errorWrapper(handler: RequestHandler) {
  async function wrapper(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await handler(req, res, next);
    } catch (err) {
      next(err);
    }
  }
  return wrapper;
};
