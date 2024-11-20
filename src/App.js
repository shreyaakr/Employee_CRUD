// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from "react";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
// import './App.css';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("jwt"));

//   return (
//     <div className="App">
//       {isLoggedIn ? (
//         <Dashboard />
//       ) : (
//         <Login onLogin={() => setIsLoggedIn(true)} />
//       )}
//     </div>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";

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
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}
        {/* <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/create" element={<EmployeeForm mode="create" />} />
        <Route path="/edit-employee/:id" element={<EmployeeForm mode="update" />} />

        <Route path="/employees/update/:id" element={<EmployeeForm mode="update" />} /> */}
         <Route path="/" element={<Dashboard />} />

{/* Routes for specific Dashboard views */}
<Route path="/employees" element={<Dashboard view="allEmployees" />} />
<Route path="/employees/create" element={<Dashboard view="addEmployee" />} />
      </Routes>
    </Router>
  );
};

export default App;
