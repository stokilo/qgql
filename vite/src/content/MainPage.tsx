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

const drawerWidth: number = 240;

const defaultTheme = createTheme();

export default function MainPage() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
      <Box sx={{ display: 'flex' }}>
          <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Paper sx={{ p: 5, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
  );
}
