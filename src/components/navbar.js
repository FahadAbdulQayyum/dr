import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <header>
            {/* header starts here */}
            <div className="upperContainer">
                <div className="ucSubCon">
                    <div className="logoo">
                        <Link to={'/'}>
                            <h2>Delight <span>Rwanda</span></h2>
                        </Link>
                    </div>
                    <div className="contacts">
                        <div>
                            <p><i className="fa fa-phone"></i>&nbsp;&nbsp;<b>Phone No</b></p>
                            <p className='dtlcn'>+250 788 308 617</p>
                        </div>
                        <div>
                            <p className='dtl'><b>Follow Us</b></p>
                            <p><span><a href="https://www.facebook.com/delightrwanda" target={'_blank'}><i className="fa-brands fa-facebook-f"></i></a></span>
                                <span><a href="https://www.twitter.com/DelightRwanda1" target={'_blank'}><i className="fa-brands fa-twitter"></i></a></span>
                                <span><a href="https://www.instagram.com/delight_rwanda" target={'_blank'}><i className="fa-brands fa-instagram"></i></a></span>
                                <span><a href="https://www.youtube.com/@delightrwanda2232" target={'_blank'}><i className="fa-brands fa-youtube"></i></a></span></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <div className="logo">
                    <button className='btnGI'>
                        <Link to="/getInvolved">
                            Get Involved
                        </Link>
                    </button>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="#homeSection">Home</a>
                        </li>
                        <li>
                            <a href="#aboutSection">About Us</a>
                            <ul className='subNav'>
                                <li>
                                    <a href="#">Who We Are</a>
                                </li>
                                <li>
                                    <a href="#">Board Of Directors</a>
                                </li>
                                <li>
                                    <a href="#">Our Teams</a>
                                </li>
                                <li>
                                    <a href="#">Annual Reports</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#programsSection">Programs</a>
                            <ul className='subNav'>
                                <li>
                                    <a href="#">Behavior Change Communications</a>
                                </li>
                                <li>
                                    <a href="#">Women Economic Empowerment</a>
                                </li>
                                <li>
                                    <a href="#">Youth Capacity Building</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#educationSection">Education</a>
                        </li>
                        <li>
                            <a href="#gallerySection">Gallery</a>
                        </li>
                        <li>
                            <a href="#joinSection">Join Us</a>
                        </li>
                    </ul>
                </nav>
            </div> */}
            {/* header ends here */}
        </header >
    )
}

export default navbar;