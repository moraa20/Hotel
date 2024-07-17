import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8082/api/auth';

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Login failed');
    }
};

export const signup = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Signup failed');
    }
};
