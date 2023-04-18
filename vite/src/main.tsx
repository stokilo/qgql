import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import TodoPage from "./todo/todo";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TodoPage />
  </React.StrictMode>,
)
