import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import TodoPage from "./todo/todo";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import axios from "axios";

const queryClient = new QueryClient();
axios.defaults.baseURL = 'http://localhost:8080';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <TodoPage/>
        </QueryClientProvider>
    </React.StrictMode>,
)
