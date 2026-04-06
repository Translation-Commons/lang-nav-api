export interface TerritoryRaw {
  territory_code: string;
  territory_name: string;
  territory_type:
    | "World"
    | "Continent"
    | "Subcontinent"
    | "Region"
    | "Country"
    | "Dependency";
  population: bigint | null;
  contained_un_region: string | null;
  sovereign: string | null;
}

export const mockTerritoriesRaw: TerritoryRaw[] = [
  {
    territory_code: "001",
    territory_name: "World",
    territory_type: "World",
    population: 8135342470n,
    contained_un_region: null,
    sovereign: null,
  },
  {
    territory_code: "US",
    territory_name: "United States",
    territory_type: "Country",
    population: 340110988n,
    contained_un_region: "021",
    sovereign: null,
  },
  {
    territory_code: "HK",
    territory_name: "Hong Kong",
    territory_type: "Dependency",
    population: 7534200n,
    contained_un_region: "030",
    sovereign: "CN",
  },
];
