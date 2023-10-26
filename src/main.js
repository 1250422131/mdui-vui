import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'mdui/mdui.css';
import 'mdui';
import 'mdui/components/icon.js';
import MduiVui from './components/mdui-vui/index';


createApp(App).use(MduiVui).mount('#app')
