<template>
	<h1>Hello App!</h1>
	<p>
		<router-link to="/">菜单1</router-link><router-link to="/menu2">菜单2</router-link
		><router-link to="/menu2/menu2-1">菜单2-1</router-link>
	</p>
	<router-view></router-view>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { initDynamicRouter } from "@/routers/modules/dynamicRouter";
import { HOME_URL } from "@/config/config";
const router = useRouter();

const setupRouter = async () => {
	await initDynamicRouter();
	router.push({ path: HOME_URL });
};

onMounted(() => {
	setupRouter;
});
</script>
