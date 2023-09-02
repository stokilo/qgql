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

export type ApplicationGql = {
  __typename?: "ApplicationGQL";
  applicationNr?: Maybe<Scalars["String"]["output"]>;
  beneficiaries?: Maybe<Array<Maybe<Beneficiary>>>;
  contribution?: Maybe<Scalars["String"]["output"]>;
  frequency?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
};

export type Beneficiary = {
  __typename?: "Beneficiary";
  age?: Maybe<Scalars["String"]["output"]>;
  applicationId?: Maybe<Scalars["BigInteger"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
};

export type ConfigGql = {
  __typename?: "ConfigGQL";
  configName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
  items?: Maybe<Array<Maybe<ConfigItem>>>;
};

export type ConfigItem = {
  __typename?: "ConfigItem";
  configId?: Maybe<Scalars["BigInteger"]["output"]>;
  configKey?: Maybe<Scalars["String"]["output"]>;
  configValue?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["Int"]["output"]>;
};

/** Query root */
export type Query = {
  __typename?: "Query";
  /** Get root state */
  getRoot?: Maybe<RootGql>;
};

/** Query root */
export type QueryGetRootArgs = {
  applicationId?: InputMaybe<Scalars["BigInteger"]["input"]>;
};

export type RootGql = {
  __typename?: "RootGQL";
  application?: Maybe<ApplicationGql>;
  config?: Maybe<ConfigGql>;
  test?: Maybe<Scalars["String"]["output"]>;
};

export type GetRootQueryVariables = Exact<{
  applicationId: Scalars["BigInteger"]["input"];
}>;

export type GetRootQuery = {
  __typename?: "Query";
  getRoot?: {
    __typename?: "RootGQL";
    test?: string | null;
    config?: {
      __typename?: "ConfigGQL";
      configName?: string | null;
      items?: Array<{
        __typename?: "ConfigItem";
        configKey?: string | null;
        configValue?: string | null;
      } | null> | null;
    } | null;
    application?: {
      __typename?: "ApplicationGQL";
      applicationNr?: string | null;
      frequency?: string | null;
      contribution?: string | null;
      beneficiaries?: Array<{
        __typename?: "Beneficiary";
        firstName?: string | null;
        lastName?: string | null;
      } | null> | null;
    } | null;
  } | null;
};
