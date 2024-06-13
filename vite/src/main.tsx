import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider, createClient, cacheExchange, fetchExchange} from "urql";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginPage from "./auth/LoginPage";
import CssBaseline from "@mui/joy/CssBaseline";
import GlobalStyles from "@mui/joy/GlobalStyles";
import LeadDashboardPage from "./components/LeadDashboardPage";

const client = createClient({
    url: 'http://localhost:8080/graphql',
    exchanges: [cacheExchange, fetchExchange]
})

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>,
    },
    {
        path: "/lead-dashboard",
        element:    <LeadDashboardPage/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider value={client}>
            <RouterProvider router={router} />
            <CssBaseline />
            <GlobalStyles
                styles={{
                    ':root': {
                        '--Form-maxWidth': '800px',
                        '--Transition-duration': '0.4s', // set to `none` to disable transition
                    },
                }}
            />
            {/*<ReactQueryDevtools initialIsOpen={false} />*/}
        </Provider>
    </React.StrictMode>
)
