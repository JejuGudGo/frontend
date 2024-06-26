import { createApp } from 'vue';
import App from '@/App.vue';
import '@/registerServiceWorker';
import router from '@/router';
import store from '@/store';

if (process.env.NODE_ENV === 'development') {
  require('@/mocks/_mockSetup');
}

createApp(App).use(store).use(router).mount('#app');
