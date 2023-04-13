import { RouteRecordRaw } from "vue-router";
// import { LOGIN_URL } from "@/config/config";

/**
 *@description staticRouter（静态路由）
 **/

export const staticRouter: RouteRecordRaw[] = [
  // {
  //   path: "/",
  //   redirect: HOME_URL,
  // },
  // {
  //   path: LOGIN_URL,
  //   name: "Login",
  //   component: () => import("@/views/login/index.vue"),
  //   meta: {
  //     title: "登录",
  //   }, // 注意这里要带上 文件后缀.vue
  // },
  // {
  //   path: "/layout",
  //   name: "layout",
  //   component: () => import("@/layouts/index.vue"),
  //   redirect: HOME_URL,
  //   children: [],
  // },
  // ** 无需登录的路由
];

// ** errorRouter(错误页面路由)
// export const errorRouter = [
//   {
//     path: "/404",
//     name: "404",
//     component: () => import("@/views/ErrorMessage/404.vue"),
//     meta: {
//       title: "404页面",
//     },
//   },
// ];

/**
 * notFoundRouter(找不到路由)
 */
// export const notFoundRouter = {
//   path: "/:pathMatch(.*)*",
//   name: "notFound",
//   component: () => import("@/views/ErrorMessage/404.vue"),
// };
