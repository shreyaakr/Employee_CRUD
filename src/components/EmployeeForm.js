// // // // import React, { useState, useEffect } from "react";
// // // // import axios from "axios";
// // // // import { useNavigate } from "react-router-dom";
// // // // // import axiosInstance from "../axiosInstance";


// // // // const EmployeeForm = ({ mode, employeeId }) => {
// // // //   const [name, setName] = useState("");
// // // //   const [email, setEmail] = useState("");
// // // //   const [position, setPosition] = useState("");
// // // //   const [department, setDepartment] = useState("");
// // // //   const [salary, setSalary] = useState("");
// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     if (mode === "update" && employeeId) {
// // // //       // Fetch employee data to pre-populate the form
// // // //       axios
// // // //         .get(`http://localhost:5000/employees/${employeeId}`, {
// // // //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // //         })
// // // //         .then((response) => {
// // // //           const { name, email, position, department, salary } = response.data;
// // // //           setName(name);
// // // //           setEmail(email);
// // // //           setPosition(position);
// // // //           setDepartment(department);
// // // //           setSalary(salary);
// // // //         })
// // // //         .catch((err) => console.error("Error fetching employee", err));
// // // //     }
// // // //   }, [mode, employeeId]);

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     const employeeData = { name, email, position, department, salary };
// // // //     const url =
// // // //       mode === "create"
// // // //         ? "http://localhost:5000/employees"
// // // //         : `http://localhost:5000/employees/${employeeId}`;
// // // //     const method = mode === "create" ? "post" : "put";

// // // //     try {
// // // //       await axios[method](url, employeeData, {
// // // //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // // //       });
// // // //       navigate("/employees");
// // // //     } catch (err) {
// // // //       console.error("Error saving employee", err);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <form onSubmit={handleSubmit}>
// // // //       <input
// // // //         type="text"
// // // //         placeholder="Name"
// // // //         value={name}
// // // //         onChange={(e) => setName(e.target.value)}
// // // //       />
// // // //       <input
// // // //         type="email"
// // // //         placeholder="Email"
// // // //         value={email}
// // // //         onChange={(e) => setEmail(e.target.value)}
// // // //       />
// // // //       <input
// // // //         type="text"
// // // //         placeholder="Position"
// // // //         value={position}
// // // //         onChange={(e) => setPosition(e.target.value)}
// // // //       />
// // // //       <input
// // // //         type="text"
// // // //         placeholder="Department"
// // // //         value={department}
// // // //         onChange={(e) => setDepartment(e.target.value)}
// // // //       />
// // // //       <input
// // // //         type="number"
// // // //         placeholder="Salary"
// // // //         value={salary}
// // // //         onChange={(e) => setSalary(e.target.value)}
// // // //       />
// // // //       <button type="submit">{mode === "create" ? "Create" : "Update"} Employee</button>
// // // //     </form>
// // // //   );
// // // // };

// // // // export default EmployeeForm;

// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import { useNavigate } from "react-router-dom";

// // // const EmployeeForm = ({ mode, employeeId }) => {
// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [position, setPosition] = useState("");
// // //   const [department, setDepartment] = useState("");
// // //   const [salary, setSalary] = useState("");
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     if (mode === "update" && employeeId) {
// // //       // Fetch employee data to pre-populate the form if in update mode
// // //       axios
// // //         .get(`http://localhost:5000/employees/${employeeId}`, {
// // //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // //         })
// // //         .then((response) => {
// // //           const { name, email, position, department, salary } = response.data;
// // //           setName(name);
// // //           setEmail(email);
// // //           setPosition(position);
// // //           setDepartment(department);
// // //           setSalary(salary);
// // //         })
// // //         .catch((err) => console.error("Error fetching employee", err));
// // //     }
// // //   }, [mode, employeeId]);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     const employeeData = { name, email, position, department, salary };
// // //     const url =
// // //       mode === "create"
// // //         ? "http://localhost:5000/employees"
// // //         : `http://localhost:5000/employees/${employeeId}`;
// // //     const method = mode === "create" ? "post" : "put";

// // //     try {
// // //       const response = await axios[method](url, employeeData, {
// // //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // //       });

// // //       if (response.status === 201 || response.status === 200) {
// // //         navigate("/employees"); // Redirect to employee list after submission
// // //       } else {
// // //         console.error("Failed to add employee");
// // //       }
// // //     } catch (err) {
// // //       console.error("Error saving employee", err);
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <input
// // //         type="text"
// // //         placeholder="Name"
// // //         value={name}
// // //         onChange={(e) => setName(e.target.value)}
// // //       />
// // //       <input
// // //         type="email"
// // //         placeholder="Email"
// // //         value={email}
// // //         onChange={(e) => setEmail(e.target.value)}
// // //       />
// // //       <input
// // //         type="text"
// // //         placeholder="Position"
// // //         value={position}
// // //         onChange={(e) => setPosition(e.target.value)}
// // //       />
// // //       <input
// // //         type="text"
// // //         placeholder="Department"
// // //         value={department}
// // //         onChange={(e) => setDepartment(e.target.value)}
// // //       />
// // //       <input
// // //         type="number"
// // //         placeholder="Salary"
// // //         value={salary}
// // //         onChange={(e) => setSalary(e.target.value)}
// // //       />
// // //       <button type="submit">{mode === "create" ? "Create" : "Update"} Employee</button>
// // //     </form>
// // //   );
// // // };

// // // export default EmployeeForm;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // // import axiosInstance from "../axiosInstance";


// // const EmployeeForm = ({ mode, employeeId }) => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [position, setPosition] = useState("");
// //   const [department, setDepartment] = useState("");
// //   const [salary, setSalary] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (mode === "update" && employeeId) {
// //       // Fetch employee data to pre-populate the form
// //       axios
// //         .get(`http://localhost:5000/employees/${employeeId}`, {
// //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// //         })
// //         .then((response) => {
// //           const { name, email, position, department, salary } = response.data;
// //           setName(name);
// //           setEmail(email);
// //           setPosition(position);
// //           setDepartment(department);
// //           setSalary(salary);
// //         })
// //         .catch((err) => console.error("Error fetching employee", err));
// //     }
// //   }, [mode, employeeId]);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const employeeData = { name, email, position, department, salary };
// //     const url =
// //       mode === "create"
// //         ? "http://localhost:5000/employees"
// //         : `http://localhost:5000/employees/${employeeId}`;
// //     const method = mode === "create" ? "post" : "put";

// //     try {
// //       await axios[method](url, employeeData, {
// //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// //       });
// //       navigate("/employees");
// //     } catch (err) {
// //       console.error("Error saving employee", err);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input
// //         type="text"
// //         placeholder="Name"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //       />
// //       <input
// //         type="email"
// //         placeholder="Email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //       />
// //       <input
// //         type="text"
// //         placeholder="Position"
// //         value={position}
// //         onChange={(e) => setPosition(e.target.value)}
// //       />
// //       <input
// //         type="text"
// //         placeholder="Department"
// //         value={department}
// //         onChange={(e) => setDepartment(e.target.value)}
// //       />
// //       <input
// //         type="number"
// //         placeholder="Salary"
// //         value={salary}
// //         onChange={(e) => setSalary(e.target.value)}
// //       />
// //       <button type="submit">{mode === "create" ? "Create" : "Update"} Employee</button>
// //     </form>
// //   );
// // };

// // export default EmployeeForm;


// // import React, { useState } from "react";
// // import axiosInstance from "../axiosInstance";

// // const EmployeeForm = ({ mode, onEmployeeAdded }) => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [position, setPosition] = useState("");
// //   const [department, setDepartment] = useState("");
// //   const [salary, setSalary] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const employeeData = { name, email, position, department, salary };

// //     try {
// //       if (mode === "create") {
// //         await axiosInstance.post("/employees", employeeData, {
// //           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// //         });
// //         alert("Employee added successfully!");
// //         if (onEmployeeAdded) {
// //           onEmployeeAdded(); // Notify the parent component
// //         }
// //       }
// //     } catch (err) {
// //       console.error("Error saving employee", err);
// //       alert("Failed to add employee.");
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input
// //         type="text"
// //         placeholder="Name"
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //       />
// //       <input
// //         type="email"
// //         placeholder="Email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //       />
// //       <input
// //         type="text"
// //         placeholder="Position"
// //         value={position}
// //         onChange={(e) => setPosition(e.target.value)}
// //       />
// //       <input
// //         type="text"
// //         placeholder="Department"
// //         value={department}
// //         onChange={(e) => setDepartment(e.target.value)}
// //       />
// //       <input
// //         type="number"
// //         placeholder="Salary"
// //         value={salary}
// //         onChange={(e) => setSalary(e.target.value)}
// //       />
// //       <button type="submit">Add Employee</button>
// //     </form>
// //   );
// // };

// // export default EmployeeForm;

// import React, { useState } from "react";
// import axiosInstance from "../axiosInstance";

// const EmployeeForm = ({ onEmployeeAdded }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [position, setPosition] = useState("");
//   const [department, setDepartment] = useState("");
//   const [salary, setSalary] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const employeeData = { name, email, position, department, salary };

//     try {
//       // if (mode === "create") {
//         // Send POST request to the backend
//         await axiosInstance.post("/employees", employeeData, {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         });

//         alert("Employee added successfully!");
        
//         setName("");
//         setEmail("");
//         setPosition("");
//         setDepartment("");
//         setSalary("");
//         // Notify the parent component that an employee has been added
//         if (onEmployeeAdded) {
//           onEmployeeAdded();
//         }
//       }
//     catch (err) {
//       console.error("Error saving employee", err);
//       alert("Failed to add employee.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Position"
//         value={position}
//         onChange={(e) => setPosition(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Department"
//         value={department}
//         onChange={(e) => setDepartment(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Salary"
//         value={salary}
//         onChange={(e) => setSalary(e.target.value)}
//       />
//       <button type="submit">Add Employee</button>
//     </form>
//   );
// };

// export default EmployeeForm;

import React, { useState } from "react";
import axiosInstance from "../axiosInstance";

const EmployeeForm = ({ onEmployeeAdded }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeData = { name, email, position, department, salary };

    try {
      const response = await axiosInstance.post("/employees", employeeData);
      alert("Employee added successfully!");
      setName("");
      setEmail("");
      setPosition("");
      setDepartment("");
      setSalary("");
      onEmployeeAdded(response.data);
    } catch (err) {
      console.error("Error saving employee:", err);
      alert("Failed to add employee.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        required
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
