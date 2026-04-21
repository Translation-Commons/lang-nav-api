export interface Ethnologue2012Entry {
  unique_join_code: string;
  language_status: string | null;
}

export const mockEthnologue2012: Ethnologue2012Entry[] = [
  { unique_join_code: "eng", language_status: "National" },
  { unique_join_code: "zho", language_status: "National" },
  { unique_join_code: "fra", language_status: "National" },
];
