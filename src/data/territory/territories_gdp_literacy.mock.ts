export interface TerritoryGdpLiteracy {
  territory_code: string;
  gdp: bigint | null;
  literacy_percent: string | null;
}

export const mockTerritoryGdpLiteracy: TerritoryGdpLiteracy[] = [
  {
    territory_code: "US",
    gdp: 25000000000000n,
    literacy_percent: "99.00",
  },
  {
    territory_code: "CN",
    gdp: 19000000000000n,
    literacy_percent: "96.80",
  },
  {
    territory_code: "HK",
    gdp: 368600000000n,
    literacy_percent: "95.70",
  },
];
