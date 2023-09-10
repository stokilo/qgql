import * as React from 'react'
import {gql, useMutation, useQuery} from 'urql'
import {ApplicationInput, GetRootQuery} from "../gql/api";


export default function Application() {
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
        variables: {applicationId: 2}
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
            <h1>Favourites movies</h1>
            <button onClick={onClick}>Create application</button>
            <ul>
                {data?.getRoot?.applications!.map(app => (
                    <li key={app?.id}>{app?.applicationNr} </li>
                ))}
            </ul>
        </>

    )
}
