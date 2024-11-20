// // // // // import React, { useState } from "react";
// // // // // import API from "../services/api";

// // // // // const EmployeeForm = () => {
// // // // //   const [formData, setFormData] = useState({
// // // // //     employeeName: "",
// // // // //     dateOfBirth: "",
// // // // //     role: "",
// // // // //     address: "",
// // // // //     skills: "",
// // // // //   });

// // // // //   const handleChange = (e) => {
// // // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       const skillsArray = formData.skills.split(",").map((skill) => skill.trim());
// // // // //       await API.post("/employee", { ...formData, skills: skillsArray });
// // // // //       alert("Employee added successfully!");
// // // // //       setFormData({
// // // // //         employeeName: "",
// // // // //         dateOfBirth: "",
// // // // //         role: "",
// // // // //         address: "",
// // // // //         skills: "",
// // // // //       });
// // // // //     } catch (err) {
// // // // //       alert("Failed to add employee: " + err.response.data.error);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="employee-form">
// // // // //       <h2>Add Employee</h2>
// // // // //       <form onSubmit={handleSubmit}>
// // // // //         <input
// // // // //           type="text"
// // // // //           name="employeeName"
// // // // //           placeholder="Employee Name"
// // // // //           value={formData.employeeName}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //         />
// // // // //         <input
// // // // //           type="date"
// // // // //           name="dateOfBirth"
// // // // //           placeholder="Date of Birth"
// // // // //           value={formData.dateOfBirth}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //         />
// // // // //         <input
// // // // //           type="text"
// // // // //           name="role"
// // // // //           placeholder="Role"
// // // // //           value={formData.role}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //         />
// // // // //         <textarea
// // // // //           name="address"
// // // // //           placeholder="Address"
// // // // //           value={formData.address}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //         />
// // // // //         <input
// // // // //           type="text"
// // // // //           name="skills"
// // // // //           placeholder="Skills (comma-separated)"
// // // // //           value={formData.skills}
// // // // //           onChange={handleChange}
// // // // //           required
// // // // //         />
// // // // //         <button type="submit">Add Employee</button>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default EmployeeForm;


// // // // import React, { useState } from "react";
// // // // import API from "../services/api";

// // // // const EmployeeForm = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     employeeName: "",
// // // //     dateOfBirth: "",
// // // //     role: "",
// // // //     address: "",
// // // //     skills: "",
// // // //   });
// // // //   const [errors, setErrors] = useState({});

// // // //   const validate = () => {
// // // //     const newErrors = {};
// // // //     if (!formData.employeeName) newErrors.employeeName = "Employee name is required.";
// // // //     if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required.";
// // // //     if (!formData.role) newErrors.role = "Role is required.";
// // // //     if (!formData.address) newErrors.address = "Address is required.";
// // // //     if (!formData.skills) newErrors.skills = "At least one skill is required.";
// // // //     return newErrors;
// // // //   };

// // // //   const handleChange = (e) => {
// // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     const newErrors = validate();
// // // //     if (Object.keys(newErrors).length > 0) {
// // // //       setErrors(newErrors);
// // // //       return;
// // // //     }
// // // //     setErrors({}); // Clear errors
// // // //     try {
// // // //       const skillsArray = formData.skills.split(",").map((skill) => skill.trim());
// // // //       await API.post("/employee", { ...formData, skills: skillsArray });
// // // //       alert("Employee added successfully!");
// // // //       setFormData({
// // // //         employeeName: "",
// // // //         dateOfBirth: "",
// // // //         role: "",
// // // //         address: "",
// // // //         skills: "",
// // // //       });
// // // //     } catch (err) {
// // // //       alert("Failed to add employee: " + err.response.data.error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="employee-form">
// // // //       <h2>Add Employee</h2>
// // // //       <form onSubmit={handleSubmit}>
// // // //         <input
// // // //           type="text"
// // // //           name="employeeName"
// // // //           placeholder="Employee Name"
// // // //           value={formData.employeeName}
// // // //           onChange={handleChange}
// // // //         />
// // // //         {errors.employeeName && <p className="error">{errors.employeeName}</p>}
// // // //         <input
// // // //           type="date"
// // // //           name="dateOfBirth"
// // // //           placeholder="Date of Birth"
// // // //           value={formData.dateOfBirth}
// // // //           onChange={handleChange}
// // // //         />
// // // //         {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
// // // //         <input
// // // //           type="text"
// // // //           name="role"
// // // //           placeholder="Role"
// // // //           value={formData.role}
// // // //           onChange={handleChange}
// // // //         />
// // // //         {errors.role && <p className="error">{errors.role}</p>}
// // // //         <textarea
// // // //           name="address"
// // // //           placeholder="Address"
// // // //           value={formData.address}
// // // //           onChange={handleChange}
// // // //         />
// // // //         {errors.address && <p className="error">{errors.address}</p>}
// // // //         <input
// // // //           type="text"
// // // //           name="skills"
// // // //           placeholder="Skills (comma-separated)"
// // // //           value={formData.skills}
// // // //           onChange={handleChange}
// // // //         />
// // // //         {errors.skills && <p className="error">{errors.skills}</p>}
// // // //         <button type="submit">Add Employee</button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default EmployeeForm;


// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import { useNavigate } from "react-router-dom";
// // // // import axiosInstance from "../axiosInstance";


// // // const EmployeeForm = ({ mode, employeeId }) => {
// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [position, setPosition] = useState("");
// // //   const [department, setDepartment] = useState("");
// // //   const [salary, setSalary] = useState("");
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     if (mode === "update" && employeeId) {
// // //       // Fetch employee data to pre-populate the form
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
// // //       await axios[method](url, employeeData, {
// // //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// // //       });
// // //       navigate("/employees");
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

// // const EmployeeForm = ({ mode, employeeId }) => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [position, setPosition] = useState("");
// //   const [department, setDepartment] = useState("");
// //   const [salary, setSalary] = useState("");
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (mode === "update" && employeeId) {
// //       // Fetch employee data to pre-populate the form if in update mode
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
// //       const response = await axios[method](url, employeeData, {
// //         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
// //       });

// //       if (response.status === 201 || response.status === 200) {
// //         navigate("/employees"); // Redirect to employee list after submission
// //       } else {
// //         console.error("Failed to add employee");
// //       }
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

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// // import axiosInstance from "../axiosInstance";


// const EmployeeForm = ({ mode, employeeId }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [position, setPosition] = useState("");
//   const [department, setDepartment] = useState("");
//   const [salary, setSalary] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (mode === "update" && employeeId) {
//       // Fetch employee data to pre-populate the form
//       axios
//         .get(`http://localhost:5000/employees/${employeeId}`, {
//           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         })
//         .then((response) => {
//           const { name, email, position, department, salary } = response.data;
//           setName(name);
//           setEmail(email);
//           setPosition(position);
//           setDepartment(department);
//           setSalary(salary);
//         })
//         .catch((err) => console.error("Error fetching employee", err));
//     }
//   }, [mode, employeeId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const employeeData = { name, email, position, department, salary };
//     const url =
//       mode === "create"
//         ? "http://localhost:5000/employees"
//         : `http://localhost:5000/employees/${employeeId}`;
//     const method = mode === "create" ? "post" : "put";

//     try {
//       await axios[method](url, employeeData, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       navigate("/employees");
//     } catch (err) {
//       console.error("Error saving employee", err);
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
//       <button type="submit">{mode === "create" ? "Create" : "Update"} Employee</button>
//     </form>
//   );
// };

// export default EmployeeForm;


import React, { useState } from "react";
import axiosInstance from "../axiosInstance";

const EmployeeForm = ({ mode, onEmployeeAdded }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeData = { name, email, position, department, salary };

    try {
      if (mode === "create") {
        await axiosInstance.post("/employees", employeeData, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        alert("Employee added successfully!");
        if (onEmployeeAdded) {
          onEmployeeAdded(); // Notify the parent component
        }
      }
    } catch (err) {
      console.error("Error saving employee", err);
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
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
