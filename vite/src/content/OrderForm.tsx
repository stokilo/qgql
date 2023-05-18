import * as React from 'react';
import {Box, Typography} from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Orders from './Orders';
import {Button} from "@mui/material";
import {postOrders, useGetOrders} from "../../generated/order-resource/order-resource";
import TextField from "@mui/material/TextField";
import {createContext, ReactNode, useContext, useMemo, useState} from "react";
import {useQueryClient} from "@tanstack/react-query";
import {Order} from "../../generated/api.schemas";

type State = {
    newOrder: Order
}
type Context = {
    state: State,
    onAddOrder: () => void,
    onOrderNameChange: (name: string) => void
}
const FormContext = createContext<Context>({} as Context)

const FormDataProvider = ({children}: { children: ReactNode }) => {
    const queryClient = useQueryClient()
    const {data, queryKey} = useGetOrders({})
    const [state, setState] = useState<State>({} as State)
    const value = useMemo(() => {

        const onAddOrder = () => {
            postOrders(state.newOrder).then(v => {
                queryClient.invalidateQueries(queryKey)
                console.dir(v)
            }).catch(e => {
                console.dir(e)
            })
        }

        const onOrderNameChange = (name: string) => {
            setState({newOrder: {...state.newOrder, name}})
        }

        return {
            state,
            onAddOrder,
            onOrderNameChange
        }
    }, [state, data])

    return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}
const useFormState = () => useContext(FormContext)

export default function OrderForm() {
    const {data} = useGetOrders({})

    return (
        <FormDataProvider>
            <Box sx={{display: 'flex'}}>
                <Container maxWidth="lg" sx={{mt: 6, mb: 6}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Paper sx={{p: 5, display: 'flex', flexDirection: 'column'}}>
                                <ControlRow/>
                                <Orders orders={data?.data!}/>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </FormDataProvider>
    )
}

function ControlRow() {
    const {onOrderNameChange, onAddOrder} = useFormState()

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
                        onChange={(event) => onOrderNameChange(event.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button color={"primary"} fullWidth={true} onClick={onAddOrder}>Add</Button>
                </Grid>
            </Grid>
        </Box>
    )
}
