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
                    <Link to="/"><img src={require("../../media/logo.svg")} alt="logo"/></Link>
            </div>
                <div className="social text-center">
                    <h5 className="text-uppercase">Follow me</h5>
                    <a href="https://www.facebook.com/fabricio.chamba" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faFacebook}  className="i"/></a>
                    <a href="https://www.linkedin.com/in/jhonny-fabricio-chamba-lópez" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faLinkedin} className="i"/></a>
                    <a href="https://github.com/Fabrizzio94" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faGithub} className="i"/></a>
                    <a href="https://twitter.com/jhonny_fabri" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faTwitter} className="i" /></a>
                </div>
                <div className="copyrights text-center">
                    <p className="para">
                        Copyright © 2020 All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;