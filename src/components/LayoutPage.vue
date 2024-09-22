src/components/Layout.vue
<template>
    <div>
      <HeaderPage />
      <main>

        <div class="social-media-sidebar">
          <a href="https://wa.me/01308586888" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="icon">
          </a>
          <a href="https://www.facebook.com/archithousand" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" class="icon">
          </a>
          <a href="https://www.instagram.com/archithousand" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" class="icon">
          </a>
          <a href="https://www.youtube.com/@archithousand" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" class="iconYoutube">
          </a>
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
    top: 22%;
    left: 0;
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

  </style>
  