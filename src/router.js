import VueRouter from "vue-router";
//导入路由
import HomeContainer from "./components/tabbars/HomeContainer.vue";
import MomberContainer from "./components/tabbars/MomberContainer.vue";
import SearchContainer from "./components/tabbars/SearchContainer.vue";
import ShopcarContainer from "./components/tabbars/ShopcarContainer.vue";
import NewsList from "./components/home/NewsList.vue"
import NewsInfo from "./components/home/NewsInfo.vue"
import PhotoList from "./components/home/PhotoList.vue"
var router = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomeContainer },
    { path: "/member", component: MomberContainer },
    { path: "/search", component: SearchContainer },
    { path: "/shopcar", component: ShopcarContainer },
    {path:"/home/newsList",component:NewsList},
    {path:"/home/newsinfo/:id",component:NewsInfo},
    {path:"/home/photolist",component:PhotoList}
  ],
  linkActiveClass: "mui-active"
});

export default router;
