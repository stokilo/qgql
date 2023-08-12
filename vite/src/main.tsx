import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import axios from "axios";
import {customizedTheme} from "./theme";
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import {Layout} from "./layouts/dashboard/layout";
import TodoPage from "./todo/Todo";
import {Provider, createClient, cacheExchange, fetchExchange} from "urql";
import TodoPage2 from "./todo/Todo2";


const client = createClient({
    url: 'http://localhost:8080/graphql',
    exchanges: [cacheExchange, fetchExchange]
})

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    }
});
axios.defaults.baseURL = 'http://localhost:8080';

const theme = customizedTheme();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider value={client}>
            {/*<ReactQueryDevtools initialIsOpen={false} />*/}
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Layout>
                    <TodoPage/>
                    <TodoPage2/>
                </Layout>
            </ThemeProvider>
            </Provider>
        </QueryClientProvider>
     </React.StrictMode>
)
