// src/utils/reviewApi.js

const BASE_URL = 'http://localhost:8082/api';

// Helper function to handle API requests
const handleResponse = async (response) => {
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
    }
    return response.json();
};

// Fetch all reviews
export const getAllReviews = async () => {
    const response = await fetch(`${BASE_URL}/reviews`);
    return handleResponse(response);
};

// Add a new review
export const addReview = async (review) => {
    const response = await fetch(`${BASE_URL}/reviews`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
    });
    return handleResponse(response);
};
