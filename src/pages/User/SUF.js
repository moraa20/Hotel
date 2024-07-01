// SignupForm.js
/*
import React, { useState } from 'react';
import { Routes,Route,Link, useNavigate} from 'react-router-dom';

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate signup (replace with actual signup logic)
        if (email && password) {
            // Successful signup
            alert('Signup successful!');
            navigate('/'); // Redirect to home page
        } else {
            // Failed signup
            alert('Please enter valid email and password');
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default SignupForm;
*/