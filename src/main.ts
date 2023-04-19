import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/reset.scss";
import router from "@/routers/index";
import pinia from "@/stores/index";

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");
