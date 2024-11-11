<template>
  <div class="card container my-3 p-3" style="max-width: 700px">
    <h2 class="card-title text-center mb-3">Register</h2>
    <form @submit.prevent="register">
      <div class="mb-2">
        <label class="form-label" for="username">Username</label>
        <input
          class="form-control form-control-lg"
          v-model="username"
          id="username"
          type="text"
          placeholder="Enter username"
        />
      </div>
      <div class="mb-4">
        <label class="form-label" for="password">Password</label>
        <input
          class="form-control form-control-lg"
          v-model="password"
          id="password"
          type="password"
          placeholder="Enter password"
        />
      </div>
      <div class="mb-2">
        <label class="form-label" for="empName">Employee Name</label>
        <input
          class="form-control form-control-lg"
          v-model="empName"
          id="empName"
          type="text"
          placeholder="Enter username"
        />
      </div>
      <div class="mb-2">
        <label class="form-label" for="photos">photo link</label>
        <input
          class="form-control form-control-lg"
          v-model="photos"
          id="photos"
          type="text"
          placeholder="Enter username"
        />
      </div>
      <div class="mb-2">
        <label class="form-label" for="role">Role</label>
        <input
          class="form-control form-control-lg"
          v-model="role"
          id="role"
          type="text"
          placeholder="Enter username"
        />
      </div>
      <div class="text-center">
        <button class="btn btn-lg btn-success" type="submit">Register</button>
      </div>
      <div class="text-center mt-2">
        <a href="/login">Login?</a>
      </div>
    </form>
  </div>
</template>

<script>
import EmployeeService from "../services/EmployeeService";

export default {
  data() {
    return {
      username: '',
      password: '',
      empName: '',
      photos: '',
      role: ''
    };
  },
  methods: {
    register() {
      EmployeeService.register(this.username, this.password, this.empName, this.photos, this.role)
        .then((response) => {
          console.log("Registration successful:", response);
          response.data.statusCode == 200 ? this.$router.push('/list') : alert(response.data.error)
        })
        .catch((error) => {
          console.error("Error during registration:", error);
        });
    },
  },
};
</script>
