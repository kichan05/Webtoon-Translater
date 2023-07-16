import { createApp, Vue } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const app = createApp(App)

app.config.globalProperties.$apiUrl = 'http://127.0.0.1:8000';


app
  .use(store)
  .use(router)
  .mount("#app");