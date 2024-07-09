import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CarCard from './components/CarCard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={
            <header className="App-header">
              <h1>Welcome to MyCarSite</h1>
              <div className="card-container">
                <CarCard />
                <CarCard />
                <CarCard />
              </div>
            </header>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
