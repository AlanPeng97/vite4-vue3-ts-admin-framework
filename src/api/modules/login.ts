import { Login } from "@/api/interface/index";
import { AUTHPORT } from "@/api/config/servicePort";
import DynamicRouter from "@/assets/json/dynamicRouter.json";
import http from "@/api";
/**
 * @name 登录模块
 */
// * 用户登录
export const loginApi = (params: Login.ReqLoginForm) => {
	return http.post<Login.ResLogin>(AUTHPORT + `/login`, params);
};
// * 获取菜单列表
export const getAuthMenuListApi = () => {
	return http.get<Menu.MenuOptions[]>(AUTHPORT + `/menu/list`);
	return DynamicRouter; // 模拟登录返回静态路由
};
// * 退出登录
export const logoutApi = () => {
	return http.post(AUTHPORT + `/logout`);
};
