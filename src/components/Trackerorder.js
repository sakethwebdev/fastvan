

import React, { useState } from 'react';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [orderData, setOrderData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  const staticOrderData = [
    {
      id: '123456',
      status: 'Delivered',
      customerName: 'John Doe',
      deliveryAddress: '123 Main St, City, Country',
      items: ['Item 1', 'Item 2', 'Item 3'],
      totalAmount: '$100',
      deliveryDate: '2024-03-22',
      deliveryTime: '10:00 AM'
    },
    {
      id: '654321',
      status: 'In Transit',
      customerName: 'Jane Smith',
      deliveryAddress: '456 Oak St, City, Country',
      items: ['Item 4', 'Item 5'],
      totalAmount: '$50',
      deliveryDate: '2024-03-23',
      deliveryTime: '1:00 PM'
    }
  ];

  const fetchOrderData = () => {
    setIsLoading(true);
    setTimeout(() => {
      const foundOrder = staticOrderData.find(order => order.id === orderId);
      if (foundOrder) {
        setOrderData(foundOrder);
        setError(null);
      } else {
        setError('Order not found');
        setOrderData(null);
      }
      setIsLoading(false);
    }, 5000);
  };

  const cancelOrder = () => {
    setIsCancelled(true); // Simulate cancellation
  };

  const handleAction = (event) => {
    event.preventDefault();
    if (orderData) {
      cancelOrder();
    } else {
      fetchOrderData();
    }
  };

  const handleSearchChange = (event) => {
    setOrderId(event.target.value);
  };

  const renderOrderDetails = () => {
    if (isLoading) {
      return(
        
        <>
        <div className="waviy">
          <span style={{ letterSpacing: '1px' }}>L</span>
          <span style={{ letterSpacing: '2px' }}>O</span>
          <span style={{ letterSpacing: '3px' }}>A</span>
          <span style={{ letterSpacing: '4px' }}>D</span>
          <span style={{ letterSpacing: '5px' }}>I</span>
          <span style={{ letterSpacing: '6px' }}>N</span>
          <span style={{ letterSpacing: '7px' }}>G</span>
          <span style={{ letterSpacing: '8px' }}>.</span>
          <span style={{ letterSpacing: '9px' }}>.</span>
          <span style={{ letterSpacing: '10px' }}>.</span>
        </div>
        
        
        
        </>
      );
    };

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (!orderData) {
      return null;
    }

    if (isCancelled) {
      return <div>Order has been cancelled.</div>;
    }

    return (
      <div>
        <h2>Order Details</h2>
        <p>Order ID: {orderData.id}</p>
        <p>Status: {orderData.status}</p>
        <p>Customer Name: {orderData.customerName}</p>
        <p>Delivery Address: {orderData.deliveryAddress}</p>
        <p>Items: {orderData.items.join(', ')}</p>
        <p>Total Amount: {orderData.totalAmount}</p>
        <p>Delivery Date: {orderData.deliveryDate}</p>
        <p>Delivery Time: {orderData.deliveryTime}</p>
      </div>
    );
  };

  return (
    <>
      <img src='./images/trackorder.jpeg' alt="Track Order" />
      <div className='hhh1'>
        <h2>Track Your Order</h2>
        <form onSubmit={handleAction}>
          <input type="text" value={orderId} onChange={handleSearchChange} placeholder="Enter Order ID" />
          <button type="submit">{orderData ? 'Cancel' : 'Search'}</button>
        </form>
        {renderOrderDetails()}
      </div>
    </>
  );
};

export default TrackOrder;
