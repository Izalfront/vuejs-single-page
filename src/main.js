import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Login from './Login.vue';
import router from './plugins/router';
createApp(Login).use(router).mount('#login');
createApp(App).use(router).mount('#app');
