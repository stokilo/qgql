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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Scalar for BigDecimal */
  BigDecimal: any;
  /** Scalar for BigInteger */
  BigInteger: any;
};

/** Mutation root */
export type Mutation = {
  __typename?: "Mutation";
  createTodoItem?: Maybe<TodoListItemCreationResult>;
};

/** Mutation root */
export type MutationCreateTodoItemArgs = {
  todoListItem?: InputMaybe<TodoListItemInput>;
};

/** Query root */
export type Query = {
  __typename?: "Query";
  /** Get all Todos */
  allTodos?: Maybe<Array<Maybe<TodoList>>>;
};

export type TodoList = {
  __typename?: "TodoList";
  id?: Maybe<Scalars["BigInteger"]>;
  items?: Maybe<Array<Maybe<TodoListItem>>>;
  name?: Maybe<Scalars["String"]>;
};

export type TodoListInput = {
  id?: InputMaybe<Scalars["BigInteger"]>;
  items?: InputMaybe<Array<InputMaybe<TodoListItemInput>>>;
  name?: InputMaybe<Scalars["String"]>;
};

export type TodoListItem = {
  __typename?: "TodoListItem";
  body?: Maybe<Scalars["String"]>;
  headline?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["BigInteger"]>;
  text?: Maybe<Scalars["String"]>;
  todoList?: Maybe<TodoList>;
};

export type TodoListItemCreationResult = {
  __typename?: "TodoListItemCreationResult";
  error?: Maybe<Scalars["String"]>;
  success: Scalars["Boolean"];
  todoListItem?: Maybe<TodoListItem>;
};

export type TodoListItemInput = {
  body?: InputMaybe<Scalars["String"]>;
  headline?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["BigInteger"]>;
  text?: InputMaybe<Scalars["String"]>;
  todoList?: InputMaybe<TodoListInput>;
};

export type CreateTodoItemMutationVariables = Exact<{
  input: TodoListItemInput;
}>;

export type CreateTodoItemMutation = {
  __typename?: "Mutation";
  createTodoItem?: {
    __typename?: "TodoListItemCreationResult";
    success: boolean;
    error?: string | null;
    todoListItem?: {
      __typename?: "TodoListItem";
      id?: any | null;
      headline?: string | null;
      body?: string | null;
    } | null;
  } | null;
};

export type AllTodosQueryVariables = Exact<{ [key: string]: never }>;

export type AllTodosQuery = {
  __typename?: "Query";
  allTodos?: Array<{
    __typename?: "TodoList";
    id?: any | null;
    name?: string | null;
    items?: Array<{
      __typename?: "TodoListItem";
      text?: string | null;
    } | null> | null;
  } | null> | null;
};
