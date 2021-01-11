import { createApp } from 'vue'
import App from './web/App.vue'
import router from './web/router'
import i18n from './web/i18n'
import TrendChart from 'vue-trend-chart'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import uiComponents from './web/ui'

createApp(App)
  .use(router)
  .use(i18n)
  .use(TrendChart)
  .component('UiSlider', VueSlider)
  .use(uiComponents)
  .mount('#app')

process.on('unhandledRejection', error => {
  // TODO: log to Sentry
  // eslint-disable-next-line no-console
  console.error(error)
})
