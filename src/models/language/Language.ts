export interface Language {
  id: string;
  glottocode: string | null;
  name_display: string;
  name_endonym: string | null;
  modality: string | null;
  primary_script_code: string | null;
  population_estimate: bigint | null;
  parent_language_code: string | null;
  parent_glottocode: string | null;
  recommendation: string | null;
  recommendation_reason: string | null;
  created_at: Date;
  updated_at: Date;
}
