// StarRating.js
import React, { useState } from 'react';
import Star from './Star';

const StarRating = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const handleClick = (index) => {
        setRating(index + 1);
    };

    const handleMouseEnter = (index) => {
        setHoverRating(index + 1);
    };

    const handleMouseLeave = () => {
        setHoverRating(0);
    };

    return (
        <div>
            {[...Array(totalStars)].map((star, index) => (
                <Star
                    key={index}
                    filled={index < (hoverRating || rating)}
                    onClick={() => handleClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                />
            ))}
            <p>{rating} of {totalStars} stars</p>
        </div>
    );
};

export default StarRating;
