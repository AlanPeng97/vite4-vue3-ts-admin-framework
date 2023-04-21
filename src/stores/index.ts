import { defineStore, createPinia } from "pinia";
import { GlobalState } from "./interface/index";
import piniaPersistConfig from "@/config/piniaPersist";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

export const GlobalStore = defineStore({
	id: "GlobalState",
	state: (): GlobalState => ({
		// token
		token: "",
	}),
	getters: {},
	actions: {
		// setToken
		setToken(token: string) {
			this.token = token;
		},
	},
	persist: piniaPersistConfig("GlobalState"),
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
