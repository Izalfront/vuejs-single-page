import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import Media from '../views/Media.vue';
import Sosial from '../views/Sosial.vue';
import Home from '../views/Home.vue';
const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/about',
    component: About,
    name: 'about',
    props: true,
  },
  {
    path: '/media',
    component: Media,
    name: 'media',
  },
  {
    path: '/sosial',
    component: Sosial,
    name: 'sosial',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
