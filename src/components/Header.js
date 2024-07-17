// src/components/Header.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Header.css';
import UserMenu from '../pages/UserMenu';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    {/* Logo here */}
                </div>
                <div style={{ marginRight: 'auto' }}>
                    <UserMenu />
                </div>
                <nav className="nav">
                    <ul>
                        <li><NavLink exact to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>About Us</NavLink></li>
                        <li><NavLink to="/restaurant" className={({ isActive }) => (isActive ? 'active-link' : '')}>Restaurant and Rooms</NavLink></li>
                        <li><NavLink to="/offers" className={({ isActive }) => (isActive ? 'active-link' : '')}>Special Offers</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>Contact Us</NavLink></li>
                        <li><NavLink to="/reviews" className={({ isActive }) => (isActive ? 'active-link' : '')}>Guest Reviews</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
