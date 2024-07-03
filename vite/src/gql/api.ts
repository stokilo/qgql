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

export type House = {
  __typename?: "House";
  address?: Maybe<Scalars["String"]["output"]>;
  houseId?: Maybe<Scalars["BigInteger"]["output"]>;
  number?: Maybe<Scalars["Int"]["output"]>;
  owner?: Maybe<Scalars["String"]["output"]>;
  rooms?: Maybe<Array<Maybe<Room>>>;
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
  categoryList?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  leads?: Maybe<Array<Maybe<Lead>>>;
  statusList?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
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
  createLead?: Maybe<Lead>;
};

/** Mutation root */
export type MutationCreateLeadArgs = {
  lead?: InputMaybe<LeadInput>;
};

/** Query root */
export type Query = {
  __typename?: "Query";
  house?: Maybe<House>;
  /** Get a Films from a galaxy far far away */
  lead?: Maybe<LeadGql>;
};

/** Query root */
export type QueryLeadArgs = {
  order?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
};

export type Room = {
  __typename?: "Room";
  height?: Maybe<Scalars["Float"]["output"]>;
  house?: Maybe<House>;
  length?: Maybe<Scalars["Float"]["output"]>;
  roomId?: Maybe<Scalars["BigInteger"]["output"]>;
  width?: Maybe<Scalars["Float"]["output"]>;
  windows?: Maybe<Array<Maybe<Window>>>;
};

export type Window = {
  __typename?: "Window";
  producent?: Maybe<Scalars["String"]["output"]>;
  room?: Maybe<Room>;
  size?: Maybe<Scalars["String"]["output"]>;
  windowId?: Maybe<Scalars["BigInteger"]["output"]>;
};

export type GetLeadsQueryVariables = Exact<{
  order?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetLeadsQuery = {
  __typename?: "Query";
  l1?: {
    __typename?: "LeadGQL";
    statusList?: Array<string | null> | null;
    categoryList?: Array<string | null> | null;
    leads?: Array<{
      __typename?: "Lead";
      id?: any | null;
      leadNr?: string | null;
      status?: string | null;
      lastName?: string | null;
      firstName?: string | null;
      email?: string | null;
      creationDate?: any | null;
      comments?: Array<{
        __typename?: "LeadComment";
        comment?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
  l2?: {
    __typename?: "LeadGQL";
    leads?: Array<{
      __typename?: "Lead";
      id?: any | null;
      creationDate?: any | null;
    } | null> | null;
  } | null;
};

export type GetLeads2QueryVariables = Exact<{
  order?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  term?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetLeads2Query = {
  __typename?: "Query";
  sss?: {
    __typename?: "LeadGQL";
    leads?: Array<{ __typename?: "Lead"; id?: any | null } | null> | null;
  } | null;
  sstt?: {
    __typename?: "LeadGQL";
    leads?: Array<{ __typename?: "Lead"; id?: any | null } | null> | null;
  } | null;
};

export type CreateLeadMutationVariables = Exact<{
  leadInput?: InputMaybe<LeadInput>;
}>;

export type CreateLeadMutation = {
  __typename?: "Mutation";
  createLead?: { __typename?: "Lead"; id?: any | null } | null;
};
