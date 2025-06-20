src/components/Layout.vue
<template>
    <div>
      <HeaderPage />
      <main>

        <div class="social-media-sidebar">
          <a class="btn btn-square btn-outline-body me-1" href="https://www.youtube.com/@archithousand" target="_blank"><i class="fab fa-youtube"></i></a>
          <a class="btn btn-square btn-outline-body me-1" href="https://www.facebook.com/archithousand" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a class="btn btn-square btn-outline-body me-1" href="https://www.instagram.com/archithousand" target="_blank"><i class="fab fa-instagram"></i></a>
          <a class="btn btn-square btn-outline-body me-1" href="https://wa.me/01308586888" target="_blank"><i class="fab fa-whatsapp"></i></a>
        </div>

        <router-view />
      </main>
      <FooterPage />
    </div>
  </template>
  
  <script>
  import HeaderPage from './HeaderPage.vue';
  import FooterPage from './FooterPage.vue';
  
  export default {
    components: {
      HeaderPage,
      FooterPage,
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional layout styles here */
  main {
    min-height: 80vh; /* Adjust as needed */
  }

  .social-media-sidebar {
    position: fixed;
    top: 55%;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    z-index: 1000;
}

/* Style for the icons */
.icon {
    width: 40px;
    height: 40px;
    opacity: 0.5; /* Initially transparent */
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.iconYoutube{
    width: 70px;
    height: 30px;
    opacity: 0.5; /* Initially transparent */
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

/* Hover effect: icons become fully visible */
.icon:hover {
    opacity: 1; /* Fully visible on hover */
    transform: scale(1.2); /* Slightly enlarge the icon */
}

.iconYoutube:hover{
    opacity: 1; /* Fully visible on hover */
    transform: scale(1.2); /* Slightly enlarge the icon */
}

@media (max-width: 767.98px) {
  .social-media-sidebar {
    display: none !important;        /* Hide sidebar on mobile */
  }

  main {
    min-height: 40vh !important;
  }

}

  </style>
  