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
                <p>Welcome to our community-driven initiative dedicated to revolutionizing the education system through the power of knowledge sharing. At our core, we believe that time is the true currency of progress, and we are committed to harnessing this invaluable resource to bring about positive change.</p>
                <p>Our mission is simple yet profound – we aim to address the challenges in the education system by fostering collaboration across diverse communities. Here, people from various backgrounds come together to share their expertise, focusing on two essential pillars: mastering JavaScript Full Stack development and mastering Data Structures and Algorithms with C++.</p>
                <p>What sets us apart is our unwavering commitment to innovation. We recognize that the future of education lies in projects that challenge the status quo and push the boundaries of what is possible. By engaging in hands-on, real-world projects, our community members not only deepen their knowledge but also contribute to the evolution of education itself.</p>
                <p>Join us on this journey where passion meets purpose, and where the collective effort of individuals transcends the limitations of traditional educational models. Together, we are shaping a future where learning knows no bounds, fueled by the collaborative spirit of those who believe in the transformative power of shared knowledge. Time is our currency, and innovation is our language – welcome to a community where education evolves through the art of collective wisdom.</p>
            </div>
            {/* <div className='aboutUs--trainers'>
                <p>Check out Trainers
                    <NavLink to={'/trainers'}>Trainers</NavLink>
                </p>
            </div> */}
        </div>
    )
}

export default AboutUs