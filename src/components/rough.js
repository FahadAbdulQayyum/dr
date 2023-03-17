import React from 'react'

const rough = () => {
    return (
        <div>

        </div>
    )
}

export default rough


// **********8

// import React from 'react'
// import Carousel from 'react-multi-carousel'
// import 'react-multi-carousel/lib/styles.css'
// import sc1 from '../images/sc1.jpeg'
// import sc2 from '../images/sc2.jpeg'
// import sc3 from '../images/sc3.jpeg'
// import sc4 from '../images/sc4.jpeg'
// import sc5 from '../images/sc5.jpeg'

// const Rough = () => {
//     const responsive = {
//         superLargeDesktop: {
//             // the naming can be any, depends on you.
//             breakpoint: { max: 4000, min: 3000 },
//             items: 5
//         },
//         desktop: {
//             breakpoint: { max: 3000, min: 1024 },
//             items: 3
//         },
//         tablet: {
//             breakpoint: { max: 1024, min: 464 },
//             items: 2
//         },
//         mobile: {
//             breakpoint: { max: 464, min: 0 },
//             items: 1
//         }
//     };
//     return (
//         <div className='carousel'>
//             <h1>React multi Carousel</h1>
//             <Carousel
//                 responsive={responsive}
//                 infinite={true}
//                 showDots={true}
//                 autoPlay={true}
//                 autoPlaySpeed={1000}
//             >
//                 <div>
//                     <img src={sc1} alt="" />
//                 </div>
//                 <div>
//                     <img src={sc2} alt="" />
//                 </div>
//                 <div>
//                     <img src={sc3} alt="" />
//                 </div>
//                 <div>
//                     <img src={sc4} alt="" />
//                 </div>
//                 <div>
//                     <img src={sc5} alt="" />
//                 </div>
//             </Carousel>
//         </div>
//     )
// }

// export default Rough


// ************

// import React from 'react'
// import Partner from "./partner";

// const rough = () => {
//     return (
//         <div>
//             <Partner />
//         </div>
//     )
// }

// export default rough


//********* */

// import React, { useEffect, useState } from 'react'
// import sc1 from '../images/sc1.jpeg';
// import sc2 from '../images/sc2.jpeg';
// import sc3 from '../images/sc3.jpeg';
// import sc4 from '../images/sc4.jpeg';
// import sc5 from '../images/sc5.jpeg';

// const Rough = () => {

//     useEffect(() => {
//         setInterval(() => {
//             next();
//         }, 2000);
//     }, [])

//     let [img, setImg] = useState([sc1, sc2, sc3, sc4, sc5])
//     let [l, setL] = useState(0)
//     const next = () => {
//         l++;
//         setL(l++)
//         console.log('next pressed', l)
//         if (l > img.length) {
//             l = 0;
//             setL(l)
//         }
//     }
//     const prev = () => {
//         l--;
//         setL(l)
//         console.log('prev pressed')
//         if (l < 0) {
//             l = img.length - 1;
//             setL(l)
//         }
//     }
//     return (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             <div onClick={prev}>
//                 Prev
//             </div>
//             <div className="imgSlider">
//                 {img.map((v, i) => {
//                     return (
//                         <div key={i} >
//                             <img src={img[l]} alt="" style={{ height: '200px' }} />
//                         </div>
//                     )
//                 })}
//             </div>
//             <div onClick={next}>
//                 Next
//             </div>
//         </div >
//     )
// }

// export default Rough


//**** */

// import React, { useState, useRef } from 'react'
// import emailjs from 'email-js';
// const Rough = () => {
//     const formm = useRef();

//     const [surName, setSurName] = useState()
//     const [firstName, setFirstName] = useState()
//     const [address, setAddress] = useState()
//     const [telephone, setTelephone] = useState()
//     const [date, setDate] = useState()
//     const [email, setEmail] = useState()
//     const [gender, setGender] = useState()
//     const [age, setAge] = useState()
//     const [tellUs, setTellUs] = useState()
//     const [gainExp, setGainExp] = useState()
//     const [education, setEducation] = useState()
//     const [beforeVolunteer, setBeforeVolunteer] = useState()
//     const [hobby, setHobby] = useState()
//     const [availability, setAvailability] = useState()
//     const [specialNeed, setSpecialNeed] = useState()
//     const [anyComment, setAnyComment] = useState()
//     const [refName1, setRefName1] = useState()
//     const [refName2, setRefName2] = useState()
//     const [refAddr1, setRefAdd1] = useState()
//     const [refAddr2, setRefAdd2] = useState()
//     const [refEmail1, setRefEmail1] = useState()
//     const [refEmail2, setRefEmail2] = useState()
//     const [week, setWeek] = useState([])
//     const [time, setTime] = useState([])
//     const [interestArea, setInterestArea] = useState([])
//     const [form, setForm] = useState([])

//     const onSubmit = (e) => {
//         e.preventDefault();
//         console.log('onSubmit', surName, firstName);
//         form.push([surName, firstName, address, telephone, date, email, gender, age, tellUs, gainExp,
//             education,
//             beforeVolunteer,
//             hobby,
//             availability,
//             refName1,
//             refName2,
//             refAddr1,
//             refAddr2,
//             refEmail1,
//             refEmail2,
//             week,
//             time,
//             interestArea,
//         ])
//         setForm([...form])

//         emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//             .then((result) => {
//                 // show the user a success message
//             }, (error) => {
//                 // show the user an error
//             });

//         console.log('submitted form', form);
//     }

//     return (
//         <div>
//             <form action="" ref={formm} onSubmit={onSubmit}>
//                 <input type="text" placeholder='Surname' value={surName}
//                     onChange={(e) => setSurName(e.target.value)} />
//                 <input type="text" placeholder='First Name' value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)} />
//                 <input type="text" placeholder='Address'
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                 />
//                 <input type="text" placeholder='Telephone'
//                     value={telephone}
//                     onChange={(e) => setTelephone(e.target.value)}
//                 />
//                 <input type="date" placeholder="Today's Date"
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                 />
//                 <input type="email" placeholder='Email'
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)} />
//                 <div className='radio'>
//                     <label htmlFor="gender">Gender:</label>
//                     <p>Male</p><input type="radio" name="gender" value={gender}
//                         onChange={(e) => setGender('male')}
//                     />
//                     <p>Female</p><input type="radio" name="gender" value={gender}
//                         onChange={(e) => setGender('female')}
//                     />
//                 </div>
//                 <div className='radio'>
//                     <label htmlFor="ageGroup">Age Group:</label>
//                     <p>Under 18</p><input type="radio" name="age" value={age}
//                         onChange={(e) => setAge('Under 18')} />
//                     <p> 18 - 25</p><input type="radio" name="age" value={age}
//                         onChange={(e) => setAge('18 - 25')} />
//                     <p> 26 - 40</p><input type="radio" name="age" value={age}
//                         onChange={(e) => setAge('26 - 40')} />
//                     <p> 41 - 55</p><input type="radio" name="age" value={age}
//                         onChange={(e) => setAge('41 - 55')} />
//                     <p> Over 55</p><input type="radio" name="age" value={age}
//                         onChange={(e) => setAge('Over 55')} />
//                 </div>
//                 <div>
//                     <div>
//                         <textarea name="" id="" cols="80" rows="5" placeholder='Please tell us why do you want to volunteer with our organization?'
//                             value={tellUs}
//                             onChange={e => setTellUs(e?.target?.value)}
//                         />
//                     </div>
//                     <div>
//                         <textarea name="" id="" cols="80" rows="5" placeholder='Please tell us what you hope to gain from your experience with us?'
//                             value={gainExp}
//                             onChange={e => setGainExp(e?.target?.value)}
//                         />
//                     </div>
//                     <div>
//                         <textarea name="" id="" cols="80" rows="5" placeholder='Please tell us any education background, work or volunteering experience that would relevant to the volunteer role you are applying for.'
//                             value={education}
//                             onChange={e => setEducation(e?.target?.value)}
//                         />
//                     </div>
//                     <div>
//                         <textarea name="" id="" cols="80" rows="5" placeholder='If you have volunteered before, please give details of where you have volunteered, for how long and describe your volunteer role.'
//                             value={beforeVolunteer}
//                             onChange={e => setBeforeVolunteer(e?.target?.value)}
//                         />
//                     </div>
//                     <div>
//                         <textarea name="" id="" cols="80" rows="5" placeholder='What hobbies, skills, special interests or qualities do you have that may be relevant to the volunteer role you are applying for?.'
//                             value={hobby}
//                             onChange={e => setHobby(e?.target?.value)}
//                         />
//                     </div>
//                     <div>
//                         <textarea name="" id="" cols="80" rows="5" placeholder='When are you available to volunteer?(Please specify days, times and the length of commitment you would like to make)'
//                             value={availability}
//                             onChange={e => setAvailability(e?.target?.value)}
//                         />
//                     </div>
//                     <div className="form" style={{
//                         display: 'grid',
//                         gridTemplateColumns: '1fr 1fr',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                     }}>

//                         <input type="text" placeholder='Name'
//                             value={refName1}
//                             onChange={(e) => setRefName1(e.target.value)}
//                         />
//                         <input type="text" placeholder='Name'
//                             value={refName2}
//                             onChange={(e) => setRefName2(e.target.value)}
//                         />
//                         <input type="text" placeholder='Address'
//                             value={refAddr1}
//                             onChange={(e) => setRefAdd1(e.target.value)}
//                         />
//                         <input type="text" placeholder='Address'
//                             value={refAddr2}
//                             onChange={(e) => setRefAdd2(e.target.value)}
//                         />
//                         <input type="email" placeholder='Email'
//                             value={refEmail1}
//                             onChange={(e) => setRefEmail1(e.target.value)}
//                         />
//                         <input type="email" placeholder='Email'
//                             value={refEmail2}
//                             onChange={(e) => setRefEmail2(e.target.value)}
//                         />
//                         <input type="text" placeholder='Telephone'
//                             value={date}
//                             onChange={(e) => setDate(e.target.value)}
//                         />
//                         <input type="text" placeholder='Telephone'
//                             value={date}
//                             onChange={(e) => setDate(e.target.value)}
//                         />
//                     </div>
//                     <div>
//                         <textarea name="" id="" cols="80" rows="5" placeholder='Do you have any special needs you would like to share with us?'
//                             value={specialNeed}
//                             onChange={e => setSpecialNeed(e?.target?.value)}
//                         />
//                     </div>
//                     <div>
//                         <textarea name="" id="" cols="80" rows="5" placeholder='Any other comments'
//                             value={anyComment}
//                             onChange={e => setAnyComment(e?.target?.value)}
//                         />
//                     </div>
//                 </div>

//                 <h3>Select Availablity</h3>
//                 <p>What day(s) of the week are you available to volunteer?</p>
//                 <div className="checkBox">
//                     <input type="checkbox"
//                         value={week}
//                         onChange={(e) => (week.push('Monday'), setWeek([...week]))}
//                     /><p>Monday</p>
//                     <input type="checkbox"
//                         value={week}
//                         onChange={(e) => (week.push('Tuesday'), setWeek([...week]))}
//                     /><p>Tuesday</p>
//                     <input type="checkbox"
//                         value={week}
//                         onChange={(e) => (week.push('Wednesday'), setWeek([...week]))}
//                     /><p>Wednesday</p>
//                     <input type="checkbox"
//                         value={week}
//                         onChange={(e) => (week.push('Thursday'), setWeek([...week]))}
//                     /><p>Thursday</p>
//                     <input type="checkbox"
//                         value={week}
//                         onChange={(e) => (week.push('Friday'), setWeek([...week]))}
//                     /><p>Friday</p>
//                     <input type="checkbox"
//                         value={week}
//                         onChange={(e) => (week.push('Saturday'), setWeek([...week]))}
//                     /><p>Saturday</p>
//                     <input type="checkbox"
//                         value={week}
//                         onChange={(e) => (week.push('Sunday'), setWeek([...week]))}
//                     /><p>Sunday</p>
//                 </div>
//                 <p>What hour(s) are you available to volunteer?</p>
//                 <div className="checkBox">
//                     <input type="checkbox" value={time}
//                         onChange={(e) => (time.push('Morning'), setTime([...time]))} /><p>Morning</p>
//                     <input type="checkbox" value={time}
//                         onChange={(e) => (time.push('Afternoon'), setTime([...time]))} /><p>Afternoon</p>
//                     <input type="checkbox" value={time}
//                         onChange={(e) => (time.push('Evening'), setTime([...time]))} /><p>Evening</p>
//                     <input type="checkbox" value={time}
//                         onChange={(e) => (time.push('Anytime'), setTime([...time]))} /><p>Anytime</p>
//                 </div>
//                 <p>Please select the area you wish to volunteer in:</p>

//                 <div className="checkBox chec">
//                     <span>
//                         <input type="checkbox" value={interestArea}
//                             onChange={(e) => (interestArea.push('Women/Girls Economic Empowerment'), setInterestArea([...interestArea]))} />
//                         <p>Women/Girls Economic Empowerment</p>
//                     </span>
//                     <span>
//                         <input type="checkbox" value={interestArea}
//                             onChange={(e) => (interestArea.push('Youth Capacity Building and entrepreneurship'), setInterestArea([...interestArea]))} />
//                         <p>Youth Capacity Building and entrepreneurship</p>
//                     </span>
//                     <span>
//                         <input type="checkbox" value={interestArea}
//                             onChange={(e) => (interestArea.push('Behavior Change Communication (BCC)'), setInterestArea([...interestArea]))} />
//                         <p>Behavior Change Communication (BCC)</p>
//                     </span>
//                     <span>
//                         <input type="checkbox" value={interestArea}
//                             onChange={(e) => (interestArea.push('Child Protection'), setInterestArea([...interestArea]))} />
//                         <p>Child Protection</p>
//                     </span>
//                     <span>
//                         <input type="checkbox" value={interestArea}
//                             onChange={(e) => (interestArea.push('Finance'), setInterestArea([...interestArea]))} />
//                         <p>Finance</p>
//                     </span>
//                     <span>
//                         <input type="checkbox" value={interestArea}
//                             onChange={(e) => (interestArea.push('Monitoring, Evaluation, Learning and Research (MELR)'), setInterestArea([...interestArea]))} />
//                         <p>Monitoring, Evaluation, Learning and Research (MELR)</p>
//                     </span>
//                 </div>

//                 {/* <input type="submit" value={'Submit My Application'}/> */}
//                 <button>
//                     <a href={`mailto:info@delightrwanda.org?subject='Hello from Volunteer!'&body=
//                     "
//                     I'm ${firstName} ${surName}, I live in ${address}, my telephone ${telephone}, today ${date}, email: ${email}, gender: ${gender}, age: ${age}. ${tellUs}. ${gainExp}. ${education}. ${beforeVolunteer}. ${hobby}. ${availability}. My Referee name1: ${refName1}, name2: ${refName2}, address1: ${refAddr1}, address2: ${refAddr2}, email1: ${refEmail1}, email2: ${refEmail2}. ${specialNeed}. ${anyComment}.
//                     "
//                     `}>Submit My Application</a>
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default Rough
