import Vue from "vue";
//导入mui的css
import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css";
//导入mint-ui相关
import { Header, Button, Swipe, SwipeItem,Lazyload } from "mint-ui";
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(Lazyload)
import MintUI from "mint-ui"
Vue.use(MintUI)
import "mint-ui/lib/style.css"
//导入router
import VueRouter from "vue-router";
Vue.use(VueRouter);
import router from "./router.js";
//导入vue-resource
import VueResource from "vue-resource";
Vue.use(VueResource);
Vue.http.options.root = "http://www.liulongbin.top:3005/";
//导入moment
import moment from "moment";
import App from "./App.vue";
Vue.filter("dataFormat", function(dataStr) {
  return moment(dataStr).format("YYYY-MM-DD HH:ss:mm");
});
var vm = new Vue({
  el: "#app",
  render: h => h(App),
  router
});
