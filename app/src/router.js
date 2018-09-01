import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Tweets from './components/tweets/Tweets.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/tweets', component: Tweets },
    { path: '*', redirect: '/' }
  ]
});
