import type { Request, Response } from "express";
import { mockVariantTags } from "../../data/varianttag/varianttags.mock";
import { sendList, sendOne, sendNotFound } from "../../utils/response";

export const getVariantTagById = (req: Request, res: Response) => {
  const id = req.params["id"] as string;
  const tag = mockVariantTags.find((t) => t.id === id);
  if (!tag) return sendNotFound(res, id);
  sendOne(res, tag);
};

export const getVariantTags = (req: Request, res: Response) => {
  const { q } = req.query;
  const result = q
    ? mockVariantTags.filter(
        (t) =>
          t.id.toLowerCase().includes((q as string).toLowerCase()) ||
          t.name_display.toLowerCase().includes((q as string).toLowerCase()),
      )
    : mockVariantTags;
  sendList(res, result, result.length);
};
