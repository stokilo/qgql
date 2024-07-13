import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { withAuthenticationRequired } from 'react-oidc-context';
import LoginPage from '@/pages/Login.page';
import TestPage from '@/pages/Test.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/test',
    Component: withAuthenticationRequired(TestPage),
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
