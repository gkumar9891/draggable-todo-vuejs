import { createApp } from 'vue'
import { createVuetify } from 'vuetify';
import App from './App.vue'

import './assets/base.css';

const app = createApp(App);
const vuetify = createVuetify({});
console.log(vuetify);
app.use(vuetify);
app.mount('#app');
