// JS - ./js/index.js
import './js'
// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'


/* Examples of inputs */

//import 'vue'
//import 'bootstrap/dist/css/botstrap.min.css'
//import Bootstrap from 'bootstrap/dist/css/botstrap.min.css'
//import Vue from 'vue'
// window.Vue = require('vue')


window.Vue = require('vue')
import store from './store'

Vue.component('example-component', require('./components/Example.vue').default)



const app = new Vue({
  data() {
    return {
      component: false,
    }
  },
  store,
  el: '#app'
})