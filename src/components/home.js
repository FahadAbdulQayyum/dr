import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
    return (
        <div>
            {/* homeSection starts here */}
            <div className="container">
                <h1>Always help poor & Deserved People</h1>
                <p>
                    Join our team by donating any amount or in-kind gifts for street children of Kigali, Rwanda to
                    afford daily free restaurant/food, clean drinking water, health care services, toilets, bath facilities,
                    accommodation, mentorship, and takes them back to school. The number of children in our
                    shelter for homeless children is still increasing year by year.<br />
                    Since May 2022, Delight Rwanda has started a Shelter for Homeless Children project, which
                    aims to improve the lives of street children by reintegrating them into families or foster care and
                    supporting them to have access to education, supporting their families to acquire technical and
                    vocational training for future self-reliance.<br />
                    As a result, we need to support a big number so that we can easily accommodate such increasing
                    of street children in our shelter. I hope that you will take our request into your consideration and
                    will help us to make this work possible.<br />
                    <b>Join our Initiative to change the life of street children</b>
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
