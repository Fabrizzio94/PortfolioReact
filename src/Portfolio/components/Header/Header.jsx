/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Header.css'
// import { Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <header className="header_area">
            <div className="main-menu">
                <nav className="navbar navbar-expand-md navbar-light">
                    <Link  to="/" className="navbar-brand" href=""><img src={require('../../media/logo.png')} alt="logo"/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="mr-auto"></div>
                        
                            <ul className="navbar-nav">
                                <li className="nav-item ">
                                    <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" to="/about">about</NavLink>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/portfolio">portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">contact</Link>
                                </li>

                            </ul>
                        
                    </div>
                </nav>
            
            </div>
        </header>
        
    );
}

export default Header;