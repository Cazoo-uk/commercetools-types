// facet result

interface FacetTerm {
  term: string;
  count: number;
  /** only available if counting products is enabled */
  productCount?: number;
}

interface TermFacetResult {
  type: "terms";
  dataType: "text" | "date" | "time" | "datetime" | "boolean" | "number";
  missing: number;
  total: number;
  other: FacetTerm[];
  terms: FacetTerm[];
}

interface Range {
  from: number;
  formStr: string;
  to: number;
  toStr: string;
  count: number;
  /** only available if counting products is enabled */
  productCount?: number;
  total: number;
  min: number;
  max: number;
  mean: number;
}

interface RangeFacetResult {
  type: "range";
  ranges: Range[];
}

interface FilteredFacetResult {
  type: "filter";
  count: number;
  /** only available if counting products is enabled */
  productCount?: number;
}

type FacetResult = TermFacetResult | RangeFacetResult | FilteredFacetResult;

export interface FacetResults {
  [key: string]: FacetResult;
}
