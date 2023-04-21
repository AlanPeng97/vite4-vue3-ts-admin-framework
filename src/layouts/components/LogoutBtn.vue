<template>
	<div class="logout-btn">
		<button @click="logout">退出登录</button>
	</div>
</template>

<script setup lang="ts">
import {} from "vue";
import { logoutApi } from "@/api/modules/login";
import { GlobalStore } from "@/stores/index";
import { useRouter } from "vue-router";
import { LOGIN_URL } from "@/config/config";

const router = useRouter();
const globalStore = GlobalStore();
const logout = async () => {
	try {
		await logoutApi();
		globalStore.setToken("");
		router.replace(LOGIN_URL);
	} catch (err) {
		console.warn(err);
	}
};
</script>

<style lang="scss" scoped></style>
