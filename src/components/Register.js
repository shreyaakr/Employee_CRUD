// // import React, { useState } from "react";
// // import API from "../services/api";
// // import { Link } from "react-router-dom";

// // const Register = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");

// //   const handleRegister = async (e) => {
// //     e.preventDefault();

// //     if (password !== confirmPassword) {
// //       alert("Passwords do not match");
// //       return;
// //     }

// //     try {
// //       const response = await API.post("http://localhost:5000/register", { email, password });
// //       alert(response.data.message || "Registration successful!");
// //       // Redirect user to login page if registration is successful
// //       window.location.href = "/login";
// //     } catch (err) {
// //       console.error("Registration Error:", err);
// //       if (err.response && err.response.data && err.response.data.error) {
// //         alert("Error: " + err.response.data.error);
// //       } else {
// //         alert("Unexpected error: " + err.message);
// //       }
// //     }
// //   };

// //   return (
// //     <div className="register-container">
// //       <h2>Register</h2>
// //       <form onSubmit={handleRegister}>
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           required
// //         />
// //         <input
// //           type="password"
// //           placeholder="Confirm Password"
// //           value={confirmPassword}
// //           onChange={(e) => setConfirmPassword(e.target.value)}
// //           required
// //         />
// //         <button type="submit">Sign Up</button>
// //       </form>
// //       <p>
// //   Already have an account? <Link to="/login">Log In</Link>
// // </p>
// //     </div>
// //   );
// // };

// // export default Register;


// // import React, { useState } from "react";
// // import API from "../services/api";
// // import { Link } from "react-router-dom";
// // import './auth.css'; // Import the common CSS file for consistent styling

// // const Register = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");

// //   const handleRegister = async (e) => {
// //     e.preventDefault();

// //     if (password !== confirmPassword) {
// //       alert("Passwords do not match");
// //       return;
// //     }

// //     try {
// //       const response = await API.post("http://localhost:5000/register", { email, password });
// //       alert(response.data.message || "Registration successful!");
// //       // Redirect user to login page if registration is successful
// //       window.location.href = "/login";
// //     } catch (err) {
// //       console.error("Registration Error:", err);
// //       if (err.response && err.response.data && err.response.data.error) {
// //         alert("Error: " + err.response.data.error);
// //       } else {
// //         alert("Unexpected error: " + err.message);
// //       }
// //     }
// //   };

// //   return (
// //     <div className="auth-container">
// //       <div className="auth-card">
// //         <h2>Register</h2>
// //         <form onSubmit={handleRegister}>
// //         <div className="form-group">
// //             <label htmlFor="name">
// //               <strong>Name</strong>
// //             </label>
// //             <input
// //               type="text"
// //               placeholder="Enter name"
             
// //               required
// //               className="form-control"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="email">
// //               <strong>Email</strong>
// //             </label>
// //             <input
// //               type="email"
// //               placeholder="Enter email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //               className="form-control"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="password">
// //               <strong>Password</strong>
// //             </label>
// //             <input
// //               type="password"
// //               placeholder="Enter password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //               className="form-control"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label htmlFor="confirmPassword">
// //               <strong>Confirm Password</strong>
// //             </label>
// //             <input
// //               type="password"
// //               placeholder="Confirm password"
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //               required
// //               className="form-control"
// //             />
// //           </div>
// //           <button type="submit" className="btn btn-success">Sign Up</button>
// //         </form>
// //         <div className="mt-0 text-center additional-margin">
// //           <p>Already have an account?</p>
// //           <Link to="/login" className="btn btn-success">Login</Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;

// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import './auth.css'; // Import the common CSS file for consistent styling

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState(null); // To show error message
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/register", { name, email, password });
//       alert(response.data.message || "Registration successful!");
//       // Redirect user to login page if registration is successful
//       navigate("/login");
//     } catch (err) {
//       console.error("Registration Error:", err);
//       if (err.response && err.response.data && err.response.data.error) {
//         setError(err.response.data.error); // Show server error message
//       } else {
//         setError("Unexpected error: " + err.message); // Show unexpected error message
//       }
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>Register</h2>
//         <form onSubmit={handleRegister}>
//           <div className="form-group">
//             <label htmlFor="name">
//               <strong>Name</strong>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">
//               <strong>Email</strong>
//             </label>
//             <input
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">
//               <strong>Password</strong>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="confirmPassword">
//               <strong>Confirm Password</strong>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className="form-control"
//             />
//           </div>
//           <button type="submit" className="btn btn-success">Sign Up</button>
//         </form>

//         {error && <p className="error-message">{error}</p>} {/* Display error message */}

//         <div className="mt-0 text-center additional-margin">
//           <p>Already have an account?</p>
//           <Link to="/login" className="btn btn-success">Login</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './auth.css'; // Import the common CSS file for consistent styling

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null); // To show error message
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Send registration request to the backend
      const response = await axios.post("http://localhost:5000/register", { name, email, password });
      alert(response.data.message || "Registration successful!");
      // Redirect to login page after successful registration
      navigate("/login");
    } catch (err) {
      console.error("Registration Error:", err);
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error); // Show error message from backend
      } else {
        setError("Unexpected error: " + err.message); // Show unexpected error message
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="name"><strong>Name</strong></label>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"><strong>Email</strong></label>
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
            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword"><strong>Confirm Password</strong></label>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success">Sign Up</button>
        </form>

        {error && <p className="error-message">{error}</p>} {/* Display error message */}

        <div className="mt-0 text-center additional-margin">
          <p>Already have an account?</p>
          <Link to="/login" className="btn btn-success">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
