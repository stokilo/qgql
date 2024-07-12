import NextAuth, { AuthOptions } from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';

export const authOptions: AuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: 'quarkus-app',
      clientSecret: 'secret',
      issuer: 'http://localhost:49794/realms/quarkus',
    }),
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
