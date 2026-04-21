export interface Family6395Entry {
  iso_639_5: string;
  family_name: string;
  parent: string | null;
}

export const mockFamilies6395: Family6395Entry[] = [
  { iso_639_5: "ine", family_name: "Indo-European languages", parent: null },
  { iso_639_5: "gem", family_name: "Germanic languages", parent: "ine" },
  { iso_639_5: "roa", family_name: "Romance languages", parent: "ine" },
];
