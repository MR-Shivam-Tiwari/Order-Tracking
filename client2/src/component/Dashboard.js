import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Link } from 'react-router-dom';
import '../css/home.css'





const Dashboard = () => {
  const orders = [
    { id: 1, outfitType: 'Kurta', status: 'Pending' },
    { id: 2, outfitType: 'Shirt', status: 'In Progress' },
    { id: 3, outfitType: 'Jeans', status: 'Shipped' },
    { id: 4, outfitType: 'T-shirt', status: 'Delivered' },
    { id: 5, outfitType: 'Kurta', status: 'Delivered' },
    { id: 6, outfitType: 'Jeans', status: 'Shipped' },
    { id: 7, outfitType: 'Shirt', status: 'In Progress' },
    { id: 8, outfitType: 'T-shirt', status: 'Pending' },
    { id: 9, outfitType: 'Kurta', status: 'Delivered' },
    { id: 10, outfitType: 'Jeans', status: 'Shipped' },
  ];

  // Calculate the counts of each outfit type
  const outfitTypeCounts = orders.reduce((acc, order) => {
    acc[order.outfitType] = acc[order.outfitType] ? acc[order.outfitType] + 1 : 1;
    return acc;
  }, {});

  const data = Object.entries(outfitTypeCounts).map(([outfitType, count]) => ({ outfitType, count }));

  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>
      <h3>Most Stitched Outfit Type</h3>
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="outfitType" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    
      <Link to="/measurements" className='measurmentform'>Measurement Form</Link>
      <Link to="/order-tracking" className='order'>Order Tracking</Link>
    </div>
  );
};

export default Dashboard;
