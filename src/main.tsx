import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueueContextProvider } from './contexts/QueueContext'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueueContextProvider>
      <App />
    </QueueContextProvider>
  </React.StrictMode>,
)
