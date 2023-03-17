import React from 'react'
import MakeAGift1 from './makeAGift1'

const donationPage = () => {
    return (
        <div>
            <h2 className='hd'> Always Help Poor & Deserved People</h2>
            <div className='donationPage'>
                <div className="left">
                    <div className="img">
                        <img src={require('../images/poster1.png')} alt="" />
                        <b><small>Donate a safe toilet for People with Disabilities</small></b>
                    </div>
                    <h1>Donate</h1>
                    <p className='deco'>
                        Your Donation can build and install 417 safe toilets for People
                        with Disabilities in rural area of Rwanda.
                        <br />
                        <br />
                        Access to convenient and comfortable public toilet facilities
                        remains a significant challenge for many people in Rwanda
                        who live with various forms of physical disability. In many
                        communities, latrines are not designed and placed in a way
                        that is easily accessible to this vulnerable group.
                        <br />
                        <br />
                        It is difficulty to use toilets not designed for people with
                        disability, especially ladies. “We do not have enough
                        adaptable toilets and sanitary disposal facilities for them.
                        <br />
                        <br />
                        People with disability need extra care, especially ladies who
                        need clean and accessible toilets at all times, especially during
                        menstruation.
                    </p>
                    <div className="img">
                        <img src={require('../images/poster2.png')} alt="" />
                        <b><small>It’s time to act!</small></b>
                    </div>
                    <h1>Donate</h1>
                    <p className='deco'>
                        Our organization has been actively involved in making a
                        difference in people’s lives, in their times of need. At
                        present we are implementing Wiceceka Human
                        Trafficking Project (Don’t keep quiet human trafficking)
                        aims to alert young people about Human Trafficking and
                        support the victims.
                        <br />
                        <br />
                        Support our project of preventing Human Trafficking and
                        illegal immigration. Join online/digital awareness
                        campaign, outreach campaign of 356 high schools, and
                        195 hotel training and awareness of human trafficking.
                    </p>
                    <div className="img">
                        <img src={require('../images/poster3.png')} alt="" />
                        <b><small>Empowered Woman, Empowered Family</small></b>
                    </div>
                    <h1>Donate</h1>
                    <p className='deco'>
                        Donate at least one woman access to finance. The project has
                        empowered over 200 women to take control of their financial
                        futures. Your donation will contribute to their advocacy and
                        financial access through farming, trading, vocational and technical
                        training.
                        <br />
                        <br />
                        Before women are granted financial support, they must complete a
                        three-month training program teaching basic business guidelines
                        (how to determine business income, make personal savings for
                        future expenses, and the benefits of reinvesting profits into
                        businesses) and healthy, day-to-day living strategies
                        <br />
                        <br />
                        Through this project, women are obliged to open up an account
                        with micro-finance and get financed with $150 as startup capital.
                        <br />
                        <br />
                        More than 89% of the beneficiaries gradually increased the
                        business profit to $740 in one year. Even illiterate mothers who
                        lack formal education can start successful small businesses, and
                        generate a steady source of income for their families.
                    </p>
                </div>
                <div className="right">
                    <div className="img">
                        <img src={require('../images/poster4.png')} alt="" />
                        <b><small>Donate for a positive future for Teen Mothers</small></b>
                    </div>
                    <p className='deco'>
                        Supporting Teenage Mothers is changing their future positively!
                        We are seeking any donation for 102 teen mothers to resume their
                        primary and high school studies. The number of school drop-out of
                        teen mothers is increasing and needs action. Join the Delight
                        Rwanda initiative of providing school fees, materials, counseling,
                        and technical training for school drop-out teen mothers.
                        <br />
                        <br />
                        The project empowers adolescents and young people to end
                        teenage pregnancy and sexual violence in Rwanda through training
                        and transformation, support them and their heads of households
                        financially, morally, and psychologically those who have faced the
                        consequences of teen pregnancies, sexual violence, and others
                        issues related to sexual and reproductive health.
                        <br />
                        <br />
                        Through this project, women are obliged to open up an account
                        with micro-finance and get financed with $150 as startup capital.
                        <br />
                        <br />
                        More than 89% of the beneficiaries gradually increased the
                        business profit to $740 in one year. Even illiterate mothers who
                        lack formal education can start successful small businesses, and
                        generate a steady source of income for their families.
                    </p>
                    <div className="img">
                        <img src={require('../images/poster5.png')} alt="" />
                        <b><small>Shelter for Homeless Children</small></b>
                    </div>
                    <p className='deco'>
                        Delight Rwanda supports street children of Kigali,
                        Rwanda to get daily free restaurant/food, clean drinking
                        water, health care services, toilets, bath facilities,
                        accommodation, mentorship, and takes them back to
                        school. The number of children in our shelter for
                        homeless children is still increasing year by year.
                        <br />
                        <br />
                        Shelter for Homeless Children has improved the lives of
                        street children by reintegrating them into families or
                        foster care and supporting them to have access to
                        education, supporting their families to acquire technical
                        and vocational training for future self-reliance.
                        <br />
                        <br />
                    </p>
                    <div className="quote">
                        <q>
                            When Allah blesses you financially, don’t
                            raise your standard of living, raise your
                            standard of giving.
                        </q>
                        - Anonymous
                    </div>
                    <img src={require('../images/poster6.png')} alt="" />
                    <h1>Donate</h1>
                </div>
            </div>
            <MakeAGift1 />
        </div>
    )
}

export default donationPage
