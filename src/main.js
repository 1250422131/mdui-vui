import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'mdui/mdui.css';
import 'mdui';
import MduiVui from './components/index';


createApp(App).use(MduiVui).mount('#app')
