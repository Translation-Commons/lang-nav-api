import type { Request, Response } from "express";

import { mockCountryCoords } from "../../data/territory/country_coord.mock";
import { mockTerritoryGdpLiteracy } from "../../data/territory/territories_gdp_literacy.mock";

export const getCountryCoords = (_req: Request, res: Response) => {
  res.status(200).json({
    data: mockCountryCoords,
    meta: { total: mockCountryCoords.length, page: 1, limit: 50 },
  });
};

export const getTerritoryGdpLiteracy = (req: Request, res: Response) => {
  res.status(200).json({
    data: mockTerritoryGdpLiteracy,
    meta: { total: mockTerritoryGdpLiteracy.length, page: 1, limit: 50 },
  });
};
