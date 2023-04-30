import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate('/'); // Redirect to the homepage
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert('Error logging in');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">Login</button>
        <p>
        Don't have an account? <Link to="/signup">Sign up here!</Link>.
      </p>
      </form>
    </div>
  );
}

export default Login;
