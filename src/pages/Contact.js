import React from "react";
import aboutImage from '../assets/Images/about.jpg';


function Contact() {

    return (
        <section className="contact-us" /*style={{ backgroundImage: `url(${aboutImage})` }}*/>
            <div className="contact">
                <h2>Contact Us</h2>
                <p>Sunset St ,Westlands, Nairobi, Kenya</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@sunsetserenity.com</p>
            </div>
        </section>
    );
}

export default Contact;