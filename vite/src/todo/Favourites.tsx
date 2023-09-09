// import * as React from 'react'
// import {gql, useMutation, useQuery} from 'urql'
// import {FavouritesMoviesQuery, MovieInput} from "../gql/api";


export default function Favourites() {
    // const [result] = useQuery<FavouritesMoviesQuery>({
    //     query: gql`
    //         query getRoot($applicationId: BigInteger!) {
    //             getRoot {
    //                 test
    //                 config {
    //                     configName,
    //                     items {
    //                         configKey
    //                         configValue
    //                     }
    //                 }
    //                 application {
    //                     applicationNr
    //                     frequency
    //                     contribution
    //                     beneficiaries {
    //                         firstName
    //                         lastName
    //                     }
    //                 }
    //             }
    //         }
    //     `,
    //     variables: {userId: 1}
    // });
    //
    // const {data} = result;
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

    // return (
    //     <>
    //         <h1>Favourites movies</h1>
    //         <button onClick={onClick}>Create movie</button>
    //         <ul>
    //             {data?.getFavouriteMovies!.map(f => (
    //                 <li key={f?.movie?.id}>{f?.movie?.title} {f?.movie?.year} - {f?.movie?.director?.name}</li>
    //             ))}
    //         </ul>
    //     </>
    //
    // )
}
