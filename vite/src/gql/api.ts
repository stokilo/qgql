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
  /** Scalar for DateTime */
  DateTime: { input: any; output: any };
};

export type Application = {
  __typename?: "Application";
  applicationNr?: Maybe<Scalars["String"]["output"]>;
  beneficiaries?: Maybe<Array<Maybe<Beneficiary>>>;
  id?: Maybe<Scalars["BigInteger"]["output"]>;
};

export type ApplicationInput = {
  applicationNr?: InputMaybe<Scalars["String"]["input"]>;
  beneficiaries?: InputMaybe<Array<InputMaybe<BeneficiaryInput>>>;
  id?: InputMaybe<Scalars["BigInteger"]["input"]>;
};

export type Beneficiary = {
  __typename?: "Beneficiary";
  application?: Maybe<Application>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["BigInteger"]["output"]>;
};

export type BeneficiaryInput = {
  application?: InputMaybe<ApplicationInput>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["BigInteger"]["input"]>;
};

export type Config = {
  __typename?: "Config";
  configItems?: Maybe<Array<Maybe<ConfigItem>>>;
  id?: Maybe<Scalars["BigInteger"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type ConfigItem = {
  __typename?: "ConfigItem";
  config?: Maybe<Config>;
  id?: Maybe<Scalars["BigInteger"]["output"]>;
  key?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type Lead = {
  __typename?: "Lead";
  comments?: Maybe<Array<Maybe<LeadComment>>>;
  /** ISO-8601 */
  creationDate?: Maybe<Scalars["DateTime"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["BigInteger"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  leadNr?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
};

export type LeadComment = {
  __typename?: "LeadComment";
  comment?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["BigInteger"]["output"]>;
  lead?: Maybe<Lead>;
};

export type LeadCommentInput = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["BigInteger"]["input"]>;
  lead?: InputMaybe<LeadInput>;
};

export type LeadGql = {
  __typename?: "LeadGQL";
  leads?: Maybe<Array<Maybe<Lead>>>;
};

export type LeadInput = {
  comments?: InputMaybe<Array<InputMaybe<LeadCommentInput>>>;
  /** ISO-8601 */
  creationDate?: InputMaybe<Scalars["DateTime"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["BigInteger"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  leadNr?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
};

/** Mutation root */
export type Mutation = {
  __typename?: "Mutation";
  createApplication?: Maybe<Application>;
  createLead?: Maybe<Lead>;
};

/** Mutation root */
export type MutationCreateApplicationArgs = {
  application?: InputMaybe<ApplicationInput>;
};

/** Mutation root */
export type MutationCreateLeadArgs = {
  lead?: InputMaybe<LeadInput>;
};

/** Query root */
export type Query = {
  __typename?: "Query";
  /** Get leads */
  getLeads?: Maybe<LeadGql>;
  /** Get root state */
  getRoot?: Maybe<RootGql>;
};

/** Query root */
export type QueryGetRootArgs = {
  applicationId?: InputMaybe<Scalars["BigInteger"]["input"]>;
};

export type RootGql = {
  __typename?: "RootGQL";
  applications?: Maybe<Array<Maybe<Application>>>;
  config?: Maybe<Config>;
  leads?: Maybe<Array<Maybe<Lead>>>;
};

export type GetLeadsQueryVariables = Exact<{ [key: string]: never }>;

export type GetLeadsQuery = {
  __typename?: "Query";
  getLeads?: {
    __typename?: "LeadGQL";
    leads?: Array<{
      __typename?: "Lead";
      id?: any | null;
      leadNr?: string | null;
      comments?: Array<{
        __typename?: "LeadComment";
        comment?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type GetRootQueryVariables = Exact<{
  applicationId: Scalars["BigInteger"]["input"];
}>;

export type GetRootQuery = {
  __typename?: "Query";
  getRoot?: {
    __typename?: "RootGQL";
    applications?: Array<{
      __typename?: "Application";
      id?: any | null;
      applicationNr?: string | null;
      beneficiaries?: Array<{
        __typename?: "Beneficiary";
        id?: any | null;
        firstName?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type CreateAppMutationVariables = Exact<{
  applicationInput?: InputMaybe<ApplicationInput>;
}>;

export type CreateAppMutation = {
  __typename?: "Mutation";
  createApplication?: { __typename?: "Application"; id?: any | null } | null;
};

export type CreateLeadMutationVariables = Exact<{
  leadInput?: InputMaybe<LeadInput>;
}>;

export type CreateLeadMutation = {
  __typename?: "Mutation";
  createLead?: { __typename?: "Lead"; id?: any | null } | null;
};
