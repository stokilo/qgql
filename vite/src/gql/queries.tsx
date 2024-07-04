/* eslint-disable jsx-a11y/anchor-is-valid */
import {gql} from "urql";

export const getLeads = gql`
    query getLeads($order: String, $status: String, $term: String){
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

        l2: lead(order: $order, status: $status, term: $term) {
            leads {
                id
                creationDate
            }
        }
    }
`

export const getLeads2 = gql`
    query getLeads2($order: String, $status: String, $term: String){
        sss: lead(order: $order, status: $status, term: $term) {
            leads {
                id
            }
        }

        sstt: lead(order: $order, status: $status, term: $term) {
            leads {
                id
            }
        }
    }
`;


export const GQL_HOUSE = gql`
    query gqlHouse($order: String, $status: String, $term: String){
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
`
