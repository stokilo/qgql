import { withAuth } from 'next-auth/middleware';

export default withAuth({
  secret: 'mQ46qpFwfE1BHuqMC+qlm19qBAD9fVPgh28werwe3ASFlAfnKjM=',
  pages: {
    signIn: '/',
    error: '/',
  },
});
