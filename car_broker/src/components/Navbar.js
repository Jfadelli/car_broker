import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">MyCarSite</div>
            <Link to="/login">
                <button className="login-button">Login</button>
            </Link>
        </nav>
    );
};

export default Navbar;
