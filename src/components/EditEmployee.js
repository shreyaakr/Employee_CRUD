import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";

const EditEmployee = () => {
  const { employeeId } = useParams(); // Extract employeeId from URL
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    position: "",
    department: "",
    salary: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await axiosInstance.get(`/employees/${employeeId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setEmployee(res.data);
      } catch (err) {
        console.error("Error fetching employee details", err);
      }
    };

    fetchEmployee();
  }, [employeeId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/employees/${employeeId}`, employee, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      navigate("/dashboard");
    } catch (err) {
      console.error("Error updating employee", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Edit Employee</h2>
      <input
        type="text"
        name="name"
        value={employee.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={employee.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="position"
        value={employee.position}
        onChange={handleChange}
        placeholder="Position"
        required
      />
      <input
        type="text"
        name="department"
        value={employee.department}
        onChange={handleChange}
        placeholder="Department"
        required
      />
      <input
        type="number"
        name="salary"
        value={employee.salary}
        onChange={handleChange}
        placeholder="Salary"
        required
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditEmployee;
