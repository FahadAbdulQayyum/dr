import React from 'react'

const makeAGift1 = () => {
    return (
        <div className='makeAGift1 container'>
            <div className="container">
                {/* <div className="leftContainer">
                    <h2>Make A Gift To Those <span>Who Are In Need</span></h2>
                    <img src={require("../images/g1.png")} alt="" />
                </div> */}
                <div className="rightContainer">
                    <h3>Donate <span>Now</span></h3>
                    {/* <div className="form">
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="number" placeholder='Donation Amount: $0.00' />
                        <input type="number" placeholder='Phone No' />
                    </div> */}
                    {/* <div className="checkBox">
                        <span>
                            <input type="checkbox" className='just' /><p>I prefer to make my donation anonymously.</p>
                        </span>
                        <span>
                            <input type="checkbox" /><p>Please sign me up to the newsletter.</p>
                        </span>
                        <span>
                            <input type="checkbox" /><p>I wish to volunteer to help with fundraising. </p>
                        </span>
                    </div> */}
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
                    {/* <button>Donate</button> */}
                </div>
            </div>
            {/* <div className="para">
                <p>
                    Lorem ipsum dolor sit amet. Sed voluptatem deleniti qui saepe magni cum enim omnis eos doloribus sint vel saepe neque sed quia consectetur et molestias iusto. Id quia illum et modi omnis est iste molestias et doloribus animi qui odit adipisci.
                    <br /><br />
                    <br />
                    Quo ducimus velit qui doloremque possimus est quia tempora in porro ipsa. Id aspernatur veritatis hic voluptas accusamus et cupiditate enim ut optio galisum aut quam dolores et exercitationem quia.
                    <br /><br />
                    Quo ducimus velit qui doloremque possimus est quia tempora in porro ipsa. Id aspernatur veritatis hic voluptas accusamus et cupiditate enim ut optio galisum aut quam dolores et exercitationem quia.
                </p>
            </div> */}
        </div >
    )
}

export default makeAGift1
