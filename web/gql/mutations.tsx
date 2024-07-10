/* eslint-disable jsx-a11y/anchor-is-valid */
import { gql } from 'urql';

export const CREATE_LEAD_MUTATION = gql`
  mutation createLead($leadInput: LeadInput) {
    createLead(lead: $leadInput) {
      id
    }
  }
`;
