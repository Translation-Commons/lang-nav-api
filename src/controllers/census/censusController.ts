import type { Request, Response } from "express";
import { mockCensuses } from "../../data/census/census.mock";
import { sendList, sendOne, sendNotFound } from "../../utils/response";

export const getCensusById = (req: Request, res: Response) => {
  const id = req.params["id"] as string;
  const census = mockCensuses.find((c) => c.id === id);
  if (!census) return sendNotFound(res, id);
  sendOne(res, census);
};

export const getCensuses = (req: Request, res: Response) => {
  const { territory } = req.query;
  const result = territory
    ? mockCensuses.filter(
        (c) => c.territory_code === (territory as string).toUpperCase(),
      )
    : mockCensuses;
  sendList(res, result, result.length);
};
