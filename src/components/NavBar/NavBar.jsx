import React, { useState } from 'react';
import './NavBar.css';

function NavBar(props) {
    const [showUserDetails, setShowUserDetails] = useState(false);
    const scrollToPosition = (position) => {
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    };
    const toggleUserDetails = () => {
        setShowUserDetails(!showUserDetails);
    };

    const handleLogout = () => {
        alert('Logout'); 
    };

    return (
        <div className="navBar">
            <img
                className="logo"
                src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                alt="Netflix Logo"
            />
            <ul className="navLinks">
                <li  onClick={() => scrollToPosition(500)} className="navLink">Home</li>
                <li  onClick={() => scrollToPosition(500)} className="navLink">TV Shows</li>
                <li  onClick={() => scrollToPosition(500)} className="navLink">Movies</li>
                <li  onClick={() => scrollToPosition(500)} className="navLink">New & Popular</li>
                <li  onClick={() => scrollToPosition(500)} className="navLink">My List</li>
            </ul>
            <div className="searchBox">
                <input type="text" placeholder="Search" />
            </div>
            <div className="avatar-container">
                <img
                    onClick={toggleUserDetails}
                    className="avatar"
                    src="https://i.pinimg.com/736x/02/e5/58/02e5585fcd72681ecd56e4ce0175a2fe.jpg"
                    alt="Avatar"
                />
                {showUserDetails && (
                    <div className="user-details">
                        <p>Delvin Devis</p>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBar;