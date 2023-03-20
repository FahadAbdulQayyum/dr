import React from 'react'
import { Link } from 'react-router-dom'

const whatAbout = () => {
    return (
        <div>
            <div className="container">
                <div className="title">
                    <h2>What We Do?</h2>
                    <p className='deco'>
                        Explore the various projects implemented by Delight Rwanda in community engagement, economic sustainability, and awareness campaigns.
                    </p>
                </div>
                <div className="imgBox">
                    <div className="img">
                        <div className="subImg">
                            <img src={require("../images/blackhand.png")} alt="" />
                            <Link to={'/whatWeDo'}>
                                <button>
                                    Read More
                                </button>
                            </Link>
                            <h3>Rwanda’s Women Access To Finance</h3>
                        </div>
                    </div>
                    <div className="img">
                        <div className="subImg">
                            <img src={require("../images/e2.png")} alt="" />
                            <Link to={'/whatWeDo'}>
                                <button>
                                    Read More
                                </button>
                            </Link>
                            <h3>Shelter For Homeless Children</h3>
                        </div>
                    </div>
                    <div className="img">
                        <div className="subImg">
                            <img src={require("../images/incubation.jpg")} alt="" />
                            <Link to={'/whatWeDo'}>
                                <button>
                                    Read More
                                </button>
                            </Link>
                            <h3>Young Entrepreneur Incubation</h3>
                        </div>
                    </div>
                    <div className="img">
                        <div className="subImg">
                            <img src={require("../images/e4.png")} alt="" />
                            <Link to={'/whatWeDo'}>
                                <button>
                                    Read More
                                </button>
                            </Link>
                            <h3>Turikumwe Project For Teen Mothers</h3>
                        </div>
                    </div>
                    <div className="img">
                        <div className="subImg">
                            <img src={require("../images/e5.png")} alt="" />
                            <Link to={'/whatWeDo'}>
                                <button>
                                    Read More
                                </button>
                            </Link>
                            <h3>Wiceceka Human Trafficking Prevention</h3>
                        </div>
                    </div>
                    <div className="img">
                        <div className="subImg">
                            <img src={require("../images/child1.png")} alt="" />
                            <Link to={'/whatWeDo'}>
                                <button>
                                    Read More
                                </button>
                            </Link>
                            <h3>End Violence Against Children</h3>
                        </div>
                    </div>
                </div>
                <div className="leftContainer edBtn">
                    <Link to="/whatWeDo">
                        <button>
                            Our Approach &nbsp;&nbsp;<i className="fa fa-long-arrow-right"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default whatAbout;