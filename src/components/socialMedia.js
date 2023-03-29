import React from 'react'

const socialMedia = () => {
    return (
        <div className='socialMedia'>
            <div className="img">
                <span style={{ marginRight: '-100px' }}>
                    <img src={require('../images/gallery1.jpeg')} alt="" />
                    <br /><small style={{ width: '500px' }}><b>Mr. Eduard the Chairman of Delight Rwanda received foreigner children, A session giving them a briefing introduction lesson on Anti-Human trafficing.</b></small>
                </span>
                <span>
                    <img src={require('../images/gallery2.jpeg')} alt="" />
                    <br /><small><b>Mr. Eduard explaining the concept vision of Delight Rwanda to a foreigner kid.</b></small>
                </span>
            </div>
            <div className="img">
                <span>
                    <img src={require('../images/gallery3.jpeg')} style={{ height: '70%', width: '80%' }} alt="" />
                    <br /><small><b>Mr. Eduard giving a free gift a mobile phone to a deserved person.</b></small>
                </span>
                <span>
                    <img src={require('../images/sc3.jpeg')} alt="" />
                </span>
            </div>
            <div className="img">
                <span>
                    <img src={require('../images/sc4.jpeg')} alt="" />
                </span>
                <span>
                    <img src={require('../images/sc5.jpeg')} alt="" style={{ height: '70%', width: '80%' }} />
                </span>
            </div>
            <div className="img">
                <span>
                    <img src={require('../images/sc2.jpeg')} alt="" />
                </span>
            </div>
            <img src={require('../images/sc1.jpeg')} alt="" />
        </div >
    )
}

export default socialMedia
