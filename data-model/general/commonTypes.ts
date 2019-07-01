import { CustomFields, CustomFieldsDraft } from "../customiseData";

// asset

export interface Asset {
  id: string;
  key?: string;
  /** requires at least one entry! */
  source: AssetSource[];
  name: LocalizedString;
  description?: LocalizedString;
  tags?: string[];
  custom: CustomFields;
}

// asset draft

export interface AssetDraft {
  key?: string;
  /** requires at least one entry! */
  sources: AssetSource[];
  name: LocalizedString;
  description: LocalizedString;
  tags?: string[];
  custom: CustomFieldsDraft;
}

// asset source

interface AssetSource {
  uri: string;
  key?: string;
  dimensions?: {
    h: number;
    w: number;
  };
  contentType?: string;
}

// base money

export interface BaseMoney {
  type: "centPrecision" | "highPrecision";
}

// created by

export interface CreatedBy {
  clientId?: string;
  externalUserId?: string;
  customer: Reference<"customer">;
  anonymousId?: string;
}

// datetime

/** string representation of UTC datetime, ISO 8601 format (YYYY-MM-DDThh:mm:ss.sssZ) */
export type DateTime = string;

// high precision money

export interface HighPrecisionMoney extends BaseMoney {
  centAmount: number;
  currencyCode: string;
  fractionDigits: number;
  preciseAmount: number;
  type: "highPrecision";
}

// last modified by

export interface LastModifiedBy {
  clientId?: string;
  externalUserId?: string;
  customer: Reference<"customer">;
  anonymousId?: string;
}

// localized string

export type IETFLanguageTag = "en";
export type LocalizedString = { [key in IETFLanguageTag]: string };

// money

export interface Money extends BaseMoney {
  centAmount: number;
  currencyCode: string;
  /** Can be omitted since it’s always equal to currency fraction digits */
  fractionDigits?: number;
  type: "centPrecision";
}

// reference

export interface Reference<T extends ReferenceType> {
  typeId: T;
  id: string;
  obj?: { [key: string]: string };
}

// reference type

export type ReferenceType =
  | "cart"
  | "cart-discount"
  | "category"
  | "channel"
  | "customer"
  | "customer-group"
  | "discount-code"
  | "key-value-document"
  | "payment"
  | "product"
  | "product-discount"
  | "product-price"
  | "product-type"
  | "order"
  | "order-edit"
  | "shipping-method"
  | "shopping-list"
  | "state"
  | "store"
  | "tax-category"
  | "type"
  | "zone";

// resource identifier

interface ResourceIdentifierById<T extends ReferenceType> {
  id: string;
  typeId?: T;
}

interface ResourceIdentifierByKey<T extends ReferenceType> {
  key: string;
  typeId?: T;
}

export type ResourceIdentifier<T extends ReferenceType> =
  | ResourceIdentifierById<T>
  | ResourceIdentifierByKey<T>;
