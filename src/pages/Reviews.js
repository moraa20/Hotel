import React from "react";
import aboutImage from '../assets/Images/about.jpg'

function Reviews() {

    return (
        <div className="reviews">

            <section className="testimonials" /*style={{ backgroundImage: `url(${aboutImage})` }}*/>

                <h2>Guest Reviews</h2>
                <div className="review">
                    <p>"Great experience! The staff was friendly and the room was fantastic."</p>
                    <p>- John Doe</p>
                </div>
                <div className="review">
                    <p>"Excellent food and ambiance. Will definitely visit again!"</p>
                    <p>- Jane Smith</p>
                </div>

            </section>
        </div>
    );
}

export default Reviews;