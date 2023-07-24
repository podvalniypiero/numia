import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import "./style.css";
import App from "./App.vue";

const pinia = createPinia();

createApp(App).use(pinia).use(Toast).mount("#app");
