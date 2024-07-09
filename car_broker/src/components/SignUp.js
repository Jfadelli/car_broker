import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="signup-page">
            <h2>Sign Up</h2>
            <form>
                <div style={{ backgroundColor: 'red' }}>
                    <label>First Name:</label>
                    <input type="text" name="firstName" required />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" required />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="text" name="phoneNumber" required />
                </div>
                <div>
                    <label>Zip Code:</label>
                    <input type="text" name="zipCode" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Password (8 characters):</label>
                    <input type="password" name="password" required minLength="8" />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default SignUp;
