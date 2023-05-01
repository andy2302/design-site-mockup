import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import './Profile.css';

function Profile() {
  const authContext = useContext(AuthContext);
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

  useEffect(() => {
    if (authContext.user) {
      setFormData({ ...formData, ...authContext.user });
    }
    // eslint-disable-next-line
  }, [authContext.user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/users/${authContext.user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authContext.token}`,
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Error updating user');
      }
  
      const responseData = await response.json();
      alert(responseData.message);
    } catch (error) {
      console.error(error);
      alert('Error updating user');
    }
  };

  return (
    <div className="profile-page">
      <h2>Profile</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input type="text" id="firstName" required onChange={handleChange} value={formData.firstName} />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input type="text" id="lastName" required onChange={handleChange} value={formData.lastName} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" required onChange={handleChange} value={formData.email} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} value={formData.password} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" onChange={handleChange} value={formData.age} />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <input type="text" id="gender" onChange={handleChange} value={formData.gender} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" onChange={handleChange} value={formData.phone} />
        </div>
        <div className="form-group">
          <label htmlFor="Facebook">Facebook Link</label>
          <input type="text" id="facebook" onChange={handleChange} value={formData.facebook} />
        </div>
        <div className="form-group">
          <label htmlFor="Twitter">Twitter Link</label>
          <input type="text" id="twitter" onChange={handleChange} value={formData.twitter} />
        </div>
        <div className="form-group">
          <label htmlFor="Instagram">Instagram Link</label>
          <input type="text" id="instagram" onChange={handleChange} value={formData.instagram} />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;
