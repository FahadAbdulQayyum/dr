import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function App() {

    const messageEl = useRef(null);
    const [messages, setMessages] = useState([]);
    let c = 0;

    const GenerateMessage = () => {
        const press = `PRESS RELEASE: Launch of the Wiceceka Human Trafficking Project
        Kigali, 06 March 2023 – Delight Rwanda launched on Monday 6, 2023, the Wiceceka Human 
        Trafficking project at its headquarters located at Gasabo District, City of Kigali, Rwanda.This 
        event serves as an opportunity to alert the community, especially young people, about human 
        trafficking forms and tactics used by traffickers.
        The Delight Rwanda’s Executive Director Samson Gihana said: “In today’s society, many young 
        people experience online and physical human trafficking threats every day from people they
        know/trust and sometimes from people they don’t know and it threatens their
        survival, development, and participation in society”. It is in the recognition of these plights and 
        threats that Delight Rwanda has initiated the Wiceceka Human Trafficking project(Don’t 
        ‘keep quiet Human Trafficking.
        “As we are launching this project today, the project survey conducted by Delight Rwanda 
        confirms that at least 80% of internet users in Rwanda and 40 % worldwide will aware of human 
        trafficking through our online/digital campaign, 356 high schools will be reached out and 195 of 
        hotels operators will be trained about human trafficking” Said Samson Gihana.
        The online campaign against human trafficking is designed to use online platforms to ensure 
        that internet and social media users as the target group of the project as well as the community 
        at large are aware of forms of human trafficking and its consequences.All our efforts are 
        directed toward content creation alerting the community about human trafficking and illegal
    immigration.Among traffickers' most preferred ways of finding victims is posting fake job 
        offers online, promising work opportunities, often in far-off lands.Such recruitment and 
        coercion often occur through targeting on social media.
        The High school campaign outreach and the Hospitality Operators’ Training and Awareness of 
        human trafficking are the best communication channels to reach the direct vulnerable
    beneficiaries. “The trainees will be focal persons to disseminate messages / information about 
        human trafficking prevention and reporting the cases to their prior authorities.
        Human trafficking remains a global problem that makes people suffer physically and 
        psychologically during and after transportation victims of human trafficking to other parts of the
    world.The government of Rwanda demonstrated overall increasing efforts compared to the 
        previous years, considering the impact of the COVID - 19 pandemic on its anti - trafficking
    capacity.For this purpose, Delight Rwanda increased the efforts of national awareness and 
        prevention campaigns; and organized sustainable care shelters for human trafficking victims.
        For more information call us at(+250) 788 308 617 or email: eddie @delightrwanda.org`
        const words = [];
        words.push(press.split(" "));
        // const words = ["The sky", "above", "the port", "was", "the color of television", "tuned", "to", "a dead channel", ".", "All", "this happened", "more or less", ".", "I", "had", "the story", "bit by bit", "from various people", "and", "as generally", "happens", "in such cases", "each time", "it", "was", "a different story", ".", "It", "was", "a pleasure", "to", "burn"];
        const text = [];
        let x = 7;
        // let x = words.length;
        // while (--x) text.push(words[Math.floor(Math.random() * words.length)]);
        while (--x)
            text.push(words[0][c++]);
        // while (--x) text.push(words[c]);
        // while (--x) text.push(words[Math.floor(words.length * c)]);
        // for (let c = 0; c <= x; c++) {
        //     text.push(words[c])
        //     console.log('c', c)
        // }
        return text.join(" ");
    }

    useEffect(() => {
        if (messageEl) {
            messageEl.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }
    }, [])

    useEffect(() => {
        const generateDummyMessage = () => {
            setInterval(() => {
                setMessages(prevMsg => [...prevMsg, GenerateMessage()]);
            }, 1000);
        }
        generateDummyMessage();
    }, []);

    return (
        <div className="App">
            <div className="chat"
                style={{
                    border: '1px solid #ddd',
                    width: '90%',
                    height: '250px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    margin: 'auto'
                    // marginLeft: '50px',
                }
                }
            >
                <div className="head"
                    style={{
                        background: '#2d3436',
                        padding: '10px',
                        borderBottom: '1px solid #ccc',
                        fontWeight: '600',
                        color: '#f5f5f5'
                    }}
                ><Link to={'/pressRelease'} style={{ textDecoration: 'none', color: '#fff' }}>PRESS RELEASE</Link></div>
                <div className="messages" ref={messageEl}
                    style={{
                        // height: '342px',
                        height: '1942px',
                        overflowY: 'auto',
                        padding: '15px 10px'
                    }}
                >
                    <marquee behavior="scroll" direction="up" scrollamount='2' height='200'>
                        {/* <p>
                            <b>PRESS RELEASE:</b>&nbsp;
                            <b><u>Launch of the Wiceceka Human Trafficking Project</u></b><br /><br />
                            <b>Kigali, 06 March 2023</b> – Delight Rwanda launched on Monday 6, 2023, the Wiceceka Human
                            Trafficking project at its headquarters located at Gasabo District, City of Kigali, Rwanda.This
                            event serves as an opportunity to alert the community, especially young people, about human
                            trafficking forms and tactics used by traffickers.<br /><br />
                            The Delight Rwanda’s Executive Director Samson Gihana said: “In today’s society, many young
                            people experience online and physical human trafficking threats every day from people they
                            know/trust and sometimes from people they don’t know and it threatens their
                            survival, development, and participation in society”. <b><i>It is in the recognition of these plights and
                                threats that Delight Rwanda has initiated the Wiceceka Human Trafficking project(Don’t
                                ‘keep quiet Human Trafficking.</i></b><br /><br />
                            “As we are launching this project today, the project survey conducted by Delight Rwanda
                            confirms that at least 80% of internet users in Rwanda and 40 % worldwide will aware of human
                            trafficking through our online/digital campaign, 356 high schools will be reached out and 195 of
                            hotels operators will be trained about human trafficking” Said Samson Gihana.<br /><br />
                            The online campaign against human trafficking is designed to use online platforms to ensure
                            that internet and social media users as the target group of the project as well as the community
                            at large are aware of forms of human trafficking and its consequences.All our efforts are
                            directed toward content creation alerting the community about human trafficking and illegal
                            immigration.Among traffickers' most preferred ways of finding victims is posting fake job
                            offers online, promising work opportunities, often in far-off lands.Such recruitment and
                            coercion often occur through targeting on social media.<br /><br />
                            The High school campaign outreach and the Hospitality Operators’ Training and Awareness of
                            human trafficking are the best communication channels to reach the direct vulnerable
                            beneficiaries. “The trainees will be focal persons to disseminate messages / information about
                            human trafficking prevention and reporting the cases to their prior authorities.<br /><br />
                            Human trafficking remains a global problem that makes people suffer physically and
                            psychologically during and after transportation victims of human trafficking to other parts of the
                            world.The government of Rwanda demonstrated overall increasing efforts compared to the
                            previous years, considering the impact of the COVID - 19 pandemic on its anti - trafficking
                            capacity.For this purpose, Delight Rwanda increased the efforts of national awareness and
                            prevention campaigns; and organized sustainable care shelters for human trafficking victims.<br /><br />
                            For more information call us at(+250) 788 308 617 or <a href="mailto:@delightrwanda.org">email: eddie @delightrwanda.org</a>
                        </p> */}
                        <p>
                            <b>PRESS RELEASE:</b>&nbsp;
                            <b><u>Launch of the Wiceceka Human Trafficking Project</u></b><br /><br />
                            <b>Kigali, 06 March 2023</b> – Delight Rwanda launched on Monday 6, 2023, the Wiceceka Human
                            Trafficking project at its headquarters located at Gasabo District, City of Kigali, Rwanda.This
                            event serves as an opportunity to alert the community, especially young people, about human
                            trafficking forms and tactics used by traffickers...<br /><br />
                            <div className="below"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <button>
                                    <Link to={'/pressRelease'}>
                                        Read More
                                    </Link>
                                </button>
                                <solid>06 March, 2022.</solid>
                            </div>
                        </p>
                        <hr />
                        <p>
                            <b>PRESS RELEASE:</b>&nbsp;
                            <b><u>Launch of the Wiceceka Human Trafficking Project</u></b><br /><br />
                            <b>Kigali, 06 March 2023</b> – Delight Rwanda launched on Monday 6, 2023, the Wiceceka Human
                            Trafficking project at its headquarters located at Gasabo District, City of Kigali, Rwanda.This
                            event serves as an opportunity to alert the community, especially young people, about human
                            trafficking forms and tactics used by traffickers...<br /><br />
                            <div className="below"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <button>Read More</button>
                                <solid>06 March, 2022.</solid>
                            </div>
                        </p>
                    </marquee>
                    {/* {messages.map((m, i) => <div key={i} className={`msg${i % 2 !== 0 ? ' dark' : ''
                        }`}
                        style={{
                            // border: '1px solid #ddd',
                            // padding: '7px 15px',
                            // borderRadius: '20px',
                            // fontSize: '13px',
                            // background: '#dfe6e9',
                            // marginBottom: '20px',
                            // width: '80%',
                            // float: 'left'
                        }}
                    >{m}</div>)} */}
                </div>
            </div>
        </div >
    );
}

export default App;



// import React from 'react'

// const newsFeed = () => {
//     return (
//         <div style={{ margin: '0 50px' }}>
//             <h3>PRESS RELEASE: <u>Launch of the Wiceceka Human Trafficking Project</u></h3>
//             <p>
//                 <b>Kigali, 06 March 2023</b> – Delight Rwanda launched on Monday 6, 2023, the Wiceceka Human
//                 Trafficking project at its headquarters located at Gasabo District, City of Kigali, Rwanda. This
//                 event serves as an opportunity to alert the community, especially young people, about human
//                 trafficking forms and tactics used by traffickers.<br /><br />
//                 The Delight Rwanda's Executive Director Samson Gihana said: “In today’s society, many young
//                 people experience online and physical human trafficking threats every day from people they
//                 know/trust and sometimes from people they don’t know and it threatens their
//                 survival, development, and participation in society”. <i><b>It is in the recognition of these plights and
//                     threats that Delight Rwanda has initiated the Wiceceka Human Trafficking project (Don’t
//                     ‘keep quiet Human Trafficking.</b></i><br /><br />
//                 “As we are launching this project today, the project survey conducted by Delight Rwanda
//                 confirms that at least 80% of internet users in Rwanda and 40% worldwide will aware of human
//                 trafficking through our online/digital campaign, 356 high schools will be reached out and 195 of
//                 hotels operators will be trained about human trafficking” Said Samson Gihana.<br /><br />
//                 The online campaign against human trafficking is designed to use online platforms to ensure
//                 that internet and social media users as the target group of the project as well as the community
//                 at large are aware of forms of human trafficking and its consequences. All our efforts are
//                 directed toward content creation alerting the community about human trafficking and illegal
//                 immigration. Among traffickers' most preferred ways of finding victims is posting fake job
//                 offers online, promising work opportunities, often in far-off lands. Such recruitment and
//                 coercion often occur through targeting on social media.
//                 <br /><br />
//                 The High school campaign outreach and the Hospitality Operators’ Training and Awareness of
//                 human trafficking are the best communication channels to reach the direct vulnerable
//                 beneficiaries. “The trainees will be focal persons to disseminate messages/information about
//                 human trafficking prevention and reporting the cases to their prior authorities.
//                 <br /><br />
//                 Human trafficking remains a global problem that makes people suffer physically and
//                 psychologically during and after transportation victims of human trafficking to other parts of the
//                 world. The government of Rwanda demonstrated overall increasing efforts compared to the
//                 previous years, considering the impact of the COVID-19 pandemic on its anti-trafficking
//                 capacity. For this purpose, Delight Rwanda increased the efforts of national awareness and
//                 prevention campaigns; and organized sustainable care shelters for human trafficking victims.
//                 <br /><br />
//                 For more information call us at (+250) 788 308 617 or <a href={'mailto: delight.rw@gmail.com'}>email: eddie@delightrwanda.org</a>.
//             </p>
//         </div >
//     )
// }

// export default newsFeed
