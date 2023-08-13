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

export type DirectorInput = {
  id?: InputMaybe<Scalars["BigInteger"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
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

export type MovieInput = {
  director?: InputMaybe<DirectorInput>;
  id?: InputMaybe<Scalars["BigInteger"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  year?: InputMaybe<Scalars["String"]["input"]>;
};

/** Mutation root */
export type Mutation = {
  __typename?: "Mutation";
  createMovie?: Maybe<Movie>;
};

/** Mutation root */
export type MutationCreateMovieArgs = {
  movie?: InputMaybe<MovieInput>;
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

export type FavouritesMoviesQueryVariables = Exact<{
  userId: Scalars["BigInteger"]["input"];
}>;

export type FavouritesMoviesQuery = {
  __typename?: "Query";
  getFavouriteMovies?: Array<{
    __typename?: "Favourites";
    user_id?: any | null;
    movie?: {
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
  } | null> | null;
};

export type CreateMovieMutationVariables = Exact<{
  movieInput?: InputMaybe<MovieInput>;
}>;

export type CreateMovieMutation = {
  __typename?: "Mutation";
  createMovie?: {
    __typename?: "Movie";
    id?: any | null;
    title?: string | null;
    year?: string | null;
  } | null;
};
