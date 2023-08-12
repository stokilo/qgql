import * as React from 'react'
import {Container, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material'
import {Q1Query} from '../gql/api'
import {useGetTodo} from "../../generated/todo-rest-resource/todo-rest-resource";
import { gql, useQuery } from 'urql'
import TodoFormControl from "./TodoForm";

const q1 = gql`
    query q1{
        allTodoItems {
            id
            headline
        }
    }
`


export default function TodoPage() {
    const [result, reexecuteQuery] = useQuery<Q1Query>({
        query: q1,
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
