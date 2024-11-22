// import React, { useState } from "react";
// import API from "../services/api";
// import { Link } from "react-router-dom";

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const { data } = await API.post("/auth/login", { email, password });
//   //     localStorage.setItem("jwt", data.token); // Save token
//   //     onLogin(); // Notify parent of successful login
//   //   } catch (err) {
//   //     alert("Login failed: " + err.response.data.error);
//   //   }
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
    
//   //   try {
//   //     const response = await API.post("/login", { email, password });
//   //     const token = response.data.token;
  
//   //     if (token) {
//   //       localStorage.setItem("token", token); // Store the token in localStorage for future requests
//   //       alert("Login successful!");
//   //       // Redirect user to dashboard or another page
//   //     }
//   //   } catch (err) {
//   //     // Handle error if response is not what we expect (e.g., invalid credentials)
//   //     console.error(err);
//   //     alert("Login failed: " + (err.response ? err.response.data.error : "Unknown error"));
//   //   }
//   // };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await API.post("http://localhost:5000/login", { email, password });
//       if (response && response.data && response.data.token) {
//         const token = response.data.token;
//         localStorage.setItem("token", token);
//         alert("Login successful!");
        
//       }
//     } catch (err) {
//       console.error("Login Error:", err);
//       if (err.response && err.response.data && err.response.data.error) {
//         alert("Error: " + err.response.data.error);
//       } else {
//         alert("Unexpected error: " + err.message);
//       }
//     }
//   };
  

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//       <p>
//   Don't have an account? <Link to="/register">Sign Up</Link>
// </p>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:5000/login", { email, password });

//       if (response && response.data && response.data.token) {
//         const token = response.data.token;
//         localStorage.setItem("jwt", token); // Save the JWT token
//         alert("Login successful!");
//         setError(null);
//         navigate("/dashboard"); // Redirect to the dashboard
//       }
//     } catch (err) {
//       console.error("Login Error:", err);
//       if (err.response && err.response.data && err.response.data.error) {
//         setError(err.response.data.error); // Show server error
//       } else {
//         setError("Unexpected error occurred, please try again.");
//       }
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>

//       {error && <p className="error-message">{error}</p>}

//       <p>
//         Don't have an account? <Link to="/register">Sign Up</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './auth.css'; // Import the common CSS file for consistent styling

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", { email, password });

      if (response && response.data && response.data.token) {
        const token = response.data.token;
        localStorage.setItem("jwt", token); // Save the JWT token
        alert("Login successful!");
        setError(null);
        navigate("/dashboard"); // Redirect to the dashboard
      }
    } catch (err) {
      console.error("Login Error:", err);
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error); // Show server error
      } else {
        setError("Unexpected error occurred, please try again.");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success">Login</button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <div className="mt-0 text-center additional-margin">
          <p>Don't have an account?</p>
          <Link to="/register" className="btn btn-success">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
