import * as React from 'react'
import { gql, useQuery } from 'urql';
import {Query1Query, TodoItem} from "../gql/api";

const Query1 = gql`
    query {
        allTodoItems {
            id
            headline
        }
    }
`

gql`
    mutation CreateM1($itemInput: TodoItemInput!){
        createTodoItem(item: $itemInput) {
            id
            headline
        }
    }

`


export default function TodoPage() {
    const [result] = useQuery<Query1Query>({
        query: Query1
    });

    const { data, fetching, error } = result;


    // const handleSubmit = async (data: TodoItemInput) => {
    //     console.log('handleSubmit', data)
    //     const callResult = await createTodoItem({ input: { ...data } })
    //
    //     if (callResult.error) {
    //         throw new Error(callResult.error.message)
    //     }
    //
    // }

    return (
        <>
            <h1>MyTodo list</h1>
            if (fetching) return <p>Loading...</p>
            <ul>
                {data?.allTodoItems!.map(todo => (
                    <li key={todo?.id}>{todo?.headline}</li>
                ))}
            </ul>
        </>

    )
}
