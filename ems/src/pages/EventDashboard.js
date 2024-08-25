// src/pages/EventDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import './EventDashboard.css';

const EventDashboard = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching event data from an API
        const fetchEvents = async () => {
            try {
                const response = await axios.get('/api/events'); // Mock API endpoint
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="container">
            <h2>Event Dashboard</h2>
            {loading ? (
                <p>Loading events...</p>
            ) : (
                <ul>
                {events.map((event) => (
                  <li key={event.id}>
                    <h3>{event.name}</h3>
                    <p>Date: {event.date}</p>
                    <p>Location: {event.location}</p>
                  </li>
                ))}
              </ul>
              
            )}
        </div>
    );
};

export default EventDashboard;
