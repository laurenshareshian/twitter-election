// import VueRouter from 'vue-router';
// import Home from './components/home/Home.vue';
// import Tweets from './components/tweets/Tweets.vue';
// import AddSearch from './components/tweets/AddSearch.vue';

// export default new VueRouter({
//   mode: 'history',
//   routes: [
//     { path: '/', component: Home },
//     { path: '/tweets', component: Tweets },
//     { path: '/add', component: AddSearch },
//     { path: '*', redirect: '/' }
//   ]
// });

import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Auth from './components/tweets/Auth.vue';
import Tweets from './components/tweets/Tweets.vue';

import Issues from './components/tweets/Issues.vue';
import IssuesList from './components/tweets/IssuesList.vue';
import AddIssue from './components/tweets/AddIssue.vue';
import UpdateIssue from './components/tweets/UpdateIssue.vue';
import IssueDetail from './components/tweets/IssueDetail.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/auth', component: Auth },
    { 
      path: '/issues', 
      component: Issues,
      children: [
        { path: 'list', component: IssuesList },
        { path: 'new', component: AddIssue },
        // { path: 'edit', component: UpdateIssue },
        { path: ':id', component: IssueDetail,
          children: [{ path: 'edit', component: UpdateIssue }]
        },
        { path: '', redirect: 'list' }
      ]
    },
    { path: '/tweets', component: Tweets },
    { path: '*', redirect: '/' }
  ]
});