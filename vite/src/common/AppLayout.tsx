import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Sidebar from './Sidebar';
import Header from './Header';
import {ReactNode} from "react";

export const AppLayout = (props: {children: ReactNode}) => {
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                <Header />
                <Sidebar />
                {props.children}
            </Box>
        </CssVarsProvider>
    );
}
