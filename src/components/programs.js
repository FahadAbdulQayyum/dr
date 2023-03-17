import React from 'react'
import { Link } from 'react-router-dom'

const programs = () => {
    return (
        <div>
            <div className="container">
                <div className="upperContainer">
                    <h2>Our Programs</h2>
                    <div className="imgBox">
                        <div className="img">
                            <h4>Behaviour Change Communication</h4>
                            <p>
                                Mobilization to raise awareness in the community on health and hygiene, education affairs, gender-related issues, socio-economic development, and social protection.
                            </p>
                            <button>
                                <Link to={'/whatWeDo'}>
                                    Read More
                                </Link>
                            </button>
                        </div>
                        <div className="img">
                            <h4>Women Economic Empowerment</h4>
                            <p>
                                Transforming African youth from job seekers to job creators in technological, technical, agricultural, knowledge-based, and service-oriented economies to financial income status.
                            </p>
                            <button>
                                <Link to={'/whatWeDo'}>
                                    Read More
                                </Link>
                            </button>
                        </div>
                        <div className="img">
                            <h4>Youth Capacity Building</h4>
                            <p>
                                Delight Rwanda and our partners are working to improve the well-being of children and create a protective environment that enables children to be cared for and protected within their families and their communities.
                            </p>
                            <button>
                                <Link to={'/whatWeDo'}>
                                    Read More
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="lowerContainer">
                    <h2>Recent Events</h2>
                    <div className="imgBox">
                        <div className="img">
                            <h4>Shelter For Homeless
                                Children</h4>
                            <button>12 January 2022</button>
                            <div className="circle circle0">
                                <div className="circlee c0"></div>
                                <div className="circlee c1"></div>
                            </div>
                        </div>
                        <div className="img">
                            <h4>Rwanda’s Women Access To Finance</h4>
                            <button>12 January 2022</button>
                            <div className="circle circle1">
                                <div className="circlee c0"></div>
                                <div className="circlee c1"></div>
                            </div>
                        </div>
                        <div className="img">
                            <h4>Turikumwe - Early Motherhood Care</h4>
                            <button>12 January 2022</button>
                            <div className="circle">
                                <div className="circlee c0"></div>
                                <div className="circlee c1"></div>
                            </div>
                        </div>
                    </div>
                    <button className='recEveBtn'>
                        <Link to="/ourPrograms">
                            <p>
                                View All Events
                            </p>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default programs;