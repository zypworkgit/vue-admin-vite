import SvgIcon from '../components/SvgIcon/index.vue'
const svgRequired = require.context('./svg', false, /\.svg$/)
svgRequired.keys().forEach((element) => {
  svgRequired(element)
})
export default (app) => {
  app.component('svg-icon', SvgIcon)
}
