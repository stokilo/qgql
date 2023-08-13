import * as React from 'react'
import {gql, useMutation, useQuery} from 'urql'
import {FavouritesMoviesQuery} from "../gql/api";


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
    const [result] = useQuery<FavouritesMoviesQuery>({
        query: gql`
            query FavouritesMovies($userId: BigInteger!) {
                getFavouriteMovies(userId: $userId) {
                    user_id,
                    movie {
                        id
                        title
                        year
                        director {
                            id
                            name
                        }
                    }
                }
            }
        `,
        variables: {userId: 1}
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
                    <li key={f?.movie?.id}>{f?.movie?.title} {f?.movie?.year} - {f?.movie?.director?.name}</li>
                ))}
            </ul>
        </>

    )
}
