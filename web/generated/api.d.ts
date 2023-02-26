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
  todoItem?: InputMaybe<TodoItemInput>;
};

/** Query root */
export type Query = {
  __typename?: "Query";
  /** Get all Todos */
  allTodos?: Maybe<Array<Maybe<TodoList>>>;
};

export type TodoItem = {
  __typename?: "TodoItem";
  body?: Maybe<Scalars["String"]>;
  headline?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["BigInteger"]>;
  todoList?: Maybe<TodoList>;
};

export type TodoItemInput = {
  body?: InputMaybe<Scalars["String"]>;
  headline?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["BigInteger"]>;
  todoList?: InputMaybe<TodoListInput>;
};

export type TodoList = {
  __typename?: "TodoList";
  id?: Maybe<Scalars["BigInteger"]>;
  items?: Maybe<Array<Maybe<TodoItem>>>;
  name?: Maybe<Scalars["String"]>;
};

export type TodoListInput = {
  id?: InputMaybe<Scalars["BigInteger"]>;
  items?: InputMaybe<Array<InputMaybe<TodoItemInput>>>;
  name?: InputMaybe<Scalars["String"]>;
};

export type TodoListItemCreationResult = {
  __typename?: "TodoListItemCreationResult";
  error?: Maybe<Scalars["String"]>;
  success: Scalars["Boolean"];
  todoItem?: Maybe<TodoItem>;
};

export type CreateTodoItemMutationVariables = Exact<{
  input: TodoItemInput;
}>;

export type CreateTodoItemMutation = {
  __typename?: "Mutation";
  createTodoItem?: {
    __typename?: "TodoListItemCreationResult";
    success: boolean;
    error?: string | null;
    todoItem?: {
      __typename?: "TodoItem";
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
      __typename?: "TodoItem";
      id?: any | null;
      headline?: string | null;
      body?: string | null;
    } | null> | null;
  } | null> | null;
};
