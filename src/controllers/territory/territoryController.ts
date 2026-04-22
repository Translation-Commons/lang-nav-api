import type { Request, Response } from "express";
import pool from "../../db/connection";
import { sendList, sendOne, sendNotFound } from "../../utils/response";

export const getTerritoryById = async (req: Request, res: Response) => {
  const id = req.params["id"] as string;
  const [rows] = (await pool.execute("SELECT * FROM Territory WHERE id = ?", [
    id,
  ])) as any[];

  if (rows.length === 0) return sendNotFound(res, id);
  sendOne(res, rows[0]);
};

export const getTerritories = async (req: Request, res: Response) => {
  const { q, inTerritory } = req.query;

  let sql = "SELECT * FROM Territory WHERE 1=1";
  const params: string[] = [];

  if (q) {
    sql += " AND name_display LIKE ?";
    params.push(`%${q}%`);
  }

  if (inTerritory) {
    sql += " AND contained_un_region = ?";
    params.push((inTerritory as string).toUpperCase());
  }

  const [rows] = (await pool.execute(sql, params)) as any[];
  sendList(res, rows, rows.length);
};
