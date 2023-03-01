import React from 'react'

const partners = () => {
    return (
        <div>
            <div className="container">
                <div className="upperContainer">
                    <h2>Our Partners & Donors</h2>
                    <div className="imgBox">
                        <div className="img"></div>
                        <div className="img"></div>
                        <div className="img"></div>
                    </div>
                </div>
                <div className="lowerContainer">
                    <h2>Get Involved</h2>
                    <div className="sub0 sub">
                        <div className="img">
                            <img src={require("../images/gi1.png")} alt="" />
                        </div>
                        <div className="div">
                            <h3>Help Is Our Main Goal</h3>
                            <p>
                                Volunteers are essential to the functioning of our organization. We are currently seeking advisors/volunteers for our organization. You can make an impact by sharing your skills and experience with our communities in Rwanda by using your inspiration and expertise to help our vulnerable people to access services that transform their livelihood opportunities. Please email us at <span>info@delightrwanda.org</span>.
                            </p>
                        </div>
                    </div>
                    <div className="sub1 sub">
                        <div className="img">
                            <img src={require("../images/gi2.png")} alt="" />
                        </div>
                        <div className='div'>
                            <h3>Gain Experience</h3>
                            <p>
                                Delight Rwanda works with highly motivated individuals excited about transforming the world. Our internship program is designed to provide undergraduate students, graduate students, and recent graduates with a unique opportunity to develop both hard and soft skills in a friendly and hardworking environment.
                            </p>
                            <button>
                                <a href="#makeAGiftSection">
                                    Make A Gift
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default partners
