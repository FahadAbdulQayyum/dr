import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (
        <header>
            {/* header starts here */}
            <div className="upperContainer">
                <div className="ucSubCon">
                    <div className="logoo">
                        <Link to={'/'}>
                            <h2>Delight <span>Rwanda</span></h2>
                        </Link>
                    </div>
                    <div className="contacts">
                        <div>
                            <p><i className="fa fa-phone"></i>&nbsp;&nbsp;<b>Phone No</b></p>
                            <p className='dtlcn'>+250 788 308 617</p>
                        </div>
                        <div>
                            <p className='dtl'><b>Follow Us</b></p>
                            <p><span><a href="https://www.facebook.com/delightrwanda" target={'_blank'}><i className="fa-brands fa-facebook-f"></i></a></span>
                                <span><a href="https://www.twitter.com/DelightRwanda1" target={'_blank'}><i className="fa-brands fa-twitter"></i></a></span>
                                <span><a href="https://www.instagram.com/delight_rwanda" target={'_blank'}><i className="fa-brands fa-instagram"></i></a></span>
                                <span><a href="https://www.youtube.com/@delightrwanda2232" target={'_blank'}><i className="fa-brands fa-youtube"></i></a></span></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* header ends here */}
        </header >
    )
}

export default navbar;