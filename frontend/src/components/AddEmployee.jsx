import { useEffect, useState } from "react";
import EmployeeServices from "../services/EmployeeServices";
import { Link, useNavigate, useParams } from "react-router-dom";
const AddEmployee = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [department, setDepartment] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const title = id ? "Update Employee" : " Add Employee";
  useEffect(() => {
    console.log(id);
    EmployeeServices.getEmployeeBYId(id)
      .then((response) => {
        console.log(response);
        setName(response.data.name);
        setEmail(response.data.email);
        setDepartment(response.data.department);
        setExperience(response.data.experience);
        setSalary(response.data.salary);
        setPhone(response.data.phone);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const handelOnSubmit = (e) => {
    e.preventDefault();
    const employee = { name, email, phone, department, salary, experience };
    if (id) {
      EmployeeServices.updateEmployee(id, employee)
        .then((response) => {
          navigate("/employees");
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      EmployeeServices.addEmployee(employee)
        .then((response) => {
          navigate("/employees"); // Use navigate without .push
        })
        .catch((e) => console.log(e));
    }
  };
  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          <h2 className="text-center">{title}</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <input
                  placeholder="Name"
                  className="form-control"
                  name="name"
                  value={name}
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mb-2">
                <input
                  placeholder="Email"
                  className="form-control"
                  name="email"
                  value={email}
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mb-2">
                <input
                  placeholder="phone"
                  className="form-control"
                  name="phone"
                  value={phone}
                  type="text"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mb-2">
                <input
                  placeholder="department"
                  className="form-control"
                  name="department"
                  value={department}
                  type="text"
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mb-2">
                <input
                  placeholder="Salary"
                  className="form-control"
                  name="Salary"
                  value={salary}
                  type="text"
                  onChange={(e) => {
                    setSalary(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mb-2">
                <input
                  placeholder="Experience"
                  className="form-control"
                  name="experience"
                  value={experience}
                  type="text"
                  onChange={(e) => {
                    setExperience(e.target.value);
                  }}
                />
              </div>
              <button className=" btn btn-success" onClick={handelOnSubmit}>
                Submit
              </button>
              <Link to="/employees" className="btn btn-danger">
                cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddEmployee;
