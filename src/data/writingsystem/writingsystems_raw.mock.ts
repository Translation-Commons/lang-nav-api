export interface WritingSystemRaw {
  iso_15924: string;
  name_display: string;
  name_full: string | null;
  name_endonym: string | null;
  first_unicode_version: string | null;
  sample: string | null;
  is_rtl: string;
  language_of_origin: string | null;
  territory_of_origin: string | null;
  group: string | null;
  scope: string | null;
}

export const mockWritingSystemsRaw: WritingSystemRaw[] = [
  {
    iso_15924: 'Latn',
    name_display: 'Latin',
    name_full: 'Latin',
    name_endonym: null,
    first_unicode_version: '1.0',
    sample: 'Aa',
    is_rtl: 'no',
    language_of_origin: 'lat',
    territory_of_origin: 'IT',
    group: null,
    scope: 'Individual script',
  },
  {
    iso_15924: 'Hans',
    name_display: 'Han (Simplified)',
    name_full: 'Han (Simplified variant)',
    name_endonym: '汉字',
    first_unicode_version: '1.1',
    sample: '字',
    is_rtl: 'no',
    language_of_origin: 'zho',
    territory_of_origin: 'CN',
    group: 'Hani',
    scope: 'Individual script',
  },
  {
    iso_15924: 'Arab',
    name_display: 'Arabic',
    name_full: 'Arabic',
    name_endonym: 'العربية',
    first_unicode_version: '1.0',
    sample: 'ع',
    is_rtl: 'yes',
    language_of_origin: 'ara',
    territory_of_origin: 'SA',
    group: null,
    scope: 'Individual script',
  },
];