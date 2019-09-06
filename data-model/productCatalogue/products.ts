import {
  Asset,
  AssetDraft,
  BaseMoneyTypes,
  CreatedBy,
  DateTime,
  IETFLanguageTag,
  LastModifiedBy,
  LocalizedString,
  Money,
  Reference,
  ResourceIdentifier
} from "../general";

import { CustomFields, CustomFieldsDraft } from "../customiseData";
import { ReviewRatingStatistics } from "./reviews";

// attribute

export interface Attribute<T = any> {
  name: string;
  /** a valid JSON value, based on an AttributeDefinition */
  value: T;
}

// category order hints

/** representing decimal value, where 0 < value < 1,
 * that does not end in '0' */
type DecimalValueAsString = string;

export interface CategoryOrderHints {
  [key: string]: DecimalValueAsString;
}

// discounted price

interface DiscountedPrice {
  value: Money;
  discount: Reference<"product-discount">;
}

// image

export interface Image {
  url: string;
  dimensions: {
    h: number;
    w: number;
  };
  label?: string;
}

// price

export interface Price {
  id: string;
  value: BaseMoneyTypes;
  country?: string;
  customerGroup?: Reference<"customer-group">;
  channel?: Reference<"channel">;
  validFrom?: DateTime;
  validUntil?: DateTime;
  tiers?: PriceTier[];
  discounted?: DiscountedPrice;
  custom?: CustomFields;
}

// price draft

export interface PriceDraft {
  value: BaseMoneyTypes;
  country?: string;
  customerGroup?: Reference<"customer-group">;
  channel?: ResourceIdentifier<"channel">;
  discounted?: DiscountedPrice;
  validFrom?: DateTime;
  validUntil?: DateTime;
  tiers?: PriceTier[];
  custom?: CustomFieldsDraft;
}

// price tier

interface PriceTier {
  minimumQuantity: number;
  value: BaseMoneyTypes;
}

// product

export interface Product {
  id: string;
  key?: string;
  version: number;
  createdAt: DateTime;
  createdBy: CreatedBy;
  lastModifiedBy: LastModifiedBy;
  productType: Reference<"product-type">;
  masterData: ProductCatalogData;
  taxCategory?: Reference<"tax-category">;
  state?: Reference<"state">;
  reviewRatingStatistics: ReviewRatingStatistics;
}

// product catalogue data

interface ProductCatalogData {
  published: boolean;
  current: ProductData;
  staged: ProductData;
  hasStagedChanges: boolean;
}

// product data

interface ProductData {
  name: LocalizedString;
  categories: Reference<"category">;
  categoryOrderHints?: CategoryOrderHints;
  description?: LocalizedString;
  slug: LocalizedString;
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
  metaKeywords?: LocalizedString;
  masterVariant: ProductVariant;
  variants: ProductVariant[];
  searchKeywords: SearchKeywords;
}

// product draft

export interface ProductDraft {
  key?: string;
  name: LocalizedString;
  productType: ResourceIdentifier<"product-type">;
  slug: LocalizedString;
  description?: LocalizedString;
  categories?: ResourceIdentifier<"category">[];
  categoryOrderHints?: CategoryOrderHints;
  metaTitle?: LocalizedString;
  metaDescription?: LocalizedString;
  metaKeywords?: LocalizedString;
  masterVariant?: ProductVariantDraft; // required if variants are specified
  variants?: ProductVariantDraft[];
  taxCategory?: ResourceIdentifier<"tax-category">;
  searchKeywords?: SearchKeywords;
  state?: Reference<"state">;
  publish?: boolean;
}

// product variant

export interface ProductVariant {
  id: number;
  sku?: string;
  key?: string;
  prices?: Price[];
  attributes?: Attribute[];
  price?: Price;
  images?: Image[];
  assets?: Asset[];
  availability?: ProductVariantAvailability;
  isMatchingVariant?: boolean;
  scopedPrice?: ScopedPrice;
  scopedPriceDiscounted?: boolean;
}

// product variant availability

export interface ProductVariantAvailability {
  isOnStock?: boolean;
  restockableInDays?: number;
  availableQuantity?: number;
  /** for each Inventory Entries with a supply channel, an entry is added into channels */
  channels?: Record<string, ProductVariantAvailability>[];
}

// product variant draft

export interface ProductVariantDraft {
  sku?: string;
  key?: string;
  prices?: PriceDraft[];
  images?: Image[];
  assets?: AssetDraft[];
  attributes?: Attribute[];
}

// scoped price

export interface ScopedPrice {
  id: string;
  value: BaseMoneyTypes;
  currentValue: BaseMoneyTypes;
  country?: string;
  customerGroup?: Reference<"customer-group">;
  channel?: Reference<"channel">;
  validFrom?: DateTime;
  validUntil?: DateTime;
  discounted?: DiscountedPrice;
  custom?: CustomFields;
}

// search keywords

export interface WhitespaceTokenizer {
  type: "whitespace";
}

export interface CustomTokenizer {
  type: "custom";
  inputs: string[];
}

export type SuggestTokenizer = WhitespaceTokenizer | CustomTokenizer;

export interface SearchKeyword {
  text: string;
  suggestTokenizer?: SuggestTokenizer;
}

export type SearchKeywords = { [key in IETFLanguageTag]: SearchKeyword[] };

// update action

type IdOrSku = number | string;

interface SetKeyAction {
  action: "setKey";
  key?: string;
}

interface ChangeNameAction {
  action: "changeName";
  name: LocalizedString;
  staged?: boolean;
}

interface ChangeSlugAction {
  action: "changeSlug";
  slug: LocalizedString;
  staged?: boolean;
}

interface SetTaxCategoryAction {
  action: "setTaxCategory";
  taxCategory?: ResourceIdentifier<"tax-category">;
}

interface AddProductVariantAction {
  action: "addVariant";
  sku?: string;
  key?: string;
  prices?: Price[];
  images?: Image[];
  attributes?: Attribute[];
  staged?: boolean;
  assets?: Asset[];
}

interface RemoveProductVariantAction {
  action: "removeVariant";
  id: IdOrSku;
  staged?: boolean;
}

interface ChangeMasterVariantAction {
  action: "changeMasterVariant";
  variantId: IdOrSku;
  staged?: boolean;
}

interface SetAttributeAction<T = any> {
  action: "setAttribute";
  variantId: IdOrSku;
  name: string;
  value?: T;
  staged?: boolean;
}

interface SetAttributeInAllVariantsAction<T = any> {
  action: "setAttributeInAllVariants";
  name: string;
  value?: T;
  staged?: boolean;
}

interface SetPricesAction {
  action: "setPrices";
  variantId: IdOrSku;
  prices: PriceDraft[];
  staged?: boolean;
}

interface PublishAction {
  action: "publish";
  scope: "All" | "Prices";
}

export type UpdateAction<T = any> =
  | SetKeyAction
  | ChangeNameAction
  | ChangeSlugAction
  | AddProductVariantAction
  | RemoveProductVariantAction
  | ChangeMasterVariantAction
  | SetAttributeAction<T>
  | SetAttributeInAllVariantsAction<T>
  | SetPricesAction
  | PublishAction
  | SetTaxCategoryAction;
