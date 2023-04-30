import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    phone: '',
    facebook: '',
    twitter: '',
    instagram: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('User registered successfully');
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert('Error registering user');
    }
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        {/* Add onChange handlers to all form inputs */}
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input type="text" id="firstName" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input type="text" id="lastName" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input type="password" id="password" required onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <input type="text" id="gender" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="Facebook">Facebook Link</label>
          <input type="text" id="facebook" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="Twitter">Twitter Link</label>
          <input type="text" id="twitter" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="Instagram">Instagram Link</label>
          <input type="text" id="instagram" onChange={handleChange} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log in here</Link>.
      </p>
    </div>
  );
}

export default Signup;
