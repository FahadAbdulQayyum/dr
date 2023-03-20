import React from 'react'

const newsLetter = () => {
    return (
        <div className='newsletter'>
            <div className="container">
                <div className="left">
                    <h3>SHELTERS FOR HOMELESS CHILDREN</h3>
                    <p>
                        Delight Rwanda created a five
                        years project of Shelters for
                        Homeless Children aim to support
                        and take care of street children by
                        providing free daily restaurant,
                        clean water, toilet, bath facilities,
                        accommodation, health care
                        services, mentorship, education,
                        and reintegrating them
                        into their families.<br /><br />
                        Street children have few prospects
                        in life because they are not in
                        school gaining an education and
                        are on the streets begging or
                        taking odd jobs to have enough
                        food to eat. Most suffer from
                        malnutrition and other diseases
                        such as dysentery,
                        malaria and scabies.<br /><br />
                        UNICEF Rwanda estimates that
                        there are about 7,000 street
                        children in the country while close
                        to 300,000 live in families where
                        a minor is the head of the
                        household. The economic
                        challenges, domestic violence,
                        parental irresponsibility, and
                        broken family relationships have
                        exacerbated the situation of street
                        children.<br /><br />
                        On the street, children also suffer
                        from lack of sleep. They rest for
                        only a few hours a day, sleeping
                        on cardboard with one eye open in
                        fear that someone will steal the
                        few things they have. Many risk
                        taking drugs to forget their
                        problems.
                    </p>
                </div>
                <div className="right">
                    <div className="title">
                        <h1>NEWSLETTER</h1>
                        <p>Monday, 20<sup>th</sup> March 2023</p>
                    </div>
                    <h1>PROBLEM STATEMENT</h1>
                    <div className="card">
                        <div className="leftCard">
                            <img src={require('../images/newsletter.png')} alt="" />
                            <small><b><i>
                                Maryam Kiran - Director of
                                Shelters for Homeless Children
                            </i></b>
                            </small>
                        </div>
                        <div className="rightCard">
                            <p>
                                Maryam Kiran, the Director of
                                Shelters for Homeless Children say
                                that they take care from a
                                psychological point of view, we try to
                                listen to these children, to help them
                                to recover slowly from the trauma,
                                and to regain confidence in
                                themselves and others. We want
                                children to be happy, to continue
                                studying and learning to read, but
                                also to play. They receive new clothes
                                and uniforms and regain respect for
                                adults and other children.
                            </p>
                        </div>
                    </div>
                    <div className="right down">
                        <div className="card">
                            <div className="topCard">
                                <img src={require('../images/poster5.png')} alt="" />
                            </div>
                            <div className="bottomCard">
                                <p>
                                    Various interrelated factors leading to the existence of the problem of
                                    street children in Kigali include Poverty, family breakdown, child
                                    abuse, exploitation, and neglect. Many families who are marginalized
                                    economically have become seriously dysfunctional. As a result the
                                    children find themselves in circumstances that result in them leaving
                                    home and engaging in the unprotected and hazardous street life rather
                                    than trying to survive the dysfunctional family environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default newsLetter
