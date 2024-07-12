'use client';

import '@mantine/core/styles.css';
import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { cacheExchange, createClient, fetchExchange, Provider } from 'urql';
import { AuthProvider } from 'react-oidc-context';
import { theme } from '@/theme';

const oidcConfig = {
  client_secret: 'secret',
  client_id: 'quarkus-app',
  authority: 'http://localhost:62490/realms/quarkus',
  redirect_uri: 'http://localhost:3000',
};

const client = createClient({
  url: 'http://localhost:8080/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <AuthProvider {...oidcConfig}>
          <MantineProvider theme={theme}>
            <Provider value={client}>{children}</Provider>
          </MantineProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
