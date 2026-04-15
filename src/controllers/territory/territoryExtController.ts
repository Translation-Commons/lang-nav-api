import type { Request, Response } from "express";
import { mockCountryCoords } from "../../data/territory/country_coord.mock";
import { mockTerritoryGdpLiteracy } from "../../data/territory/territories_gdp_literacy.mock";
import { sendList } from "../../utils/response";

export const getCountryCoords = (_req: Request, res: Response) =>
  sendList(res, mockCountryCoords, mockCountryCoords.length);

export const getTerritoryGdpLiteracy = (_req: Request, res: Response) =>
  sendList(res, mockTerritoryGdpLiteracy, mockTerritoryGdpLiteracy.length);
