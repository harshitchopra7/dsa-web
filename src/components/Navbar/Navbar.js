import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="nav">
            <div className="nav_left">
                <p>DSA-WEB</p>
            </div>
            <div className="nav_right">
                <p>Home</p>
                <p>Array</p>
                <p>Linked List</p>
                <p>Stack</p>
                <p>Queue</p>
            </div>
        </div>
    )
}

export default Navbar;
