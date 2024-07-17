// src/utils/api.js

const BASE_URL = 'http://localhost:8082/api';

// Fetch all offers
export const getAllOffers = async () => {
    try {
        const response = await fetch(`${BASE_URL}/offers`);
        if (!response.ok) {
            throw new Error('Failed to fetch offers');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching offers:', error);
        throw error;
    }
};
