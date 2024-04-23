import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import icons
import {
	faDroplet,
    faVideo,
    faRoad,
    faGear,
    faBuilding,
    faChartColumn,
    

} from '@fortawesome/free-solid-svg-icons'

import {
    faGoogle

} from '@fortawesome/free-brands-svg-icons'


library.add(faDroplet, faVideo, faRoad, faGoogle, faGear, faBuilding, faChartColumn)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

