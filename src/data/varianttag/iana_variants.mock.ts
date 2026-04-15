export interface IanaVariant {
  subtag: string;
  description: string;
  added: string | null;
  prefix: string | null;
  comments: string | null;
}

export const mockIanaVariants: IanaVariant[] = [
  {
    subtag: "1901",
    description: "Traditional German orthography",
    added: "2005-10-16",
    prefix: "de",
    comments: null,
  },
  {
    subtag: "fonipa",
    description: "International Phonetic Alphabet",
    added: "2006-12-18",
    prefix: null,
    comments: null,
  },
  {
    subtag: "alalc97",
    description: "ALA-LC Romanization, 1997 edition",
    added: "2009-12-09",
    prefix: null,
    comments:
      "American Library Association-Library of Congress romanization tables",
  },
];
