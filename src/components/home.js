import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
    return (
        <div>
            {/* homeSection starts here */}
            <div className="container">
                <h1>Always help poor & Deserved People</h1>
                <p>
                    Volunteers like you help make the world a
                    better place with your time and efforts.
                    Turn your compassion into action and volunteer.
                </p>
                <button>
                    <Link to={"/donationPage"}>Donate Now</Link>
                </button>
                <button className='cu'>
                    <a href="#contactUsSection">
                        Contact Us
                    </a>
                </button>
            </div>
            {/* homeSection ends here */}
        </div>
    )
}

export default home