import type { Request, Response } from "express";
import { mockLanguages } from "../../data/language/languages.mock";
import { sendList } from "../../utils/response";

export const getCuratedLanguages = (_req: Request, res: Response) =>
  sendList(res, mockLanguages, mockLanguages.length);
