<template>
  <div id="HeaderComponent">
    <nav class="navbar navbar-expand-lg bg-white navbar-light fixed-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <router-link to="/" class="navbar-brand ms-4 ms-lg-0">
          <img class="me-3" src="/frontend/img/logo-1.png" alt="Icon">
        </router-link>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <router-link to="/" class="nav-item nav-link" exact-active-class="active">Home</router-link>
                <router-link to="about" class="nav-item nav-link" exact-active-class="active">About</router-link>
                <router-link to="service" class="nav-item nav-link" exact-active-class="active">Services</router-link>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu border-0 m-0">
                        <router-link to="/feature" class="dropdown-item">Features</router-link>
                        <router-link to="/project" class="dropdown-item">Projects</router-link>
                        <router-link to="/client" class="dropdown-item">Clients</router-link>
                    </div>
                </div>
                <router-link to="/contact" class="nav-item nav-link" exact-active-class="active">Contact</router-link>
            </div>
            <router-link to="/contact" class="btn btn-primary py-2 px-4 d-none d-lg-block">Appointment</router-link>
        </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'HeaderComponent',
  data() {
    return {
      
    };
  }
};
</script>

<style scoped>
/* Scoped styles here, if needed */
.nav-link.active {
  color: #007bff;
  font-weight: bold;
}

.d-lg-block:hover {
  background-color: black;
  border-color: green;;
}
</style>
