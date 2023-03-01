import React from 'react'

const approach = () => {
    return (
        <div>
            <div className="container">
                <div className="leftContainer">
                    <div className="img">
                        <img src={require("../images/oa1.png")} alt="" />
                    </div>
                    <div className="img">
                        <img src={require("../images/oa2.png")} alt="" />
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="circle">
                        <img src={require("../images/circle.png")} alt="" />
                    </div>
                    <div className="dot">
                        <img src={require("../images/opdot.png")} alt="" />
                    </div>
                    <h2>Our Approach</h2>
                    <p>
                        Working with grassroots partners, Delight Rwanda creates programs focused on enhancing vulnerable community advocacy and training skills of our community, thereby increasing their ability to effectively participate in behavior change mitigation, economic development, capacity-building processes, and civil society. Delight Rwanda's programs are rooted in a Training-of-Trainers (ToT) model through which we build local ecosystems with partners that foster the empowerment of women/girls and youths.</p>
                </div>
            </div>
        </div>
    )
}

export default approach;