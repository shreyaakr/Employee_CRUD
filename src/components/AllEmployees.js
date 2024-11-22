
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";

const AllEmployees = ({ refresh }) => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [attendance, setAttendance] = useState({});
  const navigate = useNavigate();

  // Fetch all employees on component mount or refresh
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axiosInstance.get("/employees");
        setEmployees(response.data);
      } catch (err) {
        console.error("Error fetching employees:", err);
      }
    };

    fetchEmployees();
  }, [refresh]);

  // Delete an employee
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await axiosInstance.delete(`/employees/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setEmployees(employees.filter((emp) => emp.id !== id));
        alert("Employee deleted successfully.");
      } catch (err) {
        console.error("Error deleting employee", err);
        alert("Failed to delete employee.");
      }
    }
  };

  // Edit an employee
  const handleEdit = (id) => {
    navigate(`/edit-employee/${id}`);
  };

  // Handle attendance tracking
  const handleAttendance = (id) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle attendance
    }));
  };

  // Filter employees based on search term and filter option
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "all" || emp.position === filter || emp.department === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      {/* <h1>All Employees</h1> */}

      {/* Search Field */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: "10px",
          padding: "5px",
          width: "20%",
          border: "1px solid gray",
          borderRadius: "5px",
        }}
      />

      {/* Filter Dropdown */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          marginLeft: "10px",
          marginBottom: "10px",
          padding: "5px",
          border: "1px solid gray",
          borderRadius: "5px",
        }}
      >
        <option value="all">All</option>
        <option value="Manager">Manager</option>
        <option value="Developer">Developer</option>
        <option value="HR">HR</option>
        <option value="Sales">Sales</option>
      </select>

      {/* Employee Table */}
      <table border="1" style={{ width: "100%", textAlign: "left", marginTop: "10px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Position</th>
            <th>Joining Date</th>
            <th>Address</th>
            {/* <th>Skills</th> */}
            <th>Attendance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.dob}</td>
              <td>{emp.position}</td>
              <td>{emp.join}</td>
              <td>{emp.address}</td>
              {/* <td>{emp.skill}</td> */}
              <td>
                <button
                  onClick={() => handleAttendance(emp.id)}
                  style={{
                    background: attendance[emp.id] ? "green" : "gray",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    padding: "5px",
                  }}
                >
                  {attendance[emp.id] ? "Present" : "Absent"}
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleEdit(emp.id)}
                  style={{ marginRight: "10px", background: "blue", color: "white" }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(emp.id)}
                  style={{ background: "red", color: "white" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllEmployees;
