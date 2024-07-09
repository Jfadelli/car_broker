import React from 'react';

const CarCard = ({ loggedIn, price }) => {
    return (
        <div className="car-card">
            <img src="placeholder.jpg" alt="Car" />
            <h3>Car Model</h3>
            <p>Description of the car.</p>
            {loggedIn ? <p style={{ fontSize: "20px", color: "red" }}>{price}!!</p> : <p style={{ fontSize: "20px", color: "red" }}>Login to see the Amazing Price!</p>}
        </div>
    );
};

export default CarCard;
