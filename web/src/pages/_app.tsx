import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import React from "react";
import {QueryClient} from "@tanstack/query-core";
import {QueryClientProvider} from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();
// Axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.baseURL = 'http://localhost:8080';

export default function App({Component, pageProps}: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}
