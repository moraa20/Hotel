import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/ManageBookings.css';

const ManageBookings = () => {
    const [roomBookings, setRoomBookings] = useState([]);
    const [tableBookings, setTableBookings] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                // Fetch room bookings
                console.log("Fetching room bookings...");
                const roomResponse = await axios.get('http://localhost:8082/api/bookings/room');
                console.log("Room API Response:", roomResponse.data);
                setRoomBookings(roomResponse.data);

                // Fetch table bookings
                console.log("Fetching table bookings...");
                const tableResponse = await axios.get('http://localhost:8082/api/bookings/table');
                console.log("Table API Response:", tableResponse.data);
                setTableBookings(tableResponse.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    const handleDeleteRoom = async (id) => {
        try {
            await axios.delete(`http://localhost:8082/api/bookings/room/${id}`);
            setRoomBookings(roomBookings.filter(booking => booking._id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDeleteTable = async (id) => {
        try {
            await axios.delete(`http://localhost:8082/api/bookings/table/${id}`);
            setTableBookings(tableBookings.filter(booking => booking._id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div className='booking-container'> 
            <div className="container">
                <h2 className="title">Manage Room Bookings</h2>
                <ul className="list">
                    {roomBookings.map(booking => (
                        <li key={booking._id} className="list-item">
                            <span className="booking-info">
                                {booking.name} - {booking.roomType} (Check-in: {new Date(booking.checkInDate).toLocaleDateString()})
                            </span>
                            <button onClick={() => handleDeleteRoom(booking._id)} className="delete-button">Delete</button>
                        </li>
                    ))}
                </ul>

                <h2 className="title">Manage Table Bookings</h2>
                <ul className="list">
                    {tableBookings.map(booking => (
                        <li key={booking._id} className="list-item">
                            <span className="booking-info">
                                {booking.name} - {booking.tableNumber} (Date: {new Date(booking.date).toLocaleDateString()}, Time: {booking.time})
                            </span>
                            <button onClick={() => handleDeleteTable(booking._id)} className="delete-button">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ManageBookings;
