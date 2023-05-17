import * as React from 'react';
import {Box, Typography} from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Orders from './Orders';
import {Button} from "@mui/material";
import {postOrders, useGetOrders} from "../../generated/order-resource/order-resource";
import TextField from "@mui/material/TextField";
import {ReactNode, useState} from "react";
import {useQueryClient} from "@tanstack/react-query";
import {Order} from "../../generated/api.schemas";

let renderFormCount = 0;
let renderControlRowCount = 0;

export default function OrderForm() {
    const queryClient = useQueryClient()
    const {data, queryKey} = useGetOrders({})

    const onAddOrder = async (order: Order) => {
        postOrders(order).then(v => {
            queryClient.invalidateQueries(queryKey)
            console.dir(v)
        }).catch(e => {
            console.dir(e)
        })
    }

    return (
        <OrderFormView controlRowComponent={<ControlRow onAddOrder={onAddOrder}/>}
                       orderListComponent={<Orders orders={data?.data!}/>}/>
    )
}

function OrderFormView({controlRowComponent, orderListComponent}: {
    controlRowComponent: ReactNode,
    orderListComponent: ReactNode
}) {

    renderFormCount++;
    return (
        <Box sx={{display: 'flex'}}>
            <Container maxWidth="lg" sx={{mt: 6, mb: 6}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper sx={{p: 5, display: 'flex', flexDirection: 'column'}}>
                            {controlRowComponent}
                            {orderListComponent}
                        </Paper>
                    </Grid>
                </Grid>
                <Typography>renderFormCount {renderFormCount}</Typography>
            </Container>
        </Box>
    );
}

function ControlRow({onAddOrder}: {
    onAddOrder: (order: Order) => Promise<void>
}) {

    const [order, setOrder] = useState<Order>({id: undefined, name: ""});
    const onOrderNameChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrder({...order, name: event.target.value})
    }

    renderControlRowCount++;

    return (
        <Box sx={{p: 4}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Order name"
                        autoFocus
                        onChange={onOrderNameChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button color={"primary"} fullWidth={true} onClick={() => onAddOrder(order)}>Add</Button>
                </Grid>
                <Typography>renderControlRowCount {renderControlRowCount}</Typography>
            </Grid>
        </Box>
    )
}
