import React from 'react'

const form = () => {
    return (
        <div>
            <div className="container">
                <h1>JOIN US AND MAKE A DIFFERENCE</h1>
                <h3>Personal Information</h3>
                <div className="form">
                    <input type="text" placeholder='Name' /><i className="fa fa-user"></i>
                    <input type="email" placeholder='Email' /><i className="fa fa-envelope"></i>
                    <input type="tel" placeholder='Phone' /><i className="fa fa-phone"></i>
                </div>
                <h3>Select Availablity</h3>
                <p>What days of the week are you available to volunteer?</p>
                <div className="checkBox">
                    <input type="checkbox" /><p>Monday</p>
                    <input type="checkbox" /><p>Tuesday</p>
                    <input type="checkbox" /><p>Wednesday</p>
                    <input type="checkbox" /><p>Thursday</p>
                    <input type="checkbox" /><p>Friday</p>
                    <input type="checkbox" /><p>Saturday</p>
                    <input type="checkbox" /><p>Sunday</p>
                </div>
                <p>What hours are you available to volunteer?</p>
                <div className="checkBox">
                    <input type="checkbox" /><p>Monday</p>
                    <input type="checkbox" /><p>Tuesday</p>
                    <input type="checkbox" /><p>Wednesday</p>
                    <input type="checkbox" /><p>Thursday</p>
                    <input type="checkbox" /><p>Friday</p>
                    <input type="checkbox" /><p>Saturday</p>
                    <input type="checkbox" /><p>Sunday</p>
                </div>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default form
