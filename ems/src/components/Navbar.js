// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>Event Management System</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/create-event">Create Event</Link></li>
                <li><Link to="/rsvp">RSVP</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
