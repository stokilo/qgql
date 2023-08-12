import * as React from 'react'
import {Container, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material'
import {Q1Query} from '../gql/api'
import {useGetTodo} from "../../generated/todo-rest-resource/todo-rest-resource";
import { gql, useQuery } from 'urql'
import TodoFormControl from "./TodoForm";
import {useMutation} from "@tanstack/react-query";

const Q1 = gql`
    query q1{
        allTodoItems {
            id
            headline
        }
    }
`

const M1= gql `
    mutation m1($itemInput: TodoItemInput!){
        createTodoItem(item: $itemInput) {
            id
            headline
        }
    }

`


export default function TodoPage() {
    const [result, reexecuteQuery] = useQuery<Q1Query>({
        query: Q1,
    });
    const { data, fetching } = result;

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
