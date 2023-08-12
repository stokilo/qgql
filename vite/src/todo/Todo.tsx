import * as React from 'react'
import {gql} from 'urql'
import {useCreateM1Mutation, useQuery1Query} from "../gql/api";

gql`
    query Query1{
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
    const [result, reexecuteQuery] = useQuery1Query()
    const {data, fetching} = result;
    const [, createTodoItem] = useCreateM1Mutation()

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
