import React, { useEffect, useState } from "react";
import EmployeeServices from "../services/EmployeeServices";
import { Link, useNavigate } from "react-router-dom";
const ListEmployeeStateLess = () => {
  const nav = useNavigate();
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    EmployeeServices.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const deleteEmployee = (id) => {
    EmployeeServices.deleteEmployee(id)
      .then((res) => {
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="container">
      <h2 className="text-center">List of Employees</h2>
      <div>
        <Link to="/addEmployee" className="btn btn-primary mb-2 ">
          Add Employee
        </Link>
      </div>
      <table className="table table-bordered table-striped">
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>phone</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Experience</th>
          <th>Action</th>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
              <td>{emp.experience}</td>
              <td>
                <Link to={`/updateemployee/${emp.id}`} className="btn btn-info">
                  Update
                </Link>
                <button
                  className="btn btn-danger "
                  type="submit"
                  onClick={(e) => deleteEmployee(emp.id)}
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

export default ListEmployeeStateLess;
