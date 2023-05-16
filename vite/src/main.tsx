import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import TodoPage from "./todo/todo";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import axios from "axios";
import MainPage from "./content/MainPage";
import {createTheme} from "./theme";
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import {Layout} from "./layouts/dashboard/layout";

const queryClient = new QueryClient();
axios.defaults.baseURL = 'http://localhost:8080';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Layout>
                        <MainPage/>
                    </Layout>
                </CssBaseline>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>,
)
