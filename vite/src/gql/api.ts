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

export type Director = {
  __typename?: "Director";
  id?: Maybe<Scalars["BigInteger"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type Favourites = {
  __typename?: "Favourites";
  movie?: Maybe<Movie>;
  user_id?: Maybe<Scalars["BigInteger"]["output"]>;
};

export type Movie = {
  __typename?: "Movie";
  director?: Maybe<Director>;
  id?: Maybe<Scalars["BigInteger"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  year?: Maybe<Scalars["String"]["output"]>;
};

/** Query root */
export type Query = {
  __typename?: "Query";
  /** Get Favourites movies */
  getFavouriteMovies?: Maybe<Array<Maybe<Favourites>>>;
};

/** Query root */
export type QueryGetFavouriteMoviesArgs = {
  userId?: InputMaybe<Scalars["BigInteger"]["input"]>;
};

export type MoviesQueryVariables = Exact<{ [key: string]: never }>;

export type MoviesQuery = {
  __typename?: "Query";
  getFavouriteMovies?: Array<{
    __typename?: "Favourites";
    user_id?: any | null;
    long?: {
      __typename?: "Movie";
      id?: any | null;
      title?: string | null;
      year?: string | null;
      director?: {
        __typename?: "Director";
        id?: any | null;
        name?: string | null;
      } | null;
    } | null;
    short?: {
      __typename?: "Movie";
      title?: string | null;
      year?: string | null;
    } | null;
  } | null> | null;
};
