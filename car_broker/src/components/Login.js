import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-page">
            <h2>Login</h2>
            <form>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
};

export default Login;
