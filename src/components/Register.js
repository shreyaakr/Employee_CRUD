import React, { useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await API.post("http://localhost:5000/register", { email, password });
      alert(response.data.message || "Registration successful!");
      // Redirect user to login page if registration is successful
      window.location.href = "/login";
    } catch (err) {
      console.error("Registration Error:", err);
      if (err.response && err.response.data && err.response.data.error) {
        alert("Error: " + err.response.data.error);
      } else {
        alert("Unexpected error: " + err.message);
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
  Already have an account? <Link to="/login">Log In</Link>
</p>
    </div>
  );
};

export default Register;

// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const Register = () => {
//   const [employeeName, setEmployeeName] = useState("");
//   const [dob, setDob] = useState("");
//   const [role, setRole] = useState("");
//   const [joiningDate, setJoiningDate] = useState("");
//   const [address, setAddress] = useState("");
//   const [skills, setSkills] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newEmployee = {
//       employeeName,
//       dob,
//       role,
//       joiningDate,
//       address,
//       skills,
//       email,
//       password,
//     };

//     try {
//       const response = await axios.post("http://localhost:5000/register", newEmployee);

//       if (response.status === 201) {
//         alert("Registration successful!");
//         setError(null);
//         navigate("/login"); // Redirect to login after successful registration
//       }
//     } catch (err) {
//       console.error("Registration Error:", err);
//       if (err.response && err.response.data && err.response.data.error) {
//         setError(err.response.data.error); // Show server error
//       } else {
//         setError("Unexpected error occurred, please try again.");
//       }
//     }
//   };

//   return (
//     <div className="register-container">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//        <label>Name of the Employee:</label> <input
//           type="text"
//           placeholder="Employee Name"
//           value={employeeName}
//           onChange={(e) => setEmployeeName(e.target.value)}
//           required
//         /><br/>
//         <label>Date of Birth: </label>
//         <input
//           type="date"
//           placeholder="Date of Birth"
//           value={dob}
//           onChange={(e) => setDob(e.target.value)}
//           required
//         /><br/>
//         <label>Employee Role: </label>
//         <input
//           type="text"
//           placeholder="Employee Role"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           required
//         /><br/>
//         <label>Enter the Date of Joining: </label>
//         <input
//           type="date"
//           placeholder="Joining Date"
//           value={joiningDate}
//           onChange={(e) => setJoiningDate(e.target.value)}
//           required
//         /><br/>
//         <label>Address:</label>
//         <textarea
//           placeholder="Address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           required
//         /><br/>
//         <label>Skills:</label>
//         <input
//           type="text"
//           placeholder="Skills/Competencies"
//           value={skills}
//           onChange={(e) => setSkills(e.target.value)}
//           required
//         /><br/>
//         <label>Email:</label>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         /><br/>
//         <label>Password:</label>
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         /><br/>
//         <button type="submit">Register</button>
//       </form>

//       {error && <p className="error-message">{error}</p>}

//       <p>
//         Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
//   );
// };

// export default Register;

