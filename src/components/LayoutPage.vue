src/components/Layout.vue
<template>
    <div>
      <HeaderPage />
      <main>
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
  </style>
  