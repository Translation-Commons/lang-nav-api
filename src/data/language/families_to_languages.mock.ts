export interface FamilyToLanguageEntry {
  family_code: string;
  language_code: string;
}

export const mockFamiliesToLanguages: FamilyToLanguageEntry[] = [
  { family_code: "gem", language_code: "eng" },
  { family_code: "roa", language_code: "fra" },
  { family_code: "ine", language_code: "eng" },
];
