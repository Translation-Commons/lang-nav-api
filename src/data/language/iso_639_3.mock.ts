export interface Iso6393Entry {
  id: string;
  part2b: string | null;
  part2t: string | null;
  part1: string | null;
  scope: string | null;
  language_type: string | null;
  ref_name: string;
  comment: string | null;
}

export const mockIso6393: Iso6393Entry[] = [
  {
    id: "eng",
    part2b: "eng",
    part2t: "eng",
    part1: "en",
    scope: "I",
    language_type: "L",
    ref_name: "English",
    comment: null,
  },
  {
    id: "zho",
    part2b: "chi",
    part2t: "zho",
    part1: "zh",
    scope: "M",
    language_type: "L",
    ref_name: "Chinese",
    comment: null,
  },
  {
    id: "fra",
    part2b: "fre",
    part2t: "fra",
    part1: "fr",
    scope: "I",
    language_type: "L",
    ref_name: "French",
    comment: null,
  },
];
