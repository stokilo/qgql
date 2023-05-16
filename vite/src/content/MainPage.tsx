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
import {useGetTodo} from "../../generated/todo-rest-resource/todo-rest-resource";
import {useGetOrders} from "../../generated/order-resource/order-resource";

const drawerWidth: number = 240;

const defaultTheme = createTheme();


function ButtonCtlRow() {
  return (
      <Box>
        <Typography>This is a row with button control</Typography>
        <Input/>
        <Button>Add</Button>
      </Box>
  )
}

export default function MainPage() {
  const [open, setOpen] = React.useState(true);
    const { data, error, isLoading } = useGetOrders({});

    if (isLoading) return <p>Loading... or not...</p>
    if (error) return <p>Oh no... {error.message}</p>

  return (
      <Box sx={{ display: 'flex' }}>
          <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper sx={{ p: 5, display: 'flex', flexDirection: 'column' }}>
                  <ButtonCtlRow/>
                  <Orders orders={data?.data}/>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
  );
}
