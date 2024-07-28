import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './style.css'
import './index.css'
import 'ant-design-vue/dist/reset.css';


const app = createApp(App);
const pinia = createPinia();

app.use(Antd).use(router).use(pinia).mount('#app');