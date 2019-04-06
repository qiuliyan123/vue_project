import VueRouter from "vue-router";
//导入路由
import HomeContainer from "./components/tabbars/HomeContainer.vue";
import MomberContainer from "./components/tabbars/MomberContainer.vue";
import SearchContainer from "./components/tabbars/SearchContainer.vue";
import ShopcarContainer from "./components/tabbars/ShopcarContainer.vue";
var router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomeContainer },
    { path: "/member", component: MomberContainer },
    { path: "/search", component: SearchContainer },
    { path: "/shopcar", component: ShopcarContainer }
  ],
  linkActiveClass: "mui-active"
});

export default router;
