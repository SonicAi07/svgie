import React from 'react'
import "./Trainers.css"

import LinkedInIcon from '../../Assets/linkedin.png'
import SearchIcon from '../../Assets/search.png'
import GmailIcon from '../../Assets/gmail.png'


function Trainers() {
    return (
        <div className='trainers--container'>
            <div className='trainers--center-div'>
                <div className='trainers--search-span'>
                    <div className='trainers--title'>
                        <span>Trainers</span>
                    </div>
                    <div className='trainers--search'>
                        <input
                            type='text'
                            name='search'
                            id='search'
                            placeholder='Search the Trainer'
                        />
                        <img src={SearchIcon} alt='search' />
                    </div>
                </div>
                <div className='trainers--content'>
                    <div className='trainers--profile-card'>
                        <div className='trainers-profile-card--image'>
                            <img src={'https://upload.wikimedia.org/wikipedia/commons/1/1e/User_%281%29.png'} alt='tariner' />
                        </div>
                        <div className='trainers-profile-card--details'>
                            <div className='trainers-profile-card-details--name'>
                                <span>Md Ilyas Hussain Taj</span>
                            </div>
                            <div className='trainers-profile-card-details--social-media'>
                                <a href={`mailto:ilyas@gmail.com`} target='blank'>
                                    <img src={GmailIcon} alt='gmail' title='@gmail.com' />
                                </a>
                                <a href='/' target='blank'>
                                    <img src={LinkedInIcon} alt='linkedin' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='trainers--profile-card'>
                        <div className='trainers-profile-card--image'>
                            <img src={'https://upload.wikimedia.org/wikipedia/commons/1/1e/User_%281%29.png'} alt='tariner' />
                        </div>
                        <div className='trainers-profile-card--details'>
                            <div className='trainers-profile-card-details--name'>
                                <span>Name</span>
                            </div>
                            <div className='trainers-profile-card-details--social-media'>
                                <img src={GmailIcon} alt='gmail' />
                                <a href='/' target='blank'>
                                    <img src={LinkedInIcon} alt='linkedin' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='trainers--profile-card'>
                        <div className='trainers-profile-card--image'>
                            <img src={'https://upload.wikimedia.org/wikipedia/commons/1/1e/User_%281%29.png'} alt='tariner' />
                        </div>
                        <div className='trainers-profile-card--details'>
                            <div className='trainers-profile-card-details--name'>
                                <span>Name</span>
                            </div>
                            <div className='trainers-profile-card-details--social-media'>
                                <img src={GmailIcon} alt='gmail' />
                                <a href='/' target='blank'>
                                    <img src={LinkedInIcon} alt='linkedin' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='trainers--profile-card'>
                        <div className='trainers-profile-card--image'>
                            <img src={'https://upload.wikimedia.org/wikipedia/commons/1/1e/User_%281%29.png'} alt='tariner' />
                        </div>
                        <div className='trainers-profile-card--details'>
                            <div className='trainers-profile-card-details--name'>
                                <span>Name</span>
                            </div>
                            <div className='trainers-profile-card-details--social-media'>
                                <img src={GmailIcon} alt='gmail' />
                                <a href='/' target='blank'>
                                    <img src={LinkedInIcon} alt='linkedin' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trainers