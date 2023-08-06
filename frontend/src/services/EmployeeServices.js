import axios from "axios";
const EMPLOYES_BASE_URL = "http://localhost:8080/api/v1/employee";
class EmployeeServices {
  getAllEmployees() {
    return axios.get(EMPLOYES_BASE_URL);
  }
  addEmployee(employee) {
    return axios.post(EMPLOYES_BASE_URL, employee);
  }
  getEmployeeBYId(id) {
    return axios.get(EMPLOYES_BASE_URL + "/" + id);
  }
  updateEmployee(id, employee) {
    return axios.put(EMPLOYES_BASE_URL + "/" + id, employee);
  }
  deleteEmployee(id) {
    return axios.delete(EMPLOYES_BASE_URL + "/" + id);
  }
}
export default new EmployeeServices();
