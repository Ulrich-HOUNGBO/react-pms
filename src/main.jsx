import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import DashBoard from "./pages/DashBoard/DashBoard"
import {NavBar} from "./components/NavBar/NavBar"
import ErrorPage from "./pages/Error/ErrorPage";




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
                <Route path="/*" element={<App />}  errorElement={<ErrorPage />} />
                <Route path="/dashboard/*" element={<DashBoard />} errorElement={<ErrorPage />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
