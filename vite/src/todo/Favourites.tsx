import * as React from 'react'
import {gql, useMutation, useQuery} from 'urql'
import {GetRootQuery} from "../gql/api";


export default function Favourites() {
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
    // const [_, createMovie] = useMutation(gql`
    //     mutation createMovie($movieInput: MovieInput) {
    //         createMovie(movie: $movieInput) {
    //             id
    //             title
    //             year
    //         }
    //     }
    // `);
    //
    // const onClick = () => {
    //     const input: MovieInput= {
    //         title: 'title-from-client',
    //         year: '1989'
    //     };
    //     createMovie({ movieInput: input}).then(result => {
    //         console.dir(result)
    //         if (result.error) {
    //             console.error('Error:', result.error);
    //         }
    //     })
    // }

    return (
        <>
            <h1>Favourites movies</h1>
            {/*<button onClick={onClick}>Create movie</button>*/}
            <ul>
                {data?.getRoot?.applications!.map(app => (
                    <li key={app?.id}>{app?.applicationNr} </li>
                ))}
            </ul>
        </>

    )
}
