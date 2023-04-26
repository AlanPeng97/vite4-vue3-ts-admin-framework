import { createRouter, createWebHashHistory } from "vue-router";
import { staticRouter } from "@/routers/modules/staticRouter";
import NProgress from "@/config/nprogress";
import { initDynamicRouter } from "@/routers/modules/dynamicRouter";
import { AuthStore } from "@/stores/modules/auth";
import { GlobalStore } from "@/stores/index";
import { LOGIN_URL } from "@/config/config";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [...staticRouter],
	scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * @description 路由拦截
 **/
router.beforeEach(async (to, from, next) => {
	NProgress.start();
	// 6.如果没有菜单列表，就重新请求菜单列表并添加动态路由
	// console.log(from);
	// console.log(to);
	const globalStore = GlobalStore();

	if (to.path === LOGIN_URL) {
		if (globalStore.token) return next(from.fullPath);
		resetRouter();
		return next();
	}
	if (!globalStore.token) {
		console.log("token-none");
		return next({ path: LOGIN_URL, replace: true });
	}

	const authStore = AuthStore();
	if (!authStore.authMenuListGet.length) {
		await initDynamicRouter();
		return next({ ...to, replace: true });
	}
	next();
});

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
	NProgress.done();
});

/**
 * @description 路由跳转错误
 * */
router.onError((error) => {
	NProgress.done();
	console.warn("路由错误", error.message);
});

// * 重置路由
export const resetRouter = () => {
	// console.log("reset");
	const authStore = AuthStore();
	authStore.flatMenuListGet.forEach((route) => {
		const { name } = route;
		if (name && router.hasRoute(name)) router.removeRoute(name);
		router.removeRoute("default");
		router.removeRoute("layout");
	});
};
export default router;
