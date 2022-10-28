import { createApp } from 'vue';
import DevUI from 'vue-devui';
import 'vue-devui/style.css';
import '@devui-design/icons/icomoon/devui-icon.css';
import { ThemeServiceInit, infinityTheme } from 'devui-theme';

import Index from './index.vue';

ThemeServiceInit({ infinityTheme }, 'infinityTheme');
createApp(Index).mount('#app');
