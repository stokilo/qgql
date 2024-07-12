'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function HomePage() {
  const { data: session, status } = useSession();

  // if (status === 'unauthenticated') {
  //   return <p>Access Denied</p>;
  // }

  if (session) {
    console.dir(session);
    return (
      <>
        Signed in as {session.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('keycloak')}>Sign in</button>
    </>
  );
}
