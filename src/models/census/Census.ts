export interface Census {
  id: string;
  territory_code: string;
  year_collected: number | null;
  name_display: string | null;
  mode: string | null;
  url: string | null;
  collector_type: string | null;
  collector_name: string | null;
  author: string | null;
  population_eligible: bigint | null;
  language_estimates: Record<string, number>;
  created_at: Date;
  updated_at: Date;
}
