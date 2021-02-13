import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVirus } from '@fortawesome/free-solid-svg-icons/faVirus'

config.autoAddCss = false
library.add(faVirus)

Vue.component('font-awesome-icon', FontAwesomeIcon)
