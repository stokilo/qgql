import { withAuth } from 'next-auth/middleware';

// export const config = {
//   secret: 'mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM=',
//   matcher: ['/test'],
// };

export default withAuth({
  secret: 'mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM=',
  pages: {
    signIn: '/',
    error: '/',
  },
});
