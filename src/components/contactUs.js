import React, { useState } from 'react'

const ContactUs = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [subject, setSubject] = useState();
    const [msg, setMsg] = useState();
    const [bool, setBool] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        setBool(true);
    }

    return (
        <div>
            <div className="fullContainer">
                <h2>Contact Us</h2>
                <div className="container">
                    <form className="leftContainer" onSubmit={sendEmail}>
                        <p>Leave a Message</p>
                        <div className="form">
                            <input type="text" placeholder='Name'
                                value={name}
                                onChange={e => setName(e?.target?.value)}
                                required
                            /><i className="fa fa-user"></i>
                            <input type="email" placeholder='Email'
                                value={email}
                                onChange={e => setEmail(e?.target?.value)}
                                required
                            /><i className="fa fa-envelope"></i>
                            <input type="tel" placeholder='Phone'
                                value={phone}
                                onChange={e => setPhone(e?.target?.value)}
                                required
                            /><i className="fa fa-phone"></i>
                            <input type="text" placeholder='Subject'
                                value={subject}
                                onChange={e => setSubject(e?.target?.value)}
                                required
                            /><i className="fa fa-comment"></i>
                        </div>
                        <textarea placeholder='Write your message....' name="" id="" cols="30" rows="7"
                            value={msg}
                            onChange={e => setMsg(e?.target?.value)}
                            required
                        />
                        {!bool && <input type="submit" value={'Submit'} />}
                        {bool &&
                            <button
                                style={{
                                    margin: 'auto'
                                }}
                            >
                                <a href={`mailto: delight.rw@gmail.com?subject = 'Hello from Volunteer!'&body=
                                    "I'm ${name} - ${email}, phone: ${phone}, subject: ${subject}, message: ${msg}"
                                        `}
                                    style={{
                                        lineHeight: '10px'
                                    }}
                                >
                                    Submit via email
                                </a>
                            </button>
                        }
                    </form>
                    <div className="rightContainer">
                        <div className="upperContainer">
                            <div className="upCLeft">
                                <h3>Visit Office</h3>
                                <p>
                                    <span>
                                        <i className="fa fa-map-marker-alt"></i>
                                    </span>
                                    <span>
                                        Sector Remera, Gasabo, Airport road high way KG18 AVE 28
                                        Kigali, Rwanda.
                                    </span>
                                </p>
                            </div>
                            <div className="upCCenter">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5639.151185167267!2d30.10612016524076!3d-1.960850338850909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca654058e7581%3A0xa903231a1c1f67df!2sRemera%20Sector%20Office!5e0!3m2!1sen!2s!4v1678281925804!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ border: 0 }}></iframe>
                            </div>
                            <div className="upCRight">
                                <h3>Contact</h3>
                                <p>
                                    <i className="fa fa-phone"></i>&nbsp;&nbsp;+250 788 308 617
                                </p>
                                <p>
                                    <i className="fa fa-envelope"></i>&nbsp;&nbsp;info@delightrwanda.org
                                </p>
                            </div>
                        </div>
                        {/* <div className="lowerContainer"></div> */}
                    </div>
                </div>
            </div >
        </div >
    )
}

export default ContactUs
