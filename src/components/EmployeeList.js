import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/employees", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((err) => console.error("Error fetching employees", err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/employees/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setEmployees(employees.filter((employee) => employee._id !== id));
    } catch (err) {
      console.error("Error deleting employee", err);
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <Link to="/employees/create">Create New Employee</Link>
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>
            {employee.name} - {employee.position}{" "}
            <button onClick={() => handleDelete(employee._id)}>Delete</button>
            <Link to={`/employees/update/${employee._id}`}>Update</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
