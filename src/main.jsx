import React from 'react'
import ReactDOM from 'react-dom/client'
import TagManager from 'react-gtm-module';
import App from './App.jsx'
import './index.css'

TagManager.initialize({
  gtmId: 'GTM-T8RD7MSN',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
