import type { FieldType } from "./types";
export const predefinedFields: Array<FieldType> = [
  { id: "text", name: "text", primitive: "string", validation: "/w+/g" },
  { id: "number", name: "number", primitive: "string", validation: "/d+/g" },
];
