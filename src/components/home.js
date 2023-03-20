import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {

    const readMore = () => {
        console.log('pressed readMore')
        document.getElementById('cont').querySelector('p').innerText = "Join our team by donating any amount or in-kind gifts for street children of Kigali, Rwanda to afford daily free restaurant/food, clean drinking water, health care services, toilets, bath facilities, accommodation, mentorship, and takes them back to school.The number of children in our shelter for homeless children is still increasing year by year." + "\n\n" + " Since May 2022, Delight Rwanda has started a Shelter for Homeless Children project, which aims to improve the lives of street children by reintegrating them into families or foster care and supporting them to have access to education, supporting their families to acquire technical and vocational training for future self - reliance." + "\n\n" + " As a result, we need to support a big number so that we can easily accommodate such increasing of street children in our shelter.I hope that you will take our request into your consideration and will help us to make this work possible." + "\n\n" + "Join our Initiative to change the life of street children"

        document.getElementById('cont').parentElement.parentElement.style.height = '100vh'
        if (window.matchMedia("(max-width: 1338px)").matches) {
            document.getElementById('cont').parentElement.parentElement.style.height = '110vh'
        }
        if (window.matchMedia("(max-width: 768px)").matches) {
            document.getElementById('cont').parentElement.parentElement.style.height = '90vh'
        }
        if (window.matchMedia("(max-width: 622px)").matches) {
            document.getElementById('cont').parentElement.parentElement.style.height = '80vh'
        }
        if (window.matchMedia("(max-width: 480px)").matches) {
            document.getElementById('cont').parentElement.parentElement.style.height = '90vh'
        }
        if (window.matchMedia("(max-width: 416px)").matches) {
            document.getElementById('cont').parentElement.parentElement.style.height = '95vh'
        }
        if (window.matchMedia("(max-width: 399px)").matches) {
            document.getElementById('cont').parentElement.parentElement.style.height = '100vh'
        }
        if (window.matchMedia("(max-width: 380px)").matches) {
            document.getElementById('cont').parentElement.parentElement.style.height = '105vh'
        }
        if (window.matchMedia("(max-width: 361px)").matches) {
            document.getElementById('cont').parentElement.querySelector('h1').style.fontSize = '25px'
        }
    }

    return (
        <div>
            {/* homeSection starts here */}
            <div className="container" id='cont'>
                <h1>Always help poor & Deserved People</h1>
                <p>
                    Join our team by donating any amount or in-kind gifts for street children of Kigali, Rwanda... <solid
                        style={{
                            border: '1px solid #fff',
                            padding: '1px 6px',
                            borderRadius: 5
                        }}
                    >
                        <a href="#" onClick={readMore}
                            style={{ textDecoration: 'none', color: '#fff' }}
                        >Read More</a>
                    </solid>
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
