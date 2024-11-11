import axios from 'axios'
import App from '../App.vue'

const API_BASE_URL = 'http://localhost:8080'

class EmployeeService {
  getAllEmployee () {
    return axios.get(`${API_BASE_URL}/admin/get-all-employee`)
  }

  getEmployeeByID (empId) {
    return axios.get(`${API_BASE_URL}/admin/get-employee/${empId}`)
  }

  createEmployee (employee) {
    return axios.post(`${API_BASE_URL}/auth/register`, employee)
  }

  updateEmployee (employee) {
    return axios.put(`${API_BASE_URL}/admin/update-employee/${employee.id}`, employee)
  }

  deleteEmployee (id) {
    return axios.delete(`${API_BASE_URL}/admin/delete-employee/${id}`)
  }

  //authentication
  async login (username, password) {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {username, password})

      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async register (username, password, empName, photos, role) {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, {
        username,
        password,
        empName,
        photos,
        role
      })
      return response
    } catch (error) {
      console.log(error)
    }
  }
}

export default new EmployeeService()
