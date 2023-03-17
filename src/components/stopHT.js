import React from 'react'

const stopHT = () => {
    return (
        <div className='stopHT'>
            <div className="container">
                <div className="upperContainer">
                    <div className="upperContainerLeft">
                        <div className="div"></div>
                        <h1>Stop<span>Human Trafficking</span></h1>
                        <b>
                            Human Trafficking is an evil in our society that must be confronted and defeated!
                        </b>
                        <div className="btn">
                            <button>
                                CONTACT THE HOTLINE
                            </button>
                            <button>
                                REPORT A TIP
                            </button>
                        </div>
                    </div>
                    <div className="upperContainerRight">
                        <img src={require("../images/sht1.png")} alt="" />
                    </div>
                </div>
                <div className="lowerContainer">
                    <h1 className='l'></h1>
                    <h1>
                        What is Human Trafficking?
                    </h1>
                    <p>
                        Human trafficking occurs when a trafficker uses force, fraud or coercion to control another person for the purpose of engaging in commercial sex acts or soliciting labor or services against his/her will. Force, fraud, or coercion need not be present if the individual engaging in commercial sex is under 18 years of age.
                    </p>
                    <button>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default stopHT
