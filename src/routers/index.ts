import { createRouter, createWebHashHistory } from "vue-router";
import { staticRouter } from "@/routers/modules/staticRouter";
import NProgress from "@/config/nprogress";
import { initDynamicRouter } from "@/routers/modules/dynamicRouter";
import { AuthStore } from "@/stores/modules/auth";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [...staticRouter],
	strict: false,
	scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * @description 路由拦截
 **/
router.beforeEach(async (to, from, next) => {
	NProgress.start();
	// 6.如果没有菜单列表，就重新请求菜单列表并添加动态路由
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
export default router;
