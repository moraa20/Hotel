// LoginForm.js
/*
import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with actual login logic
        if (email === 'user@example.com' && password === 'password') {
            // Successful login
            alert('Login successful!');
            navigate('/'); // Navigate to home page
        } else {
            // Failed login
            alert('Invalid email or password');
        }
    };

    return (
        <div className='login-form'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='login-input'>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='login-input'>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className='login-button'>Login</button>
            </form>
            <p className='paragraph'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
};

export default LoginForm;
*/