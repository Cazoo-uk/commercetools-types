import { LocalizedString } from "../general";

// enum value

export interface EnumValue {
  key: string;
  label: string;
}

// field definition

export interface FieldDefinition {
  type: FieldType;
  name: string;
  label: LocalizedString;
  required: boolean;
  inputHint: TextInputHint;
}

// field type

interface BooleanType {
  name: "Boolean";
}

interface DateType {
  name: "Date";
}

interface DateTimeType {
  name: "DateTime";
}

interface EnumType {
  name: "Enum";
  values: EnumValue[];
}

interface LocalizedEnumType {
  name: "LocalizedEnum";
  values: LocalizedEnumValue[];
}

interface LocalizedStringType {
  name: "LocalizedString";
}

interface NumberType {
  name: "Number";
}

interface MoneyType {
  name: "Money";
}

interface ReferenceType {
  name: "Reference";
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
  name: "Set";
  elementType: FieldType;
}

interface StringType {
  name: "String";
}

interface TimeType {
  name: "Time";
}

export type FieldType =
  | BooleanType
  | StringType
  | LocalizedStringType
  | EnumType
  | LocalizedEnumType
  | NumberType
  | MoneyType
  | DateType
  | TimeType
  | DateTimeType
  | ReferenceType
  | SetType;

// localized enum value

export interface LocalizedEnumValue {
  key: string;
  label: LocalizedString;
}

// text input hint

type TextInputHint = "MultiLine" | "SingleLine";
