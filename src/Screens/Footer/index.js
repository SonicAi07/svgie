import React from 'react'
import "./Footer.css"
import Facebook from '../../Assets/facebook.png'
import Instagram from '../../Assets/instagram.png'
import LinkedIn from '../../Assets/linkedin.png'
import Twitter from '../../Assets/twitter.png'

function Footer() {
    return (
        <div className="footer--container">
            <div className="footer--title">
                <span>Find Us On</span>
            </div>
            <div className="footer--media">
                <img src={Facebook} alt='facebook' />
                <img src={Instagram} alt='instagram' />
                <img src={LinkedIn} alt='linkedin' />
                <img src={Twitter} alt='twitter' />
            </div>
            <div className="footer--content">
                <span>Powered by <a href="https://www.youtube.com/@svgie2047"
                    target="blank">SVGIE</a></span>
            </div>
        </div>
    )
}

export default Footer