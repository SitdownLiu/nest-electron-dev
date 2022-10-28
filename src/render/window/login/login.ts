import { createApp } from 'vue';
import DevUI from 'vue-devui';
import 'vue-devui/style.css';
import '@devui-design/icons/icomoon/devui-icon.css';
import { ThemeServiceInit, infinityTheme } from 'devui-theme';

import Login from './login.vue';

ThemeServiceInit({ infinityTheme }, 'infinityTheme');
createApp(Login).mount('#app');
