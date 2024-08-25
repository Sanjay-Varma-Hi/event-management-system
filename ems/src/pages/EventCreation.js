// src/pages/EventCreation.js
import React, { useState } from 'react';
import axios from 'axios';
//import './EventCreation.css';

const EventCreation = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post('/api/create-event', {
                eventName,
                eventDate,
                eventLocation,
                eventDescription,
            }); // Mock API endpoint
            setSuccess(true);
        } catch (error) {
            console.error('Error creating event:', error);
        } finally {
            setLoading(false);
        }

        // Clear form
        setEventName('');
        setEventDate('');
        setEventLocation('');
        setEventDescription('');
    };

    return (
        <div className="container">
            <h2>Create Event</h2>
            {success && <p>Event created successfully!</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Event Name:</label>
                    <input
                        type="text"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        placeholder="Enter event name"
                    />
                </div>
                <div>
                    <label>Event Date:</label>
                    <input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>Event Location:</label>
                    <input
                        type="text"
                        value={eventLocation}
                        onChange={(e) => setEventLocation(e.target.value)}
                        placeholder="Enter event location"
                    />
                </div>
                <div>
                    <label>Event Description:</label>
                    <textarea
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        placeholder="Enter event description"
                    ></textarea>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Creating...' : 'Create Event'}
                </button>
            </form>
        </div>
    );
};

export default EventCreation;
