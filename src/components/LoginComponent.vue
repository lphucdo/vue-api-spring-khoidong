<template>
  <div class="card container my-3 p-3" style="max-width: 700px;">
    <h2 class="card-title text-center mb-3">Login</h2>
    <form @submit.prevent="login">
      <div class="mb-2">
        <label class="form-label" for="usernameLogin">Username</label>
        <input
          class="form-control form-control-lg"
          v-model="usernameLogin"
          id="usernameLogin"
          type="text"
          placeholder="Enter username"
        />
      </div>
      <div class="mb-4">
        <label class="form-label" for="passwordLogin">Password</label>
        <input
          class="form-control form-control-lg"
          v-model="passwordLogin"
          id="passwordLogin"
          type="password"
          placeholder="Enter password"
        />
      </div>
      <div>
        <label for="remember">Remember me?</label> <input type="checkbox" id="remember"/>
      </div>
      <div class="text-center">
        <button class="btn btn-lg btn-success" type="submit">Login</button>
      </div>
      <div class="text-center mt-2">
        <a href="/register">Register?</a>
      </div>
    </form>
  </div>
</template>

<script>
import EmployeeService from '../services/EmployeeService';

export default {
  data() {
    return {
      usernameLogin: '',
      passwordLogin: '',
    };
  },
  methods: {
    login() {
      EmployeeService.login(this.usernameLogin, this.passwordLogin)
        .then((response) => {
          if(response.statusCode == 200){
            localStorage.setItem("token",response.token)
            window.alert(response.message)
          }
        })
        .catch((error) => {
          console.error('Error during Login:', error);
        });
    },
  },
};
</script>
