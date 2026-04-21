export interface GlottologEntry {
  glottocode: string;
  parent_glottocode: string | null;
  node_name: string;
  iso_code: string | null;
  family_id: string | null;
  level: string | null;
  latitude: string | null;
  longitude: string | null;
}

export const mockGlottolog: GlottologEntry[] = [
  {
    glottocode: "stan1293",
    parent_glottocode: "macr1271",
    node_name: "Standard English",
    iso_code: "eng",
    family_id: "indo1319",
    level: "language",
    latitude: "51.5",
    longitude: "-0.1",
  },
  {
    glottocode: "clas1255",
    parent_glottocode: "sini1245",
    node_name: "Chinese languages",
    iso_code: "zho",
    family_id: "sino1245",
    level: "language",
    latitude: "35.0",
    longitude: "105.0",
  },
  {
    glottocode: "stan1290",
    parent_glottocode: null,
    node_name: "Standard French",
    iso_code: "fra",
    family_id: "indo1319",
    level: "language",
    latitude: "48.8",
    longitude: "2.3",
  },
];
