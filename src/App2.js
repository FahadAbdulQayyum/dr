import React from 'react'
import Home from './components/home'
import About from './components/about'
import HowAbout from './components/howAbout'
import WhatAbout from './components/whatAbout'
import Approach from './components/Approach'
import Programs from './components/programs'
import Partner from './components/partner'
import ContactUs1 from './components/contactUs1'
import Footer from './components/footer'

const App2 = () => {
    return (
        <div className='subBody'>
            <div className="fullContainer banner" id="homeSection">
                <Home />
            </div>
            <section className="fullContainer" id="aboutSection">
                <About />
            </section>
            <section className="howAbout" id="howAboutSection">
                <HowAbout />
            </section>
            <section className="whatAbout" id="whatAboutSection">
                <WhatAbout />
            </section>
            <section className="approach" id="approachSection">
                <Approach />
            </section>
            <section className="programs" id="programsSection">
                <Programs />
            </section>
            <section className="partner" id="partnerSection">
                <Partner />
            </section>
            <section className="contactUs" id="contactUsSection">
                <ContactUs1 />
            </section>
            <footer className="footer" id="footerSection">
                <Footer />
            </footer>
        </div>
    )
}

export default App2