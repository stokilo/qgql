import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { cacheExchange, createClient, fetchExchange, Provider } from 'urql';
import { AuthProvider } from 'react-oidc-context';
import { Router } from './Router';
import { theme } from './theme';

const oidcConfig = {
  client_secret: 'secret',
  client_id: 'quarkus-app',
  authority: 'http://localhost:9999/realms/quarkus',
  redirect_uri: 'http://localhost:5173',
};

const client = createClient({
  url: 'http://localhost:8080/graphql',
  exchanges: [cacheExchange, fetchExchange],
});

export default function App() {
  return (
    <AuthProvider {...oidcConfig}>
      <MantineProvider theme={theme}>
        <Provider value={client}>
          <Router />
        </Provider>
      </MantineProvider>
    </AuthProvider>
  );
}
