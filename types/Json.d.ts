export type JsonValue = string | number | boolean | JsonValue[]

export type JsonDocument = JsonValue | { [x: string]: JsonDocument }
