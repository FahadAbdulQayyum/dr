import React, { useState } from 'react'

const Form = () => {
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
    const [form, setForm] = useState([])
    const [bool, setBool] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('onSubmit', surName, firstName);
        form.push([surName, firstName, address, telephone, date, email, gender, age, tellUs, gainExp,
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
        setForm([...form])
        console.log('submitted form', form);
        setBool(true);
    }

    return (
        <div className='form'>
            <div className="container">
                <h1>JOIN US AND MAKE A DIFFERENCE</h1>
                <form className="div" onSubmit={onSubmit}>
                    <h3>Volunteer Application Form</h3>
                    <p style={{
                        color: 'red'
                    }}>Make sure to fill all the fields</p>
                    <div className="form">
                        <label htmlFor="surname">Surname</label>
                        <input type="text" name='surname' placeholder='Surname' value={surName}
                            onChange={(e) => setSurName(e.target.value)} required />
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" name='firstname' placeholder=' First Name' value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} required />
                        <label htmlFor="address">Address</label>
                        <input type="text" name='address' placeholder='Address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required />
                        <label htmlFor="telephone">Telephone</label>
                        <input type="text" name='telephone' placeholder='Telephone'
                            value={telephone}
                            onChange={(e) => setTelephone(e.target.value)}
                            required />
                        <label htmlFor="today">Enter today's date</label>
                        <input type="date" name='today' placeholder="Today's Date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required />
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} required />
                        <div className='radio'>
                            <label htmlFor="gender">Gender:</label>
                            <p>Male</p><input type="radio" name="gender" value={gender}
                                onChange={(e) => setGender('male')}
                                required />
                            <p>Female</p><input type="radio" name="gender" value={gender}
                                onChange={(e) => setGender('female')}
                                required />
                        </div>
                        <div className='radio'>
                            <label htmlFor="ageGroup">Age Group:</label>
                            <p>Under 18</p><input type="radio" name="age" value={age}
                                onChange={(e) => setAge('Under 18')} required />
                            <p> 18 - 25</p><input type="radio" name="age" value={age}
                                onChange={(e) => setAge('18 - 25')} required />
                            <p> 26 - 40</p><input type="radio" name="age" value={age}
                                onChange={(e) => setAge('26 - 40')} required />
                            <p> 41 - 55</p><input type="radio" name="age" value={age}
                                onChange={(e) => setAge('41 - 55')} required />
                            <p> Over 55</p><input type="radio" name="age" value={age}
                                onChange={(e) => setAge('Over 55')} required />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="tellus">Please tell us why do you want to volunteer with our organization?</label>
                                <textarea id="tellus" cols="80" rows="5" placeholder='Please tell us why do you want to volunteer with our organization?'
                                    value={tellUs}
                                    onChange={e => setTellUs(e?.target?.value)}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="expr">Please tell us what you hope to gain from your experience with us?</label>
                                <textarea name="" id="expr" cols="80" rows="5" placeholder='Please tell us what you hope to gain from your experience with us?'
                                    value={gainExp}
                                    onChange={e => setGainExp(e?.target?.value)}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="bg">Please tell us any education background, work or volunteering experience that would relevant to the volunteer role you are applying for.</label>
                                <textarea name="" id="bg" cols="80" rows="5" placeholder='Please tell us any education background, work or volunteering experience that would relevant to the volunteer role you are applying for.'
                                    value={education}
                                    onChange={e => setEducation(e?.target?.value)}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="vol">If you have volunteered before, please give details of where you have volunteered, for how long and describe your volunteer role.</label>
                                <textarea name="" id="vol" cols="80" rows="5" placeholder='If you have volunteered before, please give details of where you have volunteered, for how long and describe your volunteer role.'
                                    value={beforeVolunteer}
                                    onChange={e => setBeforeVolunteer(e?.target?.value)}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="hob">What hobbies, skills, special interests or qualities do you have that may be relevant to the volunteer role you are applying for?.</label>
                                <textarea name="" id="hob" cols="80" rows="5" placeholder='What hobbies, skills, special interests or qualities do you have that may be relevant to the volunteer role you are applying for?.'
                                    value={hobby}
                                    onChange={e => setHobby(e?.target?.value)}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="avail">When are you available to volunteer?(Please specify days, times and the length of commitment you would like to make)</label>
                                <textarea name="" id="avail" cols="80" rows="5" placeholder='When are you available to volunteer?(Please specify days, times and the length of commitment you would like to make)'
                                    value={availability}
                                    onChange={e => setAvailability(e?.target?.value)}
                                    required />
                            </div>
                            <p>References: Please supply us with the names of two referees (non-relatives)</p>

                            <div className="form refForm" style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <label htmlFor="name1">1st Referee Name</label>
                                <input type="text" name='name1' placeholder='Name1'
                                    value={refName1}
                                    onChange={(e) => setRefName1(e.target.value)}
                                    required />
                                <label htmlFor="name2">2nd Referee Name</label>
                                <input type="text" name='name2' placeholder='Name2'
                                    value={refName2}
                                    onChange={(e) => setRefName2(e.target.value)}
                                    required />
                                <label htmlFor="addr1">1st Referee Address</label>
                                <input type="text" name='addr1' placeholder='Address1'
                                    value={refAddr1}
                                    onChange={(e) => setRefAdd1(e.target.value)}
                                    required />
                                <label htmlFor="addr2">2nd Referee Address</label>
                                <input type="text" name='addr2' placeholder='Address2'
                                    value={refAddr2}
                                    onChange={(e) => setRefAdd2(e.target.value)}
                                    required />
                                <label htmlFor="email1">1st Referee Email</label>
                                <input type="email" name='email1' placeholder=' Email1'
                                    value={refEmail1}
                                    onChange={(e) => setRefEmail1(e.target.value)}
                                    required />
                                <label htmlFor="email2">2nd Referee Email</label>
                                <input type="email" name='email2' placeholder=' Email2'
                                    value={refEmail2}
                                    onChange={(e) => setRefEmail2(e.target.value)}
                                    required />
                                <label htmlFor="tele1">1st Referee Telephone</label>
                                <input type="tel" name='tele1' placeholder=' Telephone1'
                                    value={refTel1}
                                    onChange={(e) => setRefTel1(e.target.value)}
                                    required />
                                <label htmlFor="tele2">2nd Referee Telephone</label>
                                <input type="tel" name='tele2' placeholder=' Telephone2'
                                    value={refTel2}
                                    onChange={(e) => setRefTel2(e.target.value)}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="sp">Do you have any special needs you would like to share with us?</label>
                                <textarea name="" id="sp" cols="80" rows="5" placeholder='Do you have any special needs you would like to share with us?'
                                    value={specialNeed}
                                    onChange={e => setSpecialNeed(e?.target?.value)}
                                    required />
                            </div>
                            <div>
                                <label htmlFor="cmnt">Any other comments</label>
                                <textarea name="" id="cmnt" cols="80" rows="5" placeholder='Any other comments'
                                    value={anyComment}
                                    onChange={e => setAnyComment(e?.target?.value)}
                                    required />
                            </div>
                        </div>

                        <h3>Select Availablity</h3>
                        <p>What day(s) of the week are you available to volunteer?</p>
                        <div className="checkBox">
                            <input type="checkbox"
                                value={week}
                                onChange={(e) => (week.push('Monday'), setWeek([...week]))}
                            /><p>Monday</p>
                            <input type="checkbox"
                                value={week}
                                onChange={(e) => (week.push('Tuesday'), setWeek([...week]))}
                            /><p>Tuesday</p>
                            <input type="checkbox"
                                value={week}
                                onChange={(e) => (week.push('Wednesday'), setWeek([...week]))}
                            /><p>Wednesday</p>
                            <input type="checkbox"
                                value={week}
                                onChange={(e) => (week.push('Thursday'), setWeek([...week]))}
                            /><p>Thursday</p>
                            <input type="checkbox"
                                value={week}
                                onChange={(e) => (week.push('Friday'), setWeek([...week]))}
                            /><p>Friday</p>
                            <input type="checkbox"
                                value={week}
                                onChange={(e) => (week.push('Saturday'), setWeek([...week]))}
                            /><p>Saturday</p>
                            <input type="checkbox"
                                value={week}
                                onChange={(e) => (week.push('Sunday'), setWeek([...week]))}
                            /><p>Sunday</p>
                        </div>
                        <p>What hour(s) are you available to volunteer?</p>
                        <div className="checkBox">
                            <input type="checkbox" value={time}
                                onChange={(e) => (time.push('Morning'), setTime([...time]))} /><p>Morning</p>
                            <input type="checkbox" value={time}
                                onChange={(e) => (time.push('Afternoon'), setTime([...time]))} /><p>Afternoon</p>
                            <input type="checkbox" value={time}
                                onChange={(e) => (time.push('Evening'), setTime([...time]))} /><p>Evening</p>
                            <input type="checkbox" value={time}
                                onChange={(e) => (time.push('Anytime'), setTime([...time]))} /><p>Anytime</p>
                        </div>
                        <p>Please select the area you wish to volunteer in:</p>

                        <div className="checkBox chec">
                            <span>
                                <input type="checkbox" value={interestArea}
                                    onChange={(e) => (interestArea.push('Women/Girls Economic Empowerment'), setInterestArea([...interestArea]))} />
                                <p>Women/Girls Economic Empowerment</p>
                            </span>
                            <span>
                                <input type="checkbox" value={interestArea}
                                    onChange={(e) => (interestArea.push('Youth Capacity Building and entrepreneurship'), setInterestArea([...interestArea]))} />
                                <p>Youth Capacity Building and entrepreneurship</p>
                            </span>
                            <span>
                                <input type="checkbox" value={interestArea}
                                    onChange={(e) => (interestArea.push('Behavior Change Communication (BCC)'), setInterestArea([...interestArea]))} />
                                <p>Behavior Change Communication (BCC)</p>
                            </span>
                            <span>
                                <input type="checkbox" value={interestArea}
                                    onChange={(e) => (interestArea.push('Child Protection'), setInterestArea([...interestArea]))} />
                                <p>Child Protection</p>
                            </span>
                            <span>
                                <input type="checkbox" value={interestArea}
                                    onChange={(e) => (interestArea.push('Finance'), setInterestArea([...interestArea]))} />
                                <p>Finance</p>
                            </span>
                            <span>
                                <input type="checkbox" value={interestArea}
                                    onChange={(e) => (interestArea.push('Monitoring, Evaluation, Learning and Research (MELR)'), setInterestArea([...interestArea]))} />
                                <p>Monitoring, Evaluation, Learning and Research (MELR)</p>
                            </span>
                        </div>
                        {!bool &&
                            <button>
                                {/* <input type="submit" value={'Validate my form'} /> */}
                                <input type="submit" value={'Submit'} />
                            </button>}
                        {bool &&
                            <button>
                                <a href={`mailto: delight.rw@gmail.com?subject = 'Hello from Volunteer!'&body=
"I'm ${firstName} ${surName}, I live in ${address}. my telephone ${telephone}, today's date ${date}, email: ${email}, gender: ${gender}, age group: ${age}. why volunteer with you: ${tellUs}. gain experience: ${gainExp}. education: ${education}. previous volunteer: ${beforeVolunteer}. hobby: ${hobby}. I'm available on ${availability}. My Referee name1: ${refName1}, name2: ${refName2}, address1: ${refAddr1}, address2: ${refAddr2}, email1: ${refEmail1}, email2: ${refEmail2}. special need: ${specialNeed}. comment: ${anyComment}. week: ${week}. time: ${time}. area of interest: ${interestArea}"
                                `}>Submit My Application</a>
                            </button>
                        }
                        <div className="circle circle0"></div>
                        <div className="circle circle1"></div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Form


// import React, { useState } from 'react'

// const Form = () => {

//     const [surname, setSurName] = useState();
//     const [firstName, setFirstName] = useState();

//     const submission = (e) => {
//         e.preventDefault();
//         console.log('submission pressed')
//     }

//     return (
//         <div className='form'>
//             <div className="container">
//                 <h1>JOIN US AND MAKE A DIFFERENCE</h1>
//                 <form className="div" onSubmit={submission}>
//                     <h3>Volunteer Application Form</h3>
//                     <div className="form">
//                         <input type="text" placeholder='Surname' value={surname}
//                             onChange={(e) => setSurName(e.target.value)} />
//                         <input type="text" placeholder='First Name' value={firstName}
//                             onChange={(e) => setFirstName(e.target.value)} />
//                         <input type="text" placeholder='Address' />
//                         <input type="text" placeholder='Telephone' />
//                         <input type="date" placeholder="Today's Date" />
//                         <input type="email" placeholder='Email' />
//                         <div className='radio'>
//                             <label htmlFor="gender">Gender:</label>
//                             <p>Male</p><input type="radio" name="gender" />
//                             <p>Female</p><input type="radio" name="gender" />
//                         </div>
//                         <div className='radio'>
//                             <label htmlFor="ageGroup">Age Group:</label>
//                             <p>Under 18</p><input type="radio" name="age" />
//                             <p> 18-25</p><input type="radio" name="age" />
//                             <p> 26-40</p><input type="radio" name="age" />
//                             <p> 41-55</p><input type="radio" name="age" />
//                             <p> Over 55</p><input type="radio" name="age" />
//                         </div>
//                         <div>
//                             <div>
//                                 <textarea name="" id="" cols="80" rows="5" placeholder='Please tell us why do you want to volunteer with our organization?' />
//                             </div>
//                             <div>
//                                 <textarea name="" id="" cols="80" rows="5" placeholder='Please tell us what you hope to gain from your experience with us?' />
//                             </div>
//                             <div>
//                                 <textarea name="" id="" cols="80" rows="5" placeholder='Please tell us any education background, work or volunteering experience that would relevant to the volunteer role you are applying for.' />
//                             </div>
//                             <div>
//                                 <textarea name="" id="" cols="80" rows="5" placeholder='If you have volunteered before, please give details of where you have volunteered, for how long and describe your volunteer role.' />
//                             </div>
//                             <div>
//                                 <textarea name="" id="" cols="80" rows="5" placeholder='What hobbies, skills, special interests or qualities do you have that may be relevant to the volunteer role you are applying for?.' />
//                             </div>
//                             <div>
//                                 <textarea name="" id="" cols="80" rows="5" placeholder='When are you available to volunteer?(Please specify days, times and the length of commitment you would like to make)' />
//                             </div>
//                             <div className="form" style={{
//                                 display: 'grid',
//                                 gridTemplateColumns: '1fr 1fr',
//                                 justifyContent: 'center',
//                                 alignItems: 'center',
//                             }}>

//                                 <input type="text" placeholder='Name' />
//                                 <input type="text" placeholder='Name' />
//                                 <input type="text" placeholder='Address' />
//                                 <input type="text" placeholder='Address' />
//                                 <input type="email" placeholder='Email' />
//                                 <input type="email" placeholder='Email' />
//                                 <input type="text" placeholder='Telephone' />
//                                 <input type="text" placeholder='Telephone' />
//                             </div>
//                             <div>
//                                 <textarea name="" id="" cols="80" rows="5" placeholder='Do you have any special needs you would like to share with us?' />
//                             </div>
//                             <div>
//                                 <textarea name="" id="" cols="80" rows="5" placeholder='Any other comments' />
//                             </div>
//                         </div>
//                     </div>
//                     <h3>Select Availablity</h3>
//                     <p>What day(s) of the week are you available to volunteer?</p>
//                     <div className="checkBox">
//                         <input type="checkbox" /><p>Monday</p>
//                         <input type="checkbox" /><p>Tuesday</p>
//                         <input type="checkbox" /><p>Wednesday</p>
//                         <input type="checkbox" /><p>Thursday</p>
//                         <input type="checkbox" /><p>Friday</p>
//                         <input type="checkbox" /><p>Saturday</p>
//                         <input type="checkbox" /><p>Sunday</p>
//                     </div>
//                     <p>What hour(s) are you available to volunteer?</p>
//                     <div className="checkBox">
//                         <input type="checkbox" /><p>Morning</p>
//                         <input type="checkbox" /><p>Afternoon</p>
//                         <input type="checkbox" /><p>Evening</p>
//                         <input type="checkbox" /><p>Anytime</p>
//                     </div>
//                     {/* <p>What is your area of interest?</p> */}
//                     <p>Please select the area you wish to volunteer in:</p>
//                     {/* <h4>Please select the area you wish to volunteer in:</h4> */}

//                     <div className="checkBox chec">
//                         <span>
//                             <input type="checkbox" /><p>Women/Girls Economic Empowerment</p>
//                         </span>
//                         <span>
//                             <input type="checkbox" /><p>Youth Capacity Building and entrepreneurship</p>
//                         </span>
//                         <span>
//                             <input type="checkbox" /><p>Behavior Change Communication (BCC)</p>
//                         </span>
//                         <span>
//                             <input type="checkbox" /><p>Child Protection</p>
//                         </span>
//                         <span>
//                             <input type="checkbox" /><p>Finance</p>
//                         </span>
//                         <span>
//                             <input type="checkbox" /><p>Monitoring, Evaluation, Learning and Research (MELR)</p>
//                         </span>
//                     </div>
//                     <div className="circle circle0"></div>
//                     <div className="circle circle1"></div>
//                     <button
//                         onClick={submission()}
//                     >Submit My Application</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Form