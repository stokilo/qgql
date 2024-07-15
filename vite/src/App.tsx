import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { cacheExchange, createClient, fetchExchange, Operation, Provider } from 'urql';
import { AuthProvider } from 'react-oidc-context';
import { authExchange, AuthUtilities } from '@urql/exchange-auth';
import { User, UserManager } from 'oidc-client-ts';
import { Router } from './Router';
import { theme } from './theme';

const onSigninCallback = (): void => {
  // window.history.replaceState({}, document.title, window.location.pathname);
  window.location = '/';
};

const onSignoutCallback = (): void => {
  window.location = '/';
};

const oidcConfig = {
  client_secret: 'secret',
  client_id: 'quarkus-app',
  authority: 'http://localhost:9999/realms/quarkus',
  redirect_uri: 'http://localhost:5173',
};

function initializeAuthState() {
  return sessionStorage.getItem('oidc.user:http://localhost:9999/realms/quarkus:quarkus-app');
}

const client = createClient({
  url: 'http://localhost:8080/graphql',
  exchanges: [
    cacheExchange,
    authExchange(async (utils: AuthUtilities) => {
      console.info('Calling authExchange');
      const oidcStorage = initializeAuthState();
      console.dir(oidcStorage);
      const token = oidcStorage ? User.fromStorageString(oidcStorage)?.access_token : null;

      return {
        addAuthToOperation(operation: Operation) {
          if (!token) {
            return operation;
          }

          return utils.appendHeaders(operation, {
            Authorization: `Bearer ${token}`,
          });
        },
        didAuthError(error) {
          return error.graphQLErrors.some((e) => e.message === 'System error');
        },
        async refreshAuth() {
          // todo: logout
          // logout();
        },
        willAuthError() {
          // const t = oidcStorage ? User.fromStorageString(initializeAuthState()) : null;
          // console.info('Calling willAuthError');
          // todo: Check whether `token` JWT is expired
          return true;
        },
      };
    }),
    fetchExchange,
  ],
});

export default function App() {
  return (
    <AuthProvider
      {...oidcConfig}
      onSigninCallback={onSigninCallback}
      onSignoutCallback={onSignoutCallback}
    >
      <MantineProvider theme={theme}>
        <Provider value={client}>
          <Router />
        </Provider>
      </MantineProvider>
    </AuthProvider>
  );
}
