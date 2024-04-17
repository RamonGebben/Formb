export type FieldType = {
  id: string;
  name: string;
  validation: string;
  primitive:
    | "string"
    | "number"
    | "boolean"
    | "date"
    | "numberRange"
    | "dateRange";
};

export type Field = {
  id: string;
  name: string;
  type: FieldType;
};

export type Service = {
  id: string;
  name: string;
  description?: string;
  fields: Field[];
};

export type FormField = {
  name: string;
  type: string;
  required: boolean;
};
