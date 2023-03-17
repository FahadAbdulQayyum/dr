import React from 'react'

const form = () => {
    return (
        <div className='form'>
            <div className="container">
                <h1>JOIN US AND MAKE A DIFFERENCE</h1>
                <div className="div">
                    <h3>Personal Information</h3>
                    <div className="form">
                        <input type="text" placeholder='Full Name' />
                        <input type="email" placeholder='Email' />
                        <input type="tel" placeholder='Phone' />
                    </div>
                    <div className="form">
                        <input type="number" placeholder='Age' />
                        <input type="number" placeholder='Years of Experience' />
                        <input type="text" placeholder='Previous Company/Employer' />
                    </div>
                    <h3>Can We Call You?</h3>
                    <div className="checkBox">
                        <input type="checkbox" /><p>Accept with Pleasure</p>
                        <input type="checkbox" /><p>Declines with Regret</p>
                    </div>
                    <h3>Upload Your Resume</h3>
                    <div className="checkBox">
                        <input type="file" accept='/*.pdf' />
                    </div>
                    <h3>Select Availablity</h3>
                    <p>What day(s) of the week are you available to volunteer?</p>
                    <div className="checkBox">
                        <input type="checkbox" /><p>Monday</p>
                        <input type="checkbox" /><p>Tuesday</p>
                        <input type="checkbox" /><p>Wednesday</p>
                        <input type="checkbox" /><p>Thursday</p>
                        <input type="checkbox" /><p>Friday</p>
                        <input type="checkbox" /><p>Saturday</p>
                        <input type="checkbox" /><p>Sunday</p>
                    </div>
                    <p>What hour(s) are you available to volunteer?</p>
                    <div className="checkBox">
                        <input type="checkbox" /><p>Morning</p>
                        <input type="checkbox" /><p>Afternoon</p>
                        <input type="checkbox" /><p>Evening</p>
                        <input type="checkbox" /><p>Anytime</p>
                    </div>
                    <p>What is your area of interest?</p>
                    <div className="checkBox">
                        <input type="checkbox" /><p>Behavior Change Communication</p>
                        <input type="checkbox" /><p>Women Economic Empowerment</p>
                        <input type="checkbox" /><p>Youth Capacity Building</p>
                    </div>
                    <div className="circle circle0"></div>
                    <div className="circle circle1"></div>
                    <button>Submit My Application</button>
                </div>
            </div>
        </div>
    )
}

export default form

// import React from 'react'

// const form1 = () => {
//     return (
//         <div className='form1'>
//             <table>
//                 <tr>
//                     <th colSpan={16}>Volunteer Application Form</th>
//                 </tr>
//                 <tr>
//                     <td>Surname:</td>
//                     <td ><input type="text" /></td>
//                     <td >First Name:</td>
//                     <td ><input type="text" /></td>
//                 </tr>
//                 <tr>
//                     <td >Address:</td>
//                     <td ><input type="text" /></td>
//                 </tr>
//                 <tr>
//                     <td >Telephone:</td>
//                     <td ><input type="tel" /></td>
//                     <td >Today's Date:</td>
//                     <td ><input type="date" /></td>
//                 </tr>
//                 <tr>
//                     <td >Email:</td>
//                     <td ><input type="email" /></td>
//                 </tr>
//                 <tr>
//                     <td >Gender:</td>
//                     <td >Male <input type="radio" name='gender' /></td>
//                     <td >Female <input type="radio" name='gender' /></td>
//                 </tr>
//                 <tr>
//                     <td >Age Group:</td>
//                     <td >Under 18 <input type="radio" name='age' /></td>
//                     <td >18 - 25 <input type="radio" name='age' /></td>
//                     <td>26 - 40 <input type="radio" name='age' /></td>
//                     <td>41 - 55 <input type="radio" name='age' /></td>
//                     <td >Over 55 <input type="radio" name='age' /></td>
//                 </tr>
//                 <tr>
//                 </tr>
//                 <td colSpan={16}><p>Please select the area you wish to volunteer in:</p></td>
//                 <tr>
//                     <td colSpan={16}>
//                         <div className='div'>
//                             <input type="checkbox" /> <p>Women/Girls Economic Empowerment</p>
//                         </div>
//                         <div className='div'>
//                             <input type="checkbox" /><p>Youth Capacity Building and entrepreneurship</p>
//                         </div>
//                         <div className='div'>
//                             <input type="checkbox" /><p>Behavior Change Communication (BCC)</p>
//                         </div>
//                         <div className='div'>
//                             <input type="checkbox" /><p>Child Protection</p>
//                         </div>
//                         <div className='div'>
//                             <input type="checkbox" /><p>Finance</p>
//                         </div>
//                         <div className='div'>
//                             <input type="checkbox" /><p>Monitoring, Evaluation, Learning and Research (MELR)</p>
//                         </div>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td colSpan={20}><textarea name="" id="" cols="85" rows="5" placeholder='Please tell us why do you want to volunteer with our organization?'></textarea></td>
//                 </tr>
//                 <tr>
//                     <td colSpan={20}><textarea name="" id="" cols="85" rows="5" placeholder='Please tell us what you hope to gain from your experience with us?'></textarea></td>
//                 </tr>
//                 <tr>
//                     <td colSpan={20}><textarea name="" id="" cols="85" rows="5" placeholder='Please tell us any education background, work or volunteering experience that would relevant to the volunteer role you are applying for.'></textarea></td>
//                 </tr>
//                 <tr>
//                     <td colSpan={20}><textarea name="" id="" cols="85" rows="5" placeholder='If you have volunteered before, please give details of where you have volunteered, for how long and describe your volunteer role.'></textarea></td>
//                 </tr>
//                 <tr>
//                     <td colSpan={20}><textarea name="" id="" cols="85" rows="5" placeholder='What hobbies, skills, special interests or qualities do you have that may be relevant to the volunteer role you are applying for?.'></textarea></td>
//                 </tr>
//                 <tr>
//                     <td colSpan={20}><textarea name="" id="" cols="85" rows="5" placeholder='When are you available to volunteer?(Please specify days, times and the length of commitment you would like to make)'></textarea></td>
//                 </tr>
//                 <tr>
//                     <td colSpan={20}>
//                         <p>References: Please supply with us the names of two referees (non-relatives)</p>
//                     </td>
//                 </tr>
//                 <tr colSpan={20}>
//                     <td>Name:</td>
//                     <td><input type="text" /></td>
//                     <td>Name:</td>
//                     <td><input type="text" /></td>
//                 </tr>
//                 <tr colSpan={20}>
//                     <td>Email:</td>
//                     <td><input type="email" /></td>
//                     <td>Email:</td>
//                     <td><input type="email" /></td>
//                 </tr>
//                 <tr colSpan={20}>
//                     <td>Telephone:</td>
//                     <td><input type="tel" /></td>
//                     <td>Telephone:</td>
//                     <td><input type="tel" /></td>
//                 </tr>
//                 <tr>
//                     <td colSpan={20}><textarea name="" id="" cols="85" rows="5" placeholder='Do you have any special needs you would like to share with us?'></textarea></td>
//                 </tr>
//                 <tr>
//                     <td colSpan={20}><textarea name="" id="" cols="85" rows="5" placeholder='Any other comments'></textarea></td>
//                 </tr>
//             </table>
//         </div >
//     )
// }

// export default form1
