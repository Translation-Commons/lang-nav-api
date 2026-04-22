import path from "path";
import pool from "../connection";
import {
  parseTsv,
  parseCsv,
  nullIfEmpty,
  parsePopulation,
} from "../utils/parseTsv";

const DATA_PATH =
  process.env.DATA_PATH || path.join(process.cwd(), "../lang-nav/public/data");

async function seedTerritoriesRaw() {
  console.log("Seeding territories_raw...");
  const rows = parseTsv(path.join(DATA_PATH, "territories.tsv"));

  for (const row of rows) {
    await pool.execute(
      `INSERT INTO territories_raw 
        (territory_code, territory_name, territory_type, population, contained_un_region, sovereign)
       VALUES (?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
        territory_name = VALUES(territory_name),
        territory_type = VALUES(territory_type),
        population = VALUES(population),
        contained_un_region = VALUES(contained_un_region),
        sovereign = VALUES(sovereign)`,
      [
        row["TerritoryCode"],
        row["Territory Name"],
        row["Territory Type"],
        parsePopulation(row["Population"]),
        nullIfEmpty(row["Contained UN Region"]),
        nullIfEmpty(row["Sovereign"]),
      ],
    );
  }
  console.log(`✓ territories_raw: ${rows.length} rows`);
}

async function seedCountryCoord() {
  console.log("Seeding country_coord...");
  const rows = parseCsv(path.join(DATA_PATH, "countrycoord.csv"));

  for (const row of rows) {
    await pool.execute(
      `INSERT INTO country_coord 
        (alpha2_code, name, alpha3_code, code_numeric, latitude, longitude)
       VALUES (?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
        name = VALUES(name),
        latitude = VALUES(latitude),
        longitude = VALUES(longitude)`,
      [
        row["Alpha-2 code"],
        row["Country"],
        nullIfEmpty(row["Alpha-3 code"]),
        nullIfEmpty(row["Numeric code"]),
        nullIfEmpty(row["Latitude (average)"]),
        nullIfEmpty(row["Longitude (average)"]),
      ],
    );
  }
  console.log(`✓ country_coord: ${rows.length} rows`);
}

async function seedTerritoriesGdpLiteracy() {
  console.log("Seeding territories_gdp_literacy...");
  const rows = parseTsv(path.join(DATA_PATH, "territories_gdp_literacy.tsv"));

  for (const row of rows) {
    if (!row["Territory Code"]) continue;
    await pool.execute(
      `INSERT INTO territories_gdp_literacy (territory_code, gdp, literacy_percent)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE
        gdp = VALUES(gdp),
        literacy_percent = VALUES(literacy_percent)`,
      [
        row["Territory Code"],
        nullIfEmpty(row["GDP"]),
        nullIfEmpty(row["Literacy"]),
      ],
    );
  }
  console.log(`✓ territories_gdp_literacy: ${rows.length} rows`);
}

async function seedTerritoryNames() {
  console.log("Seeding territory_names...");
  const rows = parseTsv(path.join(DATA_PATH, "territory_names.tsv"));

  for (const row of rows) {
    if (!row["ID"]) continue;
    await pool.execute(
      `INSERT INTO territory_names 
        (territory_code, exonym, endonym, endonym_source, other_endonyms, other_names)
       VALUES (?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
        exonym = VALUES(exonym),
        endonym = VALUES(endonym),
        endonym_source = VALUES(endonym_source),
        other_endonyms = VALUES(other_endonyms),
        other_names = VALUES(other_names)`,
      [
        row["ID"],
        nullIfEmpty(row["Exonym"]),
        nullIfEmpty(row["Endonym"]),
        nullIfEmpty(row["Endonym Source"]),
        nullIfEmpty(row["Other Endonyms"]),
        nullIfEmpty(row["Other Names"]),
      ],
    );
  }
  console.log(`✓ territory_names: ${rows.length} rows`);
}

async function seedTerritoryEntity() {
  console.log("Seeding Territory entity table...");
  await pool.execute(`
    INSERT INTO Territory (
      id, code_alpha2, code_alpha3, code_numeric,
      name_display, name_endonym, name_endonym_source,
      other_endonyms, other_names, scope,
      population_from_un, population,
      latitude, longitude, gdp, literacy_percent,
      contained_un_region, sovereign
    )
    SELECT
      t.territory_code,
      c.alpha2_code,
      c.alpha3_code,
      c.code_numeric,
      COALESCE(n.exonym, t.territory_name),
      n.endonym,
      n.endonym_source,
      n.other_endonyms,
      n.other_names,
      t.territory_type,
      t.population,
      t.population,
      c.latitude,
      c.longitude,
      g.gdp,
      g.literacy_percent,
      t.contained_un_region,
      t.sovereign
    FROM territories_raw t
    LEFT JOIN country_coord c ON c.alpha2_code = t.territory_code
    LEFT JOIN territories_gdp_literacy g ON g.territory_code = t.territory_code
    LEFT JOIN territory_names n ON n.territory_code = t.territory_code
    ON DUPLICATE KEY UPDATE
      name_display = VALUES(name_display),
      name_endonym = VALUES(name_endonym),
      population_from_un = VALUES(population_from_un),
      population = VALUES(population),
      latitude = VALUES(latitude),
      longitude = VALUES(longitude),
      gdp = VALUES(gdp),
      literacy_percent = VALUES(literacy_percent)
  `);
  console.log("✓ Territory entity table seeded");
}

async function main() {
  try {
    await seedTerritoriesRaw();
    await seedCountryCoord();
    await seedTerritoriesGdpLiteracy();
    await seedTerritoryNames();
    await seedTerritoryEntity();
    console.log("\nTerritory seed complete");
  } catch (err) {
    console.error("Seed failed:", err);
  } finally {
    await pool.end();
  }
}

main();
