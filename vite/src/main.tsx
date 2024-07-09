import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider, createClient, cacheExchange, fetchExchange} from "urql";
import {Badge} from "./components/ui/Badge";
import './index.css'

const client = createClient({
    url: 'http://localhost:8080/graphql',
    exchanges: [cacheExchange, fetchExchange]
})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider value={client}>
            <Badge type="info" size="sm">
                <span>Info message</span>
            </Badge>

            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>

            <span className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">
            Hello<br/>
            World
            </span>
        </Provider>
    </React.StrictMode>
)
