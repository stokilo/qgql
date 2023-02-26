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
  /** Scalar for Date */
  Date: any;
};

export type Ally = Character & {
  __typename?: "Ally";
  name?: Maybe<Scalars["String"]>;
  partner?: Maybe<Hero>;
  surname?: Maybe<Scalars["String"]>;
};

export type Character = {
  name?: Maybe<Scalars["String"]>;
  surname?: Maybe<Scalars["String"]>;
};

export type Film = {
  __typename?: "Film";
  director?: Maybe<Scalars["String"]>;
  episodeID?: Maybe<Scalars["Int"]>;
  heroes?: Maybe<Array<Maybe<Hero>>>;
  /** ISO-8601 */
  releaseDate?: Maybe<Scalars["Date"]>;
  title?: Maybe<Scalars["String"]>;
};

export type Hero = Character & {
  __typename?: "Hero";
  darkSide?: Maybe<Scalars["Boolean"]>;
  episodeIds?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  height?: Maybe<Scalars["Float"]>;
  lightSaber?: Maybe<LightSaber>;
  mass?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  surname?: Maybe<Scalars["String"]>;
};

export type HeroCreationResult = {
  __typename?: "HeroCreationResult";
  error?: Maybe<Scalars["String"]>;
  hero?: Maybe<Hero>;
  success: Scalars["Boolean"];
};

export type HeroInput = {
  darkSide?: InputMaybe<Scalars["Boolean"]>;
  episodeIds?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  height?: InputMaybe<Scalars["Float"]>;
  lightSaber?: InputMaybe<LightSaber>;
  mass?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  surname?: InputMaybe<Scalars["String"]>;
};

export enum LightSaber {
  Blue = "BLUE",
  Green = "GREEN",
  Red = "RED",
}

/** Mutation root */
export type Mutation = {
  __typename?: "Mutation";
  createHero?: Maybe<HeroCreationResult>;
  deleteHero?: Maybe<Hero>;
};

/** Mutation root */
export type MutationCreateHeroArgs = {
  hero?: InputMaybe<HeroInput>;
};

/** Mutation root */
export type MutationDeleteHeroArgs = {
  id: Scalars["Int"];
};

/** Query root */
export type Query = {
  __typename?: "Query";
  /** Get all Films from a galaxy far far away */
  allFilms?: Maybe<Array<Maybe<Film>>>;
  /** Get all Todos */
  allTodos?: Maybe<Array<Maybe<TodoList>>>;
  allies?: Maybe<Array<Maybe<Ally>>>;
  /** Get all characters from a galaxy far far away */
  characters?: Maybe<Array<Maybe<Character>>>;
  /** Get a Films from a galaxy far far away */
  film?: Maybe<Film>;
  heroesWithSurname?: Maybe<Array<Maybe<Hero>>>;
  /** Search for heroes or films */
  search?: Maybe<Array<Maybe<SearchResult>>>;
};

/** Query root */
export type QueryFilmArgs = {
  filmId?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

/** Query root */
export type QueryHeroesWithSurnameArgs = {
  surname?: InputMaybe<Scalars["String"]>;
};

/** Query root */
export type QuerySearchArgs = {
  query?: InputMaybe<Scalars["String"]>;
};

export type SearchResult = Ally | Film | Hero;

export type TodoList = {
  __typename?: "TodoList";
  id?: Maybe<Scalars["BigInteger"]>;
  items?: Maybe<Array<Maybe<TodoListItem>>>;
  name?: Maybe<Scalars["String"]>;
};

export type TodoListItem = {
  __typename?: "TodoListItem";
  id?: Maybe<Scalars["BigInteger"]>;
  text?: Maybe<Scalars["String"]>;
  todoList?: Maybe<TodoList>;
};

export type FetchFilmsQueryVariables = Exact<{ [key: string]: never }>;

export type FetchFilmsQuery = {
  __typename?: "Query";
  film?: { __typename?: "Film"; director?: string | null } | null;
};
