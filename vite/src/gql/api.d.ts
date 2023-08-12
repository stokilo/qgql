export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** Scalar for BigDecimal */
  BigDecimal: { input: any; output: any };
  /** Scalar for BigInteger */
  BigInteger: { input: any; output: any };
};

/** Mutation root */
export type Mutation = {
  __typename?: "Mutation";
  createTodoItem?: Maybe<TodoItem>;
};

/** Mutation root */
export type MutationCreateTodoItemArgs = {
  item?: InputMaybe<TodoItemInput>;
};

/** Query root */
export type Query = {
  __typename?: "Query";
  /** Get all todo items */
  allTodoItems?: Maybe<Array<Maybe<TodoItem>>>;
};

export type TodoItem = {
  __typename?: "TodoItem";
  body?: Maybe<Scalars["String"]["output"]>;
  headline?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["BigInteger"]["output"]>;
};

export type TodoItemInput = {
  body?: InputMaybe<Scalars["String"]["input"]>;
  headline?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["BigInteger"]["input"]>;
};

export type Q1QueryVariables = Exact<{ [key: string]: never }>;

export type Q1Query = {
  __typename?: "Query";
  allTodoItems?: Array<{
    __typename?: "TodoItem";
    id?: any | null;
    headline?: string | null;
  } | null> | null;
};
