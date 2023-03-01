import React from 'react'

const contactUs = () => {
    return (
        <div>
            <div className="fullContainer">
                <h2>Contact Us</h2>
                <div className="container">
                    <div className="leftContainer">
                        <p>Leave a Message</p>
                        <div className="form">
                            <input type="text" placeholder='Name' /><i className="fa fa-user"></i>
                            <input type="email" placeholder='Email' /><i className="fa fa-envelope"></i>
                            <input type="tel" placeholder='Phone' /><i className="fa fa-phone"></i>
                            <input type="text" placeholder='Subject' /><i className="fa fa-comment"></i>
                        </div>
                        <textarea placeholder='Write your message....' name="" id="" cols="30" rows="7" />
                        <button>Submit</button>
                    </div>
                    <div className="rightContainer">
                        <div className="upperContainer">
                            <div className="upCLeft">
                                <h3>Visit Office</h3>
                                <p>
                                    <span>
                                        <i className="fa fa-map-marker-alt"></i>
                                    </span>
                                    <span>
                                        Sector Remera, Gasabo, Airport road high way KG18 AVE 28
                                        Kigali, Rwanda.
                                    </span>
                                </p>
                            </div>
                            <div className="upCRight">
                                <h3>Contact</h3>
                                <p>
                                    <i className="fa fa-phone"></i>&nbsp;&nbsp;+250 788 308 617
                                </p>
                                <p>
                                    <i className="fa fa-envelope"></i>&nbsp;&nbsp;info@delightrwanda.org
                                </p>
                            </div>
                        </div>
                        {/* <div className="lowerContainer"></div> */}
                    </div>
                </div>
            </div >
        </div >
    )
}

export default contactUs
