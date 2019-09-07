import Vue from "vue";
import Router from "vue-router";
import routes from "./router";
import store from "../store";
import { Message } from "element-ui";
// import { getToken } from "@/util";

console.log("routes is ddddd", routes);

// import Nprogress from "nprogress"; // progress bar
// import "nprogress/nprogress.css"; // progress style
// Nprogress.configure({ showSpinner: false }); // NProgress configuration

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes
});

// 根据路由改变右侧sidebar
router.beforeEach(async (to, from, next) => {
  const mapData = [
    ["Overview", "OverviewSide"],
    ["DepositAccount", "ActivitySide"],
    ["RetiringAccount", "ActivitySide"],
    ["LoanAccount", "ActivitySide"],
    ["CDAccount", "ActivitySide"]
  ];
  const map = new Map(mapData);
  let componentName = map.get(to.name) || "";
  try {
    console.log("router componentName", componentName);
    await store.dispatch("app/changeSideBar", componentName);
    next();
  } catch (error) {
    Message.error(error || "has sidebar error");
  }
});

// 登陆页面路由 name
// const LOGIN_PAGE_NAME = "login";

// // 跳转之前
// router.beforeEach((to, from, next) => {
//   // 在添加query的时候不用加载path没变
//   if (to.path !== from.path) {
//     Nprogress.start();
//   }
//   const token = getToken();
//   if (!token && to.name !== LOGIN_PAGE_NAME) {
//     // 未登录且要跳转的页面不是登录页
//     next({
//       name: LOGIN_PAGE_NAME // 跳转到登录页
//     });
//   } else if (!token && to.name === LOGIN_PAGE_NAME) {
//     // 未登陆且要跳转的页面是登录页
//     next(); // 跳转
//   } else {
//     if (token) {
//       next(); // 跳转
//     } else {
//       next({
//         name: LOGIN_PAGE_NAME
//       });
//     }
//   }
// });

// // 跳转之后
// router.afterEach(() => {
//   Nprogress.done();
// });

export default router;
