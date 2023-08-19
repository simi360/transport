import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { IndexProvider } from './src/utils/contexts/index.context.jsx'
import App from './src/App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <IndexProvider>
        <App/>
      </IndexProvider>
    </HashRouter>
  </React.StrictMode>
)
