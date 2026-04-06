export interface CountryCoord {
  alpha2_code: string;
  name: string;
  alpha3_code: string | null;
  code_numeric: number | null;
  latitude: string | null;
  longitude: string | null;
}

export const mockCountryCoords: CountryCoord[] = [
  {
    alpha2_code: "US",
    name: "United States",
    alpha3_code: "USA",
    code_numeric: 840,
    latitude: "38.0000",
    longitude: "-97.0000",
  },
  {
    alpha2_code: "CN",
    name: "China",
    alpha3_code: "CHN",
    code_numeric: 156,
    latitude: "35.0000",
    longitude: "105.0000",
  },
  {
    alpha2_code: "HK",
    name: "Hong Kong",
    alpha3_code: "HKG",
    code_numeric: 344,
    latitude: "22.3193",
    longitude: "114.1694",
  },
];
