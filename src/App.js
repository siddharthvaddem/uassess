import React from 'react'

import { Routes, Route } from "react-router-dom";
import Mcq from './Mcq';
import Home from './Home'
import Summary from './Summary';
const App = () => {
  return (
    <>
       <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="mcq" element={<Mcq />} />
        <Route path="summary" element={<Summary />} />
      </Routes>
      
     
    </>
  )
}

export default App
