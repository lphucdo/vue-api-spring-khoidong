<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">DoPhucLam</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/list">List Employee</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="add-employee">Add New</RouterLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <ul class="navbar-nav ms-auto">
          
          <li class="nav-item">
            <RouterLink class="nav-link" to="/login">Login</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/register">Register</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </header>

  <RouterView />
</template>
<script>

export default {
  data () {

  },
  methods: {
    
  }
}
</script>
<style scoped>
</style>
