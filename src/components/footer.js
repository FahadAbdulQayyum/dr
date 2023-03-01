import React from 'react'

const footer = () => {
    return (
        <div>
            <div className="container">
                <div className="grid">
                    <h2>Delight Rwanda</h2>
                    <div className="sub">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div className="grid">
                    <h3>Contacts</h3>
                    <p>+250 788 308 617</p>
                    <p>info@delightrwanda.org</p>
                </div>
                <div className="grid">
                    <h3>Main Menu</h3>
                    <div className="subGrid">
                        <div className="left">
                            <p>Home</p>
                            <p>About Us</p>
                            <p>Our Programs</p>
                        </div>
                        <div className="right">
                            <p>Our Approaches</p>
                            <p>Our Partners</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>
                <div className="grid">
                    <h3>Donate</h3>
                    <p>Help Us Change The Lives</p>
                    <button>
                        <a href="#makeAGiftSection">
                            Donate Now
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default footer


// import React from 'react'

// const footer = () => {
//     return (
//         <div>
//             <div className="container">
//                 <div className="newsLetterContainer">
//                     <img src={require("../images/logo.png")} alt="" />
//                     <p>
//                         Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//                         Autem perferendis aperiam quos laborum inventore magni pariatur?
//                     </p>
//                     <input type="text" placeholder='Enter your email id' />
//                 </div>
//                 {/* .newsLetterContainer */}

//                 <div className="linkContainer">
//                     <div className="title">Useful Links</div>
//                     <ul>
//                         <li>
//                             <a href="#homeSection">Home</a>
//                         </li>
//                         <li>
//                             <a href="#aboutSection">About Us</a>
//                         </li>
//                         <li>
//                             <a href="#programsSection">Programs</a>
//                         </li>
//                         <li>
//                             <a href="#educationSection">Education</a>
//                         </li>
//                         <li>
//                             <a href="#gallerySection">Gallery</a>
//                         </li>
//                         <li>
//                             <a href="#joinSection">Join Us</a>
//                         </li>
//                     </ul>
//                 </div>
//                 {/* .linksContainer */}
//                 <div className="connectContainer">
//                     <div className="title">
//                         Connect with us
//                     </div>
//                     <p>
//                         Garden West, Fawara Chowk, Karachi<br />
//                         D-8, Memon Plaza
//                     </p>
//                     <p>info@ngo.com</p>
//                     <p>(+92) 88884840979</p>
//                 </div>
//                 {/* .connectContainer */}
//             </div>
//         </div>
//     )
// }

// export default footer
