<template>
  <div class="container my-4">
    <h2 class="text-center mb-4">Employee List</h2>
    <ul class="list-group">
      <li 
        v-for="employee in employees" 
        :key="employee.id" 
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span>
          <strong>{{ employee.username }}</strong> - {{ employee.id }} - {{ employee.empName }} - {{ employee.role }} - {{ employee.photos }}
        </span>
        <span>
          <button class="btn btn-primary btn-sm me-2" @click="editEmployee(employee)">Edit</button>
          <button class="btn btn-danger btn-sm" @click="deleteEmployee(employee.id)">Delete</button>
        </span>
      </li>
    </ul>

    <div v-if="editingEmployee" class="card mt-4">
      <div class="card-body">
        <h3 class="card-title">Edit Employee</h3>
        <form @submit.prevent="updateEmployee">
          <div class="mb-3">
            <label for="username" class="form-label">Employee Name</label>
            <input 
              type="text" 
              id="username" 
              class="form-control" 
              v-model="editingEmployee.username" 
              placeholder="Employee Name"
            >
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password Employee</label>
            <input 
              type="password" 
              id="password" 
              class="form-control" 
              v-model="editingEmployee.password" 
              placeholder="Password Employee"
            >
          </div>

          <div class="mb-3">
            <label for="role" class="form-label">Role Employee</label>
            <input 
              type="text" 
              id="role" 
              class="form-control" 
              v-model="editingEmployee.role" 
              placeholder="Role Employee"
            >
          </div>

          <div class="mb-3">
            <label for="photos" class="form-label">Photos Employee</label>
            <input 
              type="text" 
              id="photos" 
              class="form-control" 
              v-model="editingEmployee.photos" 
              placeholder="Photos Employee"
            >
          </div>

          <button type="submit" class="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import EmployeeService from '../services/EmployeeService'
export default {
  data () {
    return {
      employees: [],
      editingEmployee: null
    }
  },
  created () {
    this.fetchEmployees()
  },
  methods: {
    fetchEmployees () {
      EmployeeService.getAllEmployee().then( response => {
        console.log(response)
        this.employees = response.data.listEmp;
      })
    },
    editEmployee (employee) {
      this.editingEmployee = { ...employee }
    },
    updateEmployee () {
      EmployeeService.updateEmployee (this.editingEmployee).then(() => {
        this.fetchEmployees()
        this.editingEmployee = null
      })
    },
    deleteEmployee (employeeId) {
      EmployeeService.deleteEmployee(employeeId).then(() => {
        this.fetchEmployees()
      })
    }
  }
}
</script>
