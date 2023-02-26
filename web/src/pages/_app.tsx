import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {createClient, Provider} from "urql";
import React from "react";

const client = createClient({
    url: 'http://localhost:8080/graphql',
});


export default function App({Component, pageProps}: AppProps) {
    return <Provider value={client}>
        <Component {...pageProps} />
    </Provider>
}
