// import React, { useEffect, useState } from "react";
// import API from "../services/api";

// const EmployeeTable = () => {
//   const [employees, setEmployees] = useState([]);

//   const fetchEmployees = async () => {
//     try {
//       const { data } = await API.get("/employee");
//       setEmployees(data);
//     } catch (err) {
//       alert("Failed to fetch employees: " + err.response.data.error);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this employee?")) {
//       try {
//         await API.delete(`/employee/${id}`);
//         alert("Employee deleted successfully!");
//         fetchEmployees(); // Refresh the list
//       } catch (err) {
//         alert("Failed to delete employee: " + err.response.data.error);
//       }
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   return (
//     <div className="employee-table">
//       <h2>Employee List</h2>
//       {employees.length === 0 ? (
//         <p>No employees found.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Role</th>
//               <th>Address</th>
//               <th>Skills</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((employee) => (
//               <tr key={employee.employeeId}>
//                 <td>{employee.employeeId}</td>
//                 <td>{employee.employeeName}</td>
//                 <td>{employee.role}</td>
//                 <td>{employee.address}</td>
//                 <td>{employee.skills.join(", ")}</td>
//                 <td>
//                   <button onClick={() => handleDelete(employee.employeeId)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default EmployeeTable;


import React, { useEffect, useState } from "react";
import API from "../services/api";
import axios from "axios";
// import "../components/Employee";
const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [formData, setFormData] = useState({
    employeeName: "",
    dateOfBirth: "",
    role: "",
    address: "",
    skills: "",
  });

  const fetchEmployees = async () => {
    try {
      const { data } = await API.get("/employee");
      setEmployees(data);
    } catch (err) {
      alert("Failed to fetch employees: " + err.response.data.error);
    }
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setFormData({
      employeeName: employee.employeeName,
      dateOfBirth: employee.dateOfBirth,
      role: employee.role,
      address: employee.address,
      skills: employee.skills.join(", "),
    });
  };
 const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await API.delete(`/employee/${id}`);
        alert("Employee deleted successfully!");
        fetchEmployees(); // Refresh the list
      } catch (err) {
        alert("Failed to delete employee: " + err.response.data.error);
      }
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedSkills = formData.skills.split(",").map((skill) => skill.trim());
      await API.put(`/employee/${editingEmployee.employeeId}`, {
        ...formData,
        skills: updatedSkills,
      });
      alert("Employee updated successfully!");
      setEditingEmployee(null);
      fetchEmployees(); // Refresh the list
    } catch (err) {
      alert("Failed to update employee: " + err.response.data.error);
    }
  };

  // useEffect(() => {
  //   fetchEmployees();
  // }, []);
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem("jwt");
        const response = await axios.get("http://localhost:5000/employees", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Employees Data:", response.data); // Debugging
        setEmployees(response.data);
      } catch (err) {
        console.error("Error fetching employees:", err);
        alert("Failed to fetch employees. Please try again.");
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="employee-table">
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Address</th>
              <th>Skills</th>
              <th>Actions</th>
                {/* <th>Name</th>
            <th>Date of Birth</th>
            <th>Role</th>
            <th>Joining Date</th>
            <th>Address</th>
            <th>Skills</th> */}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.employeeId}>
                <td>{employee.employeeId}</td>
                <td>{employee.employeeName}</td>
                <td>{employee.role}</td>
                <td>{employee.address}</td>
                {/* <td>{employee.skills.join(", ")}</td> */}
                <td>{Array.isArray(employee.skills) ? employee.skills.join(", ") : "No skills listed"}</td>

                <td>
                  <button onClick={() => handleEdit(employee)}>Edit</button>
                  <button onClick={() => handleDelete(employee.employeeId)}>Delete</button>
                </td>
              {/* <tr key={employee._id}>
              <td>{employee.employeeName}</td>
              <td>{new Date(employee.dob).toLocaleDateString()}</td>
              <td>{employee.role}</td>
              <td>{new Date(employee.joiningDate).toLocaleDateString()}</td>
              <td>{employee.address}</td>
              <td>{employee.skills}</td> */}
            </tr>
              
            ))}
          </tbody>
        </table>
      )}
      {editingEmployee && (
        <form onSubmit={handleUpdate}>
          <h3>Edit Employee</h3>
          <input
            type="text"
            name="employeeName"
            value={formData.employeeName}
            onChange={(e) => setFormData({ ...formData, employeeName: e.target.value })}
            required
          />
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
            required
          />
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            required
          />
          <textarea
            name="address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            required
          />
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
            required
          />
          <button type="submit">Update</button>
          <button onClick={() => setEditingEmployee(null)}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default EmployeeTable;
