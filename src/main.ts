import 'tailwindcss/tailwind.css';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { createApp } from 'vue';
import App from './views/app.vue';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { routerInstance } from './views/router';
import { install as PiniaInstall } from './modules/pinia';
import { setRouter } from "./utils/api-client";
import './views/style/index.less';

dayjs.extend(duration);
// 传递 Router 实例
setRouter(routerInstance);

import { createPinia } from 'pinia';
const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(routerInstance);
PiniaInstall(app);
app.config.warnHandler = () => null;

app.mount('#root');
