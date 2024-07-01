// src/components/Hero.js

import React from 'react';
import '../Styles/Hero.css';
import heroImage from '../assets/Images/hero-image.jpg';

function Hero() {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-content">
                <h1>Welcome to Sunset Serenity</h1>
                <p>Experience luxury and comfort like never before.</p>
                <a href="#about" className="btn btn-primary">Explore More</a>
            </div>
        </section>
    );
}

export default Hero;
