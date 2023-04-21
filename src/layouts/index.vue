<template>
	<div class="">这是布局组件</div>
	<h1>Hello App!</h1>
	<p>
		<router-link to="/">菜单1</router-link><router-link to="/menu2">菜单2</router-link>
		<router-link to="/menu2/menu2-1">菜单2-1</router-link>
	</p>
	<LogoutBtn />
	<router-view></router-view>
</template>

<script setup lang="ts">
import {} from "vue";
import LogoutBtn from "./components/LogoutBtn.vue";
</script>

<style lang="scss" scoped></style>
