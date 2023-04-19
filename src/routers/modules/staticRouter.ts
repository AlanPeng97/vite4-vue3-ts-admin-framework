import { RouteRecordRaw } from "vue-router";
// import { HOME_URL } from "@/config/config";

/**
 *@description staticRouter（静态路由）
 **/

export const staticRouter: RouteRecordRaw[] = [
	// 如果要添加静态固定的页面（默认主页，登录页面），需要修改dynamicRouter.ts里面initDynamicRouter方法
	// {
	// 	path: "/",
	// 	redirect: HOME_URL, // 默认首页 可自定义
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
