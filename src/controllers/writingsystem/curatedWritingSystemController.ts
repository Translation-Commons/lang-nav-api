import type { Request, Response } from "express";
import { mockWritingSystemsRaw } from "../../data/writingsystem/writingsystems_raw.mock";
import { sendList } from "../../utils/response";

export const getCuratedWritingSystems = (_req: Request, res: Response) =>
  sendList(res, mockWritingSystemsRaw, mockWritingSystemsRaw.length);
