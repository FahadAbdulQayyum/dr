import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import sc1 from '../images/imgLogo1.png'//blueForce - fine
import sc2 from '../images/imgLogo2.png'//jh it - fine
import sc3 from '../images/imgLogo3.png'//ahmed 
import sc4 from '../images/imgLogo4.png'//maryam
import sc5 from '../images/opd21.png'//british
import sc6 from '../images/opd41.png'//reb - fine
import sc7 from '../images/opd51.png'//multihands - fine

const Partner = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.7
        }
    };
    return (
        <div className='carousel'>
            <h2 style={{ textAlign: 'center' }}>Partners and Donors</h2>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
            >
                <div>
                    <img src={sc1} alt="" />
                </div>
                <div>
                    <img src={sc2} alt="" />
                </div>
                <div>
                    <img src={sc3} alt="" />
                </div>
                <div>
                    <img src={sc4} alt="" />
                </div>
                <div>
                    <img src={sc5} alt="" />
                </div>
                <div>
                    <img src={sc6} alt="" />
                </div>
                <div>
                    <img src={sc7} alt="" />
                </div>
                <div>
                    <img src={sc1} alt="" />
                </div>
                <div>
                    <img src={sc2} alt="" />
                </div>
                <div>
                    <img src={sc3} alt="" />
                </div>
                <div>
                    <img src={sc4} alt="" />
                </div>
                <div>
                    <img src={sc5} alt="" />
                </div>
                <div>
                    <img src={sc6} alt="" />
                </div>
                <div>
                    <img src={sc7} alt="" />
                </div>
                <div>
                    <img src={sc1} alt="" />
                </div>
                <div>
                    <img src={sc2} alt="" />
                </div>
                <div>
                    <img src={sc3} alt="" />
                </div>
                <div>
                    <img src={sc4} alt="" />
                </div>
                <div>
                    <img src={sc5} alt="" />
                </div>
                <div>
                    <img src={sc6} alt="" />
                </div>
                <div>
                    <img src={sc7} alt="" />
                </div>
                <div>
                    <img src={sc1} alt="" />
                </div>
                <div>
                    <img src={sc2} alt="" />
                </div>
                <div>
                    <img src={sc3} alt="" />
                </div>
                <div>
                    <img src={sc4} alt="" />
                </div>
                <div>
                    <img src={sc5} alt="" />
                </div>
                <div>
                    <img src={sc6} alt="" />
                </div>
                <div>
                    <img src={sc7} alt="" />
                </div>
                <div>
                    <img src={sc1} alt="" />
                </div>
                <div>
                    <img src={sc2} alt="" />
                </div>
                <div>
                    <img src={sc3} alt="" />
                </div>
                <div>
                    <img src={sc4} alt="" />
                </div>
                <div>
                    <img src={sc5} alt="" />
                </div>
                <div>
                    <img src={sc6} alt="" />
                </div>
                <div>
                    <img src={sc7} alt="" />
                </div>
                <div>
                    <img src={sc1} alt="" />
                </div>
                <div>
                    <img src={sc2} alt="" />
                </div>
                <div>
                    <img src={sc3} alt="" />
                </div>
                <div>
                    <img src={sc4} alt="" />
                </div>
                <div>
                    <img src={sc5} alt="" />
                </div>
                <div>
                    <img src={sc6} alt="" />
                </div>
                <div>
                    <img src={sc7} alt="" />
                </div>
                <div>
                    <img src={sc1} alt="" />
                </div>
                <div>
                    <img src={sc2} alt="" />
                </div>
                <div>
                    <img src={sc3} alt="" />
                </div>
                <div>
                    <img src={sc4} alt="" />
                </div>
                <div>
                    <img src={sc5} alt="" />
                </div>
                <div>
                    <img src={sc6} alt="" />
                </div>
                <div>
                    <img src={sc7} alt="" />
                </div>
                <div>
                    <img src={sc1} alt="" />
                </div>
                <div>
                    <img src={sc2} alt="" />
                </div>
                <div>
                    <img src={sc3} alt="" />
                </div>
                <div>
                    <img src={sc4} alt="" />
                </div>
                <div>
                    <img src={sc5} alt="" />
                </div>
                <div>
                    <img src={sc6} alt="" />
                </div>
                <div>
                    <img src={sc7} alt="" />
                </div>
                <div>
                    <img src={sc1} alt="" />
                </div>
                <div>
                    <img src={sc2} alt="" />
                </div>
                <div>
                    <img src={sc3} alt="" />
                </div>
                <div>
                    <img src={sc4} alt="" />
                </div>
                <div>
                    <img src={sc5} alt="" />
                </div>
                <div>
                    <img src={sc6} alt="" />
                </div>
                <div>
                    <img src={sc7} alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export default Partner