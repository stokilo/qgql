"use client";

import '@mantine/core/styles.css';
import React from 'react';
import {MantineProvider, ColorSchemeScript} from '@mantine/core';
import {theme} from '@/theme';
import {Provider, createClient, cacheExchange, fetchExchange} from "urql";

const client = createClient({
    url: 'http://localhost:8080/graphql',
    exchanges: [cacheExchange, fetchExchange]
})

export default function RootLayout({children}: { children: any }) {
    return (
        <html lang="en">
        <head>
            <ColorSchemeScript/>
            <link rel="shortcut icon" href="/favicon.svg"/>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
            />
        </head>
        <body>
            <MantineProvider theme={theme}>
                <Provider value={client}>
                {children}
                </Provider>
            </MantineProvider>
        </body>
        </html>
    );
}
