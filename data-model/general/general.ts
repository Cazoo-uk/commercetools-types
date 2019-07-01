import { FacetResults } from "../productCatalogue/productProjectionsSearch";

// paged query result

export interface PagedQueryResult<T, Meta = any> {
  offset: number;
  limit: number;
  count: number;
  total?: number;
  results: T;
  facets?: FacetResults;
  meta?: Meta;
}
