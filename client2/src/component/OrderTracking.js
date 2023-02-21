import React from 'react';
import '../css/track.css'
const OrderTracking = () => {
  const orders = [    { id: 1, status: 'Pending' },    { id: 2, status: 'In Progress' },    { id: 3, status: 'Shipped' },    { id: 4, status: 'Delivered' },  ];

  return (
    <div className="order-tracking-container">
      <h2>Order Tracking</h2>
      <div className="order-tracking">
        {orders.map((order) => (
          <div key={order.id} className="order-item">
            <div className="order-info">
              <div className="order-id">Order ID: {order.id}</div>
              <div className="order-status">Status: {order.status}</div>
            </div>
            <div className="order-status-bar">
              <div className={`status-dot ${order.status.toLowerCase()}`}></div>
              {order.status !== 'Delivered' && <div className={`status-bar ${order.status.toLowerCase()}`}></div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTracking;
