import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { withAuthenticationRequired } from 'react-oidc-context';
import React from 'react';
import LoginPage from '@/pages/Login.page';
import TestPage from '@/pages/Test.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/test',
    Component: withAuthenticationRequired(TestPage) as React.ComponentType,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
