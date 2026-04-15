import type { Response } from "express";

export const sendList = (res: Response, data: unknown[], total: number) =>
  res.json({ data, meta: { total, page: 1, limit: 50 } });

export const sendOne = (res: Response, data: unknown) => res.json({ data });

export const sendNotFound = (res: Response, id: string) =>
  res
    .status(404)
    .json({
      error: { code: "NOT_FOUND", message: `'${id}' not found`, status: 404 },
    });
