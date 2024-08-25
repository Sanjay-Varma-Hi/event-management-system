// src/mock/axiosMock.js
import axios from 'axios';

// Mock data
const mockEvents = [
    { id: 1, name: 'Event One', date: '2024-09-01', location: 'San Francisco' },
    { id: 2, name: 'Event Two', date: '2024-10-15', location: 'New York' },
];

// Set up Axios interceptor
axios.interceptors.request.use((config) => {
    if (config.url === '/api/events') {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: mockEvents });
            }, 1000); // Simulate network delay
        });
    }

    return config;
});
