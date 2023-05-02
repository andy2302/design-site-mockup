// src/pages/Orders.js
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import './Orders.css';

function Orders() {
  const authContext = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/orders/all', {
          headers: {
            'Authorization': `Bearer ${authContext.token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching orders');
        }

        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error(error);
        alert('Error fetching orders');
      }
    };

    fetchOrders();
  }, [authContext.token]);

  const handleStatusChange = async (orderId, status) => {
    try {
      const response = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authContext.token}`,
        },
        body: JSON.stringify({ status }),
      });
  
      if (!response.ok) {
        throw new Error('Error updating order status');
      }
  
      const updatedOrder = await response.json();
      const updatedOrders = orders.map((order) => order._id === orderId ? updatedOrder : order);
      setOrders(updatedOrders.filter(order => order));
  
    } catch (error) {
      console.error(error);
      alert('Error updating order status');
    }
  };

  return (
    <div>
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Customer</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {orders.filter(order => order).map((order) => (
            <tr key={order._id}>
              <td>{order.serviceName}</td>
              <td>{order.userName}</td>
              <td>{order.userEmail}</td>
              <td>{order.subject}</td>
              <td>{order.description}</td>
              <td>
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order._id, e.target.value)}
                >
                  <option value="Backlog">Backlog</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Closed">Closed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
