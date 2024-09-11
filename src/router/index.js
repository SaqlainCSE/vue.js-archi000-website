import { createRouter, createWebHistory } from 'vue-router';

import LayoutPage from '../components/LayoutPage.vue';
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import ServicePage from '@/components/ServicePage.vue';
import ContactPage from '@/components/ContactPage.vue';
import FeaturePage from '@/components/FeaturePage.vue';

const routes = [
  {
    path: '/',
    component: LayoutPage,
    children: [
      { path: '', component: HomePage },
      { path: 'about', component: AboutPage },
      { path: 'service', component: ServicePage },
      { path: 'contact', component: ContactPage },
      { path: 'feature', component: FeaturePage },
      // Add more routes here
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
