// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home.jsx";
import Properties from "./pages/Properties/Properties.jsx";
import {NavBar} from "./components/NavBar/NavBar.jsx";


function App() {

  return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property" element={<Properties />} />
        </Routes>
  )
}

export default App
