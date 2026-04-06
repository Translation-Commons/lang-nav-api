export interface Territory {
  id: string;
  code_alpha2: string | null;
  code_alpha3: string | null;
  code_numeric: number | null;
  name_display: string;
  name_endonym: string | null;
  name_endonym_source: string | null;
  other_endonyms: string | null;
  other_names: string | null;
  scope:
    | "World"
    | "Continent"
    | "Subcontinent"
    | "Region"
    | "Country"
    | "Dependency";
  population_from_un: bigint | null;
  population: bigint | null;
  latitude: string | null;
  longitude: string | null;
  gdp: bigint | null;
  literacy_percent: string | null;
  contained_un_region: string | null;
  sovereign: string | null;
  created_at: Date;
  updated_at: Date;
}
