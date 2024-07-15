'use client';

import { useAuth } from 'react-oidc-context';
import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const auth = useAuth();

  // React.useEffect(
  //   () =>
  //     auth.events.addAccessTokenExpiring(() => {
  //       if (
  //         alert(
  //           "You're about to be signed out due to inactivity. Press continue to stay signed in."
  //         )
  //       ) {
  //         auth.signinSilent();
  //       }
  //     }),
  //   [auth.events, auth.signinSilent]
  // );

  switch (auth.activeNavigator) {
    case 'signinSilent':
      return <div>Signing you in...</div>;
    case 'signoutRedirect':
      return <div>Signing you out...</div>;
  }

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Oops... {auth.error.message}</div>;
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <ul>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
        Hello {auth.user?.profile.sub} <span>{auth.user?.profile.upn as string}</span>
        <button onClick={() => void auth.removeUser()}>Log out</button>
      </div>
    );
  }

  return (
    <>
      <ul>
        <li>
          <Link to="/test">Test</Link>
        </li>
      </ul>
      <button onClick={() => void auth.signinRedirect()}>Log in</button>
    </>
  );
}
