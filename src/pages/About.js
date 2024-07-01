import React from "react";
import hotelImage from '../assets/Images/aboutimage.jpg';
import aboutImage from '../assets/Images/about.jpg';


function About() {
    return (

        <section id="about" className="about-us"/* style={{ backgroundImage: `url(${aboutImage})` }}*/>
            <div className="about-container">
                <h2>Our Story </h2>
                <p>Welcome to Sunset Serenity, where luxury meets comfort in the heart of Nairobi.</p>
                <p>Nestled amidst beautiful buildings, our establishment prides itself on providing an unforgettable experience for every guest.</p>
                <p> Whether you're here for a relaxing getaway, a culinary adventure at our esteemed restaurant, or a seamless business stay,</p>
                <p> our dedicated team ensures impeccable service tailored to your needs.</p>
                <p> Discover a sanctuary of elegance and charm, where every detail reflects our commitment to excellence.</p>
                <p>Our hotel boasts luxurious rooms with stunning city views,a rooftop terrace, a state-of-the-art fitness center and exceptional dining experiences.</p>
                <p>Welcome to Sunset Serenity, your home away from home.</p>

            </div>

            <div className="hotel-image">
                <img src={hotelImage} alt="About Us Image"/>

            </div>
        </section>
        
    );
}

export default About;