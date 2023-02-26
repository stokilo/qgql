import * as React from 'react'
import {useEffect} from 'react'
import {TodoForm} from './todo-form-request'
import {gql, useQuery} from 'urql'
import {
    AllTodosQuery,
} from "../../../generated/api";
import {Container, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material'

const FetchItems = gql`
    query AllTodos {
        allTodos {
            id,
            name,
            items {
                text
            }
        }
    }
`
export default function TodoPage() {
    const [resultGql, queryTrigger] = useQuery<AllTodosQuery>({
        query: FetchItems,
        pause: true,
    })
    const {data, fetching, error} = resultGql

    useEffect(() => {
        queryTrigger({
            requestPolicy: 'network-only',
        })
    }, [])

    if (fetching) return <p>Loading...</p>
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
                            {data.allTodos!.map((row) => (
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
