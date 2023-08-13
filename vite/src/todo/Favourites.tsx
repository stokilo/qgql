import * as React from 'react'
import { gql, useMutation, useQuery } from 'urql'
import {MoviesQuery, QueryGetFavouriteMoviesArgs} from "../gql/api";

const GetFavorites = gql`
    query movies {
        getFavouriteMovies(userId: 1) {
            user_id,
            long: movie {
                id
                title
                year
                director {
                    id
                    name
                }
            }
            short: movie {
                title
                year
            }
        }
    }
`

// const CreateTodo = gql`
//     mutation CreateTodoMutation($todoItemInput: TodoItemInput!){
//         createTodoItem(item: $todoItemInput) {
//             id
//             headline
//         }
//     }
// `
//

export default function Favourites() {
    const [result] = useQuery<MoviesQuery>({
        query: GetFavorites
    });

    const {data} = result;
    // const [_, createTodo] = useMutation(CreateTodo);
    //
    // const onClick = () => {
    //     const input: TodoItemInput= {
    //         id: 1,
    //         headline: 'h',
    //         body: 'b'
    //     };
    //     createTodo({ todoItemInput: input}).then(result => {
    //         console.dir(result)
    //         if (result.error) {
    //             console.error('Error:', result.error);
    //         }
    //     })
    // }

    return (
        <>
            <h1>Favourites movies</h1>
            {/*<button onClick={onClick}>Click</button>*/}
            {/*if (fetching) return <p>Loading...</p>*/}
            <ul>
                {data?.getFavouriteMovies!.map(f => (
                    <li key={f?.long?.id}>{f?.long?.title} {f?.long?.year} - {f?.long?.director?.name}</li>
                ))}
            </ul>
        </>

    )
}
