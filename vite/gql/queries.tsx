/* eslint-disable jsx-a11y/anchor-is-valid */
import { gql } from 'urql';

export const getLeads = gql`
  query getLeads($order: String, $status: String, $term: String) {
    l1: lead(order: $order, status: $status, term: $term) {
      leads {
        id
        leadNr
        status
        lastName
        firstName
        email
        creationDate
        comments {
          comment
        }
      }
      statusList
      categoryList
    }
  }
`;

export const GQL_HOUSE = gql`
  query gqlHouse($order: String, $status: String, $term: String) {
    houses {
      houseId
      room(term: $term, order: $order) {
        roomId
        window(status: $status, order: $order) {
          windowId
        }
      }
    }
  }
`;
