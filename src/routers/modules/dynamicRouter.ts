import router from "@/routers/index";
import { isType } from "@/utils/util";
// import { GlobalStore } from "@/stores";
import { AuthStore } from "@/stores/modules/auth";

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob("@/views/**/*.vue");

/**
 * 初始化动态路由
 */

let dynamicHomeRouter = [
	{
		path: "/",
		redirect: "",
	},
	{
		path: "/layout",
		name: "layout",
		component: () => import("@/layouts/index.vue"),
		// component: () => import("@/layouts/indexAsync.vue"),
		redirect: "",
		children: [],
	},
];

export const initDynamicRouter = async () => {
	const authStore = AuthStore();
	// const globalStore = GlobalStore();
	try {
		await authStore.getAuthMenuList();

		// ** 动态主页
		let HOME_URL = authStore.authMenuListGet[0].path;
		// console.log(HOME_URL);
		dynamicHomeRouter.forEach((item) => {
			item.redirect = HOME_URL;
			router.addRoute(item);
		});

		// authStore.authMenuListGet.forEach((item) => {
		//   if (item.children?.length) {
		//     item.redirect = item.children[0].path;
		//   }
		// });

		// 3.添加动态路由
		authStore.flatMenuListGet.forEach((item: any) => {
			item.children && delete item.children;
			if (item.component && isType(item.component) == "string") {
				item.component = modules["/src/views" + item.component + ".vue"];
			}
			if (item.meta.isFull) {
				// console.log(item);
				router.addRoute(item);
			} else {
				router.addRoute("layout", item);
			}
		});
		console.log(router.getRoutes());
	} catch (error) {
		// 💢 当按钮 || 菜单请求出错时，重定向到登陆页
		// globalStore.setToken("");
		// router.replace(LOGIN_URL);
		// return Promise.reject(error);
		console.log("init dynamicRouter error");
	}
};
