import fs from "fs";
import path from "path";



export function parseTsv(filePath: string): Record<string, string>[] {

  console.log("parseTsv raw path:", JSON.stringify(filePath));
  console.log("existsSync:", fs.existsSync(filePath));
  
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content
    .split("\n")
    .filter((line) => line.trim() && !line.startsWith("#"));

  if (lines.length < 2) return [];

  const headers = lines[0].split("\t").map((h) => h.trim());
  const rows: Record<string, string>[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split("\t");
    const row: Record<string, string> = {};
    headers.forEach((header, index) => {
      row[header] = values[index]?.trim() ?? "";
    });
    rows.push(row);
  }

  return rows;
}
export function parseCsv(filePath: string): Record<string, string>[] {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n").filter((line) => line.trim());

  if (lines.length < 2) return [];

  const headers = lines[0].split(",").map((h) => h.trim());
  const rows: Record<string, string>[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",");
    const row: Record<string, string> = {};
    headers.forEach((header, index) => {
      row[header] = values[index]?.trim() ?? "";
    });
    rows.push(row);
  }

  return rows;
}

export function nullIfEmpty(value: string): string | null {
  return value === "" ? null : value;
}

export function parsePopulation(value: string): number | null {
  if (!value) return null;
  const num = Number(value.replace(/,/g, ""));
  return isNaN(num) ? null : num;
}
