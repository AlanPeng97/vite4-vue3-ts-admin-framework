import { defineStore } from "pinia";
import { AuthState } from "@/stores/interface";
import { getFlatArr } from "@/utils/util";
import { getAuthMenuListApi } from "@/api/modules/login";
import { getShowMenuList } from "@/utils/util";

// AuthStore
export const AuthStore = defineStore({
	id: "AuthState",
	state: (): AuthState => ({
		// 菜单权限列表
		authMenuList: [],
	}),
	getters: {
		// 后端返回的菜单列表 ==> 这里没有经过任何处理
		authMenuListGet: (state) => state.authMenuList,
		// 后端返回的菜单列表 ==> 左侧菜单栏渲染，需要去除 isHide == true
		showMenuListGet: (state) => getShowMenuList(state.authMenuList),
		// 扁平化之后的一维数组路由，主要用来添加动态路由
		flatMenuListGet: (state) => getFlatArr(state.authMenuList),
	},
	actions: {
		// getAuthMenuList
		async getAuthMenuList() {
			const { data } = await getAuthMenuListApi();
			this.authMenuList = data;
		},
	},
});
