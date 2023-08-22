import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
// import Service from './components/service';
// import Quote from './components/quote';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/service" element={<Service />} /> */}
          {/* <Route path="/Get A Quote!" element={<Quote />} /> */}
        </Routes>
      </BrowserRouter>
  )
}

export default App
