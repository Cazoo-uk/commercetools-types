import { DateTime, LocalizedString, Reference } from "../general";

import { CategoryOrderHints, ProductVariant, SearchKeywords } from "./products";
import { ReviewRatingStatistics } from "./reviews";

// product projection

export interface ProductProjection {
  id: string;
  key?: string;
  version: number;
  createdAt: DateTime;
  lastModifiedAt: DateTime;
  productType: Reference<"product-type">;
  name: LocalizedString;
  description?: LocalizedString;
  slug: LocalizedString;
  categories: Reference<"category">[];
  categoryOrderHints?: CategoryOrderHints;
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
  metaKeywords?: LocalizedString;
  searchKeywords: SearchKeywords;
  hasStagedChanges: boolean;
  published: boolean;
  masterVariant: ProductVariant;
  variants: ProductVariant[];
  taxCategory?: Reference<"tax-category">;
  state?: Reference<"state">;
  reviewRatingStatistics?: ReviewRatingStatistics;
}
