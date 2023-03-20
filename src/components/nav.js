import React from 'react'
import { Link } from 'react-router-dom'

const nav = () => {
    const onMouseOver = () => {
        document.getElementById('subNav').style.display = 'flex'
    }
    const onMouseOver1 = () => {
        document.getElementById('subNav1').style.display = 'flex'
    }
    const onMouseOver2 = () => {
        document.getElementById('subNav2').style.display = 'flex'
    }
    const disappear = () => {
        document.getElementById('subNav').style.display = 'none'
        document.getElementById('subNav1').style.display = 'none'
        document.getElementById('subNav2').style.display = 'none'
    }
    const disappear1 = () => {
        document.getElementById('subNav').style.display = 'none'
        document.getElementById('subNav1').style.display = 'none'
        document.getElementById('subNav2').style.display = 'none'
        if (window.matchMedia("(max-width: 440px)").matches) {
            console.log('mobile version')
            document.getElementById('navbar').style.display = 'none'
            setTimeout(() => {
                document.getElementById('navbar').style.display = 'flex'
            }, 200);
        }
    }
    const goHome = (e) => {
        window.location.href = '/' + e.target.hash;;
    }
    return (
        <div className="container">
            <nav
                onClick={console.log('clicked')}
            >
                <ul id='navbar'>
                    <li onClick={disappear1}>
                        <a href="/#homeSection">
                            Home
                        </a>
                    </li>
                    <li onMouseOver={onMouseOver} onMouseOut={disappear}>
                        <Link to={'/'}>About Us</Link>
                        <ul className='subNav' id='subNav'
                        >
                            <li onClick={disappear1}>
                                <a href="/#aboutSection">Who We Are</a>
                            </li>
                            <li onClick={disappear1}>
                                <Link to={'/boardOfDirectors'}>Board Of Directors</Link>
                            </li>
                            <li onClick={disappear1}>
                                <Link to={'/ourTeam'}>Our Teams</Link>
                            </li>
                            <li onClick={disappear1}>
                                <Link to={'/annualReports'}>Annual Reports</Link>
                            </li>
                            <li onClick={disappear1}>
                                <Link to={'/msgFromCeo'}>Message From Chairman</Link>
                            </li>
                        </ul>
                    </li>
                    <li onMouseOver={onMouseOver1} onMouseOut={disappear}>
                        <a href="#">Our Programs</a>
                        <ul className='subNav' id='subNav1'
                        >
                            <li onClick={disappear1}>
                                <Link to={"/ourPrograms"}> Behavior Change Communications</Link>
                            </li>
                            <li onClick={disappear1}>
                                <Link to={"/ourPrograms"}> Women Economic Empowerment</Link>
                            </li>
                            <li onClick={disappear1}>
                                <Link to={"/ourPrograms"}> Youth Capacity Building</Link>
                            </li>
                        </ul>
                    </li>
                    <li onClick={disappear1}>
                        <Link to={"/whatWeDo"}>What We Do</Link>
                    </li>
                    <li onMouseOver={onMouseOver2} onMouseOut={disappear}>
                        <a href="#">Media</a>
                        <ul className='subNav' id='subNav2'
                        >
                            <li onClick={disappear1} className='pressReleaseSubNav'>
                                <Link to={"/pressRelease"}>Press Release</Link>
                            </li>
                            <li onClick={disappear1} className='pressReleaseSubNav'>
                                <Link to={"/socialMedia"}>Gallery</Link>
                            </li>
                            <li onClick={disappear1} className='pressReleaseSubNav'>
                                <Link to={"/newsLetter"}>News Letters</Link>
                            </li>
                        </ul>
                    </li>
                    <li onClick={disappear1}>
                        <Link to={"/donationPage"}>Donate Us</Link>
                    </li>
                    <li onClick={disappear1}>
                        <a href="#contactUsSection" onClick={goHome}>Contact Us</a>
                    </li>
                </ul>
            </nav >
            <div className="logo btn">
                <Link to="/form">
                    <p>
                        Get Involved
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default nav;