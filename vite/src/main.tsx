import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider, createClient, cacheExchange, fetchExchange} from "urql";
import {Badge} from "./components/ui/Badge";
import './index.css'
import {Button} from "@/components/ui/Button";
import {Progress} from "@/components/ui/Progress";

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

            <Button variant="outline" size="xs" >
                <span>outlined button</span>
            </Button>

            <Button loading={false} className="rounded-full">
                <span>loading...</span>
            </Button>

            <Progress value={10}/>
        </Provider>
    </React.StrictMode>
)
