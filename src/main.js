import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'mdui/mdui.css';
import 'mdui';
import MduiVui from './components/mdui-vui/index';
import '@mdui/icons/search.js';

createApp(App).use(MduiVui).mount('#app')
