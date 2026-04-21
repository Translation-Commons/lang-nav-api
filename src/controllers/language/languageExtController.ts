import type { Request, Response } from "express";
import { mockGlottolog } from "../../data/language/glottolog.mock";
import { mockIso6393 } from "../../data/language/iso_639_3.mock";
import { mockMacrolanguages } from "../../data/language/macrolanguages.mock";
import { mockFamilies6395 } from "../../data/language/families_639_5.mock";
import { mockLanguageNamesFrench } from "../../data/language/language_names_french.mock";
import { mockFamiliesToLanguages } from "../../data/language/families_to_languages.mock";
import { mockIsoRetirements } from "../../data/language/iso_retirements.mock";
import { sendList } from "../../utils/response";

export const getGlottologLanguages = (_req: Request, res: Response) =>
  sendList(res, mockGlottolog, mockGlottolog.length);

export const getGlottologManualIsoLinks = (_req: Request, res: Response) =>
  sendList(res, [], 0);

export const getIso6393 = (_req: Request, res: Response) =>
  sendList(res, mockIso6393, mockIso6393.length);

export const getMacrolanguages = (_req: Request, res: Response) =>
  sendList(res, mockMacrolanguages, mockMacrolanguages.length);

export const getFamilies6395 = (_req: Request, res: Response) =>
  sendList(res, mockFamilies6395, mockFamilies6395.length);

export const getLanguageNamesFrench = (_req: Request, res: Response) =>
  sendList(res, mockLanguageNamesFrench, mockLanguageNamesFrench.length);

export const getFamiliesToLanguages = (_req: Request, res: Response) =>
  sendList(res, mockFamiliesToLanguages, mockFamiliesToLanguages.length);

export const getIsoRetirements = (_req: Request, res: Response) =>
  sendList(res, mockIsoRetirements, mockIsoRetirements.length);
