

// // // import React, { useState, useEffect } from "react";
// // // import axiosInstance from "../axiosInstance"; // Ensure axiosInstance is correctly set up

// // // const AllEmployees = () => {
// // //   const [employees, setEmployees] = useState([]);

// // //   useEffect(() => {
// // //     const fetchEmployees = async () => {
// // //       try {
// // //         const res = await axiosInstance.get("/employees", {
// // //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // //         });
// // //         setEmployees(res.data);
// // //       } catch (err) {
// // //         console.error("Error fetching employees", err);
// // //       }
// // //     };

// // //     fetchEmployees();
// // //   }, []);

// // //   return (
// // //     <table border="1" style={{ width: "100%", textAlign: "left" }}>
// // //       <thead>
// // //         <tr>
// // //           <th>Id</th>
// // //           <th>Full Name</th>
// // //           <th>Email</th>
// // //           <th>Designation</th>
// // //           <th>Salary</th>
// // //           <th>Actions</th>
// // //         </tr>
// // //       </thead>
// // //       <tbody>
// // //         {employees.map((emp) => (
// // //           <tr key={emp.id}>
// // //             <td>{emp.id}</td>
// // //             <td>{emp.name}</td>
// // //             <td>{emp.email}</td>
// // //             <td>{emp.position}</td>
// // //             <td>{emp.salary}</td>
// // //             <td>
// // //               <button style={{ marginRight: "10px", background: "blue", color: "white" }}>
// // //                 Edit
// // //               </button>
// // //               <button style={{ background: "red", color: "white" }}>Delete</button>
// // //             </td>
// // //           </tr>
// // //         ))}
// // //       </tbody>
// // //     </table>
// // //   );
// // // };

// // // export default AllEmployees;

// // import React, { useState, useEffect } from "react";
// // import axiosInstance from "../axiosInstance";

// // const AllEmployees = () => {
// //   const [employees, setEmployees] = useState([]);

// //   useEffect(() => {
// //     const fetchEmployees = async () => {
// //       try {
// //         const res = await axiosInstance.get("/employees", {
// //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// //         });
// //         setEmployees(res.data);
// //       } catch (err) {
// //         console.error("Error fetching employees", err);
// //       }
// //     };

// //     fetchEmployees();
// //   },[]);

// //   return (
// //     <table border="1" style={{ width: "100%", textAlign: "left" }}>
// //       <thead>
// //         <tr>
// //           <th>Id</th>
// //           <th>Full Name</th>
// //           <th>Email</th>
// //           <th>Designation</th>
// //           <th>Salary</th>
// //           <th>Actions</th>
// //         </tr>
// //       </thead>
// //       <tbody>
// //         {employees.map((emp) => (
// //           <tr key={emp.id}>
// //             <td>{emp.id}</td>
// //             <td>{emp.name}</td>
// //             <td>{emp.email}</td>
// //             <td>{emp.position}</td>
// //             <td>{emp.salary}</td>
// //             <td>
// //               <button style={{ marginRight: "10px", background: "blue", color: "white" }}>
// //                 Edit
// //               </button>
// //               <button style={{ background: "red", color: "white" }}>Delete</button>
// //             </td>
// //           </tr>
// //         ))}
// //       </tbody>
// //     </table>
// //   );
// // };

// // export default AllEmployees;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../axiosInstance";

// const AllEmployees = ({ refresh }) => {
//   const [employees, setEmployees] = useState([]);
//   const navigate = useNavigate();

//   // Fetch employees on component mount
//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const res = await axiosInstance.get("/employees", {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         setEmployees(res.data);
//       } catch (err) {
//         console.error("Error fetching employees", err);
//       }
//     };

//     fetchEmployees();
//   }, [refresh]);

//   // Handle delete employee
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this employee?")) {
//       try {
//         await axiosInstance.delete(`/employees/${id}`, {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });
//         // Remove the deleted employee from the state
//         setEmployees(employees.filter((emp) => emp.id !== id));
//         alert("Employee deleted successfully.");
//       } catch (err) {
//         console.error("Error deleting employee", err);
//         alert("Failed to delete employee.");
//       }
//     }
//   };

//   // Handle edit employee
//   const handleEdit = (id) => {
//     // Redirect to the edit form with the employee ID
//     navigate(`/edit-employee/${id}`);
//   };

//   return (
//     <table border="1" style={{ width: "100%", textAlign: "left" }}>
//       <thead>
//         <tr>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Position</th>
//           <th>Department</th>
//           <th>Salary</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {employees.map((emp) => (
//           <tr key={emp.id}>
//             <td>{emp.id}</td>
//             <td>{emp.name}</td>
//             <td>{emp.email}</td>
//             <td>{emp.position}</td>
//             <td>{emp.department}</td>
//             <td>{emp.salary}</td>
//             <td>
//               <button
//                 onClick={() => handleEdit(emp.id)}
//                 style={{ marginRight: "10px", background: "blue", color: "white" }}
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(emp.id)}
//                 style={{ background: "red", color: "white" }}
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default AllEmployees;

// import React, { useState, useEffect } from "react";
// import axiosInstance from "../axiosInstance";

// const AllEmployees = ({ refresh }) => {
//   const [employees, setEmployees] = useState([]);
//   const [editingEmployee, setEditingEmployee] = useState(null);
//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axiosInstance.get("/employees");
//         setEmployees(response.data);
//       } catch (err) {
//         console.error("Error fetching employees:", err);
//       }
//     };

//     fetchEmployees();
//   }, [refresh]);
//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this employee?")) {
//       try {
//         await axiosInstance.delete(`/employees/${id}`);
//         setEmployees(employees.filter((emp) => emp.id !== id)); // Remove from state
//         alert("Employee deleted successfully.");
//       } catch (err) {
//         console.error("Error deleting employee:", err);
//         alert("Failed to delete employee.");
//       }
//     }
//   };

//   // Handle edit employee
//   const handleEditSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axiosInstance.put(`/employees/${editingEmployee.id}`, editingEmployee);
//       alert("Employee updated successfully.");
//       setEditingEmployee(null); // Reset edit state
//     } catch (err) {
//       console.error("Error updating employee:", err);
//       alert("Failed to update employee.");
//     }
//   };
//   return (
//     <table border="1" style={{ width: "100%", textAlign: "left" }}>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Position</th>
//           <th>Department</th>
//           <th>Salary</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {employees.map((emp) => 
//         editingEmployee && editingEmployee.id === emp.id ? (
//           <tr key={emp.id}>
//             <td>{emp.id}</td>
//             <td>
//               <input
//                 type="text"
//                 value={editingEmployee.name}
//                 onChange={(e) =>
//                   setEditingEmployee({ ...editingEmployee, name: e.target.value })
//                 }
//               />
//             </td>
//             <td>
//               <input
//                 type="email"
//                 value={editingEmployee.email}
//                 onChange={(e) =>
//                   setEditingEmployee({ ...editingEmployee, email: e.target.value })
//                 }
//               />
//             </td>
//             <td>
//               <input
//                 type="text"
//                 value={editingEmployee.position}
//                 onChange={(e) =>
//                   setEditingEmployee({ ...editingEmployee, position: e.target.value })
//                 }
//               />
//             </td>
//             <td>
//               <input
//                 type="text"
//                 value={editingEmployee.department}
//                 onChange={(e) =>
//                   setEditingEmployee({ ...editingEmployee, department: e.target.value })
//                 }
//               />
//             </td>
//             <td>
//               <input
//                 type="number"
//                 value={editingEmployee.salary}
//                 onChange={(e) =>
//                   setEditingEmployee({ ...editingEmployee, salary: e.target.value })
//                 }
//               />
//             </td>
//             <td>
//               <button onClick={handleEditSubmit}>Save</button>
//               <button onClick={() => setEditingEmployee(null)}>Cancel</button>
//             </td>
//           </tr>
//         ) : (
//           <tr key={emp.id}>
//             <td>{emp.id}</td>
//             <td>{emp.name}</td>
//             <td>{emp.email}</td>
//             <td>{emp.position}</td>
//             <td>{emp.department}</td>
//             <td>{emp.salary}</td>
//             <td>
//                   <button
//                     onClick={() => setEditingEmployee(emp)}
//                     style={{ marginRight: "10px", background: "blue", color: "white" }}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(emp.id)}
//                     style={{ background: "red", color: "white" }}
//                   >
//                     Delete
//                   </button>
//                 </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default AllEmployees;

import React, { useState, useEffect } from "react";
import axiosInstance from "../axiosInstance";

const AllEmployees = ({ refresh }) => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

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

  // Handle delete employee
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await axiosInstance.delete(`/employees/${id}`);
        setEmployees(employees.filter((emp) => emp.id !== id)); // Remove from state
        alert("Employee deleted successfully.");
      } catch (err) {
        console.error("Error deleting employee:", err);
        alert("Failed to delete employee.");
      }
    }
  };

  // Handle edit employee
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.put(`/employees/${editingEmployee.id}`, editingEmployee);
      alert("Employee updated successfully.");
      setEditingEmployee(null); // Reset edit state
    } catch (err) {
      console.error("Error updating employee:", err);
      alert("Failed to update employee.");
    }
  };

  return (
    <div>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) =>
            editingEmployee && editingEmployee.id === emp.id ? (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>
                  <input
                    type="text"
                    value={editingEmployee.name}
                    onChange={(e) =>
                      setEditingEmployee({ ...editingEmployee, name: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="email"
                    value={editingEmployee.email}
                    onChange={(e) =>
                      setEditingEmployee({ ...editingEmployee, email: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editingEmployee.position}
                    onChange={(e) =>
                      setEditingEmployee({ ...editingEmployee, position: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editingEmployee.department}
                    onChange={(e) =>
                      setEditingEmployee({ ...editingEmployee, department: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={editingEmployee.salary}
                    onChange={(e) =>
                      setEditingEmployee({ ...editingEmployee, salary: e.target.value })
                    }
                  />
                </td>
                <td>
                  <button onClick={handleEditSubmit}>Save</button>
                  <button onClick={() => setEditingEmployee(null)}>Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.position}</td>
                <td>{emp.department}</td>
                <td>{emp.salary}</td>
                <td>
                  <button
                    onClick={() => setEditingEmployee(emp)}
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
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllEmployees;
