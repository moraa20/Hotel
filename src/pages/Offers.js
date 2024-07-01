// src/pages/Offers.js

import React from 'react';
import offerImage from '../assets/Images/offerimage.jpg';
import aboutImage from '../assets/Images/about.jpg'

function Offers() {
    return (
        <div className="offers">


            <section className="special-offers" /*style={{ backgroundImage: `url(${aboutImage})` }}*/>
                <div className="offers-container">
                    <h2>Special Offers</h2>

                    <div className="offer">
                        <h3>Stay 3 Nights, Pay for 2</h3>
                        <p>Valid until December 31, 2024</p>
                        <p>Enjoy an extra night on us when you book a 3-night stay.</p>
                    </div>
                    <div className="offer">
                        <h3>Dine with a View</h3>
                        <p>Every Friday & Saturday</p>
                        <p>Experience our rooftop dining with breathtaking city views.</p>
                    </div>
                </div>

                <div className='offer-image'>
                    <img src={offerImage} alt="Offer Image" />
                </div>
            </section>

        </div>
    );
}

export default Offers;
