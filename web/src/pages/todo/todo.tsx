import * as React from 'react'
import {TodoForm} from './todo-form-request'
import {Container, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material'
import {useGetTodo} from "../../../generated/todo-rest-resource/todo-rest-resource";

export default function TodoPage() {
    const { data, error, isLoading } = useGetTodo({});

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Oh no... {error.message}</p>

    return (
        <>
            <h1>Todo list</h1>
            {data ? (
                <Container maxWidth="sm">
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>List name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.data.map((row) => (
                                <TableRow key={row!.id}>
                                    <TableCell component="th" scope="row">
                                        {row!.name}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Container>
            ) : (
                <span>No Data</span>
            )}
            <Container>
                <TodoForm/>
            </Container>
        </>
    )
}
