import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CarCard from './components/CarCard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([
    { email: 'test@gmail.com', password: '12345678' }
  ]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleSignUp = (newUser) => {
    setUsers([...users, newUser]);
    setLoggedInUser(newUser);
  };

  const handleLogin = (email, password) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setLoggedInUser(user);
    } else {
      alert('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <Router>
      <div className="App">
        <Navbar loggedIn={loggedInUser !== null} onLogout={handleLogout} />
        <div className="main-content">
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
            <Route path="/" element={
              <div className={`landing-page ${loggedInUser ? 'logged-in' : 'logged-out'}`}>
                <header className="App-header">
                  <h1>Sign up and get ready to see some amazing deals!</h1>
                  <h2>Members get free access to the best deals in town!</h2>
                  <h1 style={{ fontVariant: "small-caps" }}>member area below</h1>
                  <div className={`card-container ${loggedInUser ? '' : 'blur'}`}>
                    <CarCard loggedIn={loggedInUser !== null} price="$20,000" />
                    <CarCard loggedIn={loggedInUser !== null} price="$25,000" />
                    <CarCard loggedIn={loggedInUser !== null} price="$30,000" />
                  </div>
                </header>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
