import { createRouter, createWebHashHistory } from "vue-router";
import { staticRouter } from "@/routers/modules/staticRouter";
import NProgress from "@/config/nprogress"


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
  next();
})

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
	NProgress.done();
});

/**
 * @description 路由跳转错误
 * */
router.onError(error => {
	NProgress.done();
	console.warn("路由错误", error.message);
});
export default router;
