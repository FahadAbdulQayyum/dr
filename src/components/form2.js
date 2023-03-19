import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
const Form = () => {
    const form = useRef();

    const [surName, setSurName] = useState()
    const [firstName, setFirstName] = useState()
    const [address, setAddress] = useState()
    const [telephone, setTelephone] = useState()
    const [date, setDate] = useState()
    const [email, setEmail] = useState()
    const [gender, setGender] = useState()
    const [age, setAge] = useState()
    const [tellUs, setTellUs] = useState()
    const [gainExp, setGainExp] = useState()
    const [education, setEducation] = useState()
    const [beforeVolunteer, setBeforeVolunteer] = useState()
    const [hobby, setHobby] = useState()
    const [availability, setAvailability] = useState()
    const [specialNeed, setSpecialNeed] = useState()
    const [anyComment, setAnyComment] = useState()
    const [refName1, setRefName1] = useState()
    const [refName2, setRefName2] = useState()
    const [refAddr1, setRefAdd1] = useState()
    const [refAddr2, setRefAdd2] = useState()
    const [refEmail1, setRefEmail1] = useState()
    const [refEmail2, setRefEmail2] = useState()
    const [refTel1, setRefTel1] = useState()
    const [refTel2, setRefTel2] = useState()
    const [week, setWeek] = useState([])
    const [time, setTime] = useState([])
    const [interestArea, setInterestArea] = useState([])
    const [form1, setForm1] = useState([])
    const [bool, setBool] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('onSubmit', surName, firstName);
        form1.push([surName, firstName, address, telephone, date, email, gender, age, tellUs, gainExp,
            education,
            beforeVolunteer,
            hobby,
            availability,
            refName1,
            refName2,
            refAddr1,
            refAddr2,
            refEmail1,
            refEmail2,
            week,
            time,
            interestArea,
        ])
        setForm1([...form1])
        console.log('submitted form', form1);
        setBool(true);
        sendEmail()
    }

    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.sendForm('service_d0pzvhm', 'template_1vx5m7l', form.current, 'dhHTFxg-ArSt1CVKA')
        emailjs.sendForm('service_d0pzvhm', 'template_ephfm6p', form.current, 'dhHTFxg-ArSt1CVKA')
            .then((result) => {
                console.log(result.text);
                console.log('Message sent');
                alert('Email sent successfully')
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='form'>
            <div className="container">
                <h1>JOIN US AND MAKE A DIFFERENCE</h1>

                <form className="div" ref={form} onSubmit={sendEmail}>
                    <h3>Volunteer Application Form</h3>
                    <p style={{
                        color: 'red'
                    }}>Make sure to fill all the fields</p>
                    <div className="form">
                        <label>Sur Name</label>
                        <input type="text" name="surname" required />
                        <label>First Name</label>
                        <input type="text" name="firstname" required />
                        <label>Address</label>
                        <input type="text" name="address" required />
                        <label>Telephone</label>
                        <input type="tel" name="telephone" required />
                        <label>Date</label>
                        <input type="date" name="today" required />
                        <label>Email</label>
                        <input type="email" name="email" required />
                        <div className="radio">
                            <label>Gender</label>
                            <p>Male</p> <input type="radio" value="Male" name="gender" required />
                            <p>Female</p> <input type="radio" value="Female" name="gender" required />
                        </div>
                        <div className="radio">
                            <label>Age Group:</label>
                            <p>Under 18</p> <input type="radio" value="Under 18" name="age" required />
                            <p>18 - 25</p> <input type="radio" value="18 - 25" name="age" required />
                            <p>26 - 40</p> <input type="radio" value="26 - 40" name="age" required />
                            <p>41 - 55</p> <input type="radio" value="41 - 55" name="age" required />
                            <p>Over 55</p> <input type="radio" value="Over 55" name="age" required />
                        </div>
                        <div>
                            <div>
                                <label>Please tell us why do you want to volunteer with our organization?</label>
                                <textarea
                                    cols="80"
                                    rows="5"
                                    name="tellus"
                                    required />
                            </div>
                            <div>
                                <label>Please tell us what you hope to gain from your experience with us?</label>
                                <textarea
                                    cols="80"
                                    rows="5"
                                    name="expr"
                                    required />
                            </div>
                            <div>
                                <label>Please tell us any education background, work or volunteering experience that would relevant to the volunteer role you are applying for.</label>
                                <textarea
                                    name="education"
                                    cols="80"
                                    rows="5"
                                    required />
                            </div>
                            <div>
                                <label>If you have volunteered before, please give details of where you have volunteered, for how long and describe your volunteer role.</label>
                                <textarea
                                    name="vol"
                                    cols="80"
                                    rows="5"
                                    required />
                            </div>
                            <div>
                                <label>What hobbies, skills, special interests or qualities do you have that may be relevant to the volunteer role you are applying for?.</label>
                                <textarea
                                    name="hob"
                                    cols="80"
                                    rows="5"
                                    required />
                            </div>
                            <div>
                                <label>When are you available to volunteer?(Please specify days, times and the length of commitment you would like to make)</label>
                                <textarea
                                    name="avail"
                                    cols="80"
                                    rows="5"
                                    required />
                            </div>
                            <p>References: Please supply us with the names of two referees (non-relatives)</p>
                            <div className="form refForm"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <label>1st Referee Name</label>
                                <input
                                    type="text"
                                    name='name1'
                                    required />
                                <label>2nd Referee Name</label>
                                <input
                                    type="text"
                                    name='name2'
                                    required />
                                <label>1st Referee Address</label>
                                <input
                                    type="text"
                                    name='addr1'
                                    required />
                                <label>2nd Referee Address</label>
                                <input
                                    type="text"
                                    name='addr2'
                                    required />
                                <label>1st Referee Email</label>
                                <input
                                    type="email"
                                    name='email1'
                                    required />
                                <label>2nd Referee Email</label>
                                <input
                                    type="email"
                                    name='email2'
                                    required />
                                <label>1st Referee Telephone</label>
                                <input
                                    type="tel"
                                    name='tele1'
                                    required />
                                <label>2nd Referee Telephone</label>
                                <input
                                    type="tel"
                                    name='tele2'
                                    required />
                            </div>
                            <div>
                                <label>Do you have any special needs you would like to share with us?</label>
                                <textarea
                                    name="sp"
                                    cols="80"
                                    rows="5"
                                    required />
                            </div>
                            <div>
                                <label>Any other comments</label>
                                <textarea
                                    name="cmnt"
                                    cols="80"
                                    rows="5"
                                    required />
                            </div>
                            <h3>Select Availablity</h3>
                            <p>What day(s) of the week are you available to volunteer?</p>
                            <div
                                className="checkBox">
                                <input
                                    type="checkbox"
                                    value={"Monday"}
                                    name='week'
                                /><p>Monday</p>
                                <input
                                    type="checkbox"
                                    value={"Tuesday"}
                                    name='week'
                                /><p>Tuesday</p>
                                <input
                                    type="checkbox"
                                    value={"Wednesday"}
                                    name='week'
                                /><p>Wednesday</p>
                                <input
                                    type="checkbox"
                                    value={"Thursday"}
                                    name='week'
                                /><p>Thursday</p>
                                <input
                                    type="checkbox"
                                    value={"Friday"}
                                    name='week'
                                /><p>Friday</p>
                                <input type="checkbox"
                                    value={"Saturday"}
                                    name='week'
                                /><p>Saturday</p>
                                <input
                                    type="checkbox"
                                    value={"Sunday"}
                                    name='week'
                                /><p>Sunday</p>
                            </div>
                            <p>What hour(s) are you available to volunteer?</p>
                            <div className="checkBox">
                                <input
                                    type="checkbox"
                                    value={"Morning"}
                                    name='time'
                                />
                                <p>Morning</p>
                                <input
                                    type="checkbox"
                                    value={"Afternoon"}
                                    name='time'
                                /><p>Afternoon</p>
                                <input
                                    type="checkbox"
                                    value={"Evening"}
                                    name='time'
                                /><p>Evening</p>
                                <input
                                    type="checkbox"
                                    value={"Anytime"}
                                    name='time'
                                /><p>Anytime</p>
                            </div>
                            <p>Please select the area you wish to volunteer in:</p>
                            <div className="checkBox chec">
                                <span>
                                    <input
                                        type="checkbox"
                                        value={"Women/Girls Economic Empowerment"}
                                        name='intarea'
                                    />
                                    <p>Women/Girls Economic Empowerment</p>
                                </span>
                                <span>
                                    <input
                                        type="checkbox"
                                        value={"Youth Capacity Building and entrepreneurship"}
                                        name='intarea'
                                    />
                                    <p>Youth Capacity Building and entrepreneurship</p>
                                </span>
                                <span>
                                    <input
                                        type="checkbox"
                                        value={"Behavior Change Communication (BCC)"}
                                        name='intarea'
                                    />
                                    <p>Behavior Change Communication (BCC)</p>
                                </span>
                                <span>
                                    <input
                                        type="checkbox"
                                        value={"Child Protection"}
                                        name='intarea'
                                    />
                                    <p>Child Protection</p>
                                </span>
                                <span>
                                    <input
                                        type="checkbox"
                                        value={"Finance"}
                                        name='intarea'
                                    />
                                    <p>Finance</p>
                                </span>
                                <span>
                                    <input
                                        type="checkbox"
                                        value={"Monitoring, Evaluation, Learning and Research (MELR)"}
                                        name='intarea'
                                    />
                                    <p>Monitoring, Evaluation, Learning and Research (MELR)</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value={'Submit'} />
                </form>
            </div>
        </div>
    )
}

export default Form