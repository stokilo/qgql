import * as React from 'react';
import {createTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Orders from './Orders';
import {Button, Input, Skeleton} from "@mui/material";
import {postOrders, useGetOrders} from "../../generated/order-resource/order-resource";
import TextField from "@mui/material/TextField";
import {useState} from "react";
import {QueryKey, useIsFetching, useMutation, useQueryClient} from "@tanstack/react-query";
import {Order} from "../../generated/api.schemas";

const drawerWidth: number = 240;

const defaultTheme = createTheme();

function ButtonCtlRow({queryKey}: { queryKey: QueryKey }) {
    const queryClient = useQueryClient()
    const [name, setName] = useState('');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    };

    const mutation = useMutation(postOrders, {
        onSuccess: async (data) => {
            await queryClient.invalidateQueries(queryKey)
        },
        onError: () => {
        }
    })

    const onClick = async () => {
        const order: Order = {
            id: undefined,
            name: name
        }
        mutation.mutate({...order})
    }

    return (
        <Box>
            <Typography>This is a row with button control</Typography>
            <TextField
                margin="normal"
                required
                fullWidth
                label="Order name"
                autoFocus
                onChange={onChange}
            />
            <Button onClick={onClick}>Add</Button>
        </Box>
    )
}

export default function MainPage() {
    const isFetching = useIsFetching()
    const {
        data,
        error,
        isLoading,
        queryKey
    } = useGetOrders({})

    return (
        <Box sx={{display: 'flex'}}>
            <Container maxWidth="lg" sx={{mt: 6, mb: 6}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper sx={{p: 5, display: 'flex', flexDirection: 'column'}}>
                            <ButtonCtlRow queryKey={queryKey}/>
                            {isLoading || error || isFetching ?
                                <>
                                <Skeleton animation="pulse" height={200}/>
                                <Skeleton animation="pulse" height={100}/>
                                </>
                                :
                                <Orders orders={data?.data}/>
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
