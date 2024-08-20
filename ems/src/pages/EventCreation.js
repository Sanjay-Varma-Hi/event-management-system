// src/pages/EventCreation.js
import React, { useState } from 'react';

const EventCreation = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventDescription, setEventDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle event creation logic here
        console.log({
            eventName,
            eventDate,
            eventLocation,
            eventDescription,
        });
    };

    return (
        <div>
            <h2>Create Event</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Event Name:</label>
                    <input
                        type="text"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
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
                    />
                </div>
                <div>
                    <label>Event Description:</label>
                    <textarea
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Create Event</button>
            </form>
        </div>
    );
};

export default EventCreation;
