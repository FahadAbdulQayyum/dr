import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const SendEmailAuto = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_d0pzvhm', 'template_1vx5m7l', form.current, 'dhHTFxg-ArSt1CVKA')
            .then((result) => {
                console.log(result.text);
                console.log('Message sent');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};

export default SendEmailAuto

// *************************

// import React, { useState } from 'react'

// const SendEmailAuto = () => {
//     const [formState, setFormState] = useState({});

//     const changeHandler = e => {
//         setFormState({ ...formState, [e.target.name]: [e.target.value] });
//     }

//     const submitHandler = (e) => {
//         e.preventDefault();
//         const config = {
//             Username: 'isolate.coder@yopmail.com',
//             Password: '48D05BC03789F52ACEAF71F9144726D6FA36',
//             Host: 'smtp.elasticemail.com',
//             Port: 2525,
//             SecuredToken: '089aae7e-a78d-4624-b9c3-705d6f9246f8',
//             To: "them@website.com",
//             From: formState.email,
//             Subject: "This is the Subject",
//             Body: `${formState.name} connected to you over email`
//         }

//         if (window.Email) {
//             window.Email.send(config).then(() => alert('email has been sent successfully.'))
//         }
//     }

//     return (
//         <div>
//             <form action="" onSubmit={submitHandler}>
//                 <input
//                     type="text"
//                     name="name"
//                     value={formState.name || ''}
//                     placeholder='Enter your name'
//                     onChange={changeHandler}
//                     className="border"
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     value={formState.email || ''}
//                     placeholder='Enter your email'
//                     onChange={changeHandler}
//                     className="border"
//                 />
//                 <input type="submit" value={'Submit'} />
//             </form>
//         </div>
//     )
// }

// export default SendEmailAuto
