import type { VariantTag } from "../../models/varianttag/VariantTag";

export const mockVariantTags: VariantTag[] = [
  {
    id: "1901",
    name_display: "Traditional German orthography",
    added: "2005-10-16",
    prefix: "de",
    comments: null,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: "fonipa",
    name_display: "International Phonetic Alphabet",
    added: "2006-12-18",
    prefix: null,
    comments: null,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: "alalc97",
    name_display: "ALA-LC Romanization, 1997 edition",
    added: "2009-12-09",
    prefix: null,
    comments:
      "American Library Association-Library of Congress romanization tables",
    created_at: new Date(),
    updated_at: new Date(),
  },
];
