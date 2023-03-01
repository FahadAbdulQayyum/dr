import React from 'react'
import { Link } from 'react-router-dom'

const nav = () => {
    return (
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <a href="#homeSection">Home</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                        <ul className='subNav'>
                            <li>
                                <a href="#aboutSection">Who We Are</a>
                                {/* <a href="#howAboutSection">Who We Are</a> */}
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
                        <a href="#">Our Programs</a>
                        <ul className='subNav'>
                            <li>
                                <a href="#programsSection">Behavior Change Communications</a>
                            </li>
                            <li>
                                <a href="#programsSection">Women Economic Empowerment</a>
                            </li>
                            <li>
                                <a href="#programsSection">Youth Capacity Building</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Blogs</a>
                    </li>
                    <li>
                        <a href="#">FAQs</a>
                    </li>
                    <li>
                        <a href="#contactUsSection">Contacts</a>
                    </li>
                </ul>
            </nav>
            <div className="logo btn">
                <Link to="/getInvolved">
                    <p>
                        Get Involved
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default nav;