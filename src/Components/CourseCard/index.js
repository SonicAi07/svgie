import React, { useRef } from 'react'
import "./CourseCard.css"
import { useEffect } from 'react'
import { useState } from 'react'

function CourseCard(props) {

    const tileRef = useRef(null)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {

        if (tileRef.current !== null) {
            window.addEventListener('scroll', () => {
                if (tileRef.current !== null) {
                    if (tileRef.current.getBoundingClientRect().top <= 450) {
                        setIsActive(true)
                    }
                    else {
                        setIsActive(false)
                    }
                }
            })
        }

    }, [tileRef])

    return (
        <div className={isActive ?
            props.number % 2 === 0 ?
                'course_container--course-card course--move-left-normal' :
                'course_container--course-card course--move-right-normal'
            :
            props.number % 2 === 0 ?
                'course_container--course-card course--move-left' :
                'course_container--course-card course--move-right'}
            style={{ flexDirection: (Number.parseInt(props.Id) % 2 === 0 ? "row-reverse" : "row") }}
            ref={tileRef}
        >
            <div className='course-card--image'>
                <img src={props.uri} alt={props.title} />
            </div>
            <div className='course-card--details'>
                <span>{props.title}</span>
                <p>{props.description}</p>
                <div className='course-card--features'>
                    <span>Key Features</span>
                    {
                        props.keyFeatures.map((item, index) => {
                            return (<li key={index}>{item}</li>)
                        })
                    }
                </div>
            </div>
            {
                props.youtubeURL === '' ?
                    <a href={"/"}>Coming Soon</a>
                    :
                    <a href={props.youtubeURL} target='blank'>Go To Playlist</a>
            }
        </div>
    )
}

export default CourseCard