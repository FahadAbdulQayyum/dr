import { Checkbox } from 'antd';
import React, { useState } from 'react'

const MakeAGift = () => {

    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [donationAmount, setDonationAmount] = useState();
    const [checkBox, setCheckBox] = useState([]);
    const [additionalComment, setAdditionalComment] = useState();
    const [bool, setBool] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('email sent.')
        // alert('Email sent')
        setBool(true);
    }

    return (
        <div>
            <div className="container">
                {/* <div className="img">
                    <img src={require("../images/mag1.png")} alt="" />
                </div> */}
                <div className="form">
                    {/* <h2>
                        Make A Gift
                    </h2> */}
                    <form className="subForm" onSubmit={sendEmail}>
                        {/* <p>General Donation Form</p>
                        <div className="inputForm">
                            <input type="text" placeholder='Full Name'
                                value={fullName}
                                onChange={e => setFullName(e?.target?.value)}
                                required />
                            <input type="email" placeholder='Email'
                                value={email}
                                onChange={e => setEmail(e?.target?.value)}
                                required />
                            <input type="number" placeholder='Donation Amount: $0.00'
                                value={donationAmount}
                                onChange={e => setDonationAmount(e?.target?.value)}
                                required />
                            <br />
                            <div className="checkBox">
                                <span>
                                    <input type="checkbox" className='just' name="checkbox"
                                        value={checkBox}
                                        onChange={e => (checkBox.push('I prefer to make my donation anonymously.'), setCheckBox([...checkBox]))}
                                    /><p>I prefer to make my donation anonymously.</p>
                                </span>
                                <span>
                                    <input type="checkbox" name="checkbox"
                                        value={checkBox}
                                        onChange={e => (checkBox.push('Please sign me up to the newsletter.'), setCheckBox([...checkBox]))}
                                    /><p>Please sign me up to the newsletter.</p>
                                </span>
                                <span>
                                    <input type="checkbox" name="checkbox"
                                        value={checkBox}
                                        onChange={e => (checkBox.push('I wish to volunteer to help with fundraising.'), setCheckBox([...checkBox]))}
                                    /><p>I wish to volunteer to help with fundraising. </p>
                                </span>
                            </div>
                        </div>
                        <textarea placeholder='Additional Comments' rows={10} cols={100}
                            value={additionalComment}
                            onChange={e => setAdditionalComment(e?.target?.value)}
                        />
                        {!bool && <input type="submit" value={'Validate Form'} />}
                        {bool &&
                            <button>
                                < a href={`mailto: delight.rw@gmail.com?subject = 'Hello from Volunteer!'&body=
                                    "I'm ${fullName} - ${email}, amount: ${donationAmount}, checkbox: ${checkBox}, comment: ${additionalComment}"
                                        `}>
                                    Submit via email
                                </a>
                            </button>
                        } */}
                    </form>
                </div>
            </div>
        </div >
    )
}

export default MakeAGift