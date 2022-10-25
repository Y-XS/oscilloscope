import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import 'material-design-icons-iconfont/dist/material-design-icons.css' // 确保您正在使用 css-loader
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    theme: {
        themes: {
            light: {
                primary: '#9575CD',
                secondary: '#F5F5F5',
                accent: '#8c9eff',
                error: '#E57373',
            }
        }
    }
});