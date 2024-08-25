// src/pages/Login.js
import React from 'react';
import '/Users/sankarsanjayvarmathotakura/Desktop/EMS/event-management-system/ems/src/assets/styles/login.css';

const Login = () => {
    const handleLogin = () => {
        // Handle Google login logic here
        console.log("Google login button clicked");
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <button onClick={handleLogin} className="google-login-btn">
                Login with Google
            </button>
        </div>
    );
};

export default Login;
