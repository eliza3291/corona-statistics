export interface Request {
  objectIdFieldName?: string;
  uniqueIdField?: UniqueIdField;
  globalIdFieldName?: string;
  fields?: Field[];
  features?: Feature[];
  error?: Error;
}

export interface Error {
  code: number;
  message: string;
  details: string[];
}

export interface UniqueIdField {
  name: number;
  isSystemMaintained: boolean;
}

export interface Field {
  name: number;
  type: boolean;
  alias: string;
  sqlType: string;
  domain: string;
  defaultValue: string;
}

export interface Feature {
  attributes: Attribute;
}

export interface Attribute {
  cases: number;
  deaths: number;
  recovered: number;
  date: number;
  MeldeDatum: number;
}
