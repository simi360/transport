import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { IndexProvider } from './utils/contexts/index.context.jsx'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <IndexProvider>
        <App/>
      </IndexProvider>
    </BrowserRouter>
  </React.StrictMode>
)
