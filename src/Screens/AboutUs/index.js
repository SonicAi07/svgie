import React from 'react'
import "./AboutUs.css"
import { NavLink } from 'react-router-dom'

function AboutUs() {
    return (
        <div className='about_us--container'>
            <div className='about_us--title'>
                <span>About Us</span>
            </div>
            <div className='aboutUs--columns'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repudiandae velit, quasi blanditiis quam aut praesentium eligendi voluptates voluptatibus eos architecto fugiat vero magnam. Ad dolore quaerat cupiditate modi cum?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repudiandae velit, quasi blanditiis quam aut praesentium eligendi voluptates voluptatibus eos architecto fugiat vero magnam. Ad dolore quaerat cupiditate modi cum?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repudiandae velit, quasi blanditiis quam aut praesentium eligendi voluptates voluptatibus eos architecto fugiat vero magnam. Ad dolore quaerat cupiditate modi cum?</p>
            </div>
            <div className='aboutUs--trainers'>
                <p>Check out Trainers
                    <NavLink to={'/trainers'}>Trainers</NavLink>
                </p>
            </div>
        </div>
    )
}

export default AboutUs