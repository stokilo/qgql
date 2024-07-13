'use client';

import { useAuth } from 'react-oidc-context';
import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const auth = useAuth();

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
        Hello {auth.user?.profile.sub}{' '}
        <span>{auth.user?.profile.upn as string}</span>
        <button onClick={() => void auth.removeUser()}>Log out</button>
      </div>
    );
  }

  return (<>
    <ul>

    <li>
      <Link to="/test">Test</Link>
    </li>
    </ul>
    <button onClick={() => void auth.signinRedirect()}>Log in</button>
          </>
  );
}
