export interface WritingSystem {
  id: string;
  name_display: string;
  name_full: string | null;
  name_endonym: string | null;
  first_unicode_version: string | null;
  sample: string | null;
  is_rtl: boolean;
  language_of_origin: string | null;
  territory_of_origin: string | null;
  group: string | null;
  scope: string | null;
  created_at: Date;
  updated_at: Date;
}
