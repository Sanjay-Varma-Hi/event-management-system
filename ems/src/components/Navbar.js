// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/sankarsanjayvarmathotakura/Desktop/EMS/event-management-system/ems/src/assets/styles/navbar.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1>Event Management System</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/create-event">Create Event</Link></li>
                        <li><Link to="/rsvp">RSVP</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
