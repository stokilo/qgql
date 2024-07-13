import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { cacheExchange, createClient, fetchExchange, Operation, Provider } from 'urql';
import { AuthProvider, useAuth } from 'react-oidc-context';
import { authExchange, AuthUtilities } from '@urql/exchange-auth';
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
  exchanges: [
    cacheExchange,
    authExchange(async (utils: AuthUtilities) => {
          const auth = useAuth();
          const token = auth.user?.access_token;
          return {
            addAuthToOperation(operation: Operation) {
              if (!token) return operation;
              return utils.appendHeaders(operation, {
                Authorization: `Bearer ${token}`,
              });
            },
            didAuthError(error) {
              // tood: API auth error detection
              return error.graphQLErrors.some(e => e.extensions?.code === 'FORBIDDEN');
            },
            async refreshAuth() {
              // todo: logout
              // logout();
            },
            willAuthError() {
              // todo: Check whether `token` JWT is expired
              return false;
            },
          };
        }),
      fetchExchange],
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
