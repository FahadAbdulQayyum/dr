import React from 'react'

const annualReports = () => {
    return (
        <div className='annualReports'>
            <div className="leftContainer">
                <h1>Annual Reports</h1>
                <br />
                <h1>Project Name: Children's Angle Project</h1>
                <h1>
                    Time Period Covered: April 14, 2019 to January 14, 2020
                </h1>
                <p>
                    <b>
                        This publication was produced for review by the grassroots community, Government, Ministries and Agencies, Local and International NGOs and the private sector.
                    </b>
                </p>
                <button>View Report</button>
            </div>
            <div className="rightContainer">
                <img src={require("../images/ar1.png")} alt="" />
                <img src={require("../images/ar2.png")} alt="" />
            </div>
        </div>
    )
}

export default annualReports;