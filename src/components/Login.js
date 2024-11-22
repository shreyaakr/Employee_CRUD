

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      if (response.data.message === "Success") {
        console.log("Login successful:", response.data);
        navigate('/employees');
      } else {
        console.error("Login failed:", response.data.error);
      }
    } catch (err) {
      console.error("Error during login:", err.response?.data || err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label><strong>Email</strong></label>
            <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label><strong>Password</strong></label>
            <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-success">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
}

export default Login;

