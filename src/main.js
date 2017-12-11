import Vue from 'vue'
// import App from './App.vue'

// include vue-custom-element plugin to Vue
import VueCustomElement from 'vue-custom-element'



Vue.use(VueCustomElement);


import Navbar from './components/navbar/codigo-navbar';
import Footer from './components/footer/codigo-footer';
import KioskShowTable from './components/tables/kiosk/project/table';


Vue.customElement('codigo-navbar', Navbar);
Vue.customElement('codigo-footer',Footer);
Vue.customElement('codigo-kiosk-show-table',KioskShowTable);


// new Vue({
//   el: '#app',
//   // render: h => h(App)
// })
