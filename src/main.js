import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Router from '@/router/index.js'
import '@/styles/index.scss'
import * as ELIcons from '@element-plus/icons-vue'
import App from './App.vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import 'virtual:svg-icons-register';
import 'element-plus/dist/index.css'
import '@/router/permission'
const app = createApp(App)
const pinia = createPinia()
for (const iconName in ELIcons) {
  app.component(iconName, ELIcons[iconName])
}
//   filters(app)
  
  // SvgIcon(app)
//   setupRoutes(app)

app.use(Router)
app.use(pinia)
app.component('SvgIcon', SvgIcon)
app.mount('#app')
