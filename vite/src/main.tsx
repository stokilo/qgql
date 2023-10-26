import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider, createClient, cacheExchange, fetchExchange} from "urql";
import Lead from "./lead/Lead";
import LeadDashboard from "./App";

const client = createClient({
    url: 'http://localhost:8080/graphql',
    exchanges: [cacheExchange, fetchExchange]
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
            <Provider value={client}>
            {/*<ReactQueryDevtools initialIsOpen={false} />*/}
            {/*        <Lead/>*/}
            <LeadDashboard/>
            </Provider>
     </React.StrictMode>
)
