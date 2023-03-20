import React from 'react'
import { Link } from 'react-router-dom'

const footer = () => {
    return (
        <div>
            <div className="container">
                <div className="grid">
                    <h2>Delight Rwanda</h2>
                    <div className="sub">
                        <a href="https://www.facebook.com/delightrwanda">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com/DelightRwanda1">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/delight_rwanda">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="grid">
                    <h3>Contacts</h3>
                    <p>+250 788 308 617</p>
                    <p>info@delightrwanda.org</p>
                </div>
                <div className="grid">
                    <h3>Main Menu</h3>
                    <div className="subGrid">
                        <div className="left">
                            <a href='#homeSection'>Home</a>
                            <a href='#aboutSection'>About Us</a>
                            <a href='#programsSection'>Our Programs</a>
                        </div>
                        <div className="right">
                            <a href='#approachSection'>Our Approaches</a>
                            <a href='#partnerSection'>Our Partners</a>
                            <a href='#contactUsSection'>Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="grid">
                    <h3>Donate</h3>
                    <p>Help Us Change The Lives</p>
                    <button>
                        <Link to={"/donationPage"}>Donate Now</Link>
                    </button>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', backgroundColor: '#3E775F' }}>
                <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Developed by Ahmad Consultancy Pvt Ltd © 2023</p>
            </div>
        </div>
    )
}

export default footer