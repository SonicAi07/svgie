import React, { useState, useRef, useEffect } from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'
import SVGIELOGO from '../../Assets/swami-vivekananda.png'

function Home() {

    const textRef = useRef(null)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (textRef.current !== null) {
            window.addEventListener('scroll', () => {
                if (textRef.current !== null) {
                    if (textRef.current.getBoundingClientRect().top <= -696) {
                        setIsActive(true)
                    }
                    else {
                        setIsActive(false)
                    }
                }
            })
        }

    }, [textRef])

    return (
        <div className='home--container' ref={textRef}>
            {
                !isActive ?
                    <div className='home--logo'>
                        <span>SVGIE</span>
                        <p>Swami Vivekanada Great Indian Education</p>
                        <label>Follow us on Youtube</label>
                        <a href='https://www.youtube.com/@svgie2047' target='blank'>Click Here</a>
                    </div>
                    :
                    <Header />
            }
            <div className='home--svgie-image'>
                <img src={SVGIELOGO} alt='logo' />
            </div>
        </div>
    )
}

export default Home


export function Header() {
    return (
        <div className='home--header'>
            <div className='home--title'>
                <span>SVGIE</span>
            </div>
            <div className='home--navigations'>
                <ul>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/trainers'}>Trainers</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}