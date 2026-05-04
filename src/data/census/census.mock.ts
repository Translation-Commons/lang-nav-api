import type { Census } from "../../models/census/Census";

export const mockCensuses: Census[] = [
  {
    id: "af_2014",
    territory_code: "AF",
    year_collected: 2014,
    name_display: "Afghanistan 2014",
    mode: "Speaks",
    url: "https://www.languagesgulper.com/eng/Languages_of_Afghanistan.html",
    collector_type: "Media",
    collector_name: "The Language Gulper",
    author: "Alejandro Gutman and Beatriz Avanzati",
    population_eligible: 31000000n,
    language_estimates: {
      pus: 13000000,
      fas: 9000000,
      uzb: 2800000,
      haz: 2500000,
    },
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: "us_2023",
    territory_code: "US",
    year_collected: 2023,
    name_display: "United States 2023",
    mode: "Speaks",
    url: "https://data.census.gov",
    collector_type: "Government",
    collector_name: "US Census Bureau",
    author: null,
    population_eligible: 334000000n,
    language_estimates: {
      eng: 268000000,
      spa: 41757391,
    },
    created_at: new Date(),
    updated_at: new Date(),
  },
];
