import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { cacheExchange, createClient, fetchExchange, Operation, Provider } from 'urql';
import { AuthProvider } from 'react-oidc-context';
import { authExchange, AuthUtilities } from '@urql/exchange-auth';
import { User } from 'oidc-client-ts';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { useAtom } from 'jotai/react/useAtom';
import { Router } from './Router';
import { theme } from './theme';
import { showFooterAtom } from '@/store/global-store';

const onSigninCallback = (): void => {
  window.location.href = '/';
};

const onSignoutCallback = (): void => {
  window.location.href = '/';
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
      const oidcStorage = initializeAuthState();
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

export const FooterContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>]>(
  undefined as any
);
export default function App() {
  const [showFooter, setShowFooter] = useState(false);

  return (
    <AuthProvider
      onSigninCallback={onSigninCallback}
      onSignoutCallback={onSignoutCallback}
      {...oidcConfig}
    >
      <MantineProvider theme={theme}>
        <Provider value={client}>
          <FooterContext.Provider value={[showFooter, setShowFooter]}>
            <Router />
          </FooterContext.Provider>
        </Provider>
      </MantineProvider>
    </AuthProvider>
  );
}
