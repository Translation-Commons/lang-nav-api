import type { Request, Response } from "express";
import { mockLanguages } from "../../data/language/languages.mock";
import { sendList, sendOne, sendNotFound } from "../../utils/response";

export const getLanguageById = (req: Request, res: Response) => {
  const id = req.params["id"] as string;
  const language = mockLanguages.find((l) => l.id === id);
  if (!language) return sendNotFound(res, id);
  sendOne(res, language);
};

export const getLanguages = (req: Request, res: Response) => {
  const { q } = req.query;
  const result = q
    ? mockLanguages.filter(
        (l) =>
          l.id.toLowerCase().includes((q as string).toLowerCase()) ||
          l.name_display.toLowerCase().includes((q as string).toLowerCase()),
      )
    : mockLanguages;
  sendList(res, result, result.length);
};
