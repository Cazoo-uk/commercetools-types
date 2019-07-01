import {
  DateTime,
  LocalizedString,
  Reference,
  ReferenceType
} from "./commonTypes";
import { ProductProjection } from "../productCatalogue/productProjections";

// message

export interface Message<T extends ReferenceType> {
  id: string;
  version: number;
  sequenceNumber: number;
  resource: Reference<T>;
  resourceVersion: number;
  resourceUserProvidedIdentifiers?: UserProvidedIdentities[];
  type: string;
  createdAt: DateTime;
  lastModifiedAt: DateTime;
}

// product created message

export interface ProductCreatedMessage extends Message<"product"> {
  type: "ProductCreated";
  productProjection: ProductProjection;
}

// user provided identities

export interface UserProvidedIdentities {
  key?: string;
  externalId?: string;
  orderNumber?: string;
  customerNumber?: string;
  sku?: string;
  slug?: LocalizedString;
}
