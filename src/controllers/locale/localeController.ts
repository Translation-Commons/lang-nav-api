import type { Request, Response } from "express";
import { mockLocales } from "../../data/locale/locales.mock";
import { sendList, sendOne, sendNotFound } from "../../utils/response";

export const getLocaleById = (req: Request, res: Response) => {
  const id = req.params["id"] as string;
  const locale = mockLocales.find((l) => l.id === id);
  if (!locale) return sendNotFound(res, id);
  sendOne(res, locale);
};

export const getLocales = (req: Request, res: Response) => {
  const { q, language, territory } = req.query;
  let result = mockLocales;

  if (q)
    result = result.filter(
      (l) =>
        l.id.toLowerCase().includes((q as string).toLowerCase()) ||
        l.name_display.toLowerCase().includes((q as string).toLowerCase()),
    );

  if (language)
    result = result.filter((l) =>
      l.id.toLowerCase().startsWith((language as string).toLowerCase()),
    );

  if (territory)
    result = result.filter((l) =>
      l.id.toLowerCase().includes(`_${(territory as string).toLowerCase()}`),
    );

  sendList(res, result, result.length);
};
