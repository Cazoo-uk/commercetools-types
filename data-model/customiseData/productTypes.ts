import { LocalizedString, Reference } from "../general";

// attribute definition

export interface AttributeDefinition {
  type: AttributeType;
  name: string;
  label: LocalizedString;
  isRequired: boolean;
  attributeConstraint?: AttributeConstraint;
  inputHint: TextInputHint;
  isSearchable: boolean;
}

// attribute constraint

type AttributeConstraint =
  | "CombinationUnique"
  | "None"
  | "Unique"
  | "SameForAll";

// attribute type

interface BooleanType {
  name: "boolean";
}

interface DateType {
  name: "date";
}

interface DateTimeType {
  name: "datetime";
}

interface EnumType {
  name: "enum";
  values: PlainEnumValue[];
}

interface LocalizableEnumType {
  name: "lenum";
  values: LocalizedEnumValue[];
}

interface LocalizableTextType {
  name: "ltext";
}

interface MoneyType {
  name: "money";
}
interface NestedType {
  name: "nested";
  typeReference: Reference<"product-type">;
}

interface NumberType {
  name: "number";
}

interface ReferenceType {
  name: "reference";
  referenceTypeId:
    | "cart"
    | "category"
    | "channel"
    | "customer"
    | "key-value-document"
    | "order"
    | "product"
    | "product-type"
    | "review"
    | "state"
    | "shipping-method"
    | "zone";
}

interface SetType {
  name: "set";
  elementType: AttributeType;
}

interface TextType {
  name: "text";
}

interface TimeType {
  name: "time";
}

export type AttributeType =
  | BooleanType
  | DateType
  | DateTimeType
  | EnumType
  | LocalizableEnumType
  | LocalizableTextType
  | MoneyType
  | NestedType
  | NumberType
  | ReferenceType
  | SetType
  | TextType
  | TimeType;

// localized enum value

interface LocalizedEnumValue {
  key: string;
  label: LocalizedString;
}

// plain enum value

interface PlainEnumValue {
  key: string;
  label: string;
}

// text input hint

type TextInputHint = "MultiLine" | "SingleLine";
