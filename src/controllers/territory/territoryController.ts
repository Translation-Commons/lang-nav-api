import type { Request, Response } from "express";
import { mockTerritories } from "../../data/territory/territories.mock";
import { sendList, sendOne, sendNotFound } from "../../utils/response";

export const getTerritoryById = (req: Request, res: Response) => {
  const id = req.params["id"] as string;
  const territory = mockTerritories.find((t) => t.id === id);
  if (!territory) return sendNotFound(res, id);
  sendOne(res, territory);
};

export const getTerritories = (req: Request, res: Response) => {
  const { q, inTerritory } = req.query;
  let result = mockTerritories;

  if (q)
    result = result.filter((t) =>
      t.name_display.toLowerCase().includes((q as string).toLowerCase()),
    );

  if (inTerritory)
    result = result.filter(
      (t) => t.contained_un_region === (inTerritory as string).toUpperCase(),
    );

  sendList(res, result, result.length);
};
