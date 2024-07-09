import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider, createClient, cacheExchange, fetchExchange} from "urql";
import {Badge} from "./components/ui/Badge";

const client = createClient({
    url: 'http://localhost:8080/graphql',
    exchanges: [cacheExchange, fetchExchange]
})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider value={client}>
            <Badge/>
        </Provider>
    </React.StrictMode>
)
