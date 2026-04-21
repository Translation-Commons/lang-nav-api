export interface MacrolanguageEntry {
  macrolanguage_id: string;
  individual_id: string;
  individual_status: string | null;
}

export const mockMacrolanguages: MacrolanguageEntry[] = [
  { macrolanguage_id: "zho", individual_id: "cmn", individual_status: "A" },
  { macrolanguage_id: "zho", individual_id: "yue", individual_status: "A" },
  { macrolanguage_id: "ara", individual_id: "arb", individual_status: "A" },
];
