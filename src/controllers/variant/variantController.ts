import type { Request, Response } from "express";
import { mockVariant } from "../../data/variant/variant.mock";
import { sendList, sendOne, sendNotFound } from "../../utils/response";

export const getVariantById = (req: Request, res: Response) => {
  const id = req.params["id"] as string;
  const tag = mockVariant.find((t) => t.id === id);
  if (!tag) return sendNotFound(res, id);
  sendOne(res, tag);
};

export const getVariant = (req: Request, res: Response) => {
  const { q } = req.query;
  const result = q
    ? mockVariant.filter(
        (t) =>
          t.id.toLowerCase().includes((q as string).toLowerCase()) ||
          t.name_display.toLowerCase().includes((q as string).toLowerCase()),
      )
    : mockVariant;
  sendList(res, result, result.length);
};
