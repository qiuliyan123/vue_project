import Vue from "vue"
import './lib/mui/css/mui.min.css'
import {Header,Button} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button);

import App from "./App.vue"

var vm = new Vue({
  el: "#app",
  render: h => h(App)
});
