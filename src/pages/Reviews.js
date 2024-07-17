// src/components/Reviews.js

import React, { useState, useEffect } from 'react';
import '../Styles/Reviews.css';
import { getAllReviews, addReview } from '../Utils/reviewApi';

function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const data = await getAllReviews();
            setReviews(data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newReview = await addReview({ name, comment });
            setReviews([...reviews, newReview]); // Update state with new review
            setName('');
            setComment('');
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    return (
        <div className="reviews">
            <section className="testimonials">
                <h2>Guest Reviews</h2>
                {reviews.length === 0 ? (
                    <p>No reviews yet.</p>
                ) : (
                    reviews.map((review) => (
                        <div key={review._id} className="review">
                            <p>"{review.comment}"</p>
                            <p>- {review.name}</p>
                        </div>
                    ))
                )}
                <form onSubmit={handleSubmit}>
                    <h3>Add Your Review</h3>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Your Review"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                    <button type="submit">Submit Review</button>
                </form>
            </section>
        </div>
    );
}

export default Reviews;
