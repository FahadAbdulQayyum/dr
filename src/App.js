import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhatWeDoDetail from './components/whatWeDoDetail'
import BoardOfDirectors from './components/boardOfDirectors'
import OurPrograms from './components/ourPrograms';
import OurTeam from './components/ourTeam';
import MsgFromCEO from './components/msgFromCEO';
import AnnualReports from './components/annualReports';
import StopHT from './components/stopHT';
import Form from './components/form';
import Form1 from './components/form1';
import MakeAGift1 from './components/makeAGift1';
import Rough from './components/rough';
import PressRelease from './components/pressRelease';
import DonationPage from './components/donationPage';
import SocialMedia from './components/socialMedia';
import NotFound from './components/notFound';
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
          <Route path="/boardOfDirectors" element={<BoardOfDirectors />} />
          <Route path="/ourPrograms" element={<OurPrograms />} />
          <Route path="/ourTeam" element={<OurTeam />} />
          <Route path="/msgFromCEO" element={<MsgFromCEO />} />
          <Route path="/getInvolved" element={<Form />} />
          <Route path="/form" element={<Form1 />} />
          <Route path="/annualReports" element={<AnnualReports />} />
          <Route path="/stopHT" element={<StopHT />} />
          <Route path="/makeAGift1" element={<MakeAGift1 />} />
          <Route path="/rough" element={<Rough />} />
          <Route path="/pressRelease" element={<PressRelease />} />
          <Route path="/socialMedia" element={<SocialMedia />} />
          <Route path='/donationPage' element={<DonationPage />} />
          < Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
