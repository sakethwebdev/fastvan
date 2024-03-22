
import React, { useState } from 'react';
const FareEstimateForm = () => {
  const [pickupLat, setPickupLat] = useState('');
  const [pickupLng, setPickupLng] = useState('');
  const [dropLat, setDropLat] = useState('');
  const [dropLng, setDropLng] = useState('');
  const [fareAmount, setFareAmount] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!pickupLat || !pickupLng || !dropLat || !dropLng) {
      setError('Please enter all coordinates');
      return;
    }

    const requestBody = {
      pickupLat: parseFloat(pickupLat),
      pickupLng: parseFloat(pickupLng),
      dropLat: parseFloat(dropLat),
      dropLng: parseFloat(dropLng),
      
    };

    try {
      const fareAmount = calculateFare(requestBody.pickupLat, requestBody.pickupLng, requestBody.dropLat, requestBody.dropLng);
      setFareAmount(fareAmount);
      setError(null); 
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to fetch fare estimate');
    }
  };

  const calculateFare = (pickupLat, pickupLng, dropLat, dropLng) => {
    const baseFare = 10; 
    const fareRatePerKm = 2; // Fare rate per kilometer

  
    const distance = Math.sqrt(Math.pow(dropLat - pickupLat, 2) + Math.pow(dropLng - pickupLng, 2));

    const fareAmount = baseFare + fareRatePerKm * distance;

    return fareAmount.toFixed(2); // Round to 2 decimal places
  };

  return (
    <div className='formm'>
      <h2 className='faree'>Fare Estimate</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Pickup Latitude:</label>
          <input type="text" value={pickupLat} onChange={(e) => setPickupLat(e.target.value)}  />
        </div>
        <div>
          <label>Pickup Longitude:</label>
          <input type="text" value={pickupLng} onChange={(e) => setPickupLng(e.target.value)}  />
        </div>
        <div>
          <label>Drop Latitude:</label>
          <input type="text" value={dropLat} onChange={(e) => setDropLat(e.target.value)}  />
        </div>
        <div>
          <label>Drop Longitude:</label>
          <input type="text" value={dropLng} onChange={(e) => setDropLng(e.target.value)}  />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fareAmount !== null && (
        <div>
          <h3>Total Fare Amount:</h3>
          <p>${fareAmount}</p>
        </div>
      )}
      {error && (
        <div>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default FareEstimateForm;
