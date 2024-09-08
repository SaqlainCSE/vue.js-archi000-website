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
                <router-link to="/" class="nav-item nav-link" active-class="active">Home</router-link>
                <router-link to="about" class="nav-item nav-link" active-class="active">About</router-link>
                <router-link to="service" class="nav-item nav-link" active-class="active">Services</router-link>
                <div class="nav-item dropdown">
                    <router-link href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</router-link>
                    <div class="dropdown-menu border-0 m-0">
                        <a href="feature.html" class="dropdown-item">Our Features</a>
                        <a href="project.html" class="dropdown-item">Our Projects</a>
                        <a href="team.html" class="dropdown-item">Team Members</a>
                        <a href="appointment.html" class="dropdown-item">Appointment</a>
                        <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                        <a href="404.html" class="dropdown-item">404 Page</a>
                    </div>
                </div>
                <router-link to="contact" class="nav-item nav-link" active-class="active">Contact</router-link>
            </div>
            <a href="" class="btn btn-primary py-2 px-4 d-none d-lg-block">Appointment</a>
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
