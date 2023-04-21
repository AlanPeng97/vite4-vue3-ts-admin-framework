<template>
	<div class="login-form">
		<form :model="loginForm">
			<fieldset>
				<legend>admin-framework</legend>
				<label for="username">用户名：<input type="text" name="username" v-model="loginForm.username" /></label>

				<label for="pwd">密码：<input type="password" name="pwd" v-model="loginForm.password" /></label>
			</fieldset>
		</form>
		<button @click="login(loginForm)">登录</button>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { loginApi } from "@/api/modules/login";
import { GlobalStore } from "@/stores/index";
import { useRouter } from "vue-router";
import { initDynamicRouter } from "@/routers/modules/dynamicRouter";
import { HOME_URL } from "@/config/config";

const globalStore = GlobalStore();
const router = useRouter();

interface LoginFormProps {
	username: string;
	password: string;
}
const loginForm = reactive<LoginFormProps>({
	username: "",
	password: "",
});
const login = async (form: any | undefined) => {
	if (!form) return false;
	if (form.username.length == 0) {
		console.log("用户名不准为空！");
	} else if (form.password.length == 0) {
		console.log("密码不准为空！");
	} else {
		try {
			const { data } = await loginApi(form);
			console.log(data);
			console.log(data.access_token);
			globalStore.setToken(data.access_token);
			console.log(globalStore.token);
			await initDynamicRouter();
			router.push({ path: HOME_URL });
		} catch (err) {
			console.warn(err);
		}
	}
};
</script>

<style lang="scss" scoped>
@import "../index.scss";
</style>
