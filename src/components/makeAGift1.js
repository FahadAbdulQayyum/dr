import React from 'react'

const makeAGift1 = () => {
    return (
        <div className='makeAGift1 container'>
            <div className="container">
                <div className="rightContainer">
                    <h3>Donate <span>Now</span></h3>
                    <h3>Select <span>Payment Method</span></h3>
                    <div className="logo">
                        <div className="img">
                            <img src={require('../images/airtel.png')} alt="" />
                            <p>Code:&nbsp;<span><b>136711</b></span></p>
                        </div>
                        <div className="img">
                            <img src={require('../images/mtn.png')} alt="" />
                            <p>Code:&nbsp;<span><b>934824</b></span></p>
                        </div>
                        <div className="img">
                            <img src={require('../images/eco.png')} alt="" />
                            <p>Code:&nbsp;<span><b>6823204970</b></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default makeAGift1
