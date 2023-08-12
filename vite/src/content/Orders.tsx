import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import {Order} from "../../generated/api.schemas";
import {Skeleton} from "@mui/material";


export default function Orders({orders}: { orders: Array<Order> }) {
    return (
        <>
            {!orders ?
                <>
                    <Skeleton animation="pulse" height={200}/>
                    <Skeleton animation="pulse" height={100}/>
                </>
                :
                <React.Fragment>
                    <Title>Recent Orders</Title>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Link color="primary" href="#" sx={{mt: 3}}>
                        See more orders
                    </Link>
                </React.Fragment>
            }
        </>
    );
}
