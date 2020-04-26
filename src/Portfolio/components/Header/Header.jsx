/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Header.css'
//import $ from 'jquery'

// sticky navigation menu

const Header = ({ sticky }) => {
    return (
        <header className="header_area">
            <div className={ sticky ? "navbar_fixed main-menu": "main-menu"}>
                <nav className={sticky ? "navbar navbar-expand-md navbar-light navbar-fixed-on-sticky" : "navbar navbar-expand-md navbar-light"}>
                    <Link  to="/" className={ sticky ? "nav-animate" : "navbar-brand"} ><img src={require('../../media/logo.svg')} alt="logo"/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="mr-auto"></div>
                        
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about" >about</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/portfolio" >portfolio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">contact</NavLink>
                                </li>

                            </ul>
                        
                    </div>
                </nav>
            
            </div>
        </header>
        
    );
}

export default Header;