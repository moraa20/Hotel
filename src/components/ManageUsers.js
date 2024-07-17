import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/ManageUsers.css';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8082/api/auth/user');
                setUsers(response.data); // Assuming response data is an array of users
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleDeleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8082/api/auth/user/${id}`);
            setUsers(users.filter(user => user._id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <p>Loading users...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className='user-booking'>
            <div className="container">
                <h2 className="title">Manage Users</h2>
                <ul className="list">
                    {users.map(user => (
                        <li key={user._id} className="list-item">
                            <span className="user-info">
                                {user.username} - {user.email}
                            </span>
                            <button onClick={() => handleDeleteUser(user._id)} className="delete-button">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ManageUsers;
