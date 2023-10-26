import * as React from 'react'
import {gql, useMutation, useQuery} from 'urql'
import {GetLeadsQuery, LeadInput} from "../gql/api";
import Button from '@mui/joy/Button';

export default function Lead() {
    const [result] = useQuery<GetLeadsQuery>({
        query: gql`
            query getLeads{
              getLeads {
                leads {
                  id
                  leadNr
                  comments {
                      comment
                  }
                }
              }
           }
        `
    });

    const {data, fetching} = result;
    const [_, createLead] = useMutation(gql`
        mutation createLead($leadInput: LeadInput) {
            createLead(lead: $leadInput) {
                id
            }
        }
    `);

    const onClick = () => {
        const input: LeadInput= {
            leadNr: "1123",
            comments: [{comment: "11111"}]
        }
        createLead({ leadInput: input}).then(result => {
            console.dir(result)
            if (result.error) {
                console.error('Error:', result.error);
            }
        })
    }

    return (
        <>
            <h1>Leads</h1>
            <Button variant="solid" onClick={onClick}>Add lead</Button>
            <ul>
                {!fetching && data?.getLeads?.leads!.map(lead => (
                    <li key={lead?.id}>{lead?.leadNr} </li>
                ))}
            </ul>
        </>

    )
}
