/**
 * Generated by orval v6.14.3 🍺
 * Do not edit manually.
 * qgql API
 * OpenAPI spec version: 1.0.0-SNAPSHOT
 */
export interface TodoItem {
  id?: number;
  headline?: string;
  body?: string;
}

export interface TodoList {
  id?: number;
  name?: string;
  items?: TodoItem[];
}

