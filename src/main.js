import { createApp } from 'vue'
import Router from '@/router/index.js'
// import './style.css'
import '@/styles/index.scss'
import * as ELIcons from '@element-plus/icons-vue'
import App from './App.vue'

// import SvgIcon from './icons/index.js'
const app = createApp(App)
for (const iconName in ELIcons) {
  app.component(iconName, ELIcons[iconName])
}
//   filters(app)
  
  // SvgIcon(app)
//   setupRoutes(app)

app.use(Router)
app.mount('#app')
