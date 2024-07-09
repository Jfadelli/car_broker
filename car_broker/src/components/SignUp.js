import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = ({ onSignUp }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        zipCode: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSignUp(formData);
        navigate('/');
    };

    return (
        <div className="signup-page">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-row">
                    <label>First Name:</label>
                    <input type="text" name="firstName" required onChange={handleChange} />
                </div>
                <div className="form-row">
                    <label>Last Name:</label>
                    <input type="text" name="lastName" required onChange={handleChange} />
                </div>
                <div className="form-row">
                    <label>Phone Number:</label>
                    <input type="text" name="phoneNumber" required onChange={handleChange} />
                </div>
                <div className="form-row">
                    <label>Zip Code:</label>
                    <input type="text" name="zipCode" required onChange={handleChange} />
                </div>
                <div className="form-row">
                    <label>Email:</label>
                    <input type="email" name="email" required onChange={handleChange} />
                </div>
                <div className="form-row">
                    <label>Password (8 characters):</label>
                    <input type="password" name="password" required minLength="8" onChange={handleChange} />
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default SignUp;
