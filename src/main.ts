import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import './assets/typho/typho.scss';
import './assets/colors/color-global.scss'
import './assets/variables/size.scss'
import router from "./router";
import axiosInstance from './axios';
import {createPinia} from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$axios = axiosInstance;
app.use(router);
app.use(pinia);

app.mount('#app');
