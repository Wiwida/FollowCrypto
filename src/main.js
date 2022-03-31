// INIT

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// PRIMEVUE

import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext/sfc";

// STYLE

import "./assets/trueBase.scss";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";

const app = createApp(App);

app
  .use(router)
  .use(PrimeVue)
  .component("InputText", InputText)

  .mount("#app");
