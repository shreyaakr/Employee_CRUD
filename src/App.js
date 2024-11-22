



import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import AllEmployees from "./components/AllEmployees";
import EditEmployee from "./components/EditEmployee"; // Import added

const App = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        
         <Route path="/" element={<Dashboard />} />

{/* Routes for specific Dashboard views */}
<Route path="/employees" element={<Dashboard view="allEmployees" />} />
<Route path="/employees/create" element={<Dashboard view="addEmployee" />} />
{/* <Route path="/edit-employee/:id" element={<EmployeeForm mode="update" />} />
 */}
<Route path="/edit-employee/:id" element={<EditEmployee />} />

      </Routes>
    </Router>
  );
};

export default App;
