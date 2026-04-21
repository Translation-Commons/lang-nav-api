export interface IsoRetirementEntry {
  id: string;
  ref_name: string;
  retirement_reason: string | null;
  change_to: string | null;
  retirement_remedy: string | null;
  effective: string | null;
}

export const mockIsoRetirements: IsoRetirementEntry[] = [
  {
    id: "fri",
    ref_name: "Western Frisian",
    retirement_reason: "C",
    change_to: "fry",
    retirement_remedy: null,
    effective: "2005-11-16",
  },
  {
    id: "auv",
    ref_name: "Auvergnat",
    retirement_reason: "M",
    change_to: "oci",
    retirement_remedy: null,
    effective: "2007-03-14",
  },
  {
    id: "gsc",
    ref_name: "Gascon",
    retirement_reason: "M",
    change_to: "oci",
    retirement_remedy: null,
    effective: "2007-03-14",
  },
];
