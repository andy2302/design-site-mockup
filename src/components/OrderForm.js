import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import './OrderForm.css';

function OrderForm() {
  const authContext = useContext(AuthContext);
  const token = authContext.token;
  const [formData, setFormData] = useState({ subject: '', description: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Token:', token);
  
    const response = await fetch("http://127.0.0.1:3000/api/orders", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...formData,
        userName: `${authContext.user.firstName} ${authContext.user.lastName}`,
        userEmail: authContext.user.email,
      }),
    });
    
      if (response.ok) {
        alert('Order submitted successfully');
      } else {
        alert('Error submitting order');
      }
    };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <div>
        <label>Subject:</label>
        <input type="text" name="subject" onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" onChange={handleChange} required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default OrderForm;
