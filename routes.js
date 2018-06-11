import VueRouter from 'vue-router';

import login from './src/components/login.vue';
import cards from './src/components/cards.vue';

export default new VueRouter({
    routes: [
      { path: '/', component: login },
      { path: '/:userID', component: cards },

    ]
});