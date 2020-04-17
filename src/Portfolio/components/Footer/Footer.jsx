import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
 
const Footer = () => {
    return(
        <footer className="footer-area">
            <div className="container">
            <div className="site-logo text-center py-4">
                    <Link href="#"><img src={require("../../media/logo.png")} alt="logo"/></Link>
            </div>
                <div className="social text-center">
                    <h5 className="text-uppercase">Follow me</h5>
                    <a href="https://www.facebook.com/fabricio.chamba"><FontAwesomeIcon icon={faFacebook}  className="i"/></a>
                    <a href="https://www.linkedin.com/in/jhonny-fabricio-chamba-lópez"><FontAwesomeIcon icon={faLinkedin} className="i"/></a>
                    <a href="https://github.com/Fabrizzio94"><FontAwesomeIcon icon={faGithub} className="i"/></a>
                    <a href="https://twitter.com/jhonny_fabri"><FontAwesomeIcon icon={faTwitter} className="i" /></a>
                </div>
                <div className="copyrights text-center">
                    <p className="para">
                        Copyright 2020 All rights reserved | This template is made with by 
                        <Link href="#"><span>Daily Tuit</span></Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;