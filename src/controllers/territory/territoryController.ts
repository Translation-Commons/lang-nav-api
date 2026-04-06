import type { Request, Response } from "express";
import { mockTerritories } from "../../data/territory/territories.mock.js";

export const getTerritoryById = (req: Request, res: Response) => {
  const { id } = req.params;
  const territory = mockTerritories.find((t) => t.id === id);

  if (!territory) {
    res.status(404).json({
      error: {
        code: "NOT_FOUND",
        message: `Territory '${id}' not found`,
        status: 404,
      },
    });
    return;
  }

  res.status(200).json({ data: territory });
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

  res.status(200).json({
    data: result,
    meta: { total: result.length, page: 1, limit: 50 },
  });
};
