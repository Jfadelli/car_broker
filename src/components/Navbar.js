import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ loggedIn, onLogout }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">AmazingDeals.whateverthefugyouwant.sexxx</div>
            {loggedIn ? (
                <button className="logout-button" onClick={onLogout}>Sign Out</button>
            ) : (
                <div>
                    <Link to="/">
                        <button className="home-button">Home</button>
                    </Link>
                    <Link to="/login">
                        <button className="login-button">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="sign-up-button">Sign Up</button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
