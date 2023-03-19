import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d0pzvhm', 'template_1vx5m7l', form.current, 'dhHTFxg-ArSt1CVKA')
            .then((result) => {
                console.log(result.text);
                console.log('Message sent');
                alert('Email sent successfully')
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <div className="fullContainer">
                <h2>Contact Us</h2>
                <div className="container">
                    <form className="leftContainer" ref={form} onSubmit={sendEmail}>
                        <p>Leave a Message</p>
                        <div className="form">
                            <input
                                type="text"
                                placeholder='Enter Name'
                                name="user_name"
                                required
                            /><i className="fa fa-user"></i>
                            <input
                                type="email"
                                placeholder='Enter Email'
                                name="user_email"
                                required
                            /><i className="fa fa-envelope"></i>
                            <input
                                type="tel"
                                placeholder='Phone'
                                name="user_phone"
                                required
                            /><i className="fa fa-phone"></i>
                            <input
                                type="text"
                                placeholder='Define Subject'
                                name="user_subject"
                                required
                            /><i className="fa fa-comment"></i>
                        </div>
                        <textarea
                            placeholder='Write your message....'
                            name="user_msg"
                            id=""
                            cols="30"
                            rows="7"
                            required
                        />
                        <input type="submit" value={'Submit'} />
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
