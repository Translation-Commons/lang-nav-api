export interface Locale {
  id: string;
  name_display: string;
  name_native: string | null;
  population_source: string | null;
  population: bigint | null;
  official_status: string | null;
  created_at: Date;
  updated_at: Date;
}
