import Vue from 'vue';
import VueRouter from 'vue-router';

import Hello from '@/components/Hello.vue';
import Home from '@/components/Home.vue';
import List from '@/components/List.vue';
import About from '@/components/About.vue';
import Param from '@/components/Param.vue';
import ParamDetails from '@/components/ParamDetails.vue';
import TimeEntries from '@/components/TimeEntries.vue';
import LogTime from '@/components/LogTime.vue';


Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/todo',
      name: 'Todo',
      component: List,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/param',
      name: 'Param',
      component: Param,
    },
    {
      path: '/param/:id',
      name: 'ParamDetails',
      component: ParamDetails,
    },
    {
      path: '/time-entries',
      name: 'TimeEntries',
      component: TimeEntries,
      children: [
        {
          path: 'log-time',
          name: 'LogTime',
          component: LogTime,
        },
      ],
    },
  ],
});
