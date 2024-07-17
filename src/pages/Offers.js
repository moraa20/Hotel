import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Offers.css';

const Offers = () => {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const response = await axios.get('http://localhost:8082/api/offers');
                setOffers(response.data);
            } catch (error) {
                console.error('Error fetching offers:', error);
            }
        };

        fetchOffers();
    }, []);

    return (
        <div className="offers">
            <h2>Special Offers</h2>
            {offers.length === 0 ? (
                <p>No offers available</p>
            ) : (
                <div className="offers-list">
                    {offers.map((offer) => (
                        <div key={offer._id} className="offer">
                            <h3>{offer.title}</h3>
                            <p>Valid until {new Date(offer.validUntil).toLocaleDateString()}</p>
                            <p>{offer.description}</p>
                            <p>Type: {offer.type}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Offers;
