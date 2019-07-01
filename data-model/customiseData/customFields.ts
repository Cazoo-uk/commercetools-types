import { Reference, ResourceIdentifier } from "../general";
import { FieldDefinition } from "./types";

// custom fields

export interface CustomFields {
  type: Reference<"type">;
  fields: FieldDefinition[];
}

// custom fields draft

export interface CustomFieldsDraft {
  type: ResourceIdentifier<"type">;
  fields?: FieldDefinition[];
}
