import type { Request, Response } from "express";
import pool from "../../db/connection";
import { sendList } from "../../utils/response";

export const getCountryCoords = async (_req: Request, res: Response) => {
  const [rows] = (await pool.execute("SELECT * FROM country_coord")) as any[];
  sendList(res, rows, rows.length);
};

export const getTerritoryGdpLiteracy = async (_req: Request, res: Response) => {
  const [rows] = (await pool.execute(
    "SELECT * FROM territories_gdp_literacy",
  )) as any[];
  sendList(res, rows, rows.length);
};
