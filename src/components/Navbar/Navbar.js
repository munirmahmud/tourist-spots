import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import './navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/"><img src={logo} alt="Logo" /></Link>

            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/tours">Tours</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
