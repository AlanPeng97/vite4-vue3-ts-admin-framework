import { defineStore, createPinia } from "pinia";
import piniaPersistConfig from "@/config/piniaPersist";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

export const GlobalStore = defineStore({
	id: "GlobalState",
	getters: {},
	actions: {},
	persist: piniaPersistConfig("GlobalState"),
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
