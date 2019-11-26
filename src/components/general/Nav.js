import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import images from '../general/Images';
import SwipeableTemporaryDrawer from "./Swipe"; // Calls on the function SwipeableTemporaryDrawer from Swipe

// Navbar component
export default class Nav extends Component {
    render() {
        return(
            <nav className="brown darken-4" role="navigation">
                <div className="nav-wrapper container">
                    <Link to={"/"} id="logo-container" className="brand-logo">
                        <img className="navLogo" alt="dftitle" src={images.title}/>
                    </Link>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink exact activeClassName="active" to={"/"} href="#">Home</NavLink></li>
                        <li><NavLink  to={"/about"} >About</NavLink></li>
                        <li><NavLink  to={"/log/2019"}>Development Log</NavLink></li>
                        <li><a href="http://www.bay12forums.com/smf/" target="_blank">Forums</a></li>
                        <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    </ul>
                    <SwipeableTemporaryDrawer/>
                </div>
            </nav>
        )
    }
}
