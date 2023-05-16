import * as React from 'react';
import {Box} from '@mui/material';
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


export default function OrderForm() {
    const [order, setOrder] = useState<Order>({id: undefined, name: ""});
    const queryClient = useQueryClient()
    const isFetching = useIsFetching()
    const {data, queryKey} = useGetOrders({})

    const onOrderNameChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrder({...order, name: event.target.value})
    }

    const mutation = useMutation(postOrders, {
        onSuccess: async (data) => {
            await queryClient.invalidateQueries(queryKey)
        },
        onError: () => {}
    })

    const onAddOrder = async () => {
        mutation.mutate({...order})
    }

    return (
        <OrderFormView onAddOrder={onAddOrder} data={data?.data} isFetching={isFetching} onOrderNameChange={onOrderNameChange}/>
    )
}

function OrderFormView({onAddOrder, data, isFetching, onOrderNameChange}:
                       { onAddOrder: () => Promise<void>, data: Order[] | undefined,
                         isFetching: number,
                         onOrderNameChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>}) {
    return (
        <Box sx={{display: 'flex'}}>
            <Container maxWidth="lg" sx={{mt: 6, mb: 6}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper sx={{p: 5, display: 'flex', flexDirection: 'column'}}>
                            <ControlRow onAddOrder={onAddOrder} onOrderNameChange={onOrderNameChange}/>
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
            </Container>
        </Box>
    );
}

function ControlRow({onAddOrder, onOrderNameChange}: {
    onAddOrder: () => Promise<void>,
    onOrderNameChange: (event: React.ChangeEvent<HTMLInputElement>) => Promise<void>}){

    return (
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
                <Button color={"primary"} fullWidth={true} onClick={onAddOrder}>Add</Button>
            </Grid>
        </Grid>
    )
}
