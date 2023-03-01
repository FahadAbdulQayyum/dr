import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatWeDoDetail from './components/whatWeDoDetail'
import OurPrograms from './components/ourPrograms';
import Form from './components/form';
import App2 from './App2'

import Navbar from './components/navbar';
import Home from './components/home';
import Nav from './components/nav'

const App = () => {
  return (
    <div>
      <Router>
        <div className="fullContainer navbar" id="navSection">
          <Navbar />
        </div>
        <div className='nav'>
          <Nav />
        </div>
        <Routes>
          <Route path="/" element={<App2 />}></Route>
          <Route path="/whatWeDo" element={<WhatWeDoDetail />} />
          <Route path="/whatWeDo" element={<WhatWeDoDetail />} />
          <Route path="/ourPrograms" element={<OurPrograms />} />
          <Route path="/getInvolved" element={<Form />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
