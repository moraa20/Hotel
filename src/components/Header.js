// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import logo from '../assets/Images/logo.png';
import UserMenu from '../pages/UserMenu';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                  {/*  <Link to="/">
                        <img src={logo} alt="Logo" style={{ height: '100px' }} />
                    </Link> */}
                </div>
                <div style={{ marginRight:'auto' }}>
                    <UserMenu />
                </div>
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>


                        <li><Link to="/restaurant">Restaurant and Rooms</Link></li>
                        <li><Link to="/offers">Special Offers</Link></li>

                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/Reviews">Guest Reviews</Link></li>
                    </ul>

                </nav>

                {/* <div className="header-actions">
                    <Link to="/login" className="btn">Login</Link>
                    <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                </div> */}
            </div>
        </header>
    );
}

export default Header;
