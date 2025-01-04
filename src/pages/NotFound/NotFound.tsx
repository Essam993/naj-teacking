// src/components/NotFound.tsx or NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404 Error</h1>
            <p>Oh no, it seems like you're lost !</p>
            <img src="" alt="" />
            <p>But it's better to to be lost than to have a tooth cavity, just kidding</p>
            <span>Maybe the page you're looking for doesn't exist <br /> so could you like to come by our homepage instead ?</span><br />   
            <Link to="/dashboard" style={{ color: '#007bff', textDecoration: 'underline' }}>Go Back Home</Link>
        </div>
    );
};

export default NotFound;
