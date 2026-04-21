export interface Ethnologue2025Entry {
  iso_code: string;
  language_name: string;
  population_size: bigint | null;
  vitality: string | null;
  digital_support: string | null;
}

export const mockEthnologue2025: Ethnologue2025Entry[] = [
  {
    iso_code: "eng",
    language_name: "English",
    population_size: 1243492288n,
    vitality: "thriving",
    digital_support: "thriving",
  },
  {
    iso_code: "zho",
    language_name: "Chinese",
    population_size: 1296041185n,
    vitality: "thriving",
    digital_support: "thriving",
  },
  {
    iso_code: "fra",
    language_name: "French",
    population_size: 274000000n,
    vitality: "thriving",
    digital_support: "vital",
  },
];
