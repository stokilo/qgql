import * as React from 'react';
import {Box, Typography} from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Orders from './Orders';
import {Button, Skeleton} from "@mui/material";
import {postOrders, useGetOrders} from "../../generated/order-resource/order-resource";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import {useIsFetching, useMutation, useQueryClient} from "@tanstack/react-query";
import {Order} from "../../generated/api.schemas";

let renderCount = 0;

export default function OrderForm() {
    const queryClient = useQueryClient()
    const {data, queryKey} = useGetOrders({})

    const mutation = useMutation(postOrders, {
        onSuccess: async (data) => {
            await queryClient.invalidateQueries(queryKey)
        },
        onError: () => {
        }
    })

    const onAddOrder = async (order: Order) => {
        mutation.mutate({...order})
    }

    return (
        <OrderFormView onAddOrder={onAddOrder} data={data?.data}/>
    )
}

function OrderFormView({onAddOrder, data}:
                           {
                               onAddOrder: (order: Order) => Promise<void>,
                               data: Order[] | undefined
                           }) {

    const isFetching = useIsFetching()
    renderCount++;
    return (
        <Box sx={{display: 'flex'}}>
            <Container maxWidth="lg" sx={{mt: 6, mb: 6}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper sx={{p: 5, display: 'flex', flexDirection: 'column'}}>
                            <ControlRow onAddOrder={onAddOrder} />
                            {!data || isFetching ?
                                <>
                                    <Skeleton animation="pulse" height={200}/>
                                    <Skeleton animation="pulse" height={100}/>
                                </>
                                :
                                <Orders orders={data}/>
                            }
                        </Paper>
                    </Grid>
                </Grid>
                <Typography>renderCount {renderCount}</Typography>
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

    return (
        <Box sx={{p:4}}>
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
            </Grid>
        </Box>
    )
}
