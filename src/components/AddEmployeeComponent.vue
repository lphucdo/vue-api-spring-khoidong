<template>
  <div class="container my-4">
    <h2 class="text-center mb-4">Add Employee</h2>
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="addEmployee">
          <div class="mb-3">
            <label for="empName" class="form-label">Employee Name</label>
            <input 
              type="text" 
              id="empName" 
              class="form-control" 
              v-model="employee.empName" 
              placeholder="Enter employee name"
            >
          </div>

          <div class="mb-3">
            <label for="role" class="form-label">Role</label>
            <input 
              type="text" 
              id="role" 
              class="form-control" 
              v-model="employee.role" 
              placeholder="Enter employee role"
            >
          </div>

          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input 
              type="text" 
              id="username" 
              class="form-control" 
              v-model="employee.username" 
              placeholder="Enter username"
            >
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input 
              type="password" 
              id="password" 
              class="form-control" 
              v-model="employee.password" 
              placeholder="Enter password"
            >
          </div>

          <div class="mb-3">
            <label for="photos" class="form-label">Photos</label>
            <input 
              type="text" 
              id="photos" 
              class="form-control" 
              v-model="employee.photos" 
              placeholder="Enter photo URL"
            >
          </div>

          <button type="submit" class="btn btn-primary">Add Employee</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeService from '../services/EmployeeService';
export default {
  data () {
    return {
      employee: {
        empName: '',
        role: '',
        username: '',
        password: '',
        photos: ''
      }
    }
  },
  methods: {
    addEmployee () {
      EmployeeService.createEmployee(this.employee).then(() => {
        this.empName = '',
        this.role = '',
        this.username = '',
        this.password = '',
        this.photos = ''
        alert("Them Thanh Cong")
        this.$router.push("/list")
      })
    }
  }
}
</script>