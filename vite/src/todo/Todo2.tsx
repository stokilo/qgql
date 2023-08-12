import * as React from 'react'
import {gql} from 'urql'
import {useCreateM11Mutation, useCreateM1Mutation, useQuery11Query, useQuery1Query} from "../gql/api";

gql`
    query Query11{
        allTodoItems {
            id
        }
    }
`

gql`
    mutation CreateM11($itemInput: TodoItemInput!){
        createTodoItem(item: $itemInput) {
            id
        }
    }

`


export default function TodoPage2() {
    const [result, reexecuteQuery] = useQuery11Query()
    const {data, fetching} = result;
    const [, createTodoItem] = useCreateM11Mutation()

    return (
        <>
            <h1>MyTodo list</h1>
            if (fetching) return <p>Loading...</p>
            <ul>
                {data?.allTodoItems!.map(todo => (
                    <li key={todo?.id}>{todo?.id}</li>
                ))}
            </ul>
        </>

    )
}
