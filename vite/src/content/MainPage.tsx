import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Orders from './Orders';
import {Button, Input} from "@mui/material";
import {postTodo, useGetTodo} from "../../generated/todo-rest-resource/todo-rest-resource";
import {postOrders, useGetOrders} from "../../generated/order-resource/order-resource";
import TextField from "@mui/material/TextField";
import {SyntheticEvent, useState} from "react";
import {QueryKey, useMutation, useQueryClient} from "@tanstack/react-query";
import {Order} from "../../generated/api.schemas";
import {queryKey} from "@tanstack/react-query/build/lib/__tests__/utils";

const drawerWidth: number = 240;

const defaultTheme = createTheme();

function ButtonCtlRow({queryKey}: {queryKey: QueryKey}) {
    const queryClient = useQueryClient()
    const [name, setName] = useState('');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    };

    const mutation = useMutation(postOrders, {
        onSuccess: async (data) => {
            await queryClient.invalidateQueries(queryKey)
        },
        onError: () => {}
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
  const [open, setOpen] = React.useState(true);
    const { data, error, isLoading , queryKey} = useGetOrders({})

    if (isLoading) return <p>Loading... or not...</p>
    if (error) return <p>Oh no... {error.message}</p>


  return (
      <Box sx={{ display: 'flex' }}>
          <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper sx={{ p: 5, display: 'flex', flexDirection: 'column' }}>
                  <ButtonCtlRow queryKey={queryKey}/>
                  <Orders orders={data?.data} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
  );
}
