


import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './auth.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', { name, email, password });
      console.log("Registration successful:", response.data);
      navigate('/login');
    } catch (err) {
      console.error("Error during registration:", err.response?.data || err.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label><strong>Name</strong></label>
            <input type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label><strong>Email</strong></label>
            <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label><strong>Password</strong></label>
            <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-success">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
