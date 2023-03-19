import React from 'react'
import Home from './components/home'
import About from './components/about'
import HowAbout from './components/howAbout'
import WhatAbout from './components/whatAbout'
import Approach from './components/Approach'
import Programs from './components/programs'
// import Partner from './components/partners'
import Partner from './components/partner'
import MakeAGift from './components/makeAGift'
import ContactUs from './components/contactUs'
import ContactUs1 from './components/contactUs1'
import NewsFeed from './components/newsFeed'
import Marquee from './components/marquee';
import DonationPoster from './components/donationPoster'
import Footer from './components/footer'
import SendEmailAuto from './components/sendEmailAuto'

const App2 = () => {
    return (
        <div className='subBody'>
            <div className="fullContainer banner" id="homeSection">
                <Home />
            </div>
            <div
            // style={{
            //     minHeight: '100px',
            // }}
            >
                <section
                    className='newsFeed' style={{
                        // height: '200px',
                        // overflowX: 'scroll',
                    }}
                >
                    {/* <Marquee /> */}
                    {/* <NewsFeed /> */}
                </section>
            </div >
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
                {/* <SendEmailAuto /> */}
            </section>
            {/* <section>
                <DonationPoster />
            </section> */}
            {/* <section className="makeAGift" id="makeAGiftSection">
                <MakeAGift />
            </section> */}
            <section className="contactUs" id="contactUsSection">
                {/* <ContactUs /> */}
                <ContactUs1 />
            </section>
            <footer className="footer" id="footerSection">
                <Footer />
            </footer>
        </div >
    )
}

export default App2