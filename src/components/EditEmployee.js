import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    dob: "",
    position: "",
    join: "",
    address: "",
    skill: "",
  });

  // Fetch employee details
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axiosInstance.get(`/employees/${id}`);
        setEmployee(response.data); // Pre-fill form with employee details
      } catch (err) {
        console.error("Error fetching employee details:", err);
        alert("Failed to load employee details.");
      }
    };

    fetchEmployee();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/employees/${id}`, employee, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Employee details updated successfully.");
      navigate("/all-employees"); // Redirect to all employees page
    } catch (err) {
      console.error("Error updating employee details:", err);
      alert("Failed to update employee details.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
            style={{ padding: "5px", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>DOB:</label>
          <input
            type="date"
            name="dob"
            value={employee.dob}
            onChange={handleChange}
            required
            style={{ padding: "5px", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Position:</label>
          <input
            type="text"
            name="position"
            value={employee.position}
            onChange={handleChange}
            required
            style={{ padding: "5px", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Joining Date:</label>
          <input
            type="date"
            name="join"
            value={employee.join}
            onChange={handleChange}
            required
            style={{ padding: "5px", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Address:</label>
          <textarea
            name="address"
            value={employee.address}
            onChange={handleChange}
            required
            style={{ padding: "5px", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Skills:</label>
          <input
            type="text"
            name="skill"
            value={employee.skill}
            onChange={handleChange}
            required
            style={{ padding: "5px", width: "100%" }}
          />
        </div>
        <button type="submit" style={{ padding: "10px 15px", background: "blue", color: "white", border: "none" }}>
          Update
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
