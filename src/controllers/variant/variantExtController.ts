import type { Request, Response } from "express";
import { mockIanaVariants } from "../../data/variant/iana_variants.mock";
import { sendList } from "../../utils/response";

export const getIanaVariants = (_req: Request, res: Response) =>
  sendList(res, mockIanaVariants, mockIanaVariants.length);
