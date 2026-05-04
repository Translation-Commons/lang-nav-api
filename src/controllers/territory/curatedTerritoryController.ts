import type { Request, Response } from "express";
import pool from "../../db/connection";
import { sendList } from "../../utils/response";

export const getCuratedTerritories = async (_req: Request, res: Response) => {
  const [rows] = (await pool.execute("SELECT * FROM territories_raw")) as any[];
  sendList(res, rows, rows.length);
};
