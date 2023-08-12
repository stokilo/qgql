import * as React from 'react'
import {gql, useQuery} from 'urql';
import {GetAllTodoItemsQuery} from "../gql/api";

const GetAllTodoItems = gql`
    query GetAllTodoItems{
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
    const [result] = useQuery<GetAllTodoItemsQuery>({
        query: GetAllTodoItems
    });

    const {data, fetching, error} = result;


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
