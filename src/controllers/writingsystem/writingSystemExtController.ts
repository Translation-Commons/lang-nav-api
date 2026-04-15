import type { Request, Response } from "express";
import { mockCldrCoverage } from "../../data/writingsystem/cldr_coverage.mock";
import { sendList } from "../../utils/response";

export const getCldrCoverage = (_req: Request, res: Response) =>
  sendList(res, mockCldrCoverage, mockCldrCoverage.length);
