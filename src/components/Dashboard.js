// // // // // import React from "react";
// // // // // import EmployeeTable from "./EmployeeTable";
// // // // // import EmployeeForm from "./EmployeeForm";

// // // // // const Dashboard = () => {
// // // // //   const handleLogout = () => {
// // // // //     localStorage.removeItem("jwt");
// // // // //     window.location.reload(); // Reload to go back to login
// // // // //   };

// // // // //   return (
// // // // //     <div className="dashboard">
// // // // //       <h1>Employee Management Dashboard</h1>
// // // // //       <button onClick={handleLogout}>Logout</button>
// // // // //       <EmployeeForm />
// // // // //       <EmployeeTable />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Dashboard;


// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import { useNavigate } from "react-router-dom";
// // // // import EmployeeTable from "./EmployeeTable";
// // // // import EmployeeForm from "./EmployeeForm";

// // // // const Dashboard = () => {
// // // //   const [employees, setEmployees] = useState([]);
// // // //   const navigate = useNavigate();

// // // //   // Handle user logout
// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem("jwt"); // Remove JWT token
// // // //     navigate("/login"); // Redirect to login
// // // //     // window.location.reload();
// // // //   };

// // // //   // Fetch employees on initial load
// // // //   useEffect(() => {
// // // //     const token = localStorage.getItem("jwt");

// // // //     if (!token) {
// // // //       navigate("/login"); // Redirect to login if no token is found
// // // //     } else {
// // // //       // Fetch employee data
// // // //       axios
// // // //         .get("http://localhost:5000/employees", {
// // // //           headers: { Authorization: `Bearer ${token}` },
// // // //         })
// // // //         .then((response) => {
// // // //           setEmployees(response.data); // Set fetched employee data
// // // //         })
// // // //         .catch((err) => {
// // // //           console.error("Error fetching employees", err);
// // // //         });
// // // //     }
// // // //   }, [navigate]);

// // // //   // Handle employee deletion
// // // //   const handleDelete = async (id) => {
// // // //     const token = localStorage.getItem("jwt");

// // // //     try {
// // // //       await axios.delete(`http://localhost:5000/employees/${id}`, {
// // // //         headers: { Authorization: `Bearer ${token}` },
// // // //       });
// // // //       // Filter out the deleted employee from the state
// // // //       setEmployees((prevEmployees) =>
// // // //         prevEmployees.filter((employee) => employee._id !== id)
// // // //       );
// // // //     } catch (err) {
// // // //       console.error("Error deleting employee", err);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="dashboard">
// // // //       <h1>Employee Management Dashboard</h1>
// // // //       <button onClick={handleLogout}>Logout</button>

// // // //       {/* Add employee form */}
// // // //       <EmployeeForm mode="create" setEmployees={setEmployees} />

// // // //       {/* Display employee table */}
// // // //       <EmployeeTable
// // // //         employees={employees}
// // // //         handleDelete={handleDelete}
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Dashboard;

// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import { useNavigate } from "react-router-dom";
// // // import EmployeeTable from "./EmployeeTable";
// // // import EmployeeForm from "./EmployeeForm";

// // // const Dashboard = () => {
// // //   const [employees, setEmployees] = useState([]);
// // //   const navigate = useNavigate();

// // //   // Handle user logout
// // //   const handleLogout = () => {
// // //     localStorage.removeItem("jwt"); // Remove JWT token
// // //     navigate("/login"); // Redirect to login
// // //   };

// // //   // Fetch employees on initial load
// // //   useEffect(() => {
// // //     const token = localStorage.getItem("jwt");

// // //     if (!token) {
// // //       navigate("/login"); // Redirect to login if no token is found
// // //     } else {
// // //       // Fetch employee data
// // //       axios
// // //         .get("http://localhost:5000/employees", {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         })
// // //         .then((response) => {
// // //           setEmployees(response.data); // Set fetched employee data
// // //         })
// // //         .catch((err) => {
// // //           console.error("Error fetching employees", err);
// // //         });
// // //     }
// // //   }, [navigate]);

// // //   // Handle employee deletion
// // //   const handleDelete = async (id) => {
// // //     const token = localStorage.getItem("jwt");

// // //     try {
// // //       await axios.delete(`http://localhost:5000/employees/${id}`, {
// // //         headers: { Authorization: `Bearer ${token}` },
// // //       });
// // //       // Filter out the deleted employee from the state
// // //       setEmployees((prevEmployees) =>
// // //         prevEmployees.filter((employee) => employee._id !== id)
// // //       );
// // //     } catch (err) {
// // //       console.error("Error deleting employee", err);
// // //     }
// // //   };

// // //   return (
// // //     <div className="dashboard">
// // //       <h1>Employee Management Dashboard</h1>
// // //       <button onClick={handleLogout}>Logout</button>

// // //       {/* Add employee form */}
// // //       <EmployeeForm mode="create" setEmployees={setEmployees} />

// // //       {/* Display employee table */}
// // //       <EmployeeTable
// // //         employees={employees}
// // //         handleDelete={handleDelete}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;

// // import React, { useState } from "react";
// // import AllEmployees from "./AllEmployees";
// // import EmployeeForm from "./EmployeeForm";

// // const Dashboard = () => {
// //   const [view, setView] = useState("allEmployees");

// //   const handleLogout = () => {
// //     localStorage.clear();
// //     window.location.href = "/login"; // Redirect to login page
// //   };

// //   return (
// //     <div style={{ display: "flex", height: "100vh" }}>
// //       {/* Sidebar */}
// //       <div style={{ width: "250px", background: "#f0f0f0", padding: "20px" }}>
// //         <h3>Dashboard</h3>
// //         <button
// //           onClick={() => setView("allEmployees")}
// //           style={{
// //             width: "100%",
// //             marginBottom: "10px",
// //             padding: "10px",
// //             backgroundColor: view === "allEmployees" ? "#007bff" : "#e0e0e0",
// //             color: view === "allEmployees" ? "#fff" : "#000",
// //             border: "none",
// //             borderRadius: "5px",
// //           }}
// //         >
// //           All Employees
// //         </button>
// //         <button
// //           onClick={() => setView("addEmployee")}
// //           style={{
// //             width: "100%",
// //             padding: "10px",
// //             backgroundColor: view === "addEmployee" ? "#007bff" : "#e0e0e0",
// //             color: view === "addEmployee" ? "#fff" : "#000",
// //             border: "none",
// //             borderRadius: "5px",
// //           }}
// //         >
// //           Add Employee
// //         </button>
// //       </div>

// //       {/* Main Content */}
// //       <div style={{ flex: 1, padding: "20px" }}>
// //         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
// //           <h2>{view === "allEmployees" ? "All Employees" : "Add Employee"}</h2>
// //           <button
// //             onClick={handleLogout}
// //             style={{
// //               background: "#ff4d4d",
// //               color: "#fff",
// //               border: "none",
// //               padding: "10px 20px",
// //               borderRadius: "5px",
// //               cursor: "pointer",
// //             }}
// //           >
// //             Logout
// //           </button>
// //         </div>

// //         {/* Dynamic View */}
// //         {view === "allEmployees" ? <AllEmployees /> : <EmployeeForm mode="create" />}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// import React, { useState } from "react";
// import AllEmployees from "./AllEmployees";
// import EmployeeForm from "./EmployeeForm";

// const Dashboard = () => {
//   const [view, setView] = useState("allEmployees");

//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.href = "/login"; // Redirect to login page
//   };

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       {/* Sidebar */}
//       <div style={{ width: "250px", background: "#f0f0f0", padding: "20px" }}>
//         <h3>Dashboard</h3>
//         <button
//           onClick={() => setView("allEmployees")}
//           style={{
//             width: "100%",
//             marginBottom: "10px",
//             padding: "10px",
//             backgroundColor: view === "allEmployees" ? "#007bff" : "#e0e0e0",
//             color: view === "allEmployees" ? "#fff" : "#000",
//             border: "none",
//             borderRadius: "5px",
//           }}
//         >
//           All Employees
//         </button>
//         <button
//           onClick={() => setView("addEmployee")}
//           style={{
//             width: "100%",
//             padding: "10px",
//             backgroundColor: view === "addEmployee" ? "#007bff" : "#e0e0e0",
//             color: view === "addEmployee" ? "#fff" : "#000",
//             border: "none",
//             borderRadius: "5px",
//           }}
//         >
//           Add Employee
//         </button>
//       </div>

//       {/* Main Content */}
//       <div style={{ flex: 1, padding: "20px" }}>
//         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
//           <h2>{view === "allEmployees" ? "All Employees" : "Add Employee"}</h2>
//           <button
//             onClick={handleLogout}
//             style={{
//               background: "#ff4d4d",
//               color: "#fff",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Logout
//           </button>
//         </div>

//         {/* Dynamic View */}
//         {view === "allEmployees" ? <AllEmployees /> : <EmployeeForm mode="create" />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState } from "react";
// import AllEmployees from "./AllEmployees";
// import EmployeeForm from "./EmployeeForm";

// const Dashboard = () => {
//   const [view, setView] = useState("allEmployees");
//   const [refreshEmployees, setRefreshEmployees] = useState(false);
//   const handleLogout = () => {
//     localStorage.clear();
//     window.location.href = "/login"; // Redirect to login page
//   };
//   const handleEmployeeAdded = () => {
//     setView("allEmployees");
//     setRefreshEmployees((prev) => !prev); // Toggle state to trigger re-render
//   };
//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       {/* Sidebar */}
//       <div style={{ width: "250px", background: "#f0f0f0", padding: "20px" }}>
//         <h3>Dashboard</h3>
//         <button
//           onClick={() => setView("allEmployees")}
//           style={{
//             width: "100%",
//             marginBottom: "10px",
//             padding: "10px",
//             backgroundColor: view === "allEmployees" ? "#007bff" : "#e0e0e0",
//             color: view === "allEmployees" ? "#fff" : "#000",
//             border: "none",
//             borderRadius: "5px",
//           }}
//         >
//           All Employees
//         </button>
//         <button
//           onClick={() => setView("addEmployee")}
//           style={{
//             width: "100%",
//             padding: "10px",
//             backgroundColor: view === "addEmployee" ? "#007bff" : "#e0e0e0",
//             color: view === "addEmployee" ? "#fff" : "#000",
//             border: "none",
//             borderRadius: "5px",
//           }}
//         >
//           Add Employee
//         </button>
//       </div>

//       {/* Main Content */}
//       <div style={{ flex: 1, padding: "20px" }}>
//         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
//           <h2>{view === "allEmployees" ? "All Employees" : "Add Employee"}</h2>
//           <button
//             onClick={handleLogout}
//             style={{
//               background: "#ff4d4d",
//               color: "#fff",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               cursor: "pointer",
//             }}
//           >
//             Logout
//           </button>
//         </div>

//         {/* Dynamic View */}
//         {/* {view === "allEmployees" ? <AllEmployees /> : <EmployeeForm mode="create" />} */}
//         {view === "allEmployees" ? (<AllEmployees refresh={refreshEmployees} />) : (<EmployeeForm mode="create" onEmployeeAdded={handleEmployeeAdded} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AllEmployees from "./AllEmployees";
import EmployeeForm from "./EmployeeForm";

const Dashboard = ({ view: initialView }) => {
  const [view, setView] = useState(initialView || "allEmployees");
  const [refreshEmployees, setRefreshEmployees] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Update view state based on the URL
    if (location.pathname === "/employees") {
      setView("allEmployee");
    } else if (location.pathname === "/employees/create") {
      
      setView("addEmployees");
    }
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login"); // Redirect to login page
  };

  const handleEmployeeAdded = () => {
    navigate("/employees"); // Redirect to All Employees view
    setRefreshEmployees((prev) => !prev); // Trigger refresh for AllEmployees
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div style={{ width: "250px", background: "#f0f0f0", padding: "20px" }}>
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
          All Employees
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
      <div style={{ flex: 1, padding: "20px" }}>
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
          <EmployeeForm mode="create" onEmployeeAdded={handleEmployeeAdded} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
