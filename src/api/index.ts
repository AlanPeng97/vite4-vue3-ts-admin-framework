// api/index.ts
import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import { ResultData } from "@/api/interface/index";
import { ResultEnum } from "@/enums/httpEnum";
import { checkStatus } from "./helper/checkStatus";

const config = {
	// 默认地址请求地址，可在 .env 开头文件中修改
	baseURL: import.meta.env.VITE_API_URL as string,
	// 设置超时时间（10s）
	timeout: ResultEnum.TIMEOUT as number,
};

class RequestHttp {
	service: AxiosInstance;
	public constructor(config: AxiosRequestConfig) {
		// 实例化 axios
		this.service = axios.create(config);

		/**
		 * @description 请求拦截器
		 * 客户端发送请求 -> [请求拦截器] -> 服务器
		 * token校验(JWT) : 接受服务器返回的token,存储到vuex/pinia/本地储存当中
		 */
		this.service.interceptors.request.use(
			(config: InternalAxiosRequestConfig) => {
				return config;
			},
			(error: AxiosError) => {
				return Promise.reject(error);
			}
		);

		/**
		 * @description 响应拦截器
		 *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
		 */
		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				const { data } = response;
				// * 全局错误信息拦截（防止下载文件得时候返回数据流，没有code，直接报错）
				if (data.code && data.code != ResultEnum.SUCCESS) {
					console.error("[响应拦截]", data.msg);
					// 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
					// if (!window.navigator.onLine) router.replace("/500");
					return Promise.reject(data);
				}
				return data;
			},
			async (error: AxiosError) => {
				const { response } = error;
				if (response) checkStatus(response.status);
				return Promise.reject(response);
			}
		);
	}

	// * 常用请求方法封装
	get<T>(url: string, params?: object, _config = {}): Promise<ResultData<T>> {
		return this.service.get(url, { params, ..._config });
	}
	post<T>(url: string, params?: object, _config = {}): Promise<ResultData<T>> {
		return this.service.post(url, params, _config);
	}
	// * 还有 put delete download 方法 后续封装
}

export default new RequestHttp(config);
