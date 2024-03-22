

import React, { useState } from 'react';
import axios from 'axios';
 

const CreateOrder = () => {
  const [requestData, setRequestData] = useState({
    requestId: '',
    deliveryInstructions: '',
    pickupDetails: {
      apartmentAddress: '',
      streetAddress1: '',
      streetAddress2: '',
      landmark: '',
      city: '',
      state: '',
      pincode: '',
      country: '',
      contactName: '',
      phoneNumber: ''
    },
    dropDetails: {
      apartmentAddress: '',
      streetAddress1: '',
      streetAddress2: '',
      landmark: '',
      city: '',
      state: '',
      pincode: '',
      country: '',
      contactName: '',
      phoneNumber: ''
    },
    additionalComments: ''
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequestData({ ...requestData, [name]: value });
  };

  const handlePickupChange = (e) => {
    const { name, value } = e.target;
    setRequestData({ ...requestData, pickupDetails: { ...requestData.pickupDetails, [name]: value } });
  };

  const handleDropChange = (e) => {
    const { name, value } = e.target;
    setRequestData({ ...requestData, dropDetails: { ...requestData.dropDetails, [name]: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/orders", requestData)

      .then(response => {
        setResponse(response.data);
        setRequestData({
          requestId: '',
          deliveryInstructions: '',
          pickupDetails: {
            apartmentAddress: '',
            streetAddress1: '',
            streetAddress2: '',
            landmark: '',
            city: '',
            state: '',
            pincode: '',
            country: '',
            contactName: '',
            phoneNumber: ''
          },
          dropDetails: {
            apartmentAddress: '',
            streetAddress1: '',
            streetAddress2: '',
            landmark: '',
            city: '',
            state: '',
            pincode: '',
            country: '',
            contactName: '',
            phoneNumber: ''
          },
          additionalComments: ''
        });
        setError(null);
      })
      .catch(error => {
        setError(error.response.data.message);
        setResponse(null);
      });
  };

  return (
    <div className="container-1">
      <h1 className='hh1'>Create Order</h1>
      <form className='form-1' onSubmit={handleSubmit}>
        <label className='label-1'>Request ID:</label>
        <input className='input-1' type="text" name="requestId" value={requestData.requestId} onChange={handleChange} required />

        <label className='label-1'>Delivery Instructions:</label>
        <textarea className='textarea-1' name="deliveryInstructions" value={requestData.deliveryInstructions} onChange={handleChange}></textarea>

        <h2>Pickup Details</h2>
        <label>Apartment Address:</label>
        <input type="text" name="apartmentAddress" value={requestData.pickupDetails.apartmentAddress} onChange={handlePickupChange} />
        <label>Street Address 1:</label>
        <input type="text" name="streetAddress1" value={requestData.pickupDetails.streetAddress1} onChange={handlePickupChange} />
        <label>Street Address 2:</label>
        <input type="text" name="streetAddress2" value={requestData.pickupDetails.streetAddress2} onChange={handlePickupChange} />
        <label>Landmark:</label>
        <input type="text" name="landmark" value={requestData.pickupDetails.landmark} onChange={handlePickupChange} />
        <label>City:</label>
        <input type="text" name="city" value={requestData.pickupDetails.city} onChange={handlePickupChange} />
        <label>State:</label>
        <input type="text" name="state" value={requestData.pickupDetails.state} onChange={handlePickupChange} />
        <label>Pincode:</label>
        <input type="text" name="pincode" value={requestData.pickupDetails.pincode} onChange={handlePickupChange} />
        <label>Country:</label>
        <input type="text" name="country" value={requestData.pickupDetails.country} onChange={handlePickupChange} />
        <label>Contact Name:</label>
        <input type="text" name="contactName" value={requestData.pickupDetails.contactName} onChange={handlePickupChange} />
        <label>Contact Phone Number:</label>
        <input type="text" name="phoneNumber" value={requestData.pickupDetails.phoneNumber} onChange={handlePickupChange} />

        <h2>Drop Details</h2>
        <label>Apartment Address:</label>
        <input type="text" name="apartmentAddress" value={requestData.dropDetails.apartmentAddress} onChange={handleDropChange} />
        <label>Street Address 1:</label>
        <input type="text" name="streetAddress1" value={requestData.dropDetails.streetAddress1} onChange={handleDropChange} />
        <label>Street Address 2:</label>
        <input type="text" name="streetAddress2" value={requestData.dropDetails.streetAddress2} onChange={handleDropChange} />
        <label>Landmark:</label>
        <input type="text" name="landmark" value={requestData.dropDetails.landmark} onChange={handleDropChange} />
        <label>City:</label>
        <input type="text" name="city" value={requestData.dropDetails.city} onChange={handleDropChange} />
        <label>State:</label>
        <input type="text" name="state" value={requestData.dropDetails.state} onChange={handleDropChange} />
        <label>Pincode:</label>
        <input type="text" name="pincode" value={requestData.dropDetails.pincode} onChange={handleDropChange} />
        <label>Country:</label>
        <input type="text" name="country" value={requestData.dropDetails.country} onChange={handleDropChange} />
        <label>Contact Name:</label>
        <input type="text" name="contactName" value={requestData.dropDetails.contactName} onChange={handleDropChange} />
        <label>Contact Phone Number:</label>
        <input type="text" name="phoneNumber" value={requestData.dropDetails.phoneNumber} onChange={handleDropChange} />

        <label>Additional Comments:</label>
        <textarea name="additionalComments" value={requestData.additionalComments} onChange={handleChange}></textarea>

        <br />
        <button className='button-1' type="submit">Submit</button>
      </form>

      {response && <div className="response-1">{response.message}</div>}
      {error && <div className="error-1">{error}</div>}
    </div>
  );
};

export default CreateOrder;
