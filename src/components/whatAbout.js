import React from 'react'
import { Link } from 'react-router-dom'
// import WhatWeDoDetail from './whatWeDoDetail'

const whatAbout = () => {
    return (
        <div>
            <div className="container">
                <div className="title">
                    <h2>What We Do?</h2>
                    <p>
                        Explore the various projects implemented by Delight Rwanda in community engagement, economic sustainability, and awareness campaigns.
                    </p>
                </div>
                <div className="imgBox">
                    <div className="img">
                        <img src={require("../images/e1.png")} alt="" />
                        <button>Read More</button>
                        <h3>Rwanda’s Women Access To Finance</h3>
                    </div>
                    <div className="img">
                        <img src={require("../images/e2.png")} alt="" />
                        <button>Read More</button>
                        <h3>Shelter For Homeless Children</h3>
                    </div>
                    <div className="img">
                        <img src={require("../images/e3.png")} alt="" />
                        <button>Read More</button>
                        <h3>Young Entrepreneur Incubation</h3>
                    </div>
                    <div className="img">
                        <img src={require("../images/e4.png")} alt="" />
                        <button>Read More</button>
                        <h3>Turikumwe Project For Teen Mothers</h3>
                    </div>
                    <div className="img">
                        <img src={require("../images/e5.png")} alt="" />
                        <button>Read More</button>
                        <h3>Wiceceka Human Trafficking Prevention</h3>
                    </div>
                </div>
                <div className="leftContainer edBtn">
                    <button>
                        <Link to="/whatWeDo">
                            Our Approach &nbsp;&nbsp;<i className="fa fa-long-arrow-right"></i>
                        </Link>
                    </button>
                </div>
            </div>
        </div >
    )
}

export default whatAbout;