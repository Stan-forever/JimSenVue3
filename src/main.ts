// import './assets/main.css'
import "tailwindcss/tailwind.css";

// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";
// custom element dark css
import "@/styles/element-dark.scss";
// custom element css
import "@/styles/element.scss";

import { createApp } from "vue";

import pinia from "@/stores/index";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "virtual:svg-icons-register";

import App from "./App.vue";
import router from "./router";

import debounce from "./directives/modules/debounce";

const app = createApp(App);

app.use(pinia);
app.use(ElementPlus);
app.use(router);

app.directive("debounce", debounce);

app.mount("#app");
