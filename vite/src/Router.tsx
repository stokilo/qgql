import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '@/pages/Login.page';
import TestPage from '@/pages/Test.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/test',
    element: <TestPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
