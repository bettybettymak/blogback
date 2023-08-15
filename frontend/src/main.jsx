import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './context/authContext.jsx'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <Router>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Router> */}
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
   
  </React.StrictMode>,
)
