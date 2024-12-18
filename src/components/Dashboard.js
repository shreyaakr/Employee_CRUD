
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AllEmployees from "./AllEmployees";
import EmployeeForm from "./EmployeeForm";

const Dashboard = () => {
  const [view, setView] = useState("allEmployees");
  const [refreshEmployees, setRefreshEmployees] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Update view state based on the current URL
    if (location.pathname === "/employees") {
      setView("allEmployees");
    } else if (location.pathname === "/employees/create") {
      setView("addEmployee");
    }
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login"); // Redirect to the login page
  };

  const handleEmployeeAdded = () => {
    navigate("/employees"); // Redirect to All Employees page
    setRefreshEmployees((prev) => !prev); // Trigger a refresh of the AllEmployees component
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div style={{ width: "250px", background: "#f0f0f0", padding: "20px", height: "100vh" }}>
        <h3>Dashboard</h3>
        <button
          onClick={() => navigate("/employees")}
          style={{
            width: "100%",
            marginBottom: "10px",
            padding: "10px",
            backgroundColor: view === "allEmployees" ? "#007bff" : "#e0e0e0",
            color: view === "allEmployees" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
          }}
        >
           Employees List
        </button>
        <button
          onClick={() => navigate("/employees/create")}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: view === "addEmployee" ? "#007bff" : "#e0e0e0",
            color: view === "addEmployee" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Add Employee
        </button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
          <h2>{view === "allEmployees" ? "All Employees" : "Add Employee"}</h2>
          <button
            onClick={handleLogout}
            style={{
              background: "#ff4d4d",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>

        {/* Dynamic View */}
        {view === "allEmployees" ? (
          <AllEmployees refresh={refreshEmployees} />
        ) : (
          <EmployeeForm onEmployeeAdded={handleEmployeeAdded} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
