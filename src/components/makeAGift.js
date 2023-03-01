import React from 'react'

const makeAGift = () => {
    return (
        <div>
            <div className="container">
                <div className="img">
                    <img src={require("../images/mag1.png")} alt="" />
                </div>
                <div className="form">
                    <h2>
                        Make A Gift
                    </h2>
                    <div className="subForm">
                        <p>General Donation Form</p>
                        <div className="inputForm">
                            <input type="text" placeholder='Full Name' />
                            <input type="email" placeholder='Email' />
                            <input type="number" placeholder='Donation Amount: $0.00' />
                            <br />
                            <div className="checkBox">
                                <span>
                                    <input type="checkbox" className='just' /><p>I prefer to make my donation anonymously.</p>
                                </span>
                                <span>
                                    <input type="checkbox" /><p>Please sign me up to the newsletter.</p>
                                </span>
                                <span>
                                    <input type="checkbox" /><p>I wish to volunteer to help with fundraising. </p>
                                </span>
                            </div>
                        </div>
                        <textarea placeholder='Additional Comments' rows={10} cols={100} />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default makeAGift
