

import React, { useState } from "react";
import axiosInstance from "../axiosInstance";
import './auth.css';
const EmployeeForm = ({ onEmployeeAdded }) => { 
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [position, setPosition] = useState("");
  const [join, setJoin] = useState("");
  const [address, setAddress] = useState("");
  const [skill, setSkill] = useState("");
  // const [salary, setSalary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeData = { name, dob, position,join,address,skill };

    try {
      const response = await axiosInstance.post("/employees", employeeData);
      alert("Employee added successfully!");
      setName("");
      setDob("");
      setPosition("");
      setJoin("");
      setAddress("");
      setSkill("");
      // setSalary("");
      onEmployeeAdded(response.data);
    } catch (err) {
      console.error("Error saving employee:", err);
      alert("Failed to add employee.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
    <form onSubmit={handleSubmit}>
    <div className="form-group">
      <strong><label>Name of the employee:</label></strong><input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      /></div><div className="form-group"><strong><label>Date of birth:</label></strong>
      <input
        type="date"
        placeholder="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        required
      /></div><div className="form-group"><strong><label>Position/Role:</label></strong>
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      /></div><div className="form-group"><strong><label>Joining date:</label></strong>
      <input
        type="date"
        placeholder="date"
        value={join}
        onChange={(e) => setJoin(e.target.value)}
        required
      /></div><div className="form-group"><strong><label>Address:</label></strong>
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      /></div>
      {/* <strong><label>Skills/competencies</label></strong>
       <input
        type="text"
        placeholder="skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        required
      /> */}
      {/* <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        required
      /> */}
      <button type="submit">Add Employee</button>
    </form></div></div>
  );
};

export default EmployeeForm;
