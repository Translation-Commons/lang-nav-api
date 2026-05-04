import type { Request, Response } from "express";
import { mockLocales } from "../../data/locale/locales.mock";
import { sendList } from "../../utils/response";

export const getCuratedLocales = (_req: Request, res: Response) =>
  sendList(res, mockLocales, mockLocales.length);
