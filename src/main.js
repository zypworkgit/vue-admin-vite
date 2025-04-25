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
import i18n from './i18n'
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
app.use(i18n)
app.component('SvgIcon', SvgIcon)
app.mount('#app')
