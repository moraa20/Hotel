// src/pages/Restaurant.js

import React from 'react';
import aboutImage from '../assets/Images/about.jpg';

function Restaurant() {
    return (

        <div className='my-container'>
            <section className='my-restaurant'/*</div> style={{ backgroundImage: `url(${aboutImage})` }}*/>
                <div className="restaurant">
                    <h2>Our Restaurant</h2>
                    <p>Discover the convenience of dining at Sunset Serenity with our effortless reservation system.</p>
                    <p> Whether you're planning an intimate dinner for two or a larger gathering, we offer both online booking through our user-friendly platform and personalized assistance via phone.</p>
                    <p> Our restaurant accommodates various group sizes, ensuring each guest enjoys a tailored dining experience.</p>
                    <p> From private dining options to special event arrangements, we cater to all occasions with bespoke menus crafted to delight every palate.</p>
                    <p> Expect attentive service and a warm ambiance, complemented by our commitment to your health and safety.</p>
                   
                </div>

                <button className="book-button" onClick={() => alert('Book a Table')}>Book a Table</button>
            </section>

            <section className="my-rooms"/* style={{ backgroundImage: `url(${aboutImage})` }}*/>
                <div className="rooms">
                    <h2>Deluxe King Rooms</h2>
                    <p>Welcome to our Deluxe King Room, where luxury and comfort meet to create an unforgettable stay.</p>
                    <p>Perfectly designed for both relaxation and productivity, our Deluxe King Room offers a serene escape amidst the bustling city.</p>
                    <h3>Room Features</h3>
                    <ul>
                        Luxurious King Bed ,
                        Modern Bathroom <br></br>
                        High-Speed Wi-Fi,
                        Smart TV,
                        Work space<br></br>
                        Minibar and coffee maker,
                        Complimentary breakfast<br></br>
                        Fitness centre access,
                        Room service<br></br>
                        City views,
                        Pet-friendly
                    </ul>

                </div>
                <button className="book-button" onClick={() => alert('Book a Room')}>Book a Room</button>
            </section>
        </div>
    );
}

export default Restaurant;
