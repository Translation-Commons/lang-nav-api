import type { Request, Response } from "express";
import { mockTerritoriesRaw } from "../../data/territory/territories_raw.mock";

export const getCuratedTerritories = (req: Request, res: Response) => {
  res.status(200).json({
    data: mockTerritoriesRaw,
    meta: { total: mockTerritoriesRaw.length, page: 1, limit: 50 },
  });
};
