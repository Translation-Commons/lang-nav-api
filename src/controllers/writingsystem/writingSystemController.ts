import type { Request, Response } from "express";
import { mockWritingSystems } from "../../data/writingsystem/writingsystems.mock";
import { sendList, sendOne, sendNotFound } from "../../utils/response";

export const getWritingSystemById = (req: Request, res: Response) => {
  const id = req.params["id"] as string;
  const ws = mockWritingSystems.find((w) => w.id === id);
  if (!ws) return sendNotFound(res, id);
  sendOne(res, ws);
};

export const getWritingSystems = (req: Request, res: Response) => {
  const { q } = req.query;
  const result = q
    ? mockWritingSystems.filter(
        (w) =>
          w.id.toLowerCase().includes((q as string).toLowerCase()) ||
          w.name_display.toLowerCase().includes((q as string).toLowerCase()),
      )
    : mockWritingSystems;
  sendList(res, result, result.length);
};
