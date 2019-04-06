import Vue from "vue";
//导入mui的css
import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css";
//导入mint-ui相关
import { Header, Button } from "mint-ui";
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
//导入router
import VueRouter from "vue-router";
Vue.use(VueRouter);
import router from "./router.js";

import App from "./App.vue";

var vm = new Vue({
  el: "#app",
  render: h => h(App),
  router
});
