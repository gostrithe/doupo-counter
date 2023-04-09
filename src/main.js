import { createApp } from 'vue'
import { Button, Popup ,Form, Field, CellGroup } from 'vant';
import App from './App.vue'
import router from './router'


import './assets/main.css'
import 'vant/lib/index.css';
const app = createApp(App)

app.use(router)
app.use(Popup)
app.use(Form);
app.use(Field);
app.use(Button);
app.use(CellGroup);

app.mount('#app')
