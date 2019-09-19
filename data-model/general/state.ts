import {
  LocalizedString,
  Reference,
  CreatedBy,
  LastModifiedBy
} from "./commonTypes";

export enum StateType {
  OrderState = "OrderState",
  LineItemState = "LineItemState",
  ProductState = "ProductState",
  ReviewState = "ReviewState",
  PaymentState = "PaymentState"
}

export enum StateRole {
  ReviewIncludedInStatistics = "ReviewIncludedInStatistics",
  Return = "Return"
}

export interface State {
  id: string;
  key: string;
  version: number;
  createdAt: Date;
  createdBy: CreatedBy;
  lastModifiedAt: Date;
  lastModifiedBy: LastModifiedBy;
  type: StateType;
  name?: LocalizedString;
  description?: LocalizedString;
  initial: boolean;
  builtIn: boolean;
  roles?: StateRole[];
  transitions?: Reference<"state">[];
}
