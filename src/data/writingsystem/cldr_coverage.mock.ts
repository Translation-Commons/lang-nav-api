export interface CldrCoverage {
  language_code: string;
  name_english: string;
  name_native: string | null;
  script: string | null;
  default_region: string | null;
  locale_count: number | null;
  target_level: string | null;
  computed_level: string | null;
}

export const mockCldrCoverage: CldrCoverage[] = [
  {
    language_code: "en",
    name_english: "English",
    name_native: "English",
    script: "Latn",
    default_region: "US",
    locale_count: 118,
    target_level: "modern",
    computed_level: "modern",
  },
  {
    language_code: "fil",
    name_english: "Filipino",
    name_native: "Filipino",
    script: "Latn",
    default_region: "PH",
    locale_count: 1,
    target_level: "modern",
    computed_level: "modern",
  },
  {
    language_code: "ar",
    name_english: "Arabic",
    name_native: "العربية",
    script: "Arab",
    default_region: "SA",
    locale_count: 10,
    target_level: "modern",
    computed_level: "moderate",
  },
];
