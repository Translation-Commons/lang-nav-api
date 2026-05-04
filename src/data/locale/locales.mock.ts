import type { Locale } from "../../models/locale/Locale";

export const mockLocales: Locale[] = [
  {
    id: "en_US",
    name_display: "English (United States)",
    name_native: null,
    population_source: "CLDR",
    population: 268000000n,
    official_status: "official",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: "zh_Hans_CN",
    name_display: "Chinese (China, Simplified)",
    name_native: "中文(简体)",
    population_source: "Other",
    population: 1246220087n,
    official_status: "official",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: "fr_FR",
    name_display: "French (France)",
    name_native: "français (France)",
    population_source: "CLDR",
    population: 68000000n,
    official_status: "official",
    created_at: new Date(),
    updated_at: new Date(),
  },
];
