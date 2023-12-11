import React from 'react'
import "./Courses.css"
import CourseCard from '../../Components/CourseCard'
import CoursesData from '../../Data/index.json'

function Courses() {

    return (
        <div className='courses'>
            <div className='courses-title'>
                <span>Courses</span>
            </div>
            {
                CoursesData.Courses.filter(item => item.isActive).map((item, index) => {
                    return <CourseCard
                        key={index}
                        number={index}
                        Id={item.Id}
                        title={item.title}
                        uri={item.uri}
                        description={item.description}
                        keyFeatures={item.keyFeatures}
                        youtubeURL={item.youtubeURL}
                    />
                })
            }

        </div>
    )
}

export default Courses