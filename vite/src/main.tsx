import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import axios from "axios";
import {CssBaseline} from '@mui/material';
import {Provider, createClient, cacheExchange, fetchExchange} from "urql";
import Application from "./todo/Application";

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


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider value={client}>
            {/*<ReactQueryDevtools initialIsOpen={false} />*/}
                <CssBaseline/>
                    <Application/>
            </Provider>
        </QueryClientProvider>
     </React.StrictMode>
)
