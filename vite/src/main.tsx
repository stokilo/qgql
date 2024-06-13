import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider, createClient, cacheExchange, fetchExchange} from "urql";
import Lead from "./lead/Lead";
import LeadDashboard from "./App";
import LoginPage from "./auth/LoginPage";
import CssBaseline from "@mui/joy/CssBaseline";
import GlobalStyles from "@mui/joy/GlobalStyles";

const client = createClient({
    url: 'http://localhost:8080/graphql',
    exchanges: [cacheExchange, fetchExchange]
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider value={client}>
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
            {/*        <Lead/>*/}
            {/*<LeadDashboard/>*/}
            <LoginPage/>
        </Provider>
    </React.StrictMode>
)
