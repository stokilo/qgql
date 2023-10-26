import * as React from 'react'
import {gql, useMutation, useQuery} from 'urql'
import {ApplicationInput, GetRootQuery} from "../gql/api";
import Button from '@mui/joy/Button';

export default function Lead() {
    const [result] = useQuery<GetRootQuery>({
        query: gql`
            query getRoot($applicationId: BigInteger!) {
                getRoot(applicationId: $applicationId) {
                    applications {
                        id
                        applicationNr
                        beneficiaries {
                            id
                            firstName
                        }
                    }
                }
            }
        `,
        variables: {applicationId: 1}
    });

    const {data} = result;
    const [_, createApplication] = useMutation(gql`
        mutation createApp($applicationInput: ApplicationInput) {
            createApplication(application: $applicationInput) {
                id
            }
        }
    `);

    const onClick = () => {
        const input: ApplicationInput= {
            applicationNr: "1123",
            beneficiaries: [
                {
                    firstName: "Mario"
                }
            ]
        };
        createApplication({ applicationInput: input}).then(result => {
            console.dir(result)
            if (result.error) {
                console.error('Error:', result.error);
            }
        })
    }

    return (
        <>
            <h1>Leads</h1>
            <Button variant="solid" onClick={onClick}>Hello world</Button>
            <ul>
                {/*{data?.getRoot?.applications!.map(app => (*/}
                {/*    <li key={app?.id}>{app?.applicationNr} </li>*/}
                {/*))}*/}
            </ul>
        </>

    )
}
